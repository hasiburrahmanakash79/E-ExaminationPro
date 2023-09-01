import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  examType,
  subjectInfo,
  quesPaper
} from '../../../../redux/features/quesPaper/quesPaperSlice'

const CreateQuesPaper = () => {
  /////redux////
  const { type, formData, questions } = useSelector(
    state => state.questionPaper
  )
  const dispatch = useDispatch()
  ////////

  // store basic info
  const handleInputChange = event => {
    dispatch(subjectInfo(event)) // redux
  }

  //handle ques add
  const handleQuestionAdd = () => {
    dispatch(quesPaper()) // redux
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

    fetch('https://e-exam-pro-server.vercel.app/questionPaper', {
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
  return (
    <div className='my-5 mx-2 md:container md:mx-auto'>
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
            <input
              name='subjectName'
              value={formData.subjectName}
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
              name='subjectCode'
              value={formData.subjectCode}
              onChange={handleInputChange}
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
              type='text'
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
              value={formData.email}
              onChange={handleInputChange}
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
          onClick={handleQuestionAdd}
          className='btn btn-sm btn-primary mt-2'
        >
          Add Question
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
