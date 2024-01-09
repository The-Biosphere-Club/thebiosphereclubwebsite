import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import Appbar from '@/components/Appbar'
import Footerr from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Biosphere Club',
  description: 'Preserving Nature for a Sustainable Future',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Appbar />
          {children}
        </Providers>
        <Footerr />
      </body>
    </html>
  )
}
