import Image from 'next/image'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import GroupImg from '../img/contactGroup.jpg'
import Group1Img from '../img/contactGroup1.jpg'
import Group2Img from '../img/contactGroup2.jpg'
import Group3Img from '../img/contactGroup3.jpg'
import FormImg from '../img/contact form_img.jpg'
import LocationIcon from '../img/location_ico.svg'
import EmailIcon from '../img/email_ico.svg'
import PhoneIcon from '../img/phone_ico.svg'

export default async function Contact({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang)
  return (
    <section className='relative'>
      <div className='max-w-screen relative -z-20 flex items-center justify-center mb-2'>
        <div className='absolute left-0 top-0 z-10 h-full w-full bg-black opacity-50' />
        <div className='relative md:w-[380px] md:h-[144px] xl:h-[244px] xl:w-[480px] object-contain '>
          <Image src={GroupImg} alt='group' fill className='flex-grow' />
        </div>
        <div className='relative md:w-[380px] md:h-[144px] xl:h-[244px] xl:w-[480px] object-contain'>
          <Image src={Group1Img} alt='group' fill className='flex-grow' />
        </div>
        <div className='relative md:w-[380px] md:h-[144px] xl:h-[244px] xl:w-[480px] object-contain'>
          <Image src={Group2Img} alt='group' fill className='flex-grow' />
        </div>
        <div className='relative md:w-[380px] md:h-[144px] xl:h-[244px] xl:w-[480px] object-contain'>
          <Image src={Group3Img} alt='group' fill className='flex-grow' />
        </div>
      </div>
      <div className='container absolute md:top-10 lg:top-[80px] left-1/2 right-1/2 transform -translate-x-1/2 '>
        <div className='flex flex-col space-y-2 md:space-y-4 text-center mb-[52px]'>
          <p className='text-sm md:text-base lg:text-lg  italic text-primary font-light'>{page.contact.description}</p>
          <p className='text-[24px] font-semibold md:text-3.5xl md:font-bold md:text-white md:leading-7 lg:leading-10'>
            {page.contact.title}
          </p>
        </div>
      </div>
      <div className="container flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:space-x-8 my-[80px] items-center justify-center">
        <div className="flex flex-col space-y-8">
          <div className="relative w-full h-[120px] md:w-[664px] md:h-[346px] rounded-2xl">
            <Image src={FormImg} fill alt='Address' />
          </div>
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-8 md:justify-between">
          <div className="flex flex-col space-y-4">
            <p className="text-lg md:text-xl xl:text-2xl mb-1 md:mb-2">{page.contact.lasio}</p>
            <div className="flex items-center space-x-4">
              <Image src={LocationIcon} width={40} height={40} alt='location'/>
              <p className="text-xs lg:text-sm xl:text-base font-medium">Lashio, Shan State, Myanmar</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image src={PhoneIcon} width={40} height={40} alt='location'/>
              <p className="text-xs lg:text-sm xl:text-base font-medium">09 251 840 901</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image src={EmailIcon} width={40} height={40} alt='location'/>
              <p className="text-xs lg:text-sm xl:text-base font-medium">fattyfooddelivery@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-lg md:text-xl xl:text-2xl mb-1 md:mb-2">{page.contact.muse}</p>
            <div className="flex items-center space-x-4">
              <Image src={LocationIcon} width={40} height={40} alt='location'/>
              <p className="text-xs lg:text-sm xl:text-base font-medium">Muse, Shan State, Myanmar</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image src={PhoneIcon} width={40} height={40} alt='location'/>
              <p className="text-xs lg:text-sm xl:text-base font-medium">09 251 840 901</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image src={EmailIcon} width={40} height={40} alt='location'/>
              <p className="text-xs lg:text-sm xl:text-base font-medium">fattyfooddelivery@gmail.com</p>
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-col space-y-4 w-full lg:w-1/2">
          <div className="flex flex-col space-y-2">
            <p className="text-xs lg:text-sm xl:text-base">{page.contact.name}<span className='text-required'>*</span></p>
            <input type="text" className='p-3 text-xs md:text-sm lg:text-base lg:p-4 rounded-md bg-tertiary font-medium text-light-secondary tracking-wide' placeholder={page.contact.name_input} />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-xs lg:text-sm xl:text-base">{page.contact.phone}<span className='text-required'>*</span></p>
            <input type="text" className='p-3 text-xs md:text-sm lg:text-base lg:p-4 rounded-md bg-tertiary font-medium text-light-secondary tracking-wide' placeholder={'09 123 456 789'} />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-xs lg:text-sm xl:text-base">{page.contact.email}<span className='text-required'>*</span></p>
            <input type="text" className='p-3 text-xs md:text-sm lg:text-base lg:p-4 rounded-md bg-tertiary font-medium text-light-secondary tracking-wide' placeholder={'susu@gmail.com'} />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-xs lg:text-sm xl:text-base">{page.contact.subject}<span className='text-required'>*</span></p>
            <input type="text" className='p-3 text-xs md:text-sm lg:text-base lg:p-4 rounded-md bg-tertiary font-medium text-light-secondary tracking-wide' placeholder={page.contact.subject_input} />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-xs lg:text-sm xl:text-base">{page.contact.message}<span className='text-required'>*</span></p>
            <textarea className='p-3 text-xs md:text-sm lg:text-base lg:p-4 h-[120px] rounded-md bg-tertiary font-medium text-light-secondary tracking-wide' placeholder={page.contact.message_input} />
          </div>
          <div className="mt-4 bg-primary rounded-lg text-xs md:text-sm lg:text-base py-2 px-4 lg:py-4 lg:px-6 text-white self-end">{page.contact.button}</div>
        </div>
      </div>
      <div className="my-20 container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d550.0832348844117!2d96.10232810935437!3d21.953605363471933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6d73cb94dda5%3A0x9b2bd8a7aa3149ef!2sFatty!5e0!3m2!1sen!2smm!4v1705857859308!5m2!1sen!2smm"  loading="lazy" className='w-full h-[458px] rounded-lg'></iframe>
      </div>
    </section>
  )
}
