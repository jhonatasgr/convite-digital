import type { IEvent } from '../model/event'

export function validateEventFields(event: Partial<IEvent>): string[] {
	const errs: string[] = []
	if (!event.name) errs.push('Nome é obrigatório')
	if (!event.location) errs.push('Local é obrigatório')
	if (!event.date) errs.push('Data é obrigatório')
	if (!event.expectedAudience || event.expectedAudience < 1)
		errs.push('Público esperado é obrigatório')
	return errs
}
