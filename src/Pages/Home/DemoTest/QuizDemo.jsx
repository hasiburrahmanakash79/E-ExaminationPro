import React from 'react'
import './demoTest.css'
import { RadioGroup } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  nextQuestion,
  selectOption,
  submitTest
} from '../../../redux/features/demoExam/demoExamSlice'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const QuizDemo = () => {
  const dispatch = useDispatch()
  const { questions, userAnswers, currentQuestionIndex, isSubmitted } =
    useSelector(state => state.demoExam)
  const currentQuestion = questions[currentQuestionIndex]
  const reduxSelectedOption =
    userAnswers[currentQuestionIndex]?.selectedOptionId || null

  //console.log(reduxSelectedOption)
  const handleSelectOption = selectedOptionId => {
    dispatch(selectOption({ questionId: currentQuestion.id, selectedOptionId }))
  }
  const handleNextQuestion = () => {
    dispatch(nextQuestion())
  }
  const handleSubmit = () => {
    dispatch(submitTest())
  }
  return (
    <div className='w-3/4 md:w-2/4 h-full mx-auto md:pt-12'>
      <Helmet>
        <title>E-ExamPro | Exams </title>
      </Helmet>
      <div className='space-y-2'>
        <h2 className='text-lg font-semibold text-orange-400'>
          Question {currentQuestionIndex + 1} :
        </h2>
        <p className='text-xl font-semibold'>{currentQuestion.text}</p>
        <RadioGroup value={reduxSelectedOption} onChange={handleSelectOption}>
          <RadioGroup.Label className='text-sm text-slate-200'>
            Select an option:
          </RadioGroup.Label>
          <div className='mt-2'>
            {currentQuestion.choices.map(choice => (
              <RadioGroup.Option key={choice.id} value={choice.id}>
                {({ active, checked }) => (
                  <div
                    className={`bg-transparent ${
                      active
                        ? 'ring-2 ring-sky-400 ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                        : 'my-4'
                    } ${
                      checked
                        ? 'bg-sky-700 bg-opacity-75 outline-none bg-white/20'
                        : 'text-red-100'
                    } relative outline  outline-purple-600  flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline`}
                  >
                    <div className='flex items-center justify-between w-full'>
                      <div className='flex items-center'>
                        <div className='text-sm'>
                          <RadioGroup.Label
                            as='p'
                            className={`font-medium ${
                              checked ? 'text-white' : 'text-slate-400'
                            }`}
                          >
                            {choice.text}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className='text-white shrink-0'>
                          <CheckIcon className='w-6 h-6' />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <div className='flex justify-end w-11/12 py-4 mx-auto '>
          {currentQuestionIndex === questions.length - 1 ? (
            <Link to='/demo-result' className=' btn_quiz primary-btn'>
              <button onClick={handleSubmit}>Submit</button>
            </Link>
          ) : (
            <button
              disabled={
                reduxSelectedOption === null ||
                reduxSelectedOption === undefined
              }
              className='primary-btn btn_quiz'
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuizDemo
