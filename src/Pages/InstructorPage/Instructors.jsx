import { useEffect, useState, lazy, Suspense } from 'react'
const InstructorCard = lazy(() => import('./InstructorCard'))
import { Helmet } from 'react-helmet-async'
import Loading from '../../Components/Loading/Loading'

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
        <title>Instructor | E-ExamPro</title>
      </Helmet>
      <h1 className='mb-10 text-4xl font-bold text-center '>Our Instructors</h1>
      <div className='grid gap-5 px-6 py-5 md:grid-cols-2 lg:grid-cols-3 '>
        {instructors.slice(0, displayCount).map(instructor => (
          <Suspense fallback={<Loading />}>
            <InstructorCard
              key={instructor._id}
              instructor={instructor}
            ></InstructorCard>
          </Suspense>
        ))}
      </div>
      <div className='my-5 text-center animate-pulse hover:animate-none'>
        {!seeMore && (
          <button onClick={handleSeeMore} className='btn btn-primary'>
            See More Instructors
          </button>
        )}
      </div>
    </div>
  )
}

export default Instructors
