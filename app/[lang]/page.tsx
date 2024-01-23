import Link from 'next/link'
import Image from 'next/image'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LandingImg from './components/img/landing.svg'
import RiderImg from './components/img/rider.svg'
import AppstoreImg from './components/img/apple.svg'
import GooglePlayImg from './components/img/googleplay.svg'
import ApkPureImg from './components/img/apkpure.svg'
import DownloadImg from './components/img/download.svg'
import Header from './components/Header'
import Services from './components/Services'
import SimpleProcess from './components/SimpleProcess'
import GetMore from './components/GetMore'
import Subscribe from './components/Subscribe'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <>
      <section
        className='relative h-[750px] w-[100vw] bg-no-repeat'
        style={{
          backgroundImage: `url(${LandingImg.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <Header lang={lang} location='home' />
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='space-y-6'>
              <div className='w-fit rounded-full bg-primary bg-opacity-60 px-4 py-1 italic text-white'>
                {page.home.subtitle}
              </div>
              <h1 className='w-[446px] text-4xl font-bold leading-[58px] tracking-widest text-tertiary'>
                {page.home.title}
              </h1>
              <p className='leading[26px] w-[723px] text-base font-medium tracking-normal text-quaternary'>
                {page.home.description}
              </p>
              <div className='flex items-center space-x-4'>
                <Link
                  href='https://www.apple.com/app-store'
                  className='flex rounded-lg bg-tertiary px-4 py-2  space-x-2'
                >
                  <Image
                    src={AppstoreImg}
                    alt='app store'
                    width={32}
                    height={32}
                  />
                  <div className=''>
                    <p className='font-normal text-xs text-primary'>{page.home.button}</p>
                    <p className='text-secondary'>App Store</p>
                  </div>
                </Link>
                <Link
                  href='https://play.google.com/store/games'
                  className='flex rounded-lg bg-tertiary px-4 py-2  space-x-2'
                >
                  <Image
                    src={GooglePlayImg}
                    alt='google play'
                    width={24}
                    height={26.667}
                  />
                  <div className=''>
                    <p className='font-normal text-xs text-primary'>{page.home.button}</p>
                    <p className='text-secondary'>Google Play</p>
                  </div>
                </Link>
                <Link
                  href='https://apkpure.net/'
                  className='flex rounded-lg bg-tertiary px-4 py-2  space-x-2'
                >
                  <Image
                    src={ApkPureImg}
                    alt='APK pure'
                    width={24}
                    height={26.667}
                  />
                  <div className=''>
                    <p className='font-normal text-xs text-primary'>{page.home.button}</p>
                    <p className='text-secondary'>APK Pure</p>
                  </div>
                </Link>
                <Link
                  href=''
                  className='flex rounded-lg bg-tertiary px-4 py-2  space-x-2'
                >
                  <Image
                    src={DownloadImg}
                    alt='direct download'
                    width={24}
                    height={26.667}
                  />
                  <div className=''>
                    <p className='font-normal text-xs text-primary'>{page.home.button}</p>
                    <p className='text-secondary'>Directly</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className='relative h-[569px] w-[569px]'>
              <Image src={RiderImg} alt='rider' fill />
            </div>
          </div>
        </div>
      </section>
      <Services lang={lang}/>
      <SimpleProcess lang={lang}/>
      <GetMore lang={lang}/>
      <Subscribe lang={lang}/>
    </>
  )
}
