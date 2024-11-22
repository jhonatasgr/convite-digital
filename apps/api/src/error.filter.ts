import {
	type ExceptionFilter,
	type ArgumentsHost,
	Catch,
	HttpException,
} from '@nestjs/common'
import type { Request, Response } from 'express'

@Catch(Error)
export class ErrorFilter implements ExceptionFilter {
	catch(exception: Error, host: ArgumentsHost) {
		const ctx = host.switchToHttp()
		const req = ctx.getRequest<Request>()
		const res = ctx.getResponse<Response>()

		let status = 500

		if (exception instanceof HttpException) {
			status = exception.getStatus()
		} else if ('status' in exception) {
			status = exception.status as number
		} else if ('statusCode' in exception) {
			status = exception.statusCode as number
		}

		console.log(exception)
		res.status(status).json({
			statusCode: status,
			path: req.url,
			message: exception.message,
			timestamp: new Date().toISOString(),
		})
	}
}
