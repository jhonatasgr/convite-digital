export namespace DateUtils {
	export function format(date: Date): string {
		const pad = (n: number) => n.toString().padStart(2, '0')

		const d = date ?? new Date()
		const year = d.getFullYear()
		const month = pad(d.getMonth() + 1)
		const day = pad(d.getDate())
		const hour = pad(d.getHours())
		const minute = pad(d.getMinutes())

		return `${year}-${month}-${day}T${hour}:${minute}`
	}

	export function parse(date: string): Date {
		const [year, month, day] = date.split('T')[0].split('-')
		const [hour, minute] = date.split('T')[1].split(':')

		return new Date(
			Number.parseInt(year),
			Number.parseInt(month) - 1,
			Number.parseInt(day),
			Number.parseInt(hour),
			Number.parseInt(minute)
		)
	}
}
