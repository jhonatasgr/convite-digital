import { v4 as uuid, validate } from 'uuid'

export namespace Id {
	export function New(): string {
		return uuid()
	}

	export function Validate(id: string): boolean {
		return validate(id)
	}
}
