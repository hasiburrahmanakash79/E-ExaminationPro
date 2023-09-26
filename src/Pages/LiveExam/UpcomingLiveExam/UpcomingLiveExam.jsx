import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../Provider/AuthProvider'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../Hooks/useAxiosSecure.jsx/useAxiosSecure'
import { useEffect } from 'react'
import { LocalToastTarget, useLocalToast } from 'react-local-toast'
import 'react-local-toast/dist/bundle.css'
import { Hourglass } from 'react-loader-spinner'
const UpcomingLiveExam = () => {
  const [noticeBatch, setNoticeBatch] = useState(null)
  const [stuBatch, setStuBatch] = useState(null)
  const [message, setMessage] = useState(null)

  const { showToast, removeToast } = useLocalToast()
  const [msg, setMsg] = useState('')
  //const [isActive,setActive]=useState(true)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const e_ID = searchParams.get('examID')
  //////console.log(e_ID)
  const { user, loading } = useContext(AuthContext)

  const [axiosSecure] = useAxiosSecure()

  const { data: studentData, isLoading: dataLoading } = useQuery({
    queryKey: ['studentInfo', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`)
      return res.data
    }
  })
  ////console.log(studentData?.batch,'line 38')

  const { data, refetch, isLoading } = useQuery({
    queryKey: ['noticeDATA', e_ID],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `notice?id=${e_ID}&student_email=${user?.email}`
      )
      return res.data
    }
  })

  const data1 = {
    examID: e_ID,
    batch: data?.batch,
    examCode: data?.exam_code,
    subjectName: data?.subjectName,
    subject_code: data?.subject_code,
    student_name: user?.displayName,
    student_email: user?.email,
    date: data?.date,
    instructor_email: data?.email,
    group: data?.group
  }

  useEffect(() => {
    setStuBatch(studentData?.batch)
    setNoticeBatch(data?.batch)
    setMessage(data?.msg)
  }, [studentData?.batch, data?.batch, data?.msg])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const onSubmit = data => {
    setMsg('')

    const info = { ...data1, ...data }
    if (message) {
      showToast('btn', 'Already Applied', { type: 'warning' })
    } else if (!stuBatch) {
      showToast('btn', 'Add Batch in Update profile', { type: 'error' })
    } else if (noticeBatch !== stuBatch) {
      showToast('btn', 'Batch Not Match', { type: 'error' })
    } else {
      fetch(
        `http://localhost:4000/appliedLiveExam?examId=${e_ID}&studentEmail=${user?.email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(info)
        }
      )
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            //setMsg('Successfully Applied')
            refetch()
            showToast('btn', 'Successfully Applied', { type: 'success' })
          } else if (data.msg) {
            // setActive(false)
            //setMsg(data.msg)
            showToast('btn', 'Already Applied', { type: 'warning' })
          }
        })
    }
  }
  //console.log(noticeBatch, stuBatch)
  return (
    <>
      {isLoading || dataLoading ? (
        <Hourglass
          visible={true}
          height='80'
          width='80'
          ariaLabel='hourglass-loading'
          wrapperStyle={{}}
          wrapperClass=''
          colors={['#4098A0', '#fcba03']}
        />
      ) : (
        <div>
          <div className='mt-6 text-2xl font-semibold text-center'>
            Apply for Online Exam
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='mx-auto max-w-[600px] border-4   rounded-xl p-4 my-4'
          >
            <div className='w-full mb-4 form-control'>
              <label className='label'>
                <span className='font-semibold label-text'>Subject</span>
              </label>
              <h1 className='flex items-center w-full input input-bordered '>
                {data?.subjectName}
              </h1>
            </div>

            <div className='w-full mb-4 form-control'>
              <label className='label'>
                <span className='font-semibold label-text'>Subject Code</span>
              </label>
              <h1 className='flex items-center w-full input input-bordered '>
                {data?.subject_code}
              </h1>
            </div>

            <div className='w-full mb-4 form-control'>
              <label className='label'>
                <span className='font-semibold label-text'>Name</span>
              </label>
              <h1 className='flex items-center w-full input input-bordered '>
                {user?.displayName}
              </h1>
            </div>
            <div className='w-full mb-4 form-control'>
              <label className='label'>
                <span className='font-semibold label-text'>Email</span>
              </label>
              <h1 className='flex items-center w-full input input-bordered '>
                {user?.email}
              </h1>
            </div>

            <div className='w-full form-control '>
              <label className='label'>
                <span className='font-semibold label-text'>Batch</span>
              </label>
              <h1 className='flex items-center w-full input input-bordered '>
                {!stuBatch ? (
                  <span className='text-red-500'>
                    Add Batch In Update Profile
                  </span>
                ) : (
                  stuBatch
                )}
              </h1>
            </div>

            <div className='w-full form-control '>
              <label className='label'>
                <span className='font-semibold label-text'>Date</span>
              </label>
              <h1 className='flex items-center w-full input input-bordered '>
                {data?.date}
              </h1>
            </div>
            <div className='flex justify-center w-full mt-4'>
              {' '}
              {/* Add 'mt-4' for top margin */}
              <LocalToastTarget name='btn'>
                {/* <input  disabled={!studentData?.batch } className="primary-btn btn" type="submit" value="Apply for Exam" /> */}
                <button className='primary-btn btn'>Apply for Exam </button>
              </LocalToastTarget>
            </div>
            <p className='text-center '>{msg}</p>
            {/* {
          data?.msg && <h1 className="mt-2 text-xl text-center text-red-600">You Have Already Applied</h1>
        } */}
          </form>
        </div>
      )}
    </>
  )
}

export default UpcomingLiveExam
