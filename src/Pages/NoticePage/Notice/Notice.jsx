import * as React from 'react'
import { Helmet } from 'react-helmet-async'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider'
import useInstructor from '../../../Hooks/useInstructor/useInstructor'
import useLiveExam from '../../../Hooks/useLiveExam/useLiveExam'
import useAdmin from '../../../Hooks/useAdmin/useAdmin'

export default function Notice () {
  const { user, loading } = useContext(AuthContext)

  const [isInstructor] = useInstructor()
  const [isAdmin,isAdminLoading] = useAdmin()
    console.log(isAdmin)

  const [notices, isNoticeLoading] = useLiveExam()
  console.log(notices)
  return (
    <>
      <Helmet>
        <title>E-ExamPro | Notice</title>
      </Helmet>

      <div className='container p-5 mx-auto mt-5 bg-white/5 rounded-2xl'>
        <h1 className='text-3xl text-center'>Upcoming Exam Schedule</h1>
        <div className='grid grid-cols-4 gap-5 my-7 '>
          {notices?.map(notice => (
            <div
              key={notice._id}
              className='w-full border-2 shadow-xl card bg-white/10'
            >
              <div className='card-body'>
                <p>
                  Subject Name:
                  <span className='text-purple-300'>{notice?.subjectName}</span>
                </p>
                <p>
                  Exam Code:
                  <span className='text-purple-300 uppercase'>
                    {notice?.exam_code}
                  </span>
                </p>
                <p>
                  Subject Code:
                  <span className='text-purple-300 uppercase'>
                    {notice?.subject_code}
                  </span>
                </p>
                <p>
                  Batch: <span className='text-purple-300 uppercase'>{notice?.batch}
                  </span>
                </p>
                <p>
                  Group:
                  <span className='text-purple-300'> {notice?.group}</span>
                </p>
                <p>
                  Exam Date :
                  <span className='text-purple-300'>{notice?.date}</span>
                </p>
                <p>
                  Instructor:
                  <span className='text-purple-300'> {notice?.instructor}</span>
                </p>
                { isAdmin ? (
                  <Link to={`/allAppliedLiveExam?examID=${notice._id}`}><button className='primary-btn btn'>
                  See Applied Students
                </button></Link> 
                ) : isInstructor?    <Link to={`/allAppliedLiveExam?examID=${notice._id}&instructor_email=${user?.email}`}><button className='primary-btn btn'>
                See Applied Students
              </button></Link> :  (
                   <Link
                   to={`/upcomingLiveExam?examID=${notice._id}&email=${user?.email}`}
                   className='mt-5'
                 >
                   <button className='primary-btn btn'>
                     Apply For Live class
                   </button>
                 </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
