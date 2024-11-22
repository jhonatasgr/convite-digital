import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Seu evento começa aqui',
	description: 'Aplicação para criação de eventos',
}
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
