import { events } from 'core'
import Image from 'next/image'
import Link from 'next/link'
import QRCode from 'react-qr-code'

export default function EventsPage() {
	return (
		<div className="grid grid-cols-3  gap-5">
			{events.map(event => (
				<div
					key={event.id}
					className="flex flex-col w-full gap-2 bg-zinc-900 rounded-lg overflow-hidden"
				>
					<div className="relative w-full h-52">
						<Image
							src={event.image}
							alt={event.name}
							fill
							className="object-cover"
						/>
					</div>

					<div className="flex-1 flex flex-col items-center justify-center gap-6 p-7 text-center">
						<span className="text-lg font-black">{event.name}</span>
						<p className="text-sm text-zinc-400">{event.description}</p>
						<QRCode
							value={JSON.stringify({ id: event.id, password: event.password })}
							className="size-44"
						/>
						<div className="flex gap-5 w-full justify-center">
							<Link
								href={`/event/admin/${event.id}/${event.password}`}
								className="botao green"
							>
								Ver evento
							</Link>
							<Link href={`/invite/${event.slug}`} className="botao red">
								Ver evento
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
