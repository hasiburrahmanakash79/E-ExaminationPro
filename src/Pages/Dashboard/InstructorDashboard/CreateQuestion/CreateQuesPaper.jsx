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

const CreateQuesPaper = () => {
  const { user } = useContext(AuthContext)
  const dispatch = useDispatch()
  const { type, formData, questions, allSubject } = useSelector(
    state => state.questionPaper
  )
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

  // Function to handle changes in the selected subject
  const handleSubjectChange = event => {
    const selectedValue = event.target.value;
    const selectedSubjectData = allSubject.find(subject => subject.subject_name === selectedValue);
    console.log(selectedSubjectData?.subject_code)
    const code = selectedSubjectData?.subject_code
    dispatch(setSubjectCode(code))
    dispatch(subjectInfo(event))
  };


  //handle ques add
  const handleQuestionAdd = (event) => {
    event.preventDefault()
    dispatch(quesPaper({ add: 'add' })) // redux
  }

  // handle ques change
  const handleQuestionChange = (index, field, value) => {
    dispatch(quesPaper({ index, field, value })) //redux
  }

  //submit
  const handleSubmit = event => {
    event.preventDefault()
    const paperData = {
      ...formData,
      type,
      questions
    }

    console.log('Question Paper Data:', paperData)

    // fetch('http://localhost:4000/questionPaper', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(paperData)
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
  }

  console.log(type)
  return (
    <div className='my-5 mx-2 md:container md:mx-auto'>
      <Helmet><title>E-ExamPro | Create Question</title></Helmet>
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
          className='select select-bordered select-sm w-full max-w-xs'
        >
          <option disabled selected>
            Choose Type
          </option>
          <option value='mcq'>MCQ</option>
          <option value='multimedia_mcq'>Multimedia MCQ</option>
          <option value='FillInTheBlank'>Fill in the Blank</option>
        </select>
      </div>

      <div className='flex justify-center mb-5'>
        <div className='grid grid-cols-1 gap-x-4  md:grid-cols-3 '>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Subject Name</span>
            </label>
            {/* <input
              name='subjectName'
              value={formData.subjectName}
              onChange={handleInputChange}
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
            /> */}
            <select
              name='subjectName'
              value={formData.subjectName}
              onChange={handleSubjectChange}
              className='select select-bordered w-full max-w-xs'
            >
              <option disabled value=''>
                Select Subject
              </option>
              {allSubject?.map(subject => (
                <option key={subject.subject_name} value={subject.subject_name}>
                  {subject.subject_name}
                </option>
              ))}
            </select>
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Exam Code</span>
            </label>
            <input
              name='exam_code'
              value={formData.exam_code}
              onChange={handleInputChange}
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Subject Code</span>
            </label>
            <input
              name='subject_code'
              value={formData.subject_code}
              readOnly
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Semester</span>
            </label>
            <input
              name='semester'
              value={formData.semester}
              onChange={handleInputChange}
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Date</span>
            </label>
            <input
              name='date'
              value={formData.date}
              onChange={handleInputChange}
              type='date'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
            />
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Email:</span>
            </label>
            <input
              name='email'
              value={user?.email}
              readOnly
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
            />
          </div>

          {type == 'multimedia_mcq' && (
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Video URL:</span>
              </label>
              <input
                name='video'
                value={formData.video}
                onChange={handleInputChange}
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
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
                <span className='label-text text-xl'>Question {index + 1}</span>
              </label>
              <input
                type='text'
                value={question.question}
                onChange={e =>
                  handleQuestionChange(index, 'question', e.target.value)
                }
                className='input input-bordered w-full'
                placeholder='Type the question'
              />
              <div className='flex flex-col items-center gap-2 justify-center'>
                <div className='grid mt-4 gap-x-10 grid-cols-2'>
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
                        className='input input-bordered  mt-2'
                        placeholder={`Option ${optionIndex + 1}`}
                      />
                    ))}
                </div>
              </div>
              {(type === 'mcq' || type === 'multimedia_mcq') && (
                <>
                  <label className='label'>
                    <span className='label-text text-xl'>Correct Answer:</span>
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
                    className='input w-1/2 input-sm input-bordered  mt-2'
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
                  className='input input-bordered w-full mt-2'
                  placeholder='Correct Answer'
                />
              )}
            </div>
          ))}
        </div>
      )}

      <div className='flex flex-col gap-3 items-center justify-center'>
        <button
          disabled={type == null ? true : false}
          onClick={handleQuestionAdd}
          className='btn btn-sm btn-primary mt-2'
        >
          {type !== null ? 'Add Question' : 'Select Exam Type'}
        </button>
        <button
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

export default CreateQuesPaper

// // const [type, setType] = useState('')

// // const [formData, setFormData] = useState({
// //     subjectName: '',
// //     subjectCode: '',
// //     semester: '',
// //     date: '',
// //     email: '',
// // });
// // const [questions, setQuestions] = useState([]);

// // store basic info
// const handleInputChange = (event) => {
//     // const { name, value } = event.target;
//     // setFormData((prevData) => ({
//     //     ...prevData,
//     //     [name]: value,
//     // }));
//     dispatch(subjectInfo(event))
// };

// //handle ques add
// const handleQuestionAdd = () => {
//     dispatch(quesPaper())
//     // const newQuestion = {
//     //     question: '',
//     //     options: ['', '', '', ''],
//     //     correctAnswer: '',
//     // };
//     //setQuestions([...questions, newQuestion]);
// };

// // handle ques change
// const handleQuestionChange = (index, field, value) => {
//     dispatch(quesPaper({ index, field, value }))
//     // const updatedQuestions = [...questions];
//     // updatedQuestions[index][field] = value;
//     //setQuestions(updatedQuestions);
// };
