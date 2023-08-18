import React, { useState } from 'react'
import QuesAccordion from '../../../components/QuesAccordion/QuesAccordion'
import TextEditor from '../../../Components/TextEditor/TextEditor'
import useShortQuestions from '../../../Hooks/useShortQuestions/useShortQuestions'

const ShortQ = () => {

  const [shortQuestions, loading, refetch] = useShortQuestions('English_Grammar') //todo
  // const [questionIndex, setQuestionIndex] = useState(0)
  if (loading) {
    return null
  }
  console.log(shortQuestions)

  return (
    <section className='py-20 mx-auto container '>
      <h2 className='text-5xl text-center mb-5 '>Short Questions</h2>


      <div className='md:grid  gap-10 grid-cols-5 '>
        <div className='col-span-3'>
          {shortQuestions?.map(sq => (
            <div key={sq._id} className='  mb-8'>
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
