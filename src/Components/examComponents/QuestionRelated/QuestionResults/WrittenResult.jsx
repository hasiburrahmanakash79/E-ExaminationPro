import React from 'react'

const WrittenResult = () => {
  const result = {
    userName: 'user',
    date: '',
    examName: 'Math',
    subjectCode: 'Math201',

    totalMark: 30,
    studentMark: 20,
    feedback: 'Overall good but you should focus on your vocabulary'
  }
  return (
    <section className='w-9/12 shadow-xl drop-shadow-xl '>
      <header className='flex justify-between'>
        <h1>Student Name: {userName}</h1>
        <h3>{examName}</h3>
        <p>Date of Exam: {date}</p>
      </header>
      <div>
        <p className=''>Total Mark:{totalMark}</p>
        <p>You got: {studentMark}</p>
        <p>Feedback:{feedback}</p>
      </div>
    </section>
  )
}

export default WrittenResult
