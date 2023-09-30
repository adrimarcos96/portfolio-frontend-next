import { NavbarComponent } from '@/components'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'

const font = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Adrian Marcos',
  description: 'My portfolio',
  keywords:[ 'Adrian Marcos', 'portafolio', 'portfolio'],
  authors: { name: 'Adrian Marcos Quintana' },
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.className} min-h-screen`}>
        <NavbarComponent></NavbarComponent>
        <main className="mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
