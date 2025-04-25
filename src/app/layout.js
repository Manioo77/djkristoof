import { Lora } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const loraSans = Lora({
	variable: '--font-lora',
	subsets: ['latin'],
})

export const metadata = {
	title: 'Dj Kristoof',
	description: 'Strona dj Kristoof',
}

export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<body className={`${loraSans.variable} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
