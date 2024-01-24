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
          <div className='flex flex-col md:flex-row items-center justify-center md:justify-between w-screen md:w-full py-10 md:py-14 lg:py-0'>
            <div className='space-y-6 pt-5 md:pt-0'>
              <div className='w-fit rounded-full bg-primary bg-opacity-60 px-4 py-1 italic text-white'>
                {page.home.subtitle}
              </div>
              <h1 className='w-full md:w-[446px] text-2xl lg:text-3xl 3xl:text-4xl font-bold leading-[38px] lg:leading-[48px] 3xl:leading-[58px] tracking-widest text-tertiary'>
                {page.home.title}
              </h1>
              <p className='leading[26px] pr-4 md:p-0 w-full md:w-[723px] text-base font-medium tracking-normal text-quaternary'>
                {page.home.description}
              </p>
              <div className='flex items-center flex-wrap md:flex-nowrap'>
                <Link
                  href='https://www.apple.com/app-store'
                  className='flex rounded-lg bg-tertiary w-fit 2xl:w-[173px] my-1 px-4 py-2 space-x-2 mr-2 lg:mr-4'
                >
                  <Image
                    src={AppstoreImg}
                    alt='app store'
                    width={32}
                    height={32}
                  />
                  <div className=''>
                    <p className='font-normal text-2xs md:text-xs text-primary'>{page.home.button}</p>
                    <p className='text-secondary'>App Store</p>
                  </div>
                </Link>
                <Link
                  href='https://play.google.com/store/games'
                  className='flex rounded-lg bg-tertiary w-fit 2xl:w-[173px] my-1 px-4 py-2 space-x-2 mr-2 lg:mr-4'
                >
                  <Image
                    src={GooglePlayImg}
                    alt='google play'
                    width={24}
                    height={26.667}
                  />
                  <div className=''>
                    <p className='font-normal text-2xs md:text-xs text-primary'>{page.home.button}</p>
                    <p className='text-secondary'>Google Play</p>
                  </div>
                </Link>
                <Link
                  href='https://apkpure.net/'
                  className='flex rounded-lg bg-tertiary w-fit 2xl:w-[173px] my-1 px-4 py-2 space-x-2 mr-2 lg:mr-4'
                >
                  <Image
                    src={ApkPureImg}
                    alt='APK pure'
                    width={24}
                    height={26.667}
                  />
                  <div className=''>
                    <p className='font-normal text-2xs md:text-xs text-primary'>{page.home.button}</p>
                    <p className='text-secondary'>APK Pure</p>
                  </div>
                </Link>
                <Link
                  href=''
                  className='flex rounded-lg bg-tertiary w-fit 2xl:w-[173px] my-1 px-4 py-2 space-x-2 mr-2 lg:mr-4'
                >
                  <Image
                    src={DownloadImg}
                    alt='direct download'
                    width={24}
                    height={26.667}
                  />
                  <div className=''>
                    <p className='font-normal text-2xs md:text-xs text-primary'>{page.home.button}</p>
                    <p className='text-secondary'>Directly</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className='relative hidden md:block w-[269px] h-[269px] md:w-[369px] md:h-[369px] 2xl:h-[469px] 2xl:w-[469px] 3xl:h-[569px] 3xl:w-[569px]'>
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
