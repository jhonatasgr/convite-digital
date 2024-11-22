import type { Guest } from './guest'

export interface IEvent {
	id: string
	date: Date
	name: string
	image: string
	slug: string
	location: string
	password: string
	description: string
	imageBackground: string
	expectedAudience: number
	guests: Guest[]
}
