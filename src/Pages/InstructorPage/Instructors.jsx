import { useEffect, useState } from 'react'
import InstructorCard from './InstructorCard'
import { Helmet } from 'react-helmet-async'

const Instructors = () => {
  const [instructors, setInstructors] = useState([])
  const [seeMore, setSeeMore] = useState(false)
  const [displayCount, setDisplayCount] = useState(6)

  useEffect(() => {
    fetch('https://e-exam-pro-server.vercel.app/instructors')
      .then(res => res.json())
      .then(data => setInstructors(data))
  }, [])

  const handleSeeMore = () => {
    setSeeMore(true)
    setDisplayCount(instructors.length)
  }
  return (
    <div className='container py-8 mx-auto'>
      <Helmet>
        <title>E-ExamPro | Instructor</title>
      </Helmet>
      <h1 className='mb-10 text-4xl font-bold text-center text-white'>
        Our Instructors
      </h1>
      <div className='py-5 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        {instructors.slice(0, displayCount).map(instructor => (
          <InstructorCard
            key={instructor.id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
      <div className='my-5 text-center animate-pulse hover:animate-none'>
        {!seeMore && (
          <button onClick={handleSeeMore} className='btn primary-btn'>
            See More Instructors
          </button>
        )}
      </div>
    </div>
  )
}

export default Instructors
