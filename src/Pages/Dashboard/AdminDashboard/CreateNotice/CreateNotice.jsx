import { useForm } from 'react-hook-form'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure.jsx/useAxiosSecure'
import Swal from 'sweetalert2'

const CreateNotice = () => {
  const [axiosSecure] = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const onSubmit = data => {
    const noticeInfo = {
      subjectName: data.subjectName,
      code: data.subjectCode,
      date: data.date,
      instructor: data.instructorName,
      group: data.groupName
    }
    //console.log(noticeInfo);
    axiosSecure.post('/notice', noticeInfo).then(data => {
      if (data.data.insertedId) {
        reset()
        Swal.fire({
          showConfirmButton: false,
          timer: 1000,
          title: 'Notice Added',
          icon: 'success'
        })
      }
    })
  }
  return (
    <div>
      <div className='mt-6 text-2xl font-semibold text-center'>
        <h1 className='text-3xl my-7'>Create Notice</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-auto max-w-screen-sm border-2 border-purple-700 rounded-xl p-7 shadow-2xl'
      >
        <div className='md:grid grid-cols-3 gap-4'>
          <div className='w-full mb-4 form-control'>
            <label className='label'>
              <span className='font-semibold label-text'>Subject Name</span>
            </label>
            <input
              type='text'
              placeholder='Subject Name'
              {...register('subjectName', { required: true })}
              className='w-full input input-bordered '
            />
          </div>
          <div className='w-full mb-4 form-control'>
            <label className='label'>
              <span className='font-semibold label-text'>Subject Code</span>
            </label>
            <input
              type='text'
              placeholder='math5'
              {...register('subjectCode', { required: true })}
              className='w-full input input-bordered uppercase'
            />
          </div>
          <div className='w-full mb-4 form-control'>
            <label className='label'>
              <span className='font-semibold label-text'>Instructor Name</span>
            </label>
            <input
              type='text'
              placeholder='Instructor Name'
              {...register('instructorName', { required: true })}
              className='w-full input input-bordered '
            />
          </div>
          <div className='w-full form-control '>
            <label className='label'>
              <span className='font-semibold label-text'>Group Name</span>
            </label>
            <input
              type='text'
              {...register('groupName', { required: true })}
              placeholder='Group Name'
              className='w-full input input-bordered '
            />
          </div>
          <div className='w-full form-control '>
            <label className='label'>
              <span className='font-semibold label-text'>Exam Date</span>
            </label>
            <input
              type='date'
              {...register('date', { required: true })}
              placeholder='Date'
              className='w-full input input-bordered '
            />
          </div>
        </div>
        <div className='flex justify-end w-full mt-7'>
          <input
            className='primary-btn btn'
            type='submit'
            value='Create Notice'
          />
        </div>
      </form>
    </div>
  )
}

export default CreateNotice
