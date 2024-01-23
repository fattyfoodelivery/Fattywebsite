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
        <div className='relative h-[228px] w-[1360px] rounded-[10px] bg-primary z-10'>
          <div className='absolute w-full h-full left-0 top-0'>
            <div className='relative h-full w-full'>
              <Image src={WavesBG} alt='waves bg' fill />
            </div>
          </div>
          <div className="flex items-center justify-between px-[84px] py-16 z-20">
            <div className="flex items-center justify-center space-x-[30px]">
              <Image src={MarketingIcon} alt='marketing icon' width={100} height={100}/>
              <div className=' flex flex-col space-y-4 text-start'>
              <p className='text-lg font-light italic text-light-primary-1'>
                {page.process.mail_title}
              </p>
              <p className='text-[32px] font-bold leading-10 text-white'>
                {page.process.mail_description}
              </p>
            </div>
            </div>
            <div className="flex items-center z-20">
              <input type="text" placeholder={page.contact.email} className='bg-white italic rounded-[32px] py-5 px-6 outline-none w-[458px]' />
              <button className="bg-secondary rounded-[32px] text-primary py-5 px-7 -ml-[130px] w-[134.22px]">{page.process.subscribe}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
