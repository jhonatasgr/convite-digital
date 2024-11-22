import { useQueryClient } from '@tanstack/react-query'
import { GuestItem } from './guest-item'
import type { IEvent } from 'core'

export function GuestList() {
	const useClient = useQueryClient()
	const guests = useClient.getQueryData<IEvent>(['event'])?.guests

	return (
		<ul className="flex flex-col  ">
			<li className="grid grid-cols-5 text-sm font-medium text-slate-800/80 rounded-t-lg bg-slate-100/80 p-4">
				<div className="col-span-3 flex items-center">Participante</div>
				<div className="flex items-center justify-center">Confirmado</div>
				<div className="flex items-center justify-center">Acompanhantes</div>
			</li>
			<div className="flex flex-col px-4 border-slate-200/20 border rounded-b-lg pb-5">
				{guests?.map(guest => (
					<GuestItem key={guest.id} guest={guest} />
				))}
			</div>
		</ul>
	)
}
