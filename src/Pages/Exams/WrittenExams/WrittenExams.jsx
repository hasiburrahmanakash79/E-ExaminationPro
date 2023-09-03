import React from 'react'
import TextEditor from '../../../components/TextEditor/TextEditor'
import useWrittenQuestions from '../../../Hooks/useQuestions/useWrittenQuestions'
import DisclosureForWrittenExams from '../../../components/examComponents/QuesAccordion/DisclosureForWrittenExams'

const WrittenExams = () => {
  const [writtenQuestions, loading, refetch] =
    useWrittenQuestions('Mathematics')

  if (loading) {
    return null
  }
  return (
    <section className='container py-20 mx-auto '>
      <h2 className='mb-5 text-5xl text-center '>Short Questions</h2>

      <div className='grid-cols-5 gap-10 md:grid '>
        <div className='col-span-3'>
          {writtenQuestions?.map((sq, index) => (
            <div key={index}>
              {sq.questions.map(question => (
                <TextEditor key={question.id} question={question} />
              ))}
            </div>
          ))}
        </div>
        <div className='col-span-2 '>
          {/* <QuesAccordion shortQuestions={shortQuestions} /> */}
          <DisclosureForWrittenExams writtenQuestions={writtenQuestions} />
        </div>
      </div>
    </section>
  )
}

export default WrittenExams
