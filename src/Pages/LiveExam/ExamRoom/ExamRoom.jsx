import React, { useState } from 'react'
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
          <VideoCall></VideoCall>
        </div>
      </div>
    </div>
  )
}

export default ExamRoom
