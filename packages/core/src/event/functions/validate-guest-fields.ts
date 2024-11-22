import type { Guest } from '../model/guest'

export function validateGuestFields(guest: Partial<Guest>): string[] {
	const errs: string[] = []
	if (!guest.name) errs.push('Nome é obrigatório')
	if (!guest.email) errs.push('E-mail é obrigatório')
	return errs
}
