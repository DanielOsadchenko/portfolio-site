import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Danylo Osadchenko',
  description: 'Danylo Osadchenko portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-cWhite'>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
