import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'

import WavesBG from '../img/waves.png'
import MarketingIcon from '../img/email-marketing.svg'

export default async function Subscribe({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang)
  return (
    <section className='pb-20'>
      <div className='container relative flex items-center'>
        <div className='relative z-10 h-fit lg:h-[228px] w-[100vw] rounded-[10px] bg-primary xl:w-[1360px]'>
          <div className='absolute left-0 top-0 h-full w-full'>
            <div className='relative h-full w-full'>
              <Image src={WavesBG} alt='waves bg' fill />
            </div>
          </div>
          <div className='z-20 flex flex-col md:flex-row space-y-4 md:spcae-y-0 items-center justify-between px-2 md:px-8 lg:px-[84px] py-6 md:py-12 lg:py-16'>
            <div className='flex items-center justify-center space-x-6 md:space-x-[30px]'>
              <div className='relative w-[80px] h-[80px] md:h-[100px] md:w-[100px]'>
                <Image src={MarketingIcon} alt='marketing icon' fill />
              </div>
              <div className=' flex flex-col space-y-4 text-start'>
                <p className='text-xs md:text-base lg:text-lg font-light italic text-light-primary-1'>
                  {page.process.mail_title}
                </p>
                <p className='text-lg md:text-2xl lg:text-3.5xl font-bold leading-7 md:leading-10 text-white'>
                  {page.process.mail_description}
                </p>
              </div>
            </div>
            <div className='z-20 flex items-center'>
              <input
                type='text'
                placeholder={page.contact.email}
                className='w-[158px] rounded-[32px]  text-xs md:text-sm lg:text-base bg-white px-6 py-2 italic outline-none lg:w-[458px] lg:py-5'
              />
              <button className='-ml-[30px] w-fit text-xs md:text-sm lg:text-base rounded-[32px] bg-secondary px-4 py-2 text-primary lg:-ml-[130px] lg:w-[134.22px] lg:px-7 lg:py-5'>
                {page.process.subscribe}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
