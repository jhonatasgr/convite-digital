import type { IEvent } from 'core'
import { useQueryClient } from '@tanstack/react-query'
import { Clock, MapPin } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Link from 'next/link'
import QRCode from 'react-qr-code'

export function EventInfosCard() {
	const useClient = useQueryClient()
	const event = useClient.getQueryData<IEvent>(['event'])

	return (
		<div className="flex w-full p-6 border border-slate-700 rounded-lg items-start ">
			<div className="flex flex-col flex-1 items-start ">
				<div className="flex justify-center flex-1 ">
					<div className="flex items-start gap-4 w-full justify-center">
						<div className=" w-auto flex flex-col gap-2">
							<h2 className="text-xl font-semibold tracking-wide">
								{event?.name}
							</h2>
							<div className="flex gap-7">
								<p className="text-sm text-slate-200/50 flex items-center gap-2 font-light tracking-wider">
									<Clock className="size-4" />
									{format(event?.date ?? new Date(), "dd MMM yyyy 'às' HH:mm", {
										locale: ptBR,
									})}
								</p>
								<p className="text-sm text-slate-200/50 flex items-center gap-2 font-light tracking-wider">
									<MapPin className="size-4" />
									<Link
										href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event?.location ?? '')}`}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-slate-200 transition-colors"
									>
										{event?.location}
									</Link>
								</p>
							</div>
							<p className="text-sm text-slate-200 font-light tracking-wider mt-4">
								{event?.description}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center gap-4">
				<div className="bg-slate-50 size-36 rounded-lg flex items-center justify-center">
					<div className="size-32 flex items-center justify-center">
						<QRCode
							value={JSON.stringify({
								id: event?.id,
								password: event?.password,
							})}
							bgColor="transparent"
						/>
					</div>
				</div>
				<p className="text-xs text-slate-400/50">
					Escaneie o QR Code acessar via mobile
				</p>
			</div>
		</div>
	)
}
