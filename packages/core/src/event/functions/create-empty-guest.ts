import { Id } from '../../shared'
import type { Guest } from '../model/guest'
export function createEmptyGuest(): Partial<Guest> {
	return {
		id: Id.New(),
		name: '',
		email: '',
		confirmed: true,
		hasACompanions: false,
		amountOfCompanions: 0,
	}
}
