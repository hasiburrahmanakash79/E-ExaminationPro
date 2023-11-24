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
import Pagination from '../../Components/Pagination/Pagination'
const FreeCoursePage = () => {
  const dispatch = useDispatch()
  const { logOut } = useContext(AuthContext)
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://e-exam-pro-server.vercel.app/allSubjects', {
      headers: {
        authorization: `bearar ${localStorage.getItem('access-token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data);

        if (data.error == true) {
          logOut()
          navigate('/login')
        }
        setData(data)
        dispatch(setSubject(data))
      })
  }, [])
  //console.log(data);

  ////////---------------------------------Pagination
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemPerPage] = useState(6) // Number of items to display per page
  const totalItems = data?.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedData = data.slice(startIndex, endIndex)

  return (
    <div className='flex flex-col items-center justify-center my-5 mt-5 '>
      <Helmet>
        <title> All Exam | E-ExamPro</title>
      </Helmet>
      <div className='grid min-h-[76vh] grid-cols-1 gap-10 mx-2 md:grid-cols-2 lg:grid-cols-3'>
        {displayedData?.map((subject, index) => (
          <div key={index} className='card  h-[280px] shadow-xl image-full'>
            <div className='img '></div>
            <div className='h1'>
              <h1 className='text-5xl text-white '>{subject.subject_name}</h1>
            </div>
            <figure>
              <img
                className='object-fill w-full'
                src={subject.img_link}
                alt='Shoes'
              />
            </figure>
            <div className='items-center w-full text-center card-body1'>
              <h1 className='text-4xl font-bold'>{subject.subject_code}</h1>
              <p className='mx-3 my-3 text-md '>{subject.description}</p>

              <Link
                to={`/allexam?subject=${subject.subject_name}`}
                className='btn btn-outline  btn-primary'
              >
                <span className='text-white'>View All Exam</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center my-6'>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </div>
    </div>
  )
}

export default FreeCoursePage
