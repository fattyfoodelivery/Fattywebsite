import React from 'react'
import Image from 'next/image'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import ServiceBG from '../img/services_bg.png'
import OrderIcon from '../img/order.svg'
import ParcelIcon from '../img/parcel.svg'
import WhyChooseUsImg from '../img/whyChooseUs.png'

export default async function Services({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang)

  return (
    <section className='h-fit w-screen py-20'>
      <div className='container flex flex-col'>
        <div className='flex flex-col space-y-4 text-center'>
          <p className='text-lg italic text-primary'>{page.services.title}</p>
          <p className='text-[32px] font-bold leading-10'>
            {page.services.description}
          </p>
        </div>
        <div className='flex space-x-8 pb-[79px] pt-[50.5px]'>
          <div className='relative h-[200px] w-[664px] overflow-hidden rounded-[10px] bg-soft-primary'>
            <Image
              src={ServiceBG}
              alt='service_bg'
              width={287.92}
              height={201.5}
              className='absolute right-0 '
            />
            <div className='z-10 flex items-center justify-center space-x-[100px]'>
              <div className='flex flex-col space-y-6'>
                <p className='text-lg italic text-hard-primary'>
                  {page.services.food_description}
                </p>
                <p className='text-[32px] font-bold text-primary'>
                  {page.services.food_title}
                </p>
              </div>
              <Image
                src={OrderIcon}
                alt='order icon'
                width={195}
                height={172}
                className='z-10 py-[14px]'
              />
            </div>
          </div>
          <div className='relative h-[200px] w-[664px] overflow-hidden rounded-[10px] bg-soft-primary'>
            <Image
              src={ServiceBG}
              alt='service_bg'
              width={287.92}
              height={201.5}
              className='absolute right-0'
            />
            <div className='z-10 flex items-center justify-center space-x-[100px]'>
              <div className='flex flex-col space-y-6'>
                <p className='text-lg italic text-hard-primary'>
                  {page.services.parcel_description}
                </p>
                <p className='text-[32px] font-bold text-primary'>
                  {page.services.parcel_title}
                </p>
              </div>
              <Image
                src={ParcelIcon}
                alt='parcel icon'
                width={192.667}
                height={170}
                className='z-10 py-[14px]'
              />
            </div>
          </div>
        </div>
        <div className='flex items-center space-x-[79px]'>
          <div className='flex flex-col space-y-[52px] w-[574px]'>
            <div className='flex flex-col space-y-4 text-start'>
              <p className='text-lg italic text-primary'>
                {page.services.choose_title}
              </p>
              <p className='text-[32px] font-bold leading-10'>
                {page.services.choose_question}
              </p>
            </div>
            <ul className="flex flex-col space-y-[18px]">
              {page.services.choose_list.map(list=><li key={list} className="custom-list-bullet text-xl">{list}</li>)}
            </ul>
          </div>
          <div className='relative h-[666px] w-[699px] flex-shrink-0 object-contain'>
            <Image src={WhyChooseUsImg} alt='why choose us' fill />
          </div>
        </div>
      </div>
    </section>
  )
}
