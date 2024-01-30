import './globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'

import { Raleway } from 'next/font/google'
import Footer from './components/Footer'
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })

export const metadata: Metadata = {
  title: 'Fatty Food Delivery',
  description: 'Fatty gives the Food & Parcel delivery service in Premier, Faster and Reliable way in LASHIO city, Shan state, Myanmar. Much more delicious foods are now available on Fatty App!'
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
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />

      </head>
      <body
        className={`${raleway.className} ${raleway.variable} max-w-screen h-fit overflow-x-hidden`}
      >
        <main>{children}</main>
        <Footer lang={params.lang} />
      </body>
    </html>
  )
}
