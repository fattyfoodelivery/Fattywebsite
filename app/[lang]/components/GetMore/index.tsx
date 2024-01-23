import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import ApplicationBG from '../img/application_map.png'
import HandHolderImg from '../img/appplication_img.png'

import AppstoreImg from '../img/apple.svg'
import GooglePlayImg from '../img/googleplay.svg'
import ApkPureImg from '../img/apkpure.svg'
import DownloadImg from '../img/download.svg'
import Link from 'next/link'

export default async function GetMore({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang)
  return (
    <section className='relative py-20'>
      <div className='absolute left-[236px] top-[224px]'>
        <div className='relative h-[305px] w-[678px] object-none'>
          <Image src={ApplicationBG} fill alt='app map' />
        </div>
      </div>
      <div className='h-[600px] w-full bg-soft-tertiary'>
        <div className='container  flex items-center justify-center space-x-[135px]'>
          <div className='relative mt-[55px] h-[545px] w-[361px]'>
            <Image src={HandHolderImg} quality={100} fill alt='app hand' />
          </div>
          <div className='flex flex-col space-y-[32px]'>
            <div className=' flex flex-col space-y-4 text-start'>
              <p className='text-lg font-light italic text-primary'>
                {page.process.order_now}
              </p>
              <p className='text-[32px] font-bold leading-10'>
                {page.process.get_more}
              </p>
            </div>
            <div className='flex flex-col space-y-[24px]'>
              {page.process.steps.map((step, i) => (
                <div className='flex items-center space-x-4' key={step}>
                  <div className='relative h-[38px] w-[38px]'>
                    <div className='absolute left-0 top-0 h-full w-full rounded-full bg-primary opacity-30' />
                    <div className='absolute left-[6px] top-[6px] z-10 h-[26px] w-[26px] rounded-full bg-primary text-center'>
                      {i + 1}
                    </div>
                  </div>
                  <p className='font-light'>{step}</p>
                </div>
              ))}
            </div>
            <div className='flex items-center space-x-4'>
                <a
                  href='https://www.apple.com/app-store'
                  className='flex rounded-lg bg-mid-primary px-4 py-2  space-x-2'
                >
                  <Image
                    src={AppstoreImg}
                    alt='app store'
                    width={32}
                    height={32}
                  />
                  <div className=''>
                    <p className='font-normal text-xs '>{page.home.button}</p>
                    <p className=''>App Store</p>
                  </div>
                </a>
                <a
                  href='https://play.google.com/store/games'
                  className='flex rounded-lg bg-mid-primary px-4 py-2  space-x-2'
                >
                  <Image
                    src={GooglePlayImg}
                    alt='google play'
                    width={24}
                    height={26.667}
                  />
                  <div className=''>
                    <p className='font-normal text-xs '>{page.home.button}</p>
                    <p className=''>Google Play</p>
                  </div>
                </a>
                <a
                  href='https://apkpure.net/'
                  className='flex rounded-lg bg-mid-primary px-4 py-2  space-x-2'
                >
                  <Image
                    src={ApkPureImg}
                    alt='APK pure'
                    width={24}
                    height={26.667}
                  />
                  <div className=''>
                    <p className='font-normal text-xs '>{page.home.button}</p>
                    <p className=''>APK Pure</p>
                  </div>
                </a>
                <a
                  href=''
                  className='flex rounded-lg bg-mid-primary px-4 py-2  space-x-2'
                >
                  <Image
                    src={DownloadImg}
                    alt='direct download'
                    width={24}
                    height={26.667}
                  />
                  <div className=''>
                    <p className='font-normal text-xs '>{page.home.button}</p>
                    <p className=''>Directly</p>
                  </div>
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
