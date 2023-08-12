import React, { useState } from 'react'
import ResultPage from './ResultPage'
import QuestionsPage from './QuestionsPage'
import ProgressBar from './ProgressBar'
import './demoTest.css'
import { Link } from 'react-router-dom'

const QuizHomePage = () => {
  const tempQuestions = [
    {
      id: 1,
      text: 'What is the capital of France?',
      choices: [
        { id: 'paris', text: 'Paris' },
        { id: 'london', text: 'London' },
        { id: 'berlin', text: 'Berlin' },
        { id: 'madrid', text: 'Madrid' }
      ],
      correctAnswer: 'paris'
    },
    {
      id: 2,
      text: "Which planet is known as the 'Red Planet'?",
      choices: [
        { id: 'venus', text: 'Venus' },
        { id: 'mars', text: 'Mars' },
        { id: 'jupiter', text: 'Jupiter' },
        { id: 'saturn', text: 'Saturn' }
      ],
      correctAnswer: 'mars'
    }
  ]

  const [questions, setQuestions] = useState(tempQuestions)
  const [userAnswers, setUserAnswers] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  //   handling selecting ans
  const handleSelectOption = (quesId, selectedOptionId) => {
    const existingAnswerIndex = userAnswers.findIndex(
      answer => answer.questionId === quesId
    )

    if (existingAnswerIndex !== -1) {
      const updatedAnswers = [...userAnswers]
      updatedAnswers[existingAnswerIndex] = {
        ...updatedAnswers[existingAnswerIndex],
        selectedOptionId
      }
      setUserAnswers(updatedAnswers)
    } else {
      setUserAnswers(prevUserAnswers => [
        ...prevUserAnswers,
        { questionId: quesId, selectedOptionId }
      ])
    }
  }

  //   handling submission
  const handleSubmit = () => {
    console.log('clicked')
    setIsSubmitted(true)
  }
  const answeredQuestions = userAnswers.length

  const currentQuestion = questions[currentQuestionIndex]
  const totalQuestions = questions.length
  const selectedOption =
    userAnswers.find(answer => answer.questionId === currentQuestion?.id)
      ?.selectedOptionId || null

  const isLastQuestion = currentQuestionIndex === totalQuestions - 1

  // progressbar
  const currentProgress = (answeredQuestions / totalQuestions) * 100
  // sending data to result page
  if (isSubmitted) {
    return <ResultPage questions={questions} userAnswers={userAnswers} />
  }
  return (
    <section className='w-full h-screen md:p-6 navigation-bar2'>
      <div className='mx-auto rounded-lg shadow-lg question_card h-fit md:w-3/5 md:space-y-8'>
        {currentQuestion && (
          <>
            <ProgressBar percent={currentProgress} />
            <QuestionsPage
              question={currentQuestion}
              selectedOption={selectedOption}
              onAnswerSelected={handleSelectOption}
              isLastQuestion={isLastQuestion}
            />
            <div className='relative w-11/12 py-4 mx-auto '>
              {currentQuestionIndex > 0 && (
                <button
                  className='md:absolute md:left-0 btn_quiz navigation-bar'
                  onClick={() =>
                    setCurrentQuestionIndex(currentQuestionIndex - 1)
                  }
                >
                  Previous Question
                </button>
              )}
              {currentQuestionIndex == totalQuestions - 1 ? (
                <button
                  className='md:absolute md:right-0 btn_quiz navigation-bar'
                  disabled={!selectedOption}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              ) : (
                <button
                  className='md:absolute md:right-0 navigation-bar btn_quiz'
                  disabled={!selectedOption}
                  onClick={() => {
                    setCurrentQuestionIndex(currentQuestionIndex + 1)
                  }}
                >
                  Next Question
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default QuizHomePage
