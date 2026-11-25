import type { Metadata } from 'next'
import { Poppins, Stack_Sans_Headline } from 'next/font/google'
import './globals.css'
import Providers from './providers'

import { CartOpen } from '@/features/cart'
import { Header } from '@/widgets/header'
import 'rc-slider/assets/index.css'

const stackSansHeadline = Stack_Sans_Headline({
  variable: '--font-stack-sans-headline',
  subsets: ['latin']
})

const poppins = Poppins({
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'WATCH-SHOP',
  description: 'An e-commerce platform built with Next.js and TypeScript'
}

function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${stackSansHeadline.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col w-full bg-background">
        <Providers>
          <Header />

          <CartOpen />
          <main className="flex-1 flex flex-col w-full">{children}</main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
