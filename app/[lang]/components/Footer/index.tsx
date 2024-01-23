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
      className='relative flex h-[417px] w-[100vw] flex-col justify-center bg-no-repeat'
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
      <div className='container z-10 flex items-center space-x-12 text-white'>
        <div className='-mt-3 flex w-2/5 flex-col space-y-6 place-self-start'>
          <div className='flex items-center justify-start space-x-4 '>
            <div className='relative h-[100px] w-[100px]'>
              <Image src={Logo} alt='logo' fill />
            </div>
            <p className='text-2xl text-white'>Fatty Food Delivey</p>
          </div>
          <p className='text-base font-light tracking-wide'>
            {page.footer.description}
          </p>
        </div>
        <div className='flex w-1/5 flex-col justify-start space-y-6 place-self-start'>
          <p className='text-2xl '>{page.footer.link}</p>
          <Link href='/' className='text-base font-light'>
            Home
          </Link>
          <Link href='/' className='text-base font-light'>
            Services
          </Link>
          <Link href='/' className='text-base font-light'>
            Contact Us
          </Link>
          <Link href='/' className='text-base font-light'>
            FAQ
          </Link>
        </div>
        <div className='flex w-1/4 flex-col justify-start space-y-6 place-self-start'>
          <p className='text-2xl '>{page.footer.address}</p>
          <div className='flex items-center space-x-1'>
            <div className='h-10 w-10 rounded-full p-2'>
              <Image src={LocationIcon} width={24} height={24} alt='location' />
            </div>
            <p className='text-base font-light'>Lashio,Shan State,Myanmar</p>
          </div>
          <div className='flex items-center space-x-1'>
            <div className='h-10 w-10 rounded-full p-2'>
              <Image src={PhoneIcon} width={24} height={24} alt='phone' />
            </div>
            <p className='text-base font-light'>09 251 840 901</p>
          </div>
          <div className='flex items-center space-x-1'>
            <div className='h-10 w-10 rounded-full p-2'>
              <Image src={EmailIcon} width={24} height={24} alt='email' />
            </div>
            <p className='text-base font-light'>fattyfooddelivery@gmail.com</p>
          </div>
        </div>
        <div className='flex w-1/4 flex-col justify-start space-y-6 place-self-start relative'>
          <p className='text-2xl '>{page.footer.follow}</p>
          <div className='flex items-center space-x-1'>
            <div className='h-10 w-10 rounded-full p-2'>
              <Image src={FacebookIcon} width={24} height={24} alt='facebook' />
            </div>
            <p className='text-base font-light'>Facebook</p>
          </div>
          <div className='flex items-center space-x-1'>
            <div className='h-10 w-10 rounded-full p-2'>
              <Image src={TelegramIcon} width={24} height={24} alt='telegram' />
            </div>
            <p className='text-base font-light'>Telegram</p>
          </div>
          <div className='absolute xl:left-[176.69px] left-[136.69px] top-[32.04px]'>
        <div className='relative h-[145px] w-[150.186px]'>
          <Image src={RiderImg} fill alt='rider' />
        </div>
      </div>
        </div>
      </div>
    
      <div className='absolute bottom-0 left-0 w-full bg-footer p-2 text-center text-light-primary'>
        {page.footer.copyright}
      </div>
    </footer>
  )
}
