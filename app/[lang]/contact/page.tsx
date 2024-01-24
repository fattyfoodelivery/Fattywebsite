import { Locale } from '@/i18n.config'
import Header from '../components/Header'
import Contact from '../components/ContactUs'
import FAQ from '../components/FAQ'

export default async function ContactUs({
  params: { lang }
}: {
  params: { lang: Locale }
}) {

  return (
    <section className=''>
      <Header lang={lang} location='contact' />
      <Contact lang={lang}/>
      <FAQ lang={lang}/>
    </section>
  )
}
