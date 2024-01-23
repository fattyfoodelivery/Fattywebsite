import { Locale } from '@/i18n.config'
import Header from '../components/Header'
import SimpleProcess from '../components/SimpleProcess'
import GetMore from '../components/GetMore'
import Subscribe from '../components/Subscribe'

export default async function Services({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  return (
    <section className=''>
      <Header lang={lang} location='services' />
      <SimpleProcess lang={lang}/>
      <GetMore lang={lang}/>
      <Subscribe lang={lang}/>
    </section>
  )
}
