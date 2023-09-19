import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './TextEditor.css'

import { useForm } from 'react-hook-form'
import { addUserAnswer } from '../../redux/features/ShortQuestion/writtenQuestionSlice'
const TextEditor = ({ question }) => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    //console.log(data)
    dispatch(addUserAnswer({ questionId: question.id, answer: data.answer }))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      key={question.id}
      className='primary-bg p-3  md:px-7 shadow-xl mx-auto my-6 min-h-[40vh]  rounded-md'
    >
      <p className='text-xl text-center md:mb-2 text-slate-100 '>
        Question {question?.id} - {question?.question}
      </p>

      <textarea
        {...register('answer')}
        id='answer'
        className='w-full min-h-[25vh] outline-none text-slate-100 p-3 bg-transparent border rounded-lg'
      />

      <div className='mt-2'>
        <button
          type='submit'
          className='px-6 py-2 text-white rounded-md primary-btn'
        >
          Next
        </button>
      </div>
    </form>
  )
}

export default TextEditor
