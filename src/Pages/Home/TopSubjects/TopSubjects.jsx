import { useEffect, useState } from 'react'
import SubjectComponent from './SubjectComponent'

const TopSubjects = () => {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/subjects'
        )
        const data = await response.json()

        console.log(data)
        setSubjects(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <div className='my-16'>
      <h1
        data-aos="zoom-in-down"
        data-aos-duration="600"
        className='text-center text-slate-200 text-4xl font-bold pt-10 md:pt-0 pb-10'>
        Our Top subjects
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5  '>
        {subjects.map(subject => (
          <SubjectComponent key={subject._id} subject={subject} />
        ))}
      </div>
    </div>
  )
}

export default TopSubjects
