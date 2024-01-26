'use client'
import { useEffect, useState } from 'react'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import WavesBG from '../img/waves.png'
import MarketingIcon from '../img/email-marketing.svg'
import { subscribeApi } from '@/controller'

type ProcessItem = {
  title: string
  description: string
  order_title: string
  order_list: string[]
  parcel_title: string
  parcel_list: string[]
  order_now: string
  get_more: string
  steps: string[]
  button: string
  mail_title: string
  mail_description: string
  email: string
  subscribe: string
}

type ProcessData = {
  process: ProcessItem
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required')
})

export default function Subscribe({ lang }: { lang: Locale }) {
  const [pageData, setPageData] = useState<ProcessData | null>(null)
  const [isSuccess,setIsSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })
  useEffect(() => {
    const fetchData = async () => {
      const { page } = await getDictionary(lang)
      setPageData(page)
    }
    fetchData()
  }, [lang])

  const onSubmit = async (data: { email: string }) => {
    try {
      const response = await subscribeApi(data)
      console.log(response) // handle the response as needed
      if(response.success){
        setValue('email','')
        setIsSuccess(true);
      }
    } catch (error) {
      console.error('Error during subscription:', error)
      // handle errors as needed
    }
  }

  return (
    <section className='pb-20'>
      <div className='container relative flex items-center'>
        <div className='relative z-10 h-fit w-[100vw] rounded-[10px] bg-primary lg:h-[228px] xl:w-[1360px]'>
          <div className='absolute left-0 top-0 h-full w-full'>
            <div className='relative h-full w-full'>
              <Image src={WavesBG} alt='waves bg' fill />
            </div>
          </div>
          <div className='md:spcae-y-0 z-20 flex flex-col items-center justify-between space-y-4 px-2 py-6 md:flex-row md:px-8 md:py-12 lg:px-[84px] lg:py-16'>
            <div className='flex items-center justify-center space-x-6 md:space-x-[30px]'>
              <div className='relative h-[80px] w-[80px] md:h-[100px] md:w-[100px]'>
                <Image src={MarketingIcon} alt='marketing icon' fill />
              </div>
              <div className=' flex flex-col space-y-4 text-start'>
                <p className='text-xs font-light italic text-light-primary-1 md:text-base lg:text-lg'>
                  {pageData?.process.mail_title}
                </p>
                <p className='text-lg font-bold leading-7 text-white md:text-2xl md:leading-10 lg:text-3.5xl'>
                  {pageData?.process.mail_description}
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='z-20'>
              <div className='relative  flex items-center'>
                <input
                  type='text'
                  {...register('email')}
                  placeholder={pageData?.process.email}
                  className={`${
                    errors?.email ? 'border-2 border-red-700' : ''
                  } w-[158px] rounded-[32px] bg-white px-6 py-2 text-xs italic outline-none md:w-[258px] md:py-4 md:text-sm lg:w-[458px] lg:py-5 lg:text-base`}
                />
                <button
                  type='submit'
                  className='z-10 -ml-[30px] w-fit rounded-[32px] bg-secondary px-4 py-2 text-xs text-primary md:-ml-[60px] md:py-4 md:text-sm lg:-ml-[130px] lg:w-[134.22px] lg:px-7 lg:py-5 lg:text-base'
                >
                  {pageData?.process.subscribe}
                </button>
              </div>
              {errors?.email && (
                <div className='text-2xs md:text-xs text-rose-950 text-center'>
                  {errors?.email?.message}
                </div>
              )}
               {isSuccess && <p className="text-2xs md:text-xs text-green-500 text-center">Successfull sent!</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
