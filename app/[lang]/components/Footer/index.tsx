import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '@/i18n.config'
import Logo from '../img/logo.svg'
import FooterBG from './footer.png'
import RiderImg from './rider.png'
import LocationIcon from './location.svg'
import PhoneIcon from './phone.svg'
import EmailIcon from './email.svg'
import FacebookIcon from './facebook.svg'
import TelegramIcon from './telegram.svg'

export default async function Footer({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang)
  return (
    <footer
      className='relative flex h-fit w-[100vw] flex-col justify-center bg-no-repeat lg:h-[417px]'
      style={{
        backgroundImage: `url(${FooterBG.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div
        className='absolute left-0 top-0 -z-0 h-full w-full'
        style={{
          opacity: 0.8,
          background:
            'linear-gradient(90deg, #692900 -31.62%, #2E2E2E 7.39%, #5E341A 99.86%)'
        }}
      />
      <div className='container z-10 flex flex-col space-y-8 lg:space-y-0 flex-wrap lg:flex-nowrap md:flex-row md:items-start lg:items-center  text-white py-4 md:py-0'>
        <div className='md:mt-6 lg:-mt-8 flex w-full md:w-2/5 flex-col space-y-2 md:space-y-4 lg:space-y-6 place-self-start md:mr-7 lg:mr-12'>
          <div className='flex items-center justify-start space-x-4 '>
            <div className='relative w-[60px] h-[60px] lg:h-[100px] lg:w-[100px]'>
              <Image src={Logo} alt='logo' fill />
            </div>
            <p className='text-lg md:text-xl lg:text-2xl text-white'>Fatty Food Delivey</p>
          </div>
          <p className='leading-7 text-xs md:text-sm lg:text-base font-light tracking-wide'>
            {page.footer.description}
          </p>
        </div>
        <div className='flex w-full md:w-1/6 flex-col justify-start space-y-2 md:space-y-4 lg:space-y-6 place-self-start md:mr-7 lg:mr-12'>
          <p className='text-lg md:text-xl lg:text-2xl'>{page.footer.link}</p>
          <Link href='/' className='text-xs md:text-sm lg:text-base font-light'>
            Home
          </Link>
          <Link href='/' className='text-xs md:text-sm lg:text-base font-light'>
            Services
          </Link>
          <Link href='/' className='text-xs md:text-sm lg:text-base font-light'>
            Contact Us
          </Link>
          <Link href='/' className='text-xs md:text-sm lg:text-base font-light'>
            FAQ
          </Link>
        </div>
        <div className='flex w-full md:w-fit lg:w-1/4 flex-col justify-start space-y-2 md:space-y-4 lg:space-y-6 place-self-start md:mr-7 lg:mr-12'>
          <p className='text-lg md:text-xl lg:text-2xl'>{page.footer.address}</p>
          <div className='flex items-center space-x-2 lg:space-x-4'>
            <div className='w-5 h-5 lg:h-10 lg:w-10 relative'>
              <Image src={LocationIcon} fill alt='location' />
            </div>
            <p className='text-xs md:text-sm lg:text-base font-light'>Lashio,Shan State,Myanmar</p>
          </div>
          <div className='flex items-center space-x-2 lg:space-x-4'>
            <div className='w-5 h-5 lg:h-10 lg:w-10 relative'>
              <Image src={PhoneIcon} fill alt='phone' />
            </div>
            <p className='text-xs md:text-sm lg:text-base font-light'>09 251 840 901</p>
          </div>
          <div className='flex items-center space-x-2 lg:space-x-4'>
            <div className='w-5 h-5 lg:h-10 lg:w-10 relative'>
              <Image src={EmailIcon} fill alt='email' />
            </div>
            <p className='text-xs md:text-sm lg:text-base font-light'>fattyfooddelivery@gmail.com</p>
          </div>
        </div>
        <div className='relative flex w-full md:w-1/4 flex-col justify-start space-y-2 md:space-y-4 lg:space-y-6 place-self-start md:mr-7 lg:mr-12'>
          <p className='text-lg md:text-xl lg:text-2xl'>{page.footer.follow}</p>
          <div className='flex items-center space-x-2 lg:space-x-4'>
            <div className='w-5 h-5 lg:h-10 lg:w-10 relative'>
              <Image src={FacebookIcon} fill alt='facebook' />
            </div>
            <p className='text-xs md:text-sm lg:text-base font-light'>Facebook</p>
          </div>
          <div className='flex items-center space-x-2 lg:space-x-4'>
            <div className='w-5 h-5 lg:h-10 lg:w-10 relative'>
              <Image src={TelegramIcon} fill alt='telegram' />
            </div>
            <p className='text-xs md:text-sm lg:text-base font-light'>Telegram</p>
          </div>
          <div className='md:absolute hidden md:block left-[136.69px] md:-top-10 lg:top-[32.04px] xl:left-[176.69px]'>
            <div className='relative h-[145px] w-[150.186px]'>
              <Image src={RiderImg} fill alt='rider' />
            </div>
          </div>
        </div>
      </div>

      <div className='lg:absolute mt-10 lg:mt-0 text-2xs md:text-sm lg:text-base z-10 bottom-0 left-0 w-full bg-footer p-2 text-center text-light-primary'>
        {page.footer.copyright}
      </div>
    </footer>
  )
}
