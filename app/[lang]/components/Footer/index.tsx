import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '@/lib/dictionary'
import { getFetchData } from '@/controller'
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
  const data = await getFetchData(lang)

  const footer_address = data?.addresses?.filter(
    (address: any) => address.is_footer_address === 1
  )[0]

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
      <div className='container z-10 flex flex-col flex-wrap space-y-8 py-4 text-white md:flex-row md:items-start md:py-0  lg:flex-nowrap lg:items-center lg:space-y-0'>
        <div className='flex w-full flex-col space-y-2 place-self-start md:mr-7 md:mt-6 md:w-2/5 md:space-y-4 lg:-mt-8 lg:mr-12 lg:space-y-6'>
          <div className='flex items-center justify-start space-x-4 '>
            <div className='relative h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]'>
              <Image src={Logo} alt='logo' fill />
            </div>
            <p className='text-lg text-white md:text-xl lg:text-2xl'>
              Fatty Food Delivey
            </p>
          </div>
          <p className='text-xs font-light leading-7 tracking-wide md:text-sm lg:text-base'>
            {data?.editable?.['footer-description']}
          </p>
        </div>
        <div className='flex w-full flex-col justify-start space-y-2 place-self-start md:mr-7 md:w-1/6 md:space-y-4 lg:mr-12 lg:space-y-6'>
          <p className='text-lg md:text-xl lg:text-2xl'>{page.footer.link}</p>
          <Link href='/' className='text-xs font-light md:text-sm lg:text-base'>
            Home
          </Link>
          <Link href='/services' className='text-xs font-light md:text-sm lg:text-base'>
            Services
          </Link>
          <Link href='/contact' className='text-xs font-light md:text-sm lg:text-base'>
            Contact Us
          </Link>
          <Link href='/contact#faq' className='text-xs font-light md:text-sm lg:text-base'>
            FAQ
          </Link>
        </div>
        <div className='flex w-full flex-col justify-start space-y-2 place-self-start md:mr-7 md:w-fit md:space-y-4 lg:mr-12 lg:w-1/4 lg:space-y-6'>
          <p className='text-lg md:text-xl lg:text-2xl'>
            {footer_address?.address_title}
          </p>
          <div className='flex items-center space-x-2 lg:space-x-4'>
            <div className='relative h-5 w-5 lg:h-10 lg:w-10'>
              <Image src={LocationIcon} fill alt='location' />
            </div>
            <p className='text-xs font-light md:text-sm lg:text-base'>
              {footer_address?.address}
            </p>
          </div>
          <div className='flex items-center space-x-2 lg:space-x-4'>
            <div className='relative h-5 w-5 lg:h-10 lg:w-10'>
              <Image src={PhoneIcon} fill alt='phone' />
            </div>
            <p className='text-xs font-light md:text-sm lg:text-base'>
              {footer_address?.phone}
            </p>
          </div>
          <div className='flex items-center space-x-2 lg:space-x-4'>
            <div className='relative h-5 w-5 lg:h-10 lg:w-10'>
              <Image src={EmailIcon} fill alt='email' />
            </div>
            <p className='text-xs font-light md:text-sm lg:text-base'>
              {footer_address?.mail}
            </p>
          </div>
        </div>
        <div className='relative flex w-full flex-col justify-start space-y-2 place-self-start md:mr-7 md:w-1/4 md:space-y-4 lg:mr-12 lg:space-y-6'>
          {data?.social?.length>0 && (
            <p className='text-lg md:text-xl lg:text-2xl'>
              {page.footer.follow}
            </p>
          )}
          {data?.social?.length>0 &&
            data.social.map((data: any) => (
              <Link
                key={data.id}
                href={data.url}
                className='flex items-center space-x-2 lg:space-x-4'
              >
                <div className='relative h-5 w-5 lg:h-10 lg:w-10'>
                  <Image
                    src={
                      data.media === 'facebook' ? FacebookIcon : TelegramIcon
                    }
                    fill
                    alt={data.media}
                  />
                </div>
                <p className='text-xs font-light md:text-sm lg:text-base'>
                  {data.media === 'facebook' ? 'Facebook' : 'Telegram'}
                </p>
              </Link>
            ))}
            {data?.social?.length>0 &&
          <div className='left-[136.69px] hidden md:absolute md:-top-10 md:block lg:top-[32.04px] xl:left-[176.69px]'>
            <div className='relative h-[145px] w-[150.186px]'>
              <Image src={RiderImg} fill alt='rider' />
            </div>
          </div>}
        </div>
      </div>

      <div className='bottom-0 left-0 z-10 mt-10 w-full bg-footer p-2 text-center text-2xs text-light-primary md:text-sm lg:absolute lg:mt-0 lg:text-base'>
        {page.footer.copyright}
      </div>
    </footer>
  )
}
