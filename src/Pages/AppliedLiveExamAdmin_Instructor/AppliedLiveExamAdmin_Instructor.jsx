import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../../Provider/AuthProvider'
import useAxiosSecure from '../../Hooks/useAxiosSecure.jsx/useAxiosSecure'
import { FaFaceFrown } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Typewriter from 'react-ts-typewriter'

const AppliedLiveExamAdmin_Instructor = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const examID = searchParams.get('examID')
  const instructor_email = searchParams.get('instructor_email')

  const { user, loading } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()
  const {
    data: appliedExam,
    refetch,
    isLoading
  } = useQuery({
    queryKey: ['notice', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `appliedLiveExam?examID=${examID}&instructor_email=${instructor_email}`
      )
      return res.data
    }
  })
  //console.log(appliedExam)

  return (
    <>
      {appliedExam?.length == 0 ? (
        <div className='text-red-400 text-4xl flex justify-center items-center h-[70vh]'>
          <p className='mx-2'>
            <FaFaceFrown></FaFaceFrown>{' '}
          </p>
          <h1>
            <Typewriter
              speed={200}
              delay={900}
              loop={true}
              text={` No one Applied....`}
            />
          </h1>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <Helmet>
            <title>E-ExamPro | Apply Live Exam </title>
          </Helmet>
          <h2 className='text-2xl'>AppliedLiveExam</h2>
          {appliedExam?.map(exam => (
            <div key={exam._id} className='grid w-full grid-cols-1 '>
              <div className='mx-5 mt-5 shadow-md card md:mx-20 navigation-bar'>
                <div className='card-body'>
                  <h2 className='card-title'>Subject: {exam.subjectName}</h2>
                  <p>ExamCode: {exam?.examCode}</p>
                  <p>Subject Code: {exam?.subject_code}</p>
                  <div className='flex justify-end'>
                    <div>
                      <p className='mb-2'>Date: {exam?.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default AppliedLiveExamAdmin_Instructor
