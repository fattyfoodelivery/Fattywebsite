import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { getFetchData } from '@/controller'
import Header from '../components/Header'
import Contact from '../components/ContactUs'
import FAQ from '../components/FAQ'

export default async function ContactUs({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const  {page}  = await getDictionary(lang);
  const  data  = await getFetchData(lang);
  return (
    <section className=''>
      <Header lang={lang} location='contact' />
      <Contact page={page} data={{img:data.contact_image,addresses:data.addresses,locations:data.locations}}/>
      <FAQ page={page} data={data.faq}/>
    </section>
  )
}
