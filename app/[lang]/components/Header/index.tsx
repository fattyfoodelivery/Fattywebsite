import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import Image from 'next/image'
import Logo from '../img/logo.svg'

export default async function Header({
  lang,
  location
}: {
  lang: Locale
  location: string
}) {
  const { navigation } = await getDictionary(lang)

  const navItemClasses = `${location === 'home' ? 'text-white ' : 'text-secondary '} text-xl hover:text-primary font-semibold tracking-wide`
  const headerClasses = `container flex items-center justify-between py-5 ${location === 'home' ? ' border border-x-0 border-t-0 border-b-primary' : ''}`
  return (
    <header className='z-10'>
      <nav
        className={headerClasses}
      >
        <div className='flex items-center justify-center space-x-4 '>
          <div className='relative h-[100px] w-[100px]'>
            <Image src={Logo} alt='logo' fill />
          </div>
          <p className='text-2xl text-primary'>Fatty Food Delivey</p>
        </div>
        <ul className='flex items-center justify-center gap-x-8'>
          <li>
            <Link className={navItemClasses} href={`/${lang}`}>
              {navigation.home}
            </Link>
          </li>
          <li>
            <Link className={navItemClasses} href={`/${lang}/services`}>
              {navigation.services}
            </Link>
          </li>
          <li>
            <Link className={navItemClasses} href={`/${lang}/contact`}>
              {navigation.contact}
            </Link>
          </li>
          <LocaleSwitcher />
        </ul>
      </nav>
    </header>
  )
}
