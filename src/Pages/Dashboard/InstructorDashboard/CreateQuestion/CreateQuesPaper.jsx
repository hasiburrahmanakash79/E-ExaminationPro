import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  examType,
  subjectInfo,
  quesPaper,
  setSubject,
  setEmail,
  setSubjectCode
} from '../../../../redux/features/quesPaper/quesPaperSlice'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../../Provider/AuthProvider'
import { Helmet } from 'react-helmet-async'
import { LocalToastTarget, useLocalToast } from 'react-local-toast'

const CreateQuesPaper = () => {
  const { showToast, removeToast } = useLocalToast()
  const { user } = useContext(AuthContext)
  const dispatch = useDispatch()
  const {
    type,
    formData,
    questions,
    allSubject,
    codeRepeat: codeRepeat
  } = useSelector(state => state.questionPaper)
  useEffect(() => {
    fetch('http://localhost:3500/allSubjects', {
      headers: {
        authorization: `bearar ${localStorage.getItem('access-token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data)

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

  const [iscodeRepeat, setIscodeRepeat] = useState(null)
  useEffect(() => {
    fetch(
      `http://localhost:3500/questionCode?code=${codeRepeat}`
    )
      .then(res => res.json())
      .then(data => setIscodeRepeat(data.result))
  }, [codeRepeat])

  console.log(
    iscodeRepeat,
    '------------------------------------------------------------52'
  )

  const [isDateTimeRepeat, setIsDateTimeRepeat] = useState(null)
  useEffect(() => {
if( formData.date && formData.examTime && formData?.batch) {
    fetch(
      `http://localhost:3500/questionDate&Time?date=${formData.date}&examTime=${formData.examTime}&batch=${formData?.batch}`
    )
      .then(res => res.json())
      .then(data => setIsDateTimeRepeat(data.result))
}
else{
  setIsDateTimeRepeat(null)
}
  }, [formData?.date,formData?.examTime,formData?.batch])

  console.log(isDateTimeRepeat, 'date time')

  // store basic info
  const handleInputChange = event => {
    event.preventDefault()
    dispatch(subjectInfo(event)) // redux
  }

  // Function to handle changes in the selected subject
  const handleSubjectChange = event => {
    const selectedValue = event.target.value
    const selectedSubjectData = allSubject.find(
      subject => subject.subject_name === selectedValue
    )
    //console.log(selectedSubjectData?.subject_code)
    const code = selectedSubjectData?.subject_code
    dispatch(setSubjectCode(code))
    dispatch(subjectInfo(event))
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

  // const [errorQues, setErrorQues] = useState(false)
  // const [errorOption, setErrorOption] = useState(false)
  // const [errorCorrect, setErrorCorrect] = useState(false)

  //submit
  const handleSubmit = event => {
    event.preventDefault()
    // setErrorQues(false)
    // setErrorOption(false)
    // setErrorCorrect(false)
    const paperData = {
      ...formData,
      type,
      questions
    }

    //console.log('Question Paper Data:', paperData)
    console.log(
      paperData.subjectName,
      paperData.exam_code,
      paperData.exam_code,
      paperData.date
    )
    if (
      paperData.subjectName == null ||
      paperData.exam_code == null ||
      paperData.exam_code == null ||
      paperData.date == null ||
      (type == 'multimedia_mcq' && paperData.videoURL == null)
    ) {
      return showToast('btn', 'All Input Field Should Be Filled Up', {
        type: 'error'
      })
    }

    if (paperData.questions.length < 5) {
      return showToast('btn', 'You Have To Added At Least Five Question', {
        type: 'error'
      })
    }

    fetch('http://localhost:3500/questionPaper', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paperData)
    })
      .then(res => res.json())
      .then(data => {
        //console.log(data)
        if (data.insertedId) {
          showToast('btn', 'Question Created Successfully', { type: 'success' })
        } else {
          showToast('btn', 'Exam Code Duplicated', { type: 'error' })
        }
      })
  }

  //console.log(type)
  return (
    <div className='mx-2 my-5 md:container md:mx-auto'>
      <Helmet>
        <title>E-ExamPro | Create Question</title>
      </Helmet>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl'>Question Paper</h1>
        <p className='font-semibold'>
          {type == 'mcq' && '( MCQ )'}
          {type == 'FillInTheBlank' && '( Fill in the Blank )'}
        </p>
      </div>

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
          className='w-full max-w-xs select select-bordered select-sm'
        >
          <option disabled selected>
            Choose Type
          </option>
          <option className='text-black' value='mcq'>MCQ</option>
          <option className='text-black' value='multimedia_mcq'>Multimedia MCQ</option>
          <option className='text-black' value='FillInTheBlank'>Fill in the Blank</option>
        </select>
      </div>

      <div className='flex justify-center mb-5'>
        <div className='grid grid-cols-1 gap-x-4 md:grid-cols-3 '>
          <div className='w-full max-w-xs form-control'>
            <label className='label'>
              <span className='label-text'>Subject Name</span>
            </label>
            <select
              name='subjectName'
              value={formData.subjectName}
              onChange={handleSubjectChange}
              className='w-full max-w-xs select select-bordered'
            >
              <option value={null}>Select Subject</option>
              {allSubject?.map(subject => (
                <option key={subject.subject_name} value={subject.subject_name}>
                  {subject.subject_name}
                </option>
              ))}
            </select>
          </div>
          <div className='w-full max-w-xs form-control'>
            <label className='label'>
              <span className='label-text'>Exam Code</span>
            </label>
            <input
              required
              name='exam_code'
              value={formData.exam_code}
              onChange={handleInputChange}
              type='text'
              placeholder='Type here'
              className='w-full max-w-xs input input-bordered'
            />
            {iscodeRepeat == true && (
              <h1 className='mt-2 text-red-500'>Try Another Code</h1>
            )}
          </div>
          <div className='w-full max-w-xs form-control'>
            <label className='label'>
              <span className='label-text'>Subject Code</span>
            </label>
            <input
              name='subject_code'
              value={formData.subject_code}
              readOnly
              type='text'
              placeholder='Type here'
              className='w-full max-w-xs input input-bordered'
            />
          </div>
          <div className='w-full max-w-xs form-control'>
            <label className='label'>
              <span className='label-text'>Batch</span>
            </label>
            <input
              required
              name='batch'
              value={formData.batch}
              onChange={handleInputChange}
              type='text'
              placeholder='Type here'
              className='w-full max-w-xs input input-bordered'
            />
          </div>

          <div className='w-full max-w-xs form-control'>
            <label className='label'>
              <span className='label-text'>Date</span>
            </label>
            <input
              required
              name='date'
              value={formData.date}
              onChange={handleInputChange}
              type='date'
              placeholder='Type here'
              className='w-full max-w-xs input input-bordered'
            />
            {isDateTimeRepeat == true && (
              <p className='mt-2 text-red-500'>
                Time Already Set For Batch {formData?.batch} On This Date{' '}
              </p>
            )}
          </div>

          <div className='w-full max-w-xs form-control'>
            <label className='label'>
              <span className='label-text'>Exam Time</span>
            </label>
            <input
              required
              name='examTime'
              value={formData.examTime}
              onChange={handleInputChange}
              type='time'
              placeholder='Type here'
              className='w-full max-w-xs input input-bordered'
            />
            {isDateTimeRepeat == true && (
              <p className='mt-2 text-red-500'>
                Time Already Set For Batch {formData?.batch} On This Date{' '}
              </p>
            )}
          </div>

          <div className='w-full max-w-xs form-control'>
            <label className='label'>
              <span className='label-text'>Email:</span>
            </label>
            <input
              name='email'
              value={user?.email}
              readOnly
              type='text'
              placeholder='Type here'
              className='w-full max-w-xs input input-bordered'
            />
          </div>
          <div className='w-full max-w-xs form-control'>
            <label className='label'>
              <span className='label-text'>Total Time</span>
            </label>
            <input
              required
              name='time'
              value={formData.time}
              onChange={handleInputChange}
              type='number'
              placeholder='In minutes'
              className='w-full max-w-xs input input-bordered'
            />
          </div>
          {type == 'multimedia_mcq' && (
            <div className='w-full max-w-xs form-control'>
              <label className='label'>
                <span className='label-text'>Video URL:</span>
              </label>
              <input
                required
                name='video'
                value={formData.video}
                onChange={handleInputChange}
                type='text'
                placeholder='Type here'
                className='w-full max-w-xs input input-bordered'
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
                <span className='text-xl label-text '>
                  Question <span className='aext-yellow-500'>{index + 1}</span>
                </span>
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
                  <label className='label'>
                    <span className='text-xl label-text'>Hints:</span>
                  </label>
                  <input
                    type='text'
                    value={question.hints}
                    onChange={e =>
                      handleQuestionChange(index, 'hints', e.target.value)
                    }
                    className='w-1/2 mt-2 input input-sm input-bordered'
                    placeholder='Hints'
                  />
                </>
              )}
              {type === 'FillInTheBlank' && (
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
                    className='w-full mt-2 input input-bordered'
                    placeholder='Correct Answer'
                  />
                  <label className='label'>
                    <span className='text-xl label-text'>Hints:</span>
                  </label>
                  <input
                    type='text'
                    value={question.hints}
                    onChange={e =>
                      handleQuestionChange(index, 'hints', e.target.value)
                    }
                    className='w-1/2 mt-2 input input-sm input-bordered'
                    placeholder='Hints'
                  />
                </>
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
        <LocalToastTarget name='btn'>
          <button
            disabled={iscodeRepeat == true}
            onClick={handleSubmit}
            className='btn btn-sm btn-warning'
            type='submit'
          >
            Save Questions Paper
          </button>
        </LocalToastTarget>
      </div>
    </div>
  )
}

export default CreateQuesPaper
