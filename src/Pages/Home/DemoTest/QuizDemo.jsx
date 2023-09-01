import React from 'react'
import { RadioGroup } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  nextQuestion,
  selectOption,
  submitTest
} from '../../../redux/features/demoExam/demoExamSlice'
import { CheckIcon } from '@heroicons/react/20/solid'

const QuizDemo = () => {
  const dispatch = useDispatch()
  const { questions, userAnswers, currentQuestionIndex, isSubmitted } =
    useSelector(state => state.demoExam)
  const currentQuestion = questions[currentQuestionIndex]
  const reduxSelectedOption =
    userAnswers[currentQuestionIndex]?.selectedOptionId || null

  console.log(reduxSelectedOption)
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
    <div className='w-1/3 h-screen mx-auto'>
      {isSubmitted ? (
        <div>
          <p>You have already submitted the quiz.</p>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{currentQuestion.text}</p>
          <RadioGroup value={reduxSelectedOption} onChange={handleSelectOption}>
            <RadioGroup.Label>Select an option:</RadioGroup.Label>
            <div className='mt-2'>
              {currentQuestion.choices.map(choice => (
                <RadioGroup.Option key={choice.id} value={choice.id}>
                  {({ active, checked }) => (
                    <div
                      className={`${
                        active
                          ? 'ring-2 ring-sky-300 ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                          : 'my-4'
                      } ${
                        checked
                          ? 'bg-sky-900 bg-opacity-75 text-white'
                          : 'bg-white'
                      } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`}
                    >
                      <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center'>
                          <div className='text-sm'>
                            <RadioGroup.Label
                              as='p'
                              className={`font-medium ${
                                checked ? 'text-white' : 'text-gray-900'
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
          {currentQuestionIndex === questions.length - 1 ? (
            <button onClick={handleSubmit}>Submit</button>
          ) : (
            <button onClick={handleNextQuestion}>Next</button>
          )}
        </div>
      )}
    </div>
  )
}

export default QuizDemo
