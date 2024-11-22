import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { complementEvent, complementGuest, DateUtils, events, Id } from 'core'
import type { Guest, IEvent } from 'core'
// biome-ignore lint/style/useImportType: <explanation>
import { EventPrisma } from './event.prisma'

interface SerializedEvent extends Omit<IEvent, 'date'> {
	date: string
}

@Controller('events')
export class EventsController {
	constructor(private repo: EventPrisma) {}
	@Post()
	async createEvent(@Body() event: SerializedEvent) {
		const eventHasAlreadyBeenCreated = await this.repo.findEventBySlug(
			event.slug
		)
		if (
			eventHasAlreadyBeenCreated &&
			eventHasAlreadyBeenCreated.id !== event.id
		)
			throw new Error('Evento já cadastrado!')

		const eventCompleted = complementEvent(this.deserialize(event))
		await this.repo.createEvent(eventCompleted)
	}

	@Post(':slug/guest')
	async createGuest(@Param('slug') slug: string, @Body() guest: Guest) {
		const event = await this.repo.findEventBySlug(slug, true)
		if (!event) throw new Error('Evento não encontrado!')

		const guestCompleted = complementGuest(guest)
		await this.repo.createGuest(event, guestCompleted)
	}

	@Post('access')
	async accessEvent(@Body() body: { id: string; password: string }) {
		const event = await this.repo.findEventById(body.id, true)
		if (!event) throw new Error('Evento não encontrado!')
		if (event.password !== body.password)
			throw new Error('Senha e evento não correspondem!')
		return this.serialize(event)
	}

	@Get()
	async findAllEvents() {
		const events = await this.repo.findAllEvents()
		return events.map(this.serialize)
	}

	@Get(':identifier')
	async findEvent(@Param('identifier') identifier: string) {
		let event: IEvent
		if (Id.Validate(identifier)) {
			event = await this.repo.findEventById(identifier, true)
		} else {
			event = await this.repo.findEventBySlug(identifier, true)
		}
		return this.serialize(event)
	}

	@Get('validate/:slug/:id')
	async validateSlug(@Param('slug') slug: string, @Param('id') id: string) {
		const event = await this.repo.findEventBySlug(slug)
		return { valid: !event || event?.id === id }
	}
	private serialize(event: IEvent) {
		if (!event) return null
		return {
			...event,
			date: DateUtils.format(event.date),
		}
	}
	private deserialize(event: SerializedEvent): IEvent {
		if (!event) return null
		return {
			...event,
			date: DateUtils.parse(event.date),
		}
	}
}
