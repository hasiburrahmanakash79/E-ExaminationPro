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
  const [isAdmin, isAdminLoading] = useAdmin()
  //console.log(isAdmin)

  const [notices, isNoticeLoading] = useLiveExam()
  // console.log(notices?.length)
  return (
    <>
      <Helmet>
        <title>E-ExamPro | Notice</title>
      </Helmet>

      <div className='container p-5 mx-auto mt-5 rounded-2xl'>
        <h1 className='text-3xl text-center'>Upcoming Exam Schedule</h1>
        <div className='grid gap-5 lg:grid-cols-4 md:grid-cols-3 my-7 '>
          {notices?.map(notice => (
            <div key={notice._id} className='w-full border-2 shadow-xl card '>
              <div className='card-body'>
                <p>
                  Subject Name :{' '}
                  <span className='text-primary'>{notice?.subjectName}</span>
                </p>
                <p>
                  Exam Code :{' '}
                  <span className='uppercase text-primary'>
                    {notice?.exam_code}
                  </span>
                </p>
                <p>
                  Subject Code :{' '}
                  <span className='uppercase text-primary'>
                    {notice?.subject_code}
                  </span>
                </p>
                <p>
                  Batch :{' '}
                  <span className='uppercase text-primary'>
                    {notice?.batch}
                  </span>
                </p>
                <p>
                  Group : <span className='text-primary'> {notice?.group}</span>
                </p>
                <p>
                  Exam Date :{' '}
                  <span className='text-primary'>{notice?.date}</span>
                </p>
                <p>
                  Instructor :{' '}
                  <span className='text-primary'> {notice?.instructor}</span>
                </p>
                {isAdmin ? (
                  <Link to={`/allAppliedLiveExam?examID=${notice._id}`}>
                    <button className='btn-primary btn'>
                      See Applied Students
                    </button>
                  </Link>
                ) : isInstructor ? (
                  <Link
                    to={`/allAppliedLiveExam?examID=${notice._id}&instructor_email=${user?.email}`}
                  >
                    <button className='btn-primary btn'>
                      See Applied Students
                    </button>
                  </Link>
                ) : (
                  <Link
                    to={`/upcomingLiveExam?examID=${notice._id}&email=${user?.email}`}
                    className='mt-5'
                  >
                    <button className='btn-primary btn'>
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
