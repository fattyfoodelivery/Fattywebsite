import Link from 'next/link'
import Image from 'next/image'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { getFetchData } from '@/controller'
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
  const  {page}  = await getDictionary(lang);

  const  data  = await getFetchData(lang);
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
          <div className='flex flex-col md:flex-row items-center justify-center md:justify-between w-fit md:w-full py-10 md:py-14 lg:py-0'>
            <div className='space-y-6 pt-5 md:pt-0'>
              <div className='w-fit rounded-full bg-primary bg-opacity-60 px-4 py-1 italic text-white'>
                {page.home.subtitle}
              </div>
              <h1 className='w-full md:w-[446px] text-2xl lg:text-3xl 3xl:text-4xl font-bold leading-[38px] lg:leading-[48px] 3xl:leading-[58px] tracking-widest text-tertiary'>
                {data?.editable?.['home-title']}
              </h1>
              <p className='leading[26px] pr-4 md:p-0 w-full md:w-[723px] text-base font-medium tracking-normal text-quaternary'>
                {data?.editable?.['home-description']}
              </p>
              <div className='flex items-center flex-wrap md:flex-nowrap'>
                {data?.app_urls.app_store.active && <Link
                  href={data?.app_urls.app_store.url}
                  className='flex rounded-lg bg-tertiary w-[156px] sm:w-[160px] 2xl:w-[173px] my-1 px-4 py-2 space-x-2 mr-2 lg:mr-4'
                >
                  <Image
                    src={AppstoreImg}
                    alt='app store'
                    width={24}
                    height={26.667}
                  />
                  <div className=''>
                    <p className='font-normal text-2xs md:text-xs text-primary'>{page.home.button}</p>
                    <p className='text-secondary'>App Store</p>
                  </div>
                </Link>}
                {data?.app_urls.play_store.active &&<Link
                  href={data?.app_urls.play_store.url}
                  className='flex rounded-lg bg-tertiary w-[156px] sm:w-[160px] 2xl:w-[173px] my-1 px-4 py-2 space-x-2 mr-2 lg:mr-4'
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
                </Link>}
                {data?.app_urls.apk_pure.active &&<Link
                  href={data?.app_urls.apk_pure.url}
                  className='flex rounded-lg bg-tertiary w-[156px] sm:w-[160px] 2xl:w-[173px] my-1 px-4 py-2 space-x-2 mr-2 lg:mr-4'
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
                </Link>}
                {data?.app_urls.direct_link.active &&<Link
                  href={data?.app_urls.direct_link.url}
                  className='flex rounded-lg bg-tertiary w-[156px] sm:w-[160px] 2xl:w-[173px] my-1 px-4 py-2 space-x-2 mr-2 lg:mr-4'
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
                </Link>}
              </div>
            </div>
            <div className='relative hidden md:block w-[269px] h-[269px] md:w-[369px] md:h-[369px] 2xl:h-[469px] 2xl:w-[469px] 3xl:h-[569px] 3xl:w-[569px]'>
              <Image src={RiderImg} alt='rider' fill />
            </div>
          </div>
        </div>
      </section>
      <Services page={page} data={data.reasons}/>
      <SimpleProcess lang={lang}/>
      <GetMore page={page} data={data?.app_urls}/>
      <Subscribe lang={lang}/>
    </>
  )
}
