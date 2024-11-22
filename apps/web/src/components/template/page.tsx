import { Logo } from './logo'

export interface PageProps {
	children: React.ReactNode
	className?: string
}

export function Page({ children, className }: PageProps) {
	return (
		<div className="flex flex-col items-center py-10 min-h-screen bg-gradient-to-tr from-slate-900 to-zinc-900">
			<main
				className={`flex-1 flex flex-col justify-center py-10 container items-center ${className}`}
			>
				{children}
			</main>
		</div>
	)
}
