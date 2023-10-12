import { useContext, useEffect, useState } from 'react'
import SubjectComponent from './SubjectComponent'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../Provider/AuthProvider'

const TopSubjects = () => {
  const [subjects, setSubjects] = useState([])

  const { logOut } = useContext(AuthContext)
 
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3500/topSubjects')
      .then(res => res.json())
      .then(data => {
        //console.log(data);

        // if (data.error == true) {
        //   logOut()
        //   navigate('/login')
        // }
        setSubjects(data)
       
      })
  }, [])
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         'http://localhost:3500/subjects'
  //       )
  //       const data = await response.json()

  //       setSubjects(data)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   fetchData()
  // }, [])
  return (
    <div className='my-16'>
      <h1
        data-aos='zoom-in-down'
        data-aos-duration='600'
        className='pt-10 pb-10 text-4xl font-bold text-center md:pt-0'
      >
        Our Top subjects
      </h1>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {subjects.slice(0,8).map(subject => (
          <SubjectComponent key={subject._id} subject={subject} />
        ))}
      </div>
    </div>
  )
}

export default TopSubjects
