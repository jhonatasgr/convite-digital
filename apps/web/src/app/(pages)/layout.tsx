import { Page } from '@/components/template/page'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
	return <Page className={poppins.className}>{children}</Page>
}
