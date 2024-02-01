import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ENIcon from './en.svg'
import MMIcon from './mm.svg'
import ZHIcon from './zh.svg'
import Select from './select'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const locale = pathName.split('/')[1]

  return (
    <ul className='z-10 flex gap-x-4'>
      <li>
        <Link href={redirectedPathName('mm')}>
          <div className='relative h-7 w-[40px] lg:h-10 lg:w-[60px] '>
            <Image className='object-cover' src={MMIcon} fill alt='mm' />
            {locale === 'mm' && <Select/>}
          </div>
        </Link>
      </li>
      <li className='h-7 lg:h-10 w-[1px] bg-light-secondary'/>
      <li>
        <Link href={redirectedPathName('en')}>
          <div className='relative h-7 w-[40px] lg:h-10 lg:w-[60px] '>
            <Image className='object-cover' src={ENIcon} fill alt='en' />
            {locale === 'en' && <Select/>}
          </div>
        </Link>
      </li>
      <li className='h-7 lg:h-10 w-[1px] bg-light-secondary'/>
      <li>
        <Link href={redirectedPathName('ch')}>
          <div className='relative h-7 w-[40px] lg:h-10 lg:w-[60px] '>
            <Image className='object-cover' src={ZHIcon} fill alt='ch' />
            {locale === 'ch' && <Select/>}
          </div>
        </Link>
      </li>
    </ul>
  )
}
