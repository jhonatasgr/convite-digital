export namespace Password {
	export function New(_length = 15): string {
		const lowcases = 'abcdefghijklmnopqrstuvwxyz'
		const uppercases = lowcases.toUpperCase()
		const numbers = '0123456789'
		const special = '!@#$%&*'

		const groups = [lowcases, uppercases, numbers, special]
		const password = []

		for (let i = 0; i < _length; i++) {
			const group = groups[Math.floor(Math.random() * groups.length)]
			password.push(group[Math.floor(Math.random() * group.length)])
		}

		return password.join('')
	}
}
