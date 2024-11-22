import { PrismaClient } from '@prisma/client'
import { events } from 'core'

async function seed() {
	const prisma = new PrismaClient()

	const transactions = events.map(async event => {
		await prisma.event.create({
			data: {
				id: event.id,
				slug: event.slug,
				name: event.name,
				date: event.date,
				image: event.image,
				location: event.location,
				password: event.password,
				description: event.description,
				expectedAudience: event.expectedAudience,
				imageBackground: event.imageBackground,
				guests: {
					create: event.guests.map(guest => ({
						id: guest.id,
						name: guest.name,
						email: guest.email,
						confirmed: guest.confirmed,
						hasACompanions: guest.hasACompanions,
						amountOfCompanions: guest.amountOfCompanions,
					})),
				},
			},
		})
	})

	await Promise.all(transactions)
}
seed()
