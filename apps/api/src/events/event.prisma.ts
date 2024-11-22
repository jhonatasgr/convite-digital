import { Injectable } from '@nestjs/common'
import type { Guest, IEvent } from 'core'

// biome-ignore lint/style/useImportType: <explanation>
import { PrismaProvider } from '../db/prisma.provider'

@Injectable()
export class EventPrisma {
	constructor(readonly prisma: PrismaProvider) {}

	createEvent(event: IEvent) {
		return this.prisma.event.create({
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			data: { ...(event as any), guests: { create: event.guests } },
		})
	}
	createGuest(event: IEvent, guest: Guest) {
		return this.prisma.guest.create({
			data: {
				...guest,
				amountOfCompanions: +(guest.amountOfCompanions ?? 0),
				event: {
					connect: {
						id: event.id,
					},
				},
			},
		})
	}
	async findAllEvents(): Promise<IEvent[]> {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		return this.prisma.event.findMany() as any
	}

	async findEventById(id: string, complete = false): Promise<IEvent | null> {
		return this.prisma.event.findUnique({
			where: { id },
			include: { guests: complete },
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		}) as any
	}

	async findEventBySlug(
		slug: string,
		complete = false
	): Promise<IEvent | null> {
		return this.prisma.event.findUnique({
			select: {
				id: true,
				slug: true,
				name: true,
				date: true,
				image: true,
				location: true,
				imageBackground: true,
				description: true,
				expectedAudience: complete,
				password: complete,
				guests: complete,
			},
			where: { slug },

			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		}) as any
	}
}
