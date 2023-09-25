import React, { useContext } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Typewriter from 'react-ts-typewriter'
import { Hourglass } from 'react-loader-spinner'
import { AuthContext } from '../../Provider/AuthProvider'
import useAxiosSecure from '../../Hooks/useAxiosSecure.jsx/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { data } from 'autoprefixer'

const ExamResult = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const eid = searchParams.get('eid')
  console.log(eid)

  const { user, loading } = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure()
  const { data: results, isLoading } = useQuery({
    queryKey: ['resultData', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/allresultBySubject?examsID=${eid}`)
      //console.log(res.data);
      return res.data
    }
  })
  console.log(results)
  return (
    <>
      {isLoading ? (
        <div className='text-red-400 text-4xl flex justify-center items-center h-[70vh]'>
          <h1>
            <Hourglass
              visible={true}
              height='80'
              width='80'
              ariaLabel='hourglass-loading'
              wrapperStyle={{}}
              wrapperClass=''
              colors={['#ffffff', '#000000']}
            />
          </h1>
        </div>
      ) : (
        <div>
          {results?.length == 0 ? (
            <div className='text-red-400 text-4xl flex justify-center items-center h-[70vh]'>
              <h1>
                <Typewriter
                  speed={200}
                  delay={900}
                  loop={true}
                  text='No One Give That Exam'
                />
              </h1>
            </div>
          ) : (
            <div>
              {results?.map((result, index) => (
                <div
                  key={index}
                  className='my-2 mx-5 md:mx-20 card p-5 flex justify-center shadow-md'
                >
                  <h1 className='text-green-500 text-lg'>
                    <span className=''>Exam:</span> {index + 1}
                  </h1>
                  <div className='grid grid-cols-3'>
                    <div className=''>
                      <h1 className='text-xl font-bold'>
                        Student Name: {result.stu_name}
                      </h1>
                      <h1 className='text-xl font-bold'>
                        Email: {result.stu_email}
                      </h1>
                      <h3>{result.batch}</h3>
                    </div>

                    <div>
                      <h1 className='text-md font-bold'>
                        Subject: {result.subject}
                      </h1>
                      <h1 className='text-md font-bold'>
                        Total Mark:{' '}
                        <span className='text-green-500'>
                          {result.totalMark}
                        </span>
                      </h1>
                      <h2 className='text-md font-bold'>
                        Mark:{' '}
                        <span className='text-green-500'>{result.mark}</span>
                      </h2>
                    </div>
                    <div>
                      <h2>Exam Code: {result.exam_code}</h2>
                      <h2>Subject Code: {result.sub_code}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default ExamResult
