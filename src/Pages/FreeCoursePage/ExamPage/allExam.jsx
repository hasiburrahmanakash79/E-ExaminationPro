import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import {
  allExam,
  checkBatch,
  examType
} from '../../../redux/features/allExam/allExamSlice'
import { useContext } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider'
import useInstructor from '../../../Hooks/useInstructor/useInstructor'
import Typewriter from 'react-ts-typewriter'
import useAdmin from '../../../Hooks/useAdmin/useAdmin'
import { Hourglass } from 'react-loader-spinner'

const AllExam = () => {
  const [isAdmin, isAdminLoading] = useAdmin()
  const [isInstructor, isInstructorLoading] = useInstructor()
  const { user, loading } = useContext(AuthContext)
  const [type, setType] = useState('mcq')
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const subject = searchParams.get('subject')
  //console.log(subject);

  const { exams, batch } = useSelector(state => state.allExam)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!loading) {
      fetch(
        `http://localhost:4000/userBatch?email=${user?.email}`
      )
        .then(res => res.json())
        .then(data => {
          //console.log(data, "----------line 25");
          dispatch(checkBatch(data))
        })
    }
  }, [user?.email, loading])
  console.log(
    batch,
    type,
    '---------------------------------\\\\\\------------------------------------------34'
  )

  const [dataloading, setDataLoading] = useState(true)

  useEffect(() => {
    if (!loading) {
      if (isAdmin ? isAdmin : isInstructor ? isInstructor : batch) {
        setDataLoading(true)
        fetch(
          `http://localhost:4000/questionPaper?type=${type}&subject=${subject}&instructor_email=${user?.email}&batch=${batch}`
        )
          .then(res => res.json())
          .then(data => {
            //console.log(data, "----------line 25");
            dispatch(allExam(data))

            setDataLoading(false)
          })
      }
    }
  }, [subject, type, loading, batch, isInstructor, isAdmin])

  //console.log(exams);
  //console.log(type);
  //console.log(isAdmin);
  const [currentTime, setCurrentTime] = useState(new Date())
  useEffect(() => {
    // Update the current time every second (1000 milliseconds)
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [])

  const convertTo12HourFormat = (time24) => {
    if (time24) {
      const [hours, minutes] = time24.split(':');
      const parsedHours = parseInt(hours, 10);

      let period = 'AM';
      let adjustedHours = parsedHours;

      if (parsedHours >= 12) {
        period = 'PM';
        adjustedHours = parsedHours === 12 ? 12 : parsedHours - 12;
      }

      return `${adjustedHours}:${minutes} ${period}`;
    }
  }

  const isExamInFuture = (date, time) => {
    // Parse exam date and time
    const examDateTime = new Date(`${date}T${time}`);

    // Get current date and time
    const currentDateTime = new Date();

    // Compare exam date and time with the current date and time

    console.log(examDateTime,'gg',currentDateTime)
    return examDateTime > currentDateTime;
  }

  console.log(isExamInFuture())
  return (
    <>
      <div className='min-h-[60vh] container mx-auto'>
        <Tabs>
          <div className='text-center'>
            <TabList>
              <Tab onClick={() => setType('mcq')}>MCQ Exam</Tab>
              <Tab onClick={() => setType('FillInTheBlank')}>
                Fill In The Blank Exam
              </Tab>
              <Tab onClick={() => setType('multimedia_mcq')}>
                MCQ Based on Content Exam
              </Tab>
            </TabList>
          </div>

          <TabPanel>
            {!dataloading ? (
              <div>
                {exams.length == 0 ? (
                  <div className='text-red-400 text-4xl flex justify-center items-center h-[70vh]'>
                    <h1>
                      <Typewriter
                        speed={200}
                        delay={900}
                        loop={true}
                        text='No Exam Added....'
                      />
                    </h1>
                  </div>
                ) : (
                  <div>
                    {exams?.map((exam, index) => (
                      <div
                        key={index}
                        className='flex justify-center p-5 my-2 card'
                      >
                        <div className='grid grid-cols-2'>
                          <div className=''>
                            <h1 className='text-xl font-bold'>
                              Subject: {exam.subjectName}
                            </h1>
                            <h2>Exam Code: {exam.exam_code}</h2>
                            <h2>Subject Code: {exam.subject_code}</h2>
                            <h3>Batch:{exam.batch}</h3>
                            <h1 className='font-bold text-md'>
                              Type: {exam.type}
                            </h1>
                          </div>
                          <div className='grid grid-cols-1'>
                            <div className='flex flex-row-reverse gap-7'>
                              <h2 className='font-bold text-md'>
                                Exam Time: {convertTo12HourFormat(exam.examTime)}
                              </h2>
                              <h2 className='font-bold text-md'>
                                Date: {exam.date}
                              </h2>
                            </div>

                            {isInstructor ? (
                              <Link
                                className='w-1/3 btn ms-auto btn-sm btn-primary'
                                to={`/examResults?eid=${exam._id}`}
                              >
                                {' '}
                                <button>See Exam Result</button>{' '}
                              </Link>
                            ) : isAdmin ? (
                              <Link to={`/examResults?eid=${exam._id}`}>
                                {' '}
                                <button className='w-1/3 btn ms-auto btn-sm btn-primary'>
                                  See Exam Result
                                </button>{' '}
                              </Link>
                            ) : exam.isCompleted ? (
                              <button className='w-1/3 btn ms-auto btn-sm btn-warning'>
                                Already Given
                              </button>
                            ) : !batch ? (
                              <button className='w-1/3 btn ms-auto btn-sm btn-primary'>
                                Please Add your Batch
                              </button>
                            ) :
                              isExamInFuture(exam.date, exam.examTime) ?(

                                  
                                   ((new Date(`${exam.date}T${exam.examTime}`) - currentTime)/60000)<4? 
                                    (
                                      <Link
                                        to={`/exam/${exam._id}`}
                                        className='w-1/3 btn ms-auto btn-sm btn-primary'
                                      >
                                        <button>Exam <span className='text-red-500'>Start</span><span className='text-red-500'> {((new Date(`${exam.date}T${exam.examTime}`)-currentTime)/60000).toFixed(2) } Min</span></button>
                                      </Link>
                                    ):
                                  ( <h1  className='w-1/3 p-2 btn ms-auto btn-sm btn-primary'> Start Soon <span className='text-red-500'> {((new Date(`${exam.date}T${exam.examTime}`)-currentTime)/60000).toFixed(2) } Min</span> </h1>)
                                  


                                // <Link
                                //   to={`/exam/${exam._id}`}
                                //   className='w-1/3 btn ms-auto btn-sm btn-primary'
                                // >
                                //   <button>Exam</button>
                                // </Link>
                              ) : 
                              (
                                <button className='w-1/3 btn ms-auto btn-sm btn-warning'>
                                  Time Passed
                                </button>) 
                              }
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className='text-red-400 text-4xl flex justify-center items-center h-[70vh]'>
                  <h1>
                    <Hourglass
                      visible={true}
                      height='80'
                      width='80'
                      ariaLabel='hourglass-loading'
                      wrapperStyle={{}}
                      wrapperClass=''
                      colors={['#7710de', '#d6061b']}
                    />
                  </h1>
                </div>
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {!dataloading ? (
              <div>
                {exams.length == 0 ? (
                  <div className='text-red-400 text-4xl flex justify-center items-center h-[70vh]'>
                    <h1>
                      <Typewriter
                        speed={200}
                        delay={900}
                        loop={true}
                        text='No Exam Added....'
                      />
                    </h1>
                  </div>
                ) : (
                  <div>
                    {exams?.map((exam, index) => (
                      <div
                        key={index}
                        className='flex justify-center p-5 my-2 card'
                      >
                        <div className='grid grid-cols-2'>
                          <div className=''>
                            <h1 className='text-xl font-bold'>
                              Subject: {exam.subjectName}
                            </h1>
                            <h2>Exam Code: {exam.exam_code}</h2>
                            <h2>Subject Code: {exam.subject_code}</h2>
                            <h3>Batch:{exam.batch}</h3>
                            <h1 className='font-bold text-md'>
                              Type: {exam.type}
                            </h1>
                          </div>
                          <div className='grid grid-cols-1'>
                            <div className='flex flex-row-reverse gap-7'>
                              <h2 className='font-bold text-md'>
                                Exam Time: {convertTo12HourFormat(exam.examTime)}
                              </h2>
                              <h2 className='font-bold text-md'>
                                Date: {exam.date}
                              </h2>
                            </div>
                            {isInstructor ? (
                              <Link to={`/examResults?id=${exam._id}`}>
                                <button className='w-1/3 btn ms-auto btn-sm btn-primary'>
                                  See Exam Result
                                </button>
                              </Link>
                            ) : isAdmin ? (
                              <Link to={`/examResults?id=${exam._id}`}>
                                <button className='w-1/3 btn ms-auto btn-sm btn-primary'>
                                  See Exam Result
                                </button>
                              </Link>
                            ) : exam.isCompleted ? (
                              <button className='w-1/3 btn ms-auto btn-sm btn-warning'>
                                Already Given
                              </button>
                            ) : !batch ? (
                              <button className='w-1/3 btn ms-auto btn-sm btn-primary'>
                                Exam
                              </button>
                            ) :
                            new Date(`${exam.date}T${exam.examTime}`) - new Date()<15 ? 
                            (
                              <Link
                                to={`/exam/${exam._id}`}
                                className='w-1/3 btn ms-auto btn-sm btn-primary'
                              >
                                <button>Exam</button>
                              </Link>
                            ):
                            <button>Exam Will Start Soon</button>
                           }
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className='text-red-400 text-4xl flex justify-center items-center h-[70vh]'>
                  <h1>
                    <Hourglass
                      visible={true}
                      height='80'
                      width='80'
                      ariaLabel='hourglass-loading'
                      wrapperStyle={{}}
                      wrapperClass=''
                      colors={['#7710de', '#d6061b']}
                    />
                  </h1>
                </div>
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {!dataloading ? (
              <div>
                {exams.length == 0 ? (
                  <div className='text-red-400 text-4xl flex justify-center items-center h-[70vh]'>
                    <h1>
                      <Typewriter
                        speed={200}
                        delay={900}
                        loop={true}
                        text='No Exam Added....'
                      />
                    </h1>
                  </div>
                ) : (
                  <div>
                    {exams?.map((exam, index) => (
                      <div
                        key={index}
                        className='flex justify-center p-5 my-2 card'
                      >
                        <div className='grid grid-cols-2'>
                          <div className=''>
                            <h1 className='text-xl font-bold'>
                              Subject: {exam.subjectName}
                            </h1>
                            <h2>Exam Code: {exam.exam_code}</h2>
                            <h2>Subject Code: {exam.subject_code}</h2>
                            <h3>Batch:{exam.batch}</h3>
                            <h1 className='font-bold text-md'>
                              Type: {exam.type}
                            </h1>
                          </div>
                          <div className='grid grid-cols-1'>
                            <div className='flex flex-row-reverse gap-7'>
                              <h2 className='font-bold text-md'>
                                Exam Time: {convertTo12HourFormat(exam.examTime)}
                              </h2>
                              <h2 className='font-bold text-md'>
                                Date: {exam.date}
                              </h2>
                            </div>
                            {isInstructor ? (
                              <Link to={`/examResults?id=${exam._id}`}>
                                <button className='w-1/3 btn ms-auto btn-sm btn-primary'>
                                  See Exam Result
                                </button>
                              </Link>
                            ) : isAdmin ? (
                              <Link to={`/examResults?id=${exam._id}`}>
                                <button className='w-1/3 btn ms-auto btn-sm btn-primary'>
                                  See Exam Result
                                </button>
                              </Link>
                            ) : exam.isCompleted ? (
                              <button className='w-1/3 btn ms-auto btn-sm btn-warning'>
                                Already Given
                              </button>
                            ) : !batch ? (
                              <button className='w-1/3 btn ms-auto btn-sm btn-primary'>
                                Exam
                              </button>
                            ) : (
                              <Link
                                to={`/exam/${exam._id}`}
                                className='w-1/3 btn ms-auto btn-sm btn-primary'
                              >
                                <button>Exam</button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className='text-red-400 text-4xl flex justify-center items-center h-[70vh]'>
                  <h1>
                    <Hourglass
                      visible={true}
                      height='80'
                      width='80'
                      ariaLabel='hourglass-loading'
                      wrapperStyle={{}}
                      wrapperClass=''
                      colors={['#7710de', '#d6061b']}
                    />
                  </h1>
                </div>
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </>
  )
}

export default AllExam
