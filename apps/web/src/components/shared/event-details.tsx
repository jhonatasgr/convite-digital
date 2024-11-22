import type { IEvent } from 'core'
import { useQueryClient } from '@tanstack/react-query'
import { UserCheck, UserPlus, Users, UserX } from 'lucide-react'

export function EventDetails() {
	const useClient = useQueryClient()
	const events = useClient.getQueryData<IEvent>(['event'])

	return (
		<div className="flex flex-col w-full gap-6 ">
			<span className="text-lg font-semibold text-slate-200 tracking-wide">
				Detalhes
			</span>
			<div className="flex gap-5 justify-between mx-8">
				<div className="flex flex-col size-28 bg-black/20 rounded-lg p-2">
					<UserPlus className="text-slate-400/50 size-6" />
					<div className="flex-1 flex flex-col items-center justify-center">
						<h1 className="text-2xl font-normal text-slate-200">
							{events?.expectedAudience}
						</h1>
						<p className="text-slate-400/50 text-xs">Estimativa</p>
					</div>
				</div>
				<div className="flex flex-col size-28 bg-black/20 rounded-lg p-2">
					<UserCheck className="text-slate-400/50 size-6" />
					<div className="flex-1 flex flex-col items-center justify-center">
						<h1 className="text-2xl font-normal text-slate-200">
							{events?.guests.filter(g => g.confirmed).length}
						</h1>
						<p className="text-slate-400/50 text-xs">Confirmaram</p>
					</div>
				</div>
				<div className="flex flex-col size-28 bg-black/20 rounded-lg p-2">
					<UserX className="text-slate-400/50 size-6" />
					<div className="flex-1 flex flex-col items-center justify-center">
						<h1 className="text-2xl font-normal text-slate-200">
							{events?.guests.filter(g => !g.confirmed).length}
						</h1>
						<p className="text-slate-400/50 text-xs">Negaram</p>
					</div>
				</div>
				<div className="flex flex-col size-28 flex-1 bg-white/80 rounded-lg p-2">
					<Users className="text-slate-800/50 size-6" />
					<div className="flex-1 flex flex-col items-center justify-center">
						<h1 className="text-2xl font-normal text-slate-800">
							{events?.guests.reduce(
								(total, guest) =>
									guest.confirmed
										? total + guest.amountOfCompanions + 1
										: total,
								0
							)}
						</h1>
						<p className="text-slate-600/80 text-xs">Total de participantes</p>
					</div>
				</div>
			</div>
		</div>
	)
}
