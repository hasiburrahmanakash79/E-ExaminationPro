import React from 'react'
// import QuesAccordion from '../../../components/QuesAccordion/QuesAccordion'
import useShortQuestions from '../../../Hooks/useShortQuestions/useShortQuestions'
import TextEditor from '../../../components/TextEditor/TextEditor'
import DisclosureForWrittenExams from '../../../components/QuesAccordion/DisclosureForWrittenExams'
// import { useSelector } from 'react-redux'

const ShortQ = () => {
  const [shortQuestions, loading, refetch] = useShortQuestions('Mathematics')

  if (loading) {
    return null
  }
  return (
    <section className='container py-20 mx-auto '>
      <h2 className='mb-5 text-5xl text-center '>Short Questions</h2>

      <div className='grid-cols-5 gap-10 md:grid '>
        <div className='col-span-3'>
          {shortQuestions?.map((sq, index) => (
            <div key={index}>
              {sq.questions.map(question => (
                <TextEditor
                  key={question.id}
                  // userAnswers={userAnswers}
                  question={question}
                />
              ))}
            </div>
          ))}
        </div>
        <div className='col-span-2 '>
          {/* <QuesAccordion shortQuestions={shortQuestions} /> */}
          <DisclosureForWrittenExams
            shortQuestions={shortQuestions}
            // userAnswers={userAnswers}
          />
        </div>
      </div>
    </section>
  )
}

export default ShortQ
