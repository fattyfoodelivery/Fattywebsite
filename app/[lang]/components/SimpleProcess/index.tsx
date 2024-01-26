import Image from 'next/image'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import GroupImg from '../img/group.jpg'
import Group1Img from '../img/group-1.jpg'
import Group2Img from '../img/group-2.jpg'
import Group3Img from '../img/group-3.jpg'
import OrderIcon from '../img/orderIcon.svg'
import ParcelIcon from '../img/parcelIcon.svg'

export default async function SimpleProcess({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang)
  return (
    <section className=''>
      <div className='max-w-screen relative -z-20 hidden md:flex items-center justify-center '>
        <div className='absolute left-0 top-0 z-10 h-full w-full bg-black opacity-50' />
        <div className='relative md:h-[227px] w-[227px] 2xl:h-[427px] 2xl:w-[480px] object-contain '>
          <Image src={GroupImg} alt='group' fill className='flex-grow' />
        </div>
        <div className='relative md:h-[227px] w-[227px] 2xl:h-[427px] 2xl:w-[480px] object-contain'>
          <Image src={Group1Img} alt='group' fill className='flex-grow' />
        </div>
        <div className='relative md:h-[227px] w-[227px] 2xl:h-[427px] 2xl:w-[480px] object-contain'>
          <Image src={Group2Img} alt='group' fill className='flex-grow' />
        </div>
        <div className='relative md:h-[227px] w-[227px] 2xl:h-[427px] 2xl:w-[480px] object-contain'>
          <Image src={Group3Img} alt='group' fill className='flex-grow' />
        </div>
      </div>
      <div className='container z-20 mt-0 md:-mt-[177px] xl:-mt-[347px]'>
        <div className='flex flex-col space-y-1 xl:space-y-4 text-center mb-[18px] md:mb-[24px] xl:mb-[52px]'>
          <p className='text-base md:text-lg italic text-primary font-medium'>{page.process.title}</p>
          <p className='text-[24px] font-semibold md:text-3.5xl md:font-bold md:text-white leading-10'>
            {page.process.description}
          </p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-0 md:space-x-[32px]'>
          <div className='flex h-[460px] xl:h-[533px] w-[300px] md:w-[564px] lg:w-[664px] flex-col items-center justify-center space-y-4 md:space-y-6 rounded-[10px] bg-primary px-2 py-4'>
            <Image src={OrderIcon} alt='order icon' width={125} height={125} />
            <p className='text-xl md:text-2xl lg:text-3.5xl font-semibold md:font-bold text-white'>
              {page.process.order_title}
            </p>
            <ul className='flex flex-col space-y-2 md:space-y-3 xl:space-y-4 text-center'>
              {page.process.order_list.map((list,i) => (
                <li key={i} className='custom-list-bullet text-sm md:text-base lg:text-lg text-white'>
                  {list}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex h-[460px] xl:h-[533px] w-[300px] md:w-[564px] lg:w-[664px] flex-col items-center justify-center space-y-4 md:space-y-6 rounded-[10px] bg-primary px-2 py-4'>
            <Image src={ParcelIcon} alt='order icon' width={125} height={125} />
            <p className='text-xl md:text-2xl lg:text-3.5xl font-semibold md:font-bold text-white'>
              {page.process.parcel_title}
            </p>
            <ul className='flex flex-col space-y-2 md:space-y-3 xl:space-y-4 text-center'>
              {page.process.parcel_list.map((list,i) => (
                <li key={i} className='custom-list-bullet text-sm md:text-base lg:text-lg text-white'>
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
