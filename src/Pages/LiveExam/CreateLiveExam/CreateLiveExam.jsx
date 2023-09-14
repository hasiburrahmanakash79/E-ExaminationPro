import { useDispatch, useSelector } from 'react-redux'
import {
  examType,
  subjectInfo,
  quesPaper,
  setSubject,
  setEmail,
  setSubjectCode,
  setExamData
} from '../../../redux/features/liveExamQuesPaper/liveExamQuesPaper'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider'
import useLiveExam from '../../../Hooks/useLiveExam/useLiveExam'
import { FaKey } from 'react-icons/fa'

const CreateLiveExam = () => {
  const [data, setData] = useState(null)
  const [randomNumbers, setRandomNumbers] = useState([])
  const [numDigits, setNumDigits] = useState(8)
  const [notices, isNoticeLoading] = useLiveExam()
  console.log(notices, 'line-----------------------------------------------19')
  const { user } = useContext(AuthContext)
  const dispatch = useDispatch()
  const { type, formData, questions, allSubject, examData, e_id } = useSelector(
    state => state.liveExam
  )
  console.log(
    examData,
    '-----------------------------------------------line 26'
  )
  useEffect(() => {
    fetch('https://e-exam-pro-server.vercel.app/allSubjects', {
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
        dispatch(setSubject(data))
        dispatch(setEmail(user?.email))
      })
  }, [])
  /////redux////

  ////////
  console.log(allSubject)
  // store basic info
  const handleInputChange = event => {
    event.preventDefault()
    dispatch(subjectInfo(event)) // redux
  }

  //handle ques add
  const handleQuestionAdd = event => {
    event.preventDefault()
    dispatch(quesPaper({ add: 'add' })) // redux
  }

  // handle ques change
  const handleQuestionChange = (index, field, value) => {
    dispatch(quesPaper({ index, field, value })) //redux
  }

  const subjectInfo = {
    subjectName: data?.subjectName,
    subjectCode: data?.subject_code,
    examCode: data?.exam_code,
    batch: data?.batch,
    date: data?.date,
    instructorEmail: data?.email,
    group: data?.group,
    examID: data?._id
  }
  //submit
  const handleSubmit = event => {
    event.preventDefault()
    const paperData = {
      ...subjectInfo,
      ...formData,
      type,
      questions,
      mode: 'live',
      secretCode: randomNumbers
    }

    console.log('Question Paper Data:', paperData)

    fetch('https://e-exam-pro-server.vercel.app/liveQuestionPaper', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paperData)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  console.log(type)

  useEffect(() => {
    if (e_id !== null) {
      fetch(`https://e-exam-pro-server.vercel.app/notice?selectedID=${e_id}`)
        .then(res => res.json())
        .then(data => setData(data))
    }
  }, [e_id])

  console.log(data, '----------------------------------------------------yay')

  // Function to generate random numbers
  const generateRandomNumbers = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let randomString = ''

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      randomString += characters.charAt(randomIndex)
    }

    setRandomNumbers(randomString)
  }

  return (
    <div className='mx-2 my-5 md:container md:mx-auto'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl'>Question Paper</h1>
        <p className='font-semibold'>
          {type == 'mcq' && '( MCQ )'}
          {type == 'FillInTheBlank' && '( Fill in the Blank )'}
        </p>
      </div>

      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className='mb-5'>
          <label className='label'>
            <span className='label-text'>Exam Type</span>
          </label>
          <select
            onChange={e => {
              //setQuestions([]) Redux
              dispatch(examType(''))
              dispatch(examType(e.target.value))
            }}
            className='w-full  select select-bordered select-sm'
          >
            <option disabled selected>
              Choose Type
            </option>
            <option value='mcq'>MCQ</option>
            <option value='multimedia_mcq'>Multimedia MCQ</option>
            <option value='FillInTheBlank'>Fill in the Blank</option>
          </select>
        </div>

        <div className='mb-5 md:ms-auto'>
          <label className='label'>
            <span className='label-text'>Choose Exam</span>
          </label>
          <select
            onChange={e => {
              //setQuestions([]) Redux
              dispatch(setExamData(null))
              dispatch(setExamData(e.target.value))
            }}
            className='w-full  select select-bordered select-sm'
          >
            <option disabled selected>
              Choose Type
            </option>

            {notices?.map(notice => {
              console.log(notice)
              return (
                <option
                  className='text-white'
                  key={notice._id}
                  value={notice._id}
                >
                  {notice?.subjectName} ({notice?.date})
                </option>
              )
            })}
          </select>
        </div>
      </div>


    <div className='flex w-full  justify-center mb-5'>
        <div className='grid  w-full md:w-1/2 grid-cols-1 gap-x-4 md:grid-cols-3 '>
          <div className='w-full  form-control'>
            <label className='label'>
              <span className='label-text'>Subject Name</span>
            </label>
            <h1 className='flex items-center w-full input input-bordered '>
              {data?.subjectName}
            </h1>
          </div>
          <div className='w-full  form-control'>
            <label className='label'>
              <span className='label-text'>Exam Code</span>
            </label>

            <h1 className='flex items-center w-full input input-bordered '>
              {data?.exam_code}
            </h1>
          </div>
          <div className='w-full  form-control'>
            <label className='label'>
              <span className='label-text'>Subject Code</span>
            </label>

            <h1 className='flex items-center w-full input input-bordered '>
              {data?.subject_code}
            </h1>
          </div>
          <div className='w-full  form-control'>
            <label className='label'>
              <span className='label-text'>Batch</span>
            </label>

            <h1 className='flex items-center w-full input input-bordered '>
              {data?.batch}
            </h1>
          </div>
          <div className='w-full  form-control'>
            <label className='label'>
              <span className='label-text'>Date</span>
            </label>

            <h1 className='flex items-center w-full input input-bordered '>
              {data?.date}
            </h1>
          </div>
          <div className='w-full  form-control'>
            <label className='label'>
              <span className='label-text'>Email:</span>
            </label>

            <h1 className='flex items-center w-full input input-bordered '>
              {data?.email == user?.email && data?.email}
            </h1>
          </div>
          <div className='w-full  form-control'>
            <label className='label'>
              <span className='label-text'>Secrete Key:</span>
            </label>

            <div className='relative'>
              <h1 className='flex items-center w-full input input-bordered pe-20'>
                {randomNumbers}
              </h1>
              <button
                onClick={generateRandomNumbers}
                className='absolute top-0 bottom-0 right-2'
              >
                <FaKey></FaKey>
              </button>
            </div>
          </div>

          {type == 'multimedia_mcq' && (
            <div className='w-full  form-control'>
              <label className='label'>
                <span className='label-text'>Video URL:</span>
              </label>
              <input
                name='video'
                value={formData.video}
                onChange={handleInputChange}
                type='text'
                placeholder='Type here'
                className='w-full  input input-bordered'
              />
            </div>
          )}
        </div>
      </div>


      {type && (
        <div className='mt-5'>
          {questions?.map((question, index) => (
            <div key={index} className='mb-3'>
              <label className='label'>
                <span className='text-xl label-text'>Question {index + 1}</span>
              </label>
              <input
                type='text'
                value={question.question}
                onChange={e =>
                  handleQuestionChange(index, 'question', e.target.value)
                }
                className='w-full input input-bordered'
                placeholder='Type the question'
              />
              <div className='flex flex-col items-center justify-center gap-2'>
                <div className='grid grid-cols-2 mt-4 gap-x-10'>
                  {(type === 'mcq' || type === 'multimedia_mcq') &&
                    question?.options?.map((option, optionIndex) => (
                      <input
                        key={optionIndex}
                        type='text'
                        value={option}
                        onChange={e =>
                          handleQuestionChange(
                            index,
                            'options',
                            question.options.map((opt, i) =>
                              i === optionIndex ? e.target.value : opt
                            )
                          )
                        }
                        className='mt-2 input input-bordered'
                        placeholder={`Option ${optionIndex + 1}`}
                      />
                    ))}
                </div>
              </div>
              {(type === 'mcq' || type === 'multimedia_mcq') && (
                <>
                  <label className='label'>
                    <span className='text-xl label-text'>Correct Answer:</span>
                  </label>
                  <input
                    type='text'
                    value={question.correctAnswer}
                    onChange={e =>
                      handleQuestionChange(
                        index,
                        'correctAnswer',
                        e.target.value
                      )
                    }
                    className='w-1/2 mt-2 input input-sm input-bordered'
                    placeholder='Correct Answer'
                  />
                </>
              )}
              {type === 'FillInTheBlank' && (
                <input
                  type='text'
                  value={question.correctAnswer}
                  onChange={e =>
                    handleQuestionChange(index, 'correctAnswer', e.target.value)
                  }
                  className='w-full mt-2 input input-bordered'
                  placeholder='Correct Answer'
                />
              )}
            </div>
          ))}
        </div>
      )}

      <div className='flex flex-col items-center justify-center gap-3'>
        <button
          disabled={type == null ? true : false}
          onClick={handleQuestionAdd}
          className='mt-2 btn btn-sm btn-primary'
        >
          {type !== null ? 'Add Question' : 'Select Exam Type'}
        </button>
        <button
          disabled={questions.length < 3}
          onClick={handleSubmit}
          className='btn btn-sm btn-warning'
          type='submit'
        >
          Save Questions Paper
        </button>
      </div>
    </div>
  )
}

export default CreateLiveExam
