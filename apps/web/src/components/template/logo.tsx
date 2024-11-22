import { Righteous } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const righteous = Righteous({
	weight: '400',
	subsets: ['latin'],
})

export function Logo() {
	return (
		<Link href="/" className={`flex items-center gap-2 ${righteous.className}`}>
			<Image src="/logo.svg" alt="logo" width={50} height={50} />
			<h1 className="flex flex-col items-center text-lg leading-5">
				<div>
					CONVIT<span className="text-blue-500">3</span>
				</div>
				<div>DIGITAL</div>
			</h1>
		</Link>
	)
}
