'use client'
import Image from 'next/image'
import GroupImg from '../img/contactGroup.jpg'
import Group1Img from '../img/contactGroup1.jpg'
import Group2Img from '../img/contactGroup2.jpg'
import Group3Img from '../img/contactGroup3.jpg'
import LocationIcon from '../img/location_ico.svg'
import EmailIcon from '../img/email_ico.svg'
import PhoneIcon from '../img/phone_ico.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { sendMessageApi } from '@/controller'
import DynamicMap from '../GoogleMap'
import { useState } from 'react'

type page = {
  contact: {
    description: string
    title: string
    lasio: string
    muse: string
    name: string
    name_input: string
    phone: string
    phone_input: string
    email: string
    email_input: string
    subject: string
    subject_input: string
    message: string
    message_input: string
    button: string
    sent:string
  }
}

export interface FormData {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Phone number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required')
})
export default function Contact({ page, data }: { page: page; data: any }) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await sendMessageApi(data)
      console.log(response)
      if (response.success) {
        setValue('name', '')
        setValue('phone', '')
        setValue('email', '')
        setValue('subject', '')
        setValue('message', '')
        setIsSuccess(true)
      }
    } catch (error) {
      console.error('Error during form submission:', error)
      // Handle errors as needed
    }
  }

  const locations = data?.locations?.map((location: any) => ({
    description: location.description,
    lat: parseFloat(location.lat),
    lng: parseFloat(location.lng)
  }))

  return (
    <section className='relative'>
      <div className='max-w-screen relative -z-20 mb-2 flex items-center justify-center'>
        <div className='absolute left-0 top-0 z-10 h-full w-full bg-black opacity-50' />
        <div className='relative object-contain md:h-[114px] sl:h-[157px] lg:h-[177px] md:w-[380px] xl:h-[244px] xl:w-[480px] '>
          <Image src={GroupImg} alt='group' fill className='flex-grow' />
        </div>
        <div className='relative object-contain md:h-[114px] sl:h-[157px] lg:h-[177px] md:w-[380px] xl:h-[244px] xl:w-[480px]'>
          <Image src={Group1Img} alt='group' fill className='flex-grow' />
        </div>
        <div className='relative object-contain md:h-[114px] sl:h-[157px] lg:h-[177px] md:w-[380px] xl:h-[244px] xl:w-[480px]'>
          <Image src={Group2Img} alt='group' fill className='flex-grow' />
        </div>
        <div className='relative object-contain md:h-[114px] sl:h-[157px] lg:h-[177px] md:w-[380px] xl:h-[244px] xl:w-[480px]'>
          <Image src={Group3Img} alt='group' fill className='flex-grow' />
        </div>
      </div>
      <div className='container absolute left-1/2 right-1/2 -translate-x-1/2 transform md:top-5 sl:top-10 lg:top-12 xl:top-[80px] '>
        <div className='mb-[52px] flex flex-col space-y-2 text-center lg:space-y-4'>
          <p className='text-sm font-light italic  text-primary md:text-base lg:text-lg'>
            {page?.contact.description}
          </p>
          <p className='text-[24px] font-semibold md:text-2xl lg:text-3.5xl md:font-bold md:leading-7 md:text-white lg:leading-10'>
            {page?.contact.title}
          </p>
        </div>
      </div>
      <div className='container my-[80px] flex flex-col items-center justify-center space-y-6 sl:flex-row sl:items-start sl:space-x-8 sl:space-y-0'>
        <div className='flex w-full flex-col space-y-8 md:w-fit'>
          <div className='relative rounded-2xl'>
            <Image
              src={data?.img}
              alt='Address'
              width='0'
              height='0'
              sizes='100vw'
              className='h-auto w-full'
            />
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:justify-between md:gap-x-8 md:gap-y-4'>
            {data &&
              data?.addresses?.map((address: any, i: number) => (
                <div className='flex flex-col space-y-4 col-span-1' key={i}>
                  <p className='mb-1 text-lg md:mb-2 md:text-xl xl:text-2xl'>
                    {address.address_title}
                  </p>
                  <div className='flex items-center space-x-4'>
                    <Image
                      src={LocationIcon}
                      width={40}
                      height={40}
                      alt='location'
                    />
                    <p className='text-2xs md:text-xs font-medium lg:text-sm xl:text-base'>
                      {address.address}
                    </p>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <Image
                      src={PhoneIcon}
                      width={40}
                      height={40}
                      alt='location'
                    />
                    <p className='text-2xs md:text-xs font-medium lg:text-sm xl:text-base'>
                      {address.phone}
                    </p>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <Image
                      src={EmailIcon}
                      width={40}
                      height={40}
                      alt='location'
                    />
                    <p className='text-2xs md:text-xs font-medium lg:text-sm xl:text-base'>
                      {address.mail}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex w-full flex-col space-y-4 sl:w-1/2'
          onClick={() => setIsSuccess(false)}
        >
          {isSuccess && (
            <p className='text-2xs text-green-500 md:text-xs'>
              {page?.contact.sent}
            </p>
          )}
          <div className='flex flex-col space-y-2'>
            <p className='text-xs lg:text-sm xl:text-base'>
              {page?.contact.name}
              <span className='text-required'>*</span>
            </p>

            <input
              type='text'
              {...register('name')}
              className={`${
                errors?.name ? 'border border-red-500' : ''
              } rounded-md bg-tertiary p-3 text-xs font-medium tracking-wide text-light-secondary md:text-sm lg:p-4 lg:text-base`}
              placeholder={page?.contact.name_input}
            />
            {errors?.name && (
              <div className='text-2xs text-red-500 md:text-xs'>
                {errors?.name?.message}
              </div>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <p className='text-xs lg:text-sm xl:text-base'>
              {page?.contact.phone}
              <span className='text-required'>*</span>
            </p>

            <input
              type='text'
              {...register('phone')}
              className={`${
                errors?.phone ? 'border border-red-500' : ''
              } rounded-md bg-tertiary p-3 text-xs font-medium tracking-wide text-light-secondary md:text-sm lg:p-4 lg:text-base`}
              placeholder={page?.contact.phone_input}
            />
            {errors?.phone && (
              <div className='text-2xs text-red-500 md:text-xs'>
                {errors?.phone?.message}
              </div>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <p className='text-xs lg:text-sm xl:text-base'>
              {page?.contact.email}
              <span className='text-required'>*</span>
            </p>

            <input
              type='text'
              {...register('email')}
              className={`${
                errors?.email ? 'border border-red-500' : ''
              } rounded-md bg-tertiary p-3 text-xs font-medium tracking-wide text-light-secondary md:text-sm lg:p-4 lg:text-base`}
              placeholder={page?.contact.email_input}
            />
            {errors?.email && (
              <div className='text-2xs text-red-500 md:text-xs'>
                {errors?.email?.message}
              </div>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <p className='text-xs lg:text-sm xl:text-base'>
              {page?.contact.subject}
              <span className='text-required'>*</span>
            </p>

            <input
              type='text'
              {...register('subject')}
              className={`${
                errors?.subject ? 'border border-red-500' : ''
              } rounded-md bg-tertiary p-3 text-xs font-medium tracking-wide text-light-secondary md:text-sm lg:p-4 lg:text-base`}
              placeholder={page?.contact.subject_input}
            />
            {errors?.subject && (
              <div className='text-2xs text-red-500 md:text-xs'>
                {errors?.subject?.message}
              </div>
            )}
          </div>
          <div className='flex flex-col space-y-2'>
            <p className='text-xs lg:text-sm xl:text-base'>
              {page?.contact.message}
              <span className='text-required'>*</span>
            </p>

            <textarea
              {...register('message')}
              className={`${
                errors?.message ? 'border border-red-500' : ''
              } h-[120px] rounded-md bg-tertiary p-3 text-xs font-medium tracking-wide text-light-secondary md:text-sm lg:p-4 lg:text-base`}
              placeholder={page?.contact.message_input}
            />
            {errors?.message && (
              <div className='text-2xs text-red-500 md:text-xs'>
                {errors?.message?.message}
              </div>
            )}
          </div>
          <button
            type='submit'
            className='mt-4 self-end rounded-lg bg-primary px-4 py-2 text-xs text-white md:text-sm lg:px-6 lg:py-4 lg:text-base'
          >
            {page?.contact.button}
          </button>
        </form>
      </div>
      {data.locations && (
        <div className='container my-20'>
          <DynamicMap
            locations={locations}
            apiKey='AIzaSyAIJoMRTOI9Ux3NNdB6KZ-QPX6SzspXcTg'
          />
        </div>
      )}
    </section>
  )
}
