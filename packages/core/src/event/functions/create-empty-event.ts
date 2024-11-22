import { Id } from '../../shared'
import type { IEvent } from '../model/event'

export function createEmptyEvent(): Partial<IEvent> {
	return {
		id: Id.New(),
		name: '',
		description: '',
		date: new Date(),
		image: '',
		location: '',
		imageBackground: '',
		expectedAudience: 2,
	}
}
