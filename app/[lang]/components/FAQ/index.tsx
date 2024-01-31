"use client"
import { useState } from 'react'
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

export default function FAQ({ page,data }: { page:FAQData,data:any }) {
  const [currentId, setCurrentId] = useState<string>('1')


  function toggleHandler(id: string) {
    if (currentId === id) {
      setCurrentId('')
    } else {
      setCurrentId(id)
    }
  }

  return (
    <section id='faq' className='container mb-20 flex flex-col items-center'>
      <p className='mb-[52px] text-center text-lg md:text-2xl lg:text-3.5xl font-bold tracking-wider'>
        {page?.faq.title}
      </p>
      <div className='flex w-full lg:w-[896px] flex-col space-y-4'>
        {data?.map((data: FAQItem) => {
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
