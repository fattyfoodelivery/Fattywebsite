import Image from 'next/image'
import ApplicationBG from '../img/application_map.png'
import HandHolderImg from '../img/appplication_img.png'

import AppstoreImg from '../img/apple.svg'
import GooglePlayImg from '../img/googleplay.svg'
import ApkPureImg from '../img/apkpure.svg'
import DownloadImg from '../img/download.svg'
import Link from 'next/link'

export default function GetMore({page,data }: {page:any,data:any }) {
  return (
    <section className='relative py-20 w-full overflow-hidden'>
      <div className='absolute left-10 md:left-[236px] top-[224px]'>
        <div className='relative h-[305px] w-[678px] object-none'>
          <Image src={ApplicationBG} fill alt='app map' />
        </div>
      </div>
      <div className='h-[600px] w-full bg-soft-tertiary'>
        <div className='container flex items-center justify-center md:space-x-9 lg:space-x-[85px] xl:space-x-[135px]'>
          <div className='relative hidden md:block mt-[125px] lg:mt-[55px] h-[545px] !w-[361px] scale-75 lg:scale-100 -mr-[3rem] -pb-[2rem] lg:mr-0 lg:mb-0'>
            <Image src={HandHolderImg} quality={100} fill alt='app hand' />
          </div>
          <div className='flex flex-col space-y-5 md:space-y-[32px] flex-1 mt-10 md:mt-0'>
            <div className=' flex flex-col space-y-2 md:space-y-4 text-center md:text-start'>
              <p className='text-base md:text-lg font-light italic text-primary'>
                {page.process.order_now}
              </p>
              <p className='text-[24px] font-semibold md:text-3xl lg:text-3.5xl md:font-bold leading-10'>
                {page.process.get_more}
              </p>
            </div>
            <div className='flex flex-col space-y-[24px]'>
              {page.process.steps.map((step:string, i:number) => (
                <div className='flex items-center space-x-4' key={step}>
                  <div className='relative h-[38px] w-[38px]'>
                    <div className='absolute left-0 top-0 h-full w-full rounded-full bg-primary opacity-30' />
                    <div className='absolute left-[6px] top-[6px] text-sm md:text-base z-10 h-[26px] w-[26px] rounded-full bg-primary text-center'>
                      {i + 1}
                    </div>
                  </div>
                  <p className='font-light text-sm md:text-base'>{step}</p>
                </div>
              ))}
            </div>
            <div className='flex items-center flex-wrap'>
            {data?.app_store.active===1 && <Link
                  href={data?.app_store.url}
                  className='flex items-center justify-center rounded-lg w-[156px] sm:w-[166px] 2xl:w-[173px] my-1 bg-mid-primary h-[59px] px-4 py-2 space-x-2 mr-2 md:mr-4'
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
                {data?.play_store.active===1 &&<Link
                  href={data?.play_store.url}
                  className='flex items-center justify-center rounded-lg w-[156px] sm:w-[166px] 2xl:w-[173px] my-1 bg-mid-primary h-[59px] px-4 py-2 space-x-2 mr-2 md:mr-4'
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
                {data?.apk_pure.active===1 &&<Link
                  href={data?.apk_pure.url}
                  className='flex items-center justify-center rounded-lg w-[156px] sm:w-[166px] 2xl:w-[173px] my-1 bg-mid-primary h-[59px] px-4 py-2 space-x-2 mr-2 md:mr-4'
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
                {data?.direct_link.active===1 &&<Link
                  href={data?.direct_link.url}
                  className='flex items-center justify-center rounded-lg w-[156px] sm:w-[166px] 2xl:w-[173px] my-1 bg-mid-primary h-[59px] px-4 py-2 space-x-2 mr-2 md:mr-4'
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
        </div>
      </div>
    </section>
  )
}
