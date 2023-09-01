import React from 'react'
import { useSelector } from 'react-redux'
import useLongQuestions from '../../../Hooks/useQuestions/useLongQuestions'

const LongQuestion = () => {
  const [longQuestions, loading, refetch] = useLongQuestions('History')
  const { userAnswers } = useSelector(state => state.longQuestions)
  if (loading) {
    return null
  }
  return (
    <section className='container py-20 mx-auto '>
      <h2 className='mb-5 text-5xl text-center '>Long Questions</h2>

      <div className='grid-cols-5 gap-10 md:grid '>
        <div className='col-span-3'>
          {longQuestions?.map((sq, index) => (
            <div key={index}>
              {sq.questions.map(question => (
                <TextEditor key={question.id} question={question} />
              ))}
            </div>
          ))}
        </div>
        <div className='col-span-2 '>
          <LongQDisclosureForWrittenExams
            longQuestions={longQuestions}
            userAnswers={userAnswers}
          />
        </div>
      </div>
    </section>
  )
}

export default LongQuestion
