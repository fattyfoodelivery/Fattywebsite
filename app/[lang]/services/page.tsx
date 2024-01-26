import { Locale } from '@/i18n.config'
import Header from '../components/Header'
import SimpleProcess from '../components/SimpleProcess'
import GetMore from '../components/GetMore'
import Subscribe from '../components/Subscribe'
import { getDictionary } from '@/lib/dictionary'
import { getFetchData } from '@/controller'

export default async function Services({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const  {page}  = await getDictionary(lang);
  const  data  = await getFetchData(lang);

  return (
    <section className=''>
      <Header lang={lang} location='services' />
      <SimpleProcess lang={lang}/>
      <GetMore page={page} data={data.app_urls}/>
      <Subscribe lang={lang}/>
    </section>
  )
}
