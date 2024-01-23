import './globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'

import { Raleway } from 'next/font/google'
import Footer from './components/Footer'
const raleway = Raleway({ subsets: ['latin'],variable:'--font-raleway' })

export const metadata: Metadata = {
  title: 'Fatty Food Delivery',
  description: 'Generated by create next app',
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body className={`${raleway.className} ${raleway.variable} max-w-screen h-fit overflow-x-hidden`}>
        <main>{children}</main>
        <Footer lang={params.lang}/>
      </body>
    </html>
  )
}
