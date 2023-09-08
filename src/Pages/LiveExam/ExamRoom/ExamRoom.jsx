import React from 'react'
import { Link } from 'react-router-dom'
import VideoCall from './VideoCall'
import WrittenExams from '../../Exams/WrittenExams/WrittenExams'

const ExamRoom = () => {
  return (
    <div className='p-3 overflow-hidden border-2 border-red-700 rounded-lg md:max-h-screen md:min-h-screen '>
      <h1 className='pb-10 text-2xl text-center'>Exam Room</h1>
      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
        <div className='col-span-2  scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-300 scrollbar-w-2 scrollbar-track-transparent rounded-lg p-5 overflow-y-auto md:h-[85vh] bg-white/10'>
          <WrittenExams />
        </div>

        <div className='w-full col-span-1 mx-auto'>
          {/* <div className='grid-cols-2 border border-black md:grid'> */}
          {/* <div className='w-56 h-56 mx-auto mb-5'>
              <img
                className='rounded-full'
                src='https://media.nngroup.com/media/people/photos/2022-portrait-page-3.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg'
                alt=''
              />
            </div>
            <div className='h-56 mx-auto mb-5'>
              <img
                src='https://website-assets.userpilot.com/wp-content/uploads/2023/05/Userpilot-events-and-webinars.webp'
                alt=''
              />
            </div>
            <div className='w-56 h-56 mx-auto mb-5'>
              <img
                className='rounded-full'
                src='https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1191'
                alt=''
              />
            </div> */}
          {/* </div> */}

          {/* <button className='btn btn-error'>
            <Link to='/'>Leave Exam</Link>
          </button> */}
          <VideoCall></VideoCall>
        </div>
      </div>
    </div>
  )
}

export default ExamRoom
