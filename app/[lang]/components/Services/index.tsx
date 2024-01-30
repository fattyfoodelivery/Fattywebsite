import React from 'react'
import Image from 'next/image'
import ServiceBG from '../img/services_bg.png'
import OrderIcon from '../img/order.svg'
import ParcelIcon from '../img/parcel.svg'
import WhyChooseUsImg from '../img/whyChooseUs.png'

export default async function Services({ page,data }:{page:any,data:any}) {

  return (
    <section className='h-fit w-screen py-20 relative'>
      <div className='container flex flex-col items-center justify-center'>
        <div className='flex flex-col space-y-4 text-center'>
          <p className='text-base md:text-lg italic text-primary'>{page.services.title}</p>
          <p className='text-[24px] font-semibold md:text-3.5xl md:font-bold leading-10'>
            {page.services.description}
          </p>
        </div>
        <div className='w-full flex flex-col sl:flex-row items-center justify-center -space-y-20 md:space-y-10 sl:space-y-0 sl:space-x-4 lg:space-x-8 md:pb-[79px] md:pt-[50.5px]'>
          <div className='relative scale-50 md:scale-100 h-[200px] w-[664px] md:w-[464px] md:h-[185px] lg:w-[544px] xl:h-[200px] xl:w-[664px] overflow-hidden rounded-[10px] bg-soft-primary'>
            <Image
              src={ServiceBG}
              alt='service_bg'
              width={287.92}
              height={201.5}
              className='absolute right-0 '
            />
            <div className='z-10 flex items-center justify-center space-x-[100px] md:space-x-[50px] lg:space-x-[60px] xl:space-x-[100px]'>
              <div className='flex flex-col space-y-6 pl-14 md:pl-6 xl:pl-14 z-20'>
                <p className='text-lg md:text-sm xl:text-lg italic text-hard-primary'>
                  {page.services.food_description}
                </p>
                <p className='text-3.5xl md:text-xl sl:text-2xl lg:text-3xl xl:text-3.5xl font-bold text-primary'>
                  {page.services.food_title}
                </p>
              </div>
              <Image
                src={OrderIcon}
                alt='order icon'
                width={195}
                height={172}
                className='z-10 py-[14px] scale-100 md:scale-75 xl:scale-100'
              />
            </div>
          </div>
          <div className='relative scale-50 md:scale-100 h-[200px] w-[664px] md:w-[464px] md:h-[185px] lg:w-[544px] xl:h-[200px] xl:w-[664px] overflow-hidden rounded-[10px] bg-soft-primary'>
            <Image
              src={ServiceBG}
              alt='service_bg'
              width={287.92}
              height={201.5}
              className='absolute right-0'
            />
            <div className='z-10 flex items-center justify-center space-x-[100px] md:space-x-[50px] lg:space-x-[100px]'>
              <div className='flex flex-col space-y-6 pl-14 md:pl-6 xl:pl-14 z-20'>
                <p className='text-lg md:text-sm xl:text-lg italic text-hard-primary'>
                  {page.services.parcel_description}
                </p>
                <p className='text-3.5xl md:text-xl sl:text-2xl lg:text-3xl xl:text-3.5xl font-bold text-primary'>
                  {page.services.parcel_title}
                </p>
              </div>
              <Image
                src={ParcelIcon}
                alt='parcel icon'
                width={192.667}
                height={170}
                className='z-10 py-[14px] scale-100 md:scale-75 xl:scale-100'
              />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row items-center lg:space-x-[79px] justify-center'>
          <div className='flex flex-col space-y-6 md:space-y-8 xl:space-y-[52px] w-fit md:w-[574px]'>
            <div className='flex flex-col space-y-1 md:space-y-2 lg:space-y-4 text-start'>
              <p className='text-2xs xl:text-lg italic text-primary'>
                {page.services.choose_title}
              </p>
              <p className='text-lg md:text-xl xl:text-3.5xl text font-bold leading-10'>
                {page.services.choose_question}
              </p>
            </div>
            <ul className="flex flex-col space-y-[18px]">
              {data?.map((list:string,i:number)=><li key={i} className="custom-list-bullet text-xs md:text-sm xl:text-xl">{list}</li>)}
            </ul>
          </div>
          <div className='relative h-[299px] w-[299px] md:h-[339px] md:w-[339px] sl:w-[449px] sl:h-[449px] xl:h-[666px] xl:w-[699px] flex-shrink-0 object-contain mt-8 md:mt-0'>
            <Image src={WhyChooseUsImg} alt='why choose us' fill />
          </div>
        </div>
      </div>
    </section>
  )
}
