import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../../Provider/AuthProvider'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure.jsx/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AllGivenExam = () => {
  const { user, loading } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()

  const {
    data: info,
    refetch,
    isLoading: p_loading
  } = useQuery({
    queryKey: ['given_Exam', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/userGivenExam/${user?.email}`)
      //console.log(res);
      return res.data
    }
  })
  //console.log(info, '.......................lne 29');

  const [ratings, setRating] = useState(0)

  const sendReviews = e => {
    e.preventDefault()
    const form = e.target
    const feedback_message = form.feedback.value
    const student_name = user?.displayName
    const image = user?.photoURL
    const rating = ratings
    const email = user?.email
    const data = { student_name, image, feedback_message, rating, email }

    fetch('https://e-exam-pro-server.vercel.app/testimonials', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        if (data.insertedId) {
          toast('Review Sent!')
        }
      })
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <Helmet>
        <title>Apply Live Exam | E-ExamPro </title>
      </Helmet>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id='review' className='modal'>
        <ToastContainer />
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>

          <div className=' mt-5'>
            <form onSubmit={sendReviews} action=''>
              <div className='flex gap-2 items-center'>
                <h1 className='flex gap-1'>
                  {' '}
                  <span>Write</span>
                  <span> FeedBack:</span>{' '}
                </h1>
                <textarea
                  name='feedback'
                  className='textarea textarea-xs w-full mx-4 textarea-primary'
                  placeholder='Feedback'
                ></textarea>
              </div>
              <div className='flex gap-2 mt-2'>
                <p>Rate Us:</p>
                <Rating
                  isRequired
                  style={{ maxWidth: 100 }}
                  value={ratings}
                  onChange={setRating}
                />
              </div>
              <div className='flex justify-end'>
                <input
                  className='btn  btn-sm primary-bg '
                  type='submit'
                  value={'Send'}
                />
              </div>
            </form>
          </div>
        </div>
      </dialog>

      <h2 className='text-2xl mt-5'>Given Exam List</h2>
      <button
        onClick={() => document.getElementById('review').showModal()}
        className='btn btn-sm primary-bg ms-auto md:me-20'
      >
        Give Review
      </button>
      {info?.map(exam => (
        <div key={exam._id} className='grid w-full grid-cols-1 '>
          <div className='mx-5 mt-5 shadow-2xl card md:mx-20 navigation-bar'>
            <div className='card-body   grid grid-cols-2'>
              <div className='grid gap-3'>
                <h2 className='text-green-500 card-title'>
                  Subject: <span className='text-yellow-500' >{exam.subject}</span >
                </h2>
                <p><span className='text-green-500'>ExamCode:</span> <span>{exam?.exam_code}</span></p>
                <p> <span  className='text-green-500'>Subject Code:</span> {exam?.sub_code}</p>
                <p><span className='text-green-500'>Instructor:</span> {exam?.ins_email}</p>
              </div>

              <div className='text-right grid gap-3'>
                <p className='text-green-500'>
                  Time You Take: <span className='text-yellow-500'>{(exam?.timeConsume / 60).toFixed(2)} min</span>
                </p>
                <p className='text-green-500'>Total Mark: <span className='text-yellow-500'> {exam?.totalMark}</span></p>
                <p className='text-green-500'>Mark: <span className='text-yellow-500'>{exam?.mark}</span></p>
                <p><span className='text-green-500'>Date:</span> {exam?.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllGivenExam
