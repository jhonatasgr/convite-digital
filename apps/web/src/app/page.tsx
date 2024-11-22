import { Logo } from '@/components/template/logo2x'
import Link from 'next/link'

export default function Home() {
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-10">
			<div className="flex flex-col items-center gap-4">
				<Logo />
				<p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
					Crie e gerencie seu evento de forma rápida e fácil, e sem
					complicações!
				</p>
			</div>
			<Link
				href="/event"
				className="botao azul uppercase text-lg tracking-wide"
			>
				Crie o seu evento
			</Link>
		</div>
	)
}
