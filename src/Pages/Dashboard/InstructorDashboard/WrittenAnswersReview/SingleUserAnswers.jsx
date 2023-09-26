import React from 'react'
import { useParams } from 'react-router-dom'
import useWrittenReviews from '../../../../Hooks/useWrittenReviews/useWrittenReviews'
import { useForm } from 'react-hook-form'
import useAuth from '../../../../Hooks/useAuth/useAuth'
import axios from 'axios'
import Swal from 'sweetalert2'
import Loading from '../../../../components/Loading/Loading'

const SingleUserAnswers = () => {
  const { id } = useParams()
  const { user } = useAuth()
  const [writtenAnswers, loading, refetch] = useWrittenReviews()
  const userAnswers = writtenAnswers.find(answers => answers._id === id)
  const { register, handleSubmit, reset } = useForm()
  if (loading) {
    return <Loading />
  }
  const {
    examID,
    ins_email,
    stu_name,
    stu_email,
    sub_code,
    userAnswers: userWrittenAnswers,
    subjectName,
    examType,
    date,
    exam_code
  } = userAnswers
  console.log(userAnswers)
  const onSubmit = async data => {
    const userResult = {
      examID,
      subjectName,
      ins_email,
      stu_email,
      stu_image: user?.photoURL,
      stu_name: user?.displayName,
      date,
      exam_code,
      subject: subjectName,
      sub_code,
      examType,
      totalQuestion: userWrittenAnswers.length,
      totalMark: userWrittenAnswers.length * 5,
      mark: data.mark,
      feedback: data.feedback
    }
    try {
      await axios.post('http://localhost:4000/examdata', userResult)
      Swal.fire({
        showConfirmButton: false,
        timer: 1500,
        title: ' Mark Update Successful',
        icon: 'success'
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className='my-6 space-y-4'>
      <header className='justify-between w-9/12 mx-auto md:flex '>
        <h2 className='text-2xl text-primary'>{stu_name}</h2>
        <h2 className='text-2xl text-primary'>{examType}</h2>
        <h2 className='text-2xl text-primary'>{date}</h2>
      </header>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {userWrittenAnswers.map(ans => (
          <div
            className='p-4 space-y-3 border rounded-lg shadow-md drop-shadow-md hover: ag-inherit'
            key={ans.questionId}
          >
            <h3 className='font-semibold '>Question: {ans.questionId}</h3>
            <p>Question : {ans.question}</p>
            <p>User Answer : {ans.stu_answer}</p>
            <p className='text-orange-300'>
              Instructor Answer : {ans.ins_answer}
            </p>
          </div>
        ))}
      </div>
      <div className='ml-4'>
        <form
          className='grid w-9/12 grid-cols-1 md:grid-cols-5 place-items-center'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='col-span-1 form-control'>
            <label className='label'>
              <span className='label-text'>What is the total mark?</span>
            </label>
            <input
              {...register('mark')}
              id='mark'
              type='text'
              placeholder='enter mark'
              required
              className='p-3 border rounded-lg ag-transparent h-14'
            />
          </div>
          <div className='w-9/12 col-span-3 form-control'>
            <label className='label'>
              <span className='label-text'>
                Please provide your precious feedback
              </span>
            </label>
            <textarea
              {...register('answer')}
              id='answer'
              placeholder='feedback'
              className='w-full p-2 border rounded-lg shadow-md outline-none ag-transparent h-14 drop-shadow-md'
            />
          </div>

          <div>
            <button
              className='h-12 col-span-1 btn primary-btn animate-pulse hover:animate-none'
              type='submit'
            >
              Add Mark
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SingleUserAnswers
