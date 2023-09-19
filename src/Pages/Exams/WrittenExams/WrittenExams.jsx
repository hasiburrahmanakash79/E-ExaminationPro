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
    <section className='container w-[calc(100%-8px)] mx-auto'>
      <h2 className='mb-2 text-2xl text-center text-orange-600 '>
        Written Exam
      </h2>

      <div className='grid-cols-5 gap-10 md:grid text-center md:text-left'>
        <div className='col-span-3 gap:2'>
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
