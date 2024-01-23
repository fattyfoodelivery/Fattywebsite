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
      <div className='max-w-screen relative -z-20 flex items-center justify-center'>
        <div className='absolute left-0 top-0 z-10 h-full w-full bg-black opacity-50' />
        <div className='relative h-[427px] w-[480px] object-contain '>
          <Image src={GroupImg} alt='group' fill className='flex-grow' />
        </div>
        <div className='relative h-[427px] w-[480px] object-contain'>
          <Image src={Group1Img} alt='group' fill className='flex-grow' />
        </div>
        <div className='relative h-[427px] w-[480px] object-contain'>
          <Image src={Group2Img} alt='group' fill className='flex-grow' />
        </div>
        <div className='relative h-[427px] w-[480px] object-contain'>
          <Image src={Group3Img} alt='group' fill className='flex-grow' />
        </div>
      </div>
      <div className='container z-20 -mt-[347px]'>
        <div className='flex flex-col space-y-4 text-center mb-[52px]'>
          <p className='text-lg italic text-primary font-light'>{page.process.title}</p>
          <p className='text-[32px] text-white font-bold leading-10'>
            {page.process.description}
          </p>
        </div>
        <div className=' flex items-center space-x-[32px]'>
          <div className='flex h-[533px] w-[664px] flex-col items-center justify-center space-y-6 rounded-[10px] bg-primary'>
            <Image src={OrderIcon} alt='order icon' width={125} height={125} />
            <p className='text-[32px] font-bold text-white'>
              {page.process.order_title}
            </p>
            <ul className='flex flex-col space-y-[16px]'>
              {page.process.order_list.map(list => (
                <li className='custom-list-bullet text-lg text-white'>
                  {list}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex h-[533px] w-[664px] flex-col items-center justify-center space-y-6 rounded-[10px] bg-primary'>
            <Image src={ParcelIcon} alt='order icon' width={125} height={125} />
            <p className='text-[32px] font-bold text-white'>
              {page.process.parcel_title}
            </p>
            <ul className='flex flex-col space-y-[16px]'>
              {page.process.parcel_list.map(list => (
                <li className='custom-list-bullet text-lg text-white'>
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
