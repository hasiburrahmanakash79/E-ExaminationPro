import React, { useState } from 'react'
import QuesAccordion from '../../../components/QuesAccordion/QuesAccordion'
import TextEditor from '../../../Components/TextEditor/TextEditor'
import useShortQuestions from '../../../Hooks/useShortQuestions/useShortQuestions'

const ShortQ = () => {
  const [shortQuestions, loading, refetch] = useShortQuestions()
  const [questionIndex, setQuestionIndex] = useState(0)
  if (loading) {
    return null
  }
  console.log(shortQuestions[0])

  return (
    <section className='py-20'>
      <h2 className='text-2xl text-center col-span-full'>Short Questions</h2>
      <div className='grid grid-cols-5 '>
        <div className='col-span-3'>
          {shortQuestions?.map(sq => (
            <div key={sq._id} className='mb-8'>
              {sq.questions?.map((shortQs, index) => (
                <TextEditor key={index} shortQs={shortQs} />
              ))}
            </div>
          ))}
        </div>
        <div className='col-span-2 '>
          <QuesAccordion shortQuestions={shortQuestions} />
        </div>
      </div>
    </section>
  )
}

export default ShortQ
