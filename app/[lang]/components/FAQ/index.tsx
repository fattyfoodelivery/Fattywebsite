"use client"
import { useEffect, useState } from 'react'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Accordion from '../Accordian'

type FAQItem = {
  id: string
  question: string
  answer: string
}

type FAQPage = {
  title: string
  questions: FAQItem[]
}

type FAQData = {
  faq: FAQPage
}

export default function FAQ({ lang }: { lang: Locale }) {
  const [faqData, setFaqData] = useState<FAQData | null>(null)
  const [currentId, setCurrentId] = useState<string>('1')

  useEffect(() => {
    const fetchData = async () => {
      const { page } = await getDictionary(lang)
      setFaqData(page)
    }
    fetchData()
  }, [lang])

  function toggleHandler(id: string) {
    if (currentId === id) {
      setCurrentId('')
    } else {
      setCurrentId(id)
    }
  }

  return (
    <section className='container mb-20 flex flex-col items-center'>
      <p className='mb-[52px] text-center text-3.5xl font-bold tracking-wider'>
        {faqData?.faq.title}
      </p>
      <div className='flex w-full lg:w-[896px] flex-col space-y-4'>
        {faqData?.faq.questions.map((data: FAQItem) => {
          return (
            <Accordion
              key={data.id}
              onClose={() => toggleHandler(data.id)}
              isOpen={currentId === data.id}
              title={data.question}
              summary={data.answer}
            />
          )
        })}
      </div>
    </section>
  )
}
