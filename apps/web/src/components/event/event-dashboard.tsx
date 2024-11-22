import { EventInfosCard } from '../shared/event-info-card'
import { EventDetails } from '../shared/event-details'
import { GuestList } from './guest-list'

export function DashboardEvent() {
	return (
		<div className="flex flex-1 flex-col gap-4 w-3/5">
			<EventInfosCard />
			<div className=" flex flex-col gap-10 p-6 border border-slate-700 rounded-lg">
				<EventDetails />
				<GuestList />
			</div>
		</div>
	)
}
