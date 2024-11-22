export namespace Slug {
	export function format(value: string): string {
		return value.replace(/ /g, '-').toLowerCase()
	}
}
