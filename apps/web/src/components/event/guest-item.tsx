import type { Guest } from 'core'
import { CheckCircle2, CircleX } from 'lucide-react'

export function GuestItem({ guest }: { guest: Guest }) {
	return (
		<li>
			<div
				className="grid grid-cols-5 items-center w-full justify-between gap-4 
          py-4 border-b border-slate-200/20"
			>
				<div className="col-span-3 flex flex-col items-start justify-center">
					<span className="text-sm font-medium">{guest.name}</span>
					<span className="text-xs text-slate-400/80">{guest.email}</span>
				</div>
				<div className="flex items-center justify-center">
					{guest.confirmed ? (
						<CheckCircle2 className="size-5 text-green-500" />
					) : (
						<CircleX className="size-5 text-red-500" />
					)}
				</div>
				<div className="flex items-center justify-center">
					{guest.confirmed ? guest.amountOfCompanions : 0}
				</div>
			</div>
		</li>
	)
}
