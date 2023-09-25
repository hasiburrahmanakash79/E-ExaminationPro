import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import {
  addUserAnswer,
  nextWrittenQuestion
} from '../../redux/features/WrittenQuestion/writtenQuestionSlice'
import useAuth from '../../Hooks/useAuth/useAuth'
import axios from 'axios'
const TextEditor = ({ questions }) => {
  // user info and post related
  const { user } = useAuth()
  // question related
  const dispatch = useDispatch()
  const { currentQuestionIndex, userAnswers } = useSelector(
    state => state.writtenQuestions
  )
  const question = questions[0].questions
  const currentQuestion = question[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === question.length - 1
  const { register, handleSubmit, reset } = useForm()
  const {
    _id,
    subject,
    batch,
    instructor_email,
    type,
    date,
    exam_id,
    subject_code
  } = questions[0]
  const onSubmit = data => {
    console.log(data)
    dispatch(
      addUserAnswer({
        questionId: currentQuestion?.id,
        question: currentQuestion?.question,
        ins_answer: currentQuestion?.answer,
        stu_answer: data?.answer
      })
    )
    if (currentQuestionIndex === question.length - 1) {
      allUserAnswers()
    } else {
      reset()
      dispatch(nextWrittenQuestion())
    }
  }
  console.log(userAnswers)
  const allUserAnswers = async () => {
    const userWrittenAnswers = {
      examID: _id,
      subjectName: subject,
      batch: batch,
      ins_email: instructor_email,
      stu_email: user?.email,
      stu_name: user?.displayName,
      date: date,
      exam_code: exam_id,
      sub_code: subject_code,
      examType: type,
      userAnswers
    }
    try {
      axios.post(
        'https://e-exam-pro-server.vercel.app/written-answers',
        userWrittenAnswers
      )
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='drop-shadow-md primary-bg p-3  md:px-7  mx-auto my-6 min-h-[40vh] rounded-md'
      >
        <p className='text-2xl text-center md:mb-4 '>
          Question {currentQuestion?.id} - {currentQuestion?.question}
        </p>

        <textarea
          {...register('answer')}
          id='answer'
          className='w-full min-h-[25vh] text-slate-700 shadow-md shadow-primary outline-none p-3 border rounded-lg'
        />

        <div className='mt-2'>
          {isLastQuestion ? (
            <button
              type='submit'
              className='px-6 py-2 rounded-md btn btn-primary'
            >
              Submit
            </button>
          ) : (
            <button
              type='submit'
              className='px-6 py-2 rounded-md btn btn-primary'
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default TextEditor
