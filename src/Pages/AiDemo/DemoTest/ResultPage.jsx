import { useState } from 'react'
import { Link } from 'react-router-dom'
import ReviewAnswerAfterResult from '../../../components/examComponents/QuestionRelated/ReviewAnswerAfterResult'
// import ReviewAnswerAfterResult from '../../../components/QuestionRelated/ReviewAnswerAfterResult'

const ResultPage = ({ questions, userAnswers }) => {
  const [showReviewAnswers, setShowReviewAnswers] = useState(false)

  const correctAnswers = questions.reduce((acc, question, index) => {
    return userAnswers[index] === question.correctAnswer ? acc + 1 : acc
  }, 0)

  const totalQuestions = questions.length

  return (
    <div className='grid justify-between w-9/12 grid-cols-1 mx-auto space-y-6 h-fit md:grid-cols-3 primary-bg2 md:p-6 place-content-center text-slate-200'>
      <div className='col-span-1 space-y-4 md:col-span-2'>
        <h1 className='text-2xl font-semibold'>Quiz Results</h1>
        <p className='text-xl'>Total Questions: {totalQuestions}</p>
        <p className='text-xl'>Correct Answers: 3</p>
        <button
          className=' btn_quiz primary-bg'
          onClick={() => setShowReviewAnswers(!showReviewAnswers)}
        >
          Show Review Answers
        </button>
        {showReviewAnswers && (
          <ReviewAnswerAfterResult
            questions={questions}
            userAnswers={userAnswers}
          />
        )}
      </div>
      <div className='order-1'>
        <Link to='/' className='btn_quiz primary-bg'>
          Go Back
        </Link>
      </div>
    </div>
  )
}

export default ResultPage
