import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './TextEditor.css'
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
    dispatch(
      addUserAnswer({ questionId: currentQuestion?.id, answer: data?.answer })
    )
    reset()
    if (!isLastQuestion) {
      dispatch(nextWrittenQuestion())
    } else {
      allUserAnswers()
    }
  }
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
      question,
      userAnswers
    }
    try {
      axios.post('http://localhost:4000/written-answers', userWrittenAnswers)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='drop-shadow-lg primary-bg p-3  md:px-7 shadow-xl mx-auto my-6 min-h-[40vh]  rounded-md'
      >
        <p className='text-xl text-center md:mb-2 text-slate-100 '>
          Question {currentQuestion?.id} - {currentQuestion?.question}
        </p>

        <textarea
          {...register('answer')}
          id='answer'
          className='w-full min-h-[25vh] outline-none text-slate-100 p-3 bg-transparent border drop-shadow-lg shadow-lg rounded-lg'
        />

        <div className='mt-2'>
          {isLastQuestion ? (
            <button
              type='submit'
              className='px-6 py-2 text-white rounded-md primary-btn'
            >
              Submit
            </button>
          ) : (
            <button
              type='submit'
              className='px-6 py-2 text-white rounded-md primary-btn'
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
