import { useEffect, useState } from 'react'
import SubjectComponent from './SubjectComponent'

const TopSubjects = () => {
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://e-exam-pro-server.vercel.app/subjects'
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
        className='pt-10 pb-10 text-4xl font-bold text-center text-slate-200 md:pt-0'>
        Our Top subjects
      </h1>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-4 '>
        {subjects.map(subject => (
          <SubjectComponent key={subject._id} subject={subject} />
        ))}
      </div>
    </div>
  )
}

export default TopSubjects
