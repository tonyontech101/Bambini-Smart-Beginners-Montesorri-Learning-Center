import './globals.css'
import type { Metadata } from 'next'
import { Nunito, Fredoka } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '600', '700', '800'],
})

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
})

export const metadata: Metadata = {
  title: {
    default: 'Bambini Smart Beginners',
    template: '%s | Bambini',
  },
  description: 'Montessori Learning Center website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${nunito.variable} 
          ${fredoka.variable} 
          font-sans 
          antialiased 
          bg-[#f4f3f8]
        `}
      >
        {children}
      </body>
    </html>
  )
}