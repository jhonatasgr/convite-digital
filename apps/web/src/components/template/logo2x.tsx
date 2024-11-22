import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const righteous = Righteous({
	weight: '400',
	subsets: ['latin'],
})

export function Logo() {
	return (
		<Link
			href="/"
			className={`flex flex-col items-center gap-4 ${righteous.className}`}
		>
			<Image src="/logo.svg" alt="logo" width={100} height={100} />
			<h1 className="flex flex-col items-center text-5xl">
				<div>
					CONVIT<span className="text-blue-500">3</span> DIGITAL
				</div>
			</h1>
		</Link>
	)
}
