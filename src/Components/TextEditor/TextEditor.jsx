import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './TextEditor.css'

import { useForm } from 'react-hook-form'
import { addUserAnswer } from '../../redux/features/shortQuestion/shortQuestionSlice'
const TextEditor = ({ question }) => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    console.log(data)
    dispatch(addUserAnswer({ questionId: question.id, answer: data.answer }))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      key={question.id}
      className='primary-bg px-3 md:px-7 shadow-xl mx-auto my-6 min-h-[40vh]  rounded-md'
    >
      <div className='p-4 text-2xl text-center text-white '>
        Question: {question?.question}
        Question: {question?.id}
      </div>

      <textarea
        {...register('answer')}
        id='answer'
        className='w-full min-h-[30vh] text-black bg-white rounded-md'
      />

      <div className='mt-2'>
        <button
          type='submit'
          className='px-6 py-2 text-lg font-medium tracking-wide text-white bg-orange-600 rounded-md'
        >
          Ans Submit
        </button>
      </div>
    </form>
  )
}

export default TextEditor
