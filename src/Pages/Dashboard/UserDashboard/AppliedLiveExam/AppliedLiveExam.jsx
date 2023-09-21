import { Helmet } from 'react-helmet-async'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure.jsx/useAxiosSecure'
import { AuthContext } from '../../../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import { LocalToastTarget, useLocalToast } from 'react-local-toast'

const AppliedLiveExam = () => {
  const { showToast, removeToast } = useLocalToast()
  const { user, loading } = useContext(AuthContext)
  const [code, setCode] = useState(null)
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
        `appliedLiveExam?studentEmail=${user?.email}`
      )
      return res.data
    }
  })
  //console.log(appliedExam)

  const getCode = (id, code) => {
    fetch(
      `https://e-exam-pro-server.vercel.app/liveQuestionPaper?id=${id}&examCode=${code}`
    )
      .then(res => res.json())
      .then(code => {
        if (code.code == undefined) {
          showToast('btn', 'Wait For Instructor to Generate Code', {
            type: 'warning'
          })
        }
        setCode(code.code)
      })
  }
  //console.log(code)
  return (
    <div className='flex flex-col items-center justify-center'>
      <Helmet>
        <title>Apply Live Exam | E-ExamPro </title>
      </Helmet>
      <h2 className='text-2xl'>AppliedLiveExam</h2>
      {appliedExam?.map(exam => (
        <div key={exam._id} className='grid w-full grid-cols-1 '>
          <div className='mx-5 mt-5 shadow-2xl card md:mx-20 navigation-bar'>
            <div className='card-body'>
              <h2 className='card-title'>Subject: {exam.subjectName}</h2>
              <p>ExamCode: {exam?.examCode}</p>
              <p>Subject Code: {exam?.subject_code}</p>

              <div className='flex justify-end'>
                <div>
                  <p className='mb-2'>Date: {exam?.date}</p>

                  <div className='grid grid-cols-2 '>
                    <h1 className='text-red-500 '>Code: </h1>
                    {code == null ? (
                      <LocalToastTarget name='btn'>
                        <button
                          onClick={() => getCode(exam?.examID, exam?.examCode)}
                          className='btn btn-sm'
                        >
                          Get Code
                        </button>
                      </LocalToastTarget>
                    ) : (
                      <button className='text-black bg-white btn btn-sm hover:bg-white'>
                        {code}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AppliedLiveExam
