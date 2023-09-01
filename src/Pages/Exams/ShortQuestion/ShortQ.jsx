import React from 'react'
import useShortQuestions from '../../../Hooks/useQuestions/useShortQuestions'
import TextEditor from '../../../components/TextEditor/TextEditor'
import ShortQDisclosureForWrittenExams from '../../../components/QuesAccordion/ShortQDisclosureForWrittenExams'
import { useDispatch, useSelector } from 'react-redux'
// import { useForm } from 'react-hook-form'
import { addUserAnswer } from '../../../redux/features/shortQuestion/shortQuestionSlice'
import { useState } from 'react'

const ShortQ = () => {
  const [shortQuestions, loading, refetch] = useShortQuestions('Mathematics')
  // const [questionId, setQuestionId] = useState({})
  const dispatch = useDispatch()

  const handleUserAnswer = (questionId, data) => {
    console.log(data)
    dispatch(addUserAnswer({ questionId: questionId, answer: data.answer }))
  }
  // const { register, handleSubmit, reset } = useForm()
  // console.log(questionId)
  // const onSubmit = data => {
  //   console.log(data)
  //   dispatch(addUserAnswer({ questionId: questionId, answer: data.answer }))
  // }
  const { userAnswers } = useSelector(state => state.shortQuestions)

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
                  // setQuestionId={() => setQuestionId(question.id)}
                  key={question.id}
                  question={question}
                  onSubmit={handleUserAnswer}
                  // handleSubmit={handleSubmit}
                  // register={register}
                  // onSubmit={onSubmit}
                  // reset={reset}
                />
              ))}
            </div>
          ))}
        </div>
        <div className='col-span-2 '>
          <ShortQDisclosureForWrittenExams
            shortQuestions={shortQuestions}
            userAnswers={userAnswers}
          />
        </div>
      </div>
    </section>
  )
}

export default ShortQ
