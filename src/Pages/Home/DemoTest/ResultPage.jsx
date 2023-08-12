import React from 'react'
import { Link } from 'react-router-dom'

const ResultPage = ({ questions, userAnswers }) => {
  console.log(userAnswers)

  return (
    <div className='grid justify-between w-full grid-cols-1 mx-auto space-y-6 md:grid-cols-3 navigation-bar2 md:p-6 h-fit text-slate-200'>
      <div className='col-span-1 md:col-span-2'>
        {questions.map((question, index) => {
          const userAnswer = userAnswers.find(
            answer => answer.questionId === question.id
          )
          return (
            <div className='w-1/2 mx-auto my-12' key={question.id}>
              <h1 className='text-xl font-bold'>
                {index + 1}. {question.text}
              </h1>

              {userAnswer && (
                <p className='my-2 ml-2 font-semibold'>
                  You Selected: {userAnswer.selectedOptionId}
                </p>
              )}
              <p className='ml-2 font-semibold'>
                Correct Answer:{' '}
                <span className=''>{question.correctAnswer}</span>
              </p>
            </div>
          )
        })}

        <Link to='/' className='btn_quiz navigation-bar'>
          Go Back
        </Link>
      </div>
      <div className='order-1'>ha</div>
    </div>
  )
}

export default ResultPage
