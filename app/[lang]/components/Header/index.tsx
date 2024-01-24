'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'
import Image from 'next/image'
import Logo from '../img/logo.svg'

type NAVType = {
  home: string
  services: string
  contact: string
}

export default function Header({
  lang,
  location
}: {
  lang: Locale
  location: string
}) {
  const [navData, setNavData] = useState<NAVType | null>(null)
  const [showDropDown, setShowDropDown] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      const { navigation } = await getDictionary(lang)
      setNavData(navigation)
    }
    fetchData()
  }, [lang])

  const toggleMobileMenu = () => {
    setShowDropDown(p => !p);
  }

  const navItemClasses = `${location === 'home' ? 'text-white ' : 'text-secondary '} md:text-sm lg:text-base xl:text-xl hover:text-primary font-semibold tracking-wide`
  const headerClasses = `container flex items-center justify-between py-5 ${location === 'home' ? ' border border-x-0 border-t-0 border-b-primary' : ''}`
  return (
    <>
      <header className='z-10'>
        <nav className={headerClasses}>
          <div className='flex items-center justify-center space-x-4 '>
            <div className='relative h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]'>
              <Image src={Logo} alt='logo' fill />
            </div>
            <p className='text-xl text-primary xl:text-2xl'>
              Fatty Food Delivey
            </p>
          </div>
          {navData && (
            <ul className='hidden items-center justify-center gap-x-5 md:flex lg:gap-x-8'>
              <li>
                <Link className={navItemClasses} href={`/${lang}`}>
                  <p className={location === 'home' ? ' text-primary' : ''}>
                    {navData.home}
                  </p>
                </Link>
              </li>
              <li>
                <Link className={navItemClasses} href={`/${lang}/services`}>
                  <p className={location === 'services' ? ' text-primary' : ''}>
                    {navData.services}
                  </p>
                </Link>
              </li>
              <li>
                <Link className={navItemClasses} href={`/${lang}/contact`}>
                  <p className={location === 'contact' ? ' text-primary' : ''}>
                    {navData.contact}
                  </p>
                </Link>
              </li>
              <LocaleSwitcher />
            </ul>
          )}
          <button
            className={
              'block rounded-full bg-primary p-2 text-xl text-white md:hidden'
            }
            onClick={() => setShowDropDown(true)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </button>
        </nav>
      </header>
      {showDropDown && (
        <div
          onClick={toggleMobileMenu}
          className='absolute left-0 top-0 z-50 flex h-[100%] w-full  items-center justify-center  bg-black bg-opacity-60 px-12 backdrop-blur-sm backdrop-filter md:hidden'
        >
          <button
            className='absolute right-4 top-6 !z-[999999] rounded-full bg-primary p-2 text-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
          </button>
          {navData && (
            <ul className='flex flex-col items-center justify-center space-y-10'>
              <li>
                <Link className={navItemClasses + ` text-white`} href={`/${lang}`}>
                  <p className={location === 'home' ? ' text-primary' : ''}>
                    {navData.home}
                  </p>
                </Link>
              </li>
              <li>
                <Link className={navItemClasses + ` text-white`} href={`/${lang}/services`}>
                  <p className={location === 'services' ? ' text-primary' : ''}>
                    {navData.services}
                  </p>
                </Link>
              </li>
              <li>
                <Link className={navItemClasses + ` text-white`} href={`/${lang}/contact`}>
                  <p className={location === 'contact' ? ' text-primary' : ''}>
                    {navData.contact}
                  </p>
                </Link>
              </li>
              <LocaleSwitcher />
            </ul>
          )}
        </div>
      )}
    </>
  )
}
