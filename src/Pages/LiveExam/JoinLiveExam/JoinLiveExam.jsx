import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCall } from '../../../redux/features/ExamRoomController/ExamRoomControllerSlice'

const JoinLiveExam = () => {
  const dispatch = useDispatch()
  const { inCall } = useSelector(state => state.examRoomControls)
  const { register, handleSubmit, reset } = useForm()

  const cancelSubmit = () => {
    reset()
  }

  const onSubmit = data => {
    // dispatch(toggleCall())
    // setInCall(true)
    //console.log(data)
  }
  const handleClick = () => {
    dispatch(toggleCall())
  }
  return (
    <div className='p-5'>
      <div className='mx-auto mt-10 border-4 md:w-2/4 xl:w-1/4 p-7 rounded-2xl border-violet-700 shadow-2xl'>
        <form onSubmit={handleSubmit(onSubmit)} className=''>
          <div className='flex flex-col '>
            <h2 className='my-3 text-2xl text-center'>Live Exam Join Code</h2>
            <input
              {...register('name', { required: true })}
              type='text'
              placeholder='Please enter your join Code'
              className='rounded-md bg-white/10 input input-bordered'
            />
          </div>

          <div className='flex justify-center gap-5 mt-5 md:justify-end'>
            <div className='mt-5 '>
              <button
                onClick={() => cancelSubmit()}
                className='btn primary-bg'
                type='submit'
              >
                Cancel
              </button>
            </div>
            <div className='mt-5 '>
              <Link to='/examRoom'>
                <button
                  onClick={() => handleClick()}
                  className='btn primary-btn'
                  type='submit'
                >
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default JoinLiveExam
