'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ENIcon from './en.svg'
import MMIcon from './mm.svg'
import ZHIcon from './zh.svg'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <ul className='flex gap-x-3'>
          <li>
            <Link
              href={redirectedPathName('en')}
            >
              <div className='relative w-[60px] h-10 '>
                <Image src={ENIcon} fill alt='en' />
              </div>
            </Link>
          </li>
          <li>
          <Link
              href={redirectedPathName('zh')}
            >
              <div className='relative w-[60px] h-10 '>
                <Image src={ZHIcon} fill alt='zh' />
              </div>
            </Link>
          </li>
    </ul>
  )
}
