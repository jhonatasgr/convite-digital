import type { Guest } from '../model/guest'
import { validateGuestFields } from './validate-guest-fields'

export function complementGuest(partial: Partial<Guest>): Guest {
	const errs = validateGuestFields(partial)
	if (errs.length > 0) throw new Error(errs.join('\n'))

	const amountOfCompanions = partial.amountOfCompanions ?? 0
	const hasACompanions =
		partial.confirmed && partial.hasACompanions && amountOfCompanions > 0

	const guest = {
		...partial,
		amountOfCompanions: hasACompanions ? amountOfCompanions : 0,
		hasACompanions: hasACompanions,
	}

	return guest as Guest
}
