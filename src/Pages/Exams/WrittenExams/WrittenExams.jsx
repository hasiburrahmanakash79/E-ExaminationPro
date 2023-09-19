import React from 'react'
import TextEditor from '../../../components/TextEditor/TextEditor'
import useWrittenQuestions from '../../../Hooks/useQuestions/useWrittenQuestions'
import DisclosureForWrittenExams from '../../../components/examComponents/QuesAccordion/DisclosureForWrittenExams'
import Loading from '../../../Components/Loading/Loading'
const WrittenExams = () => {
  const [writtenQuestions, loading, refetch] =
    useWrittenQuestions('Mathematics')

  if (loading) {
    return <Loading />
  }
  console.log(writtenQuestions)
  return (
    <section className='container w-[calc(100%-8px)] mx-auto'>
      <h2 className='mb-2 text-2xl text-center text-orange-600 '>
        Written Exam
      </h2>

      <div className='grid-cols-5 gap-10 text-center md:grid md:text-left'>
        <div className='col-span-3 gap:2'>
          <TextEditor questions={writtenQuestions} />
        </div>
        <div className='col-span-2 '>
          <DisclosureForWrittenExams writtenQuestions={writtenQuestions} />
        </div>
      </div>
    </section>
  )
}

export default WrittenExams
