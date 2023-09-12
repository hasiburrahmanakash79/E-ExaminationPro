import React, { useContext } from 'react'
import './FreeCoursePage.css'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { useDispatch } from 'react-redux'
import { setSubject } from '../../redux/features/quesPaper/quesPaperSlice'
import { Helmet } from 'react-helmet-async'
const FreeCoursePage = () => {
  const dispatch = useDispatch()
  const { logOut } = useContext(AuthContext)
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:4000/allSubjects', {
      headers: {
        authorization: `bearar ${localStorage.getItem('access-token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        if (data.error == true) {
          logOut()
          navigate('/login')
        }
        setData(data)
        dispatch(setSubject(data))

      })
  }, [])
  console.log(data)
  return (
    <div className='mt-5 flex justify-center '>
      <Helmet><title>E-ExamPro | Exam</title></Helmet>
      <div className='grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-10 mx-2'>
        {data?.map((subject, index) => (
          <div
            key={index}
            className='card  bg-base-100 h-[280px] shadow-xl image-full'
          >
            <div className='img '></div>
            <div className='h1'>
              <h1 className='text-white text-5xl'>{subject.subject_name}</h1>
            </div>
            <figure>
              <img
                className='object-fill w-full'
                src={subject.img_link}
                alt='Shoes'
              />
            </figure>
            <div className='card-body1 w-full  items-center text-center'>
              <h1 className='text-4xl font-bold'>{subject.subject_code}</h1>
              <p className='text-md my-3 mx-3 '>{subject.description}</p>
              <button className='btn btn-sm btn-primary'>
                <Link to={`/allexam?subject=${subject.subject_name}`}>
                  View All Exam
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FreeCoursePage
