import type { IEvent } from '../model/event'
import { validateEventFields } from './validate-event-fields'
import { Id, Password } from '../../shared'
export function complementEvent(partial: Partial<IEvent>): IEvent {
	const errs = validateEventFields(partial)
	if (errs.length) throw new Error(errs.join('\n'))

	const event: IEvent = {
		...partial,
		id: partial.id ?? Id.New(),
		password: partial.password ?? Password.New(),
		expectedAudience: +(partial.expectedAudience ?? 1),
	} as IEvent

	return event
}
