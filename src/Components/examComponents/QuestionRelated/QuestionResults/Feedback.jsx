import axios from 'axios'

const FeedBack = () => {
  const feedBackHandler = e => {
    preventDefault()
    const form = e.target
    const message = form.message.value
    const quality = form.quality.value
    const time = form.timeManage.value


    // axios.post("", {
    //     message: message,
    //     question: quality,
    //     time: time,
    // })
    //     .then(res => {
    //         if (res.data.insertedId) {
    //             /*hot toast && sweet alert */
    //         }
    //     })
    //     .catch(err => {
    //
    //     })
  }

  return (
    // <div className='py-12 md:w-[560px] mx-auto md:p-8 p-1 rounded-lg my-6 shadow-2xl'>
    <form
      action=''
      onSubmit={feedBackHandler}
      className='w-full p-4 mx-auto space-y-1 border md:space-y-2'
    >
      <h2 className='py-2 text-xl font-semibold text-white md:text-2xl md:py-3'>
        Send us Your Exam Feedback
      </h2>
      {/* Question Quality */}
      <div className='py-2 md:py-3'>
        <h2 className='text-xl font-medium text-white'>*Question Quality</h2>
        <div className='items-center md:flex'>
          <div className=''>
            <label className='inline-flex mt-2'>
              <input
                type='radio'
                name='quality'
                value='Good'
                required
                className='radio radio-success'
              />
              <p className='pl-1'>Good</p>
            </label>
          </div>
          <div className='md:mx-5'>
            <label className='inline-flex mt-2 '>
              <input
                type='radio'
                name='quality'
                value='Very good'
                required
                className='radio radio-success'
              />
              <p className='pl-1 '> Very Good</p>
            </label>
          </div>
          <div>
            <label className='inline-flex mt-2'>
              <input
                type='radio'
                name='quality'
                value='Excellent'
                required
                className='radio radio-success'
              />
              <p className='pl-1'>Excellent</p>
            </label>
          </div>
        </div>
      </div>
      {/* Time management */}
      <div>
        <h2 className='text-xl font-medium text-white'>*Time Management</h2>
        <div className='items-center md:flex'>
          <div className=''>
            <label className='inline-flex mt-2'>
              <input
                type='radio'
                name='timeManage'
                value='Long Time'
                required
                className='radio radio-success'
              />
              <p className='pl-1'>long Time</p>
            </label>
          </div>
          <div className='md:mx-5'>
            <label className='inline-flex mt-2 '>
              <input
                type='radio'
                name='timeManage'
                value='Short Time'
                required
                className='radio radio-success'
              />
              <p className='pl-1'> Short Time</p>
            </label>
          </div>
          <div>
            <label className='inline-flex mt-2 '>
              <input
                type='radio'
                name='timeManage'
                value='Default Time'
                required
                className='radio radio-success'
                defaultChecked
              />
              <p className='pl-1'>Default Time</p>
            </label>
          </div>
        </div>
      </div>
      {/* text area */}
      <div className='pt-4'>
        <p className='py-1 my-2 text-sm text-white'>
          If you want to add more please feel free to do it.
        </p>
        <textarea
          name='message'
          id=''
          placeholder='Please your feedback'
          className='w-full max-w-md mt-1 text-white bg-transparent focus:outline-white placeholder-slate-200 textarea textarea-bordered textarea-md '
        ></textarea>
      </div>
      <div className='flex justify-end'>
        <input
          type='submit'
          value='Submit'
          className='px-6 py-2 text-sm font-medium text-white rounded-lg cursor-pointer hover:delay-75 hover:transition-all hover:outline-slate-100 hover:outline primary-bg'
        />
      </div>
    </form>
    // </div>
  )
}

export default FeedBack
