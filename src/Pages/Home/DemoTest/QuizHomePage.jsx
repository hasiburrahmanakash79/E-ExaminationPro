// import { useState } from 'react'
// import ResultPage from './ResultPage'
// import QuestionsPage from './QuestionsPage'
// import ProgressBar from './ProgressBar'
// import './demoTest.css'
// import QuizProgressVisualizer from './QuizProgressVisualizer'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//   nextQuestion,
//   selectOption,
//   submitTest
// } from '../../../redux/features/demoExam/demoExamSlice'

// const QuizHomePage = () => {
//   const dispatch = useDispatch()
//   const { userAnswers, currentQuestionIndex, isSubmitted } = useSelector(
//     state => state.demoExam
//   )

//   // const { userAnswers } = useSelector(state => state.demoExamSlice)

//   const questions = [
//     {
//       id: 1,
//       text: 'What is the capital of France?',
//       choices: [
//         { id: 'paris', text: 'Paris' },
//         { id: 'london', text: 'London' },
//         { id: 'berlin', text: 'Berlin' },
//         { id: 'madrid', text: 'Madrid' }
//       ],
//       correctAnswer: 'paris'
//     },
//     {
//       id: 2,
//       text: "Which planet is known as the 'Red Planet'?",
//       choices: [
//         { id: 'venus', text: 'Venus' },
//         { id: 'mars', text: 'Mars' },
//         { id: 'jupiter', text: 'Jupiter' },
//         { id: 'saturn', text: 'Saturn' }
//       ],
//       correctAnswer: 'mars'
//     },
//     {
//       id: 3,
//       text: "Which planet is known as the 'Red Planet'?",
//       choices: [
//         { id: 'venus', text: 'Venus' },
//         { id: 'mars', text: 'Mars' },
//         { id: 'jupiter', text: 'Jupiter' },
//         { id: 'saturn', text: 'Saturn' }
//       ],
//       correctAnswer: 'mars'
//     },
//     {
//       id: 4,
//       text: "Which planet is known as the 'Red Planet'?",
//       choices: [
//         { id: 'venus', text: 'Venus' },
//         { id: 'mars', text: 'Mars' },
//         { id: 'jupiter', text: 'Jupiter' },
//         { id: 'saturn', text: 'Saturn' }
//       ],
//       correctAnswer: 'mars'
//     }
//   ]

//   // const [questions, setQuestions] = useState(tempQuestions)
//   // const [userAnswers, setUserAnswers] = useState([])
//   // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
//   // const [isSubmitted, setIsSubmitted] = useState(false)
//   //   handling selecting ans
//   // const handleSelectOption = (quesId, selectedOptionId) => {
//   //   const existingAnswerIndex = userAnswers.findIndex(
//   //     answer => answer.questionId === quesId
//   //   )

//   //   if (existingAnswerIndex !== -1) {
//   //     const updatedAnswers = [...userAnswers]
//   //     updatedAnswers[existingAnswerIndex] = {
//   //       ...updatedAnswers[existingAnswerIndex],
//   //       selectedOptionId
//   //     }
//   //     setUserAnswers(updatedAnswers)
//   //   } else {
//   //     setUserAnswers(prevUserAnswers => [
//   //       ...prevUserAnswers,
//   //       { questionId: quesId, selectedOptionId }
//   //     ])
//   //   }
//   // }
//   const handleSelectOption = (quesId, selectedOptionId) => {
//     dispatch(selectOption({ questionId: quesId, selectedOptionId }))
//   }

//   // handling navigation to other questions by clicking on the sidebar square that represents which question they are in
//   // const handleQuestionIndicationClick = index => {
//   //   setCurrentQuestionIndex(index)
//   // }
//   const handleNextQuestion = () => {
//     if (isLastQuestion) {
//       dispatch(submitTest())
//     } else {
//       dispatch(nextQuestion(1))
//     }
//   }
//   // TODO:implement reset and start from first btn for starting from first question!!
//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       dispatch(selectOption({ questionId: quesId, selectedOptionId: null }))
//       dispatch(nextQuestion(-1))
//     }
//   }
//   //   handling submission
//   // const handleSubmit = () => {
//   //   console.log('clicked')
//   //   setIsSubmitted(true)
//   // }
//   const handleSubmit = () => {
//     dispatch(submitTest())
//   }
//   const currentQuestion = questions[currentQuestionIndex]
//   const totalQuestions = questions.length
//   const answeredQuestions = userAnswers.length

//   const selectedOption =
//     userAnswers.find(answer => answer.questionId === currentQuestion?.id)
//       ?.selectedOptionId || null

//   const isLastQuestion = currentQuestionIndex === totalQuestions - 1

//   // progressbar
//   const currentProgress = (answeredQuestions / totalQuestions) * 100
//   // sending data to result page
//   if (isSubmitted) {
//     return <ResultPage questions={questions} userAnswers={userAnswers} />
//   }
//   return (
//     <section className='w-full h-screen md:p-6 primary-bg2'>
//       <div className='grid grid-cols-4'>
//         {/* <QuizProgressVisualizer
//           className='col-span-1'
//           questions={questions}
//           currentQuestionIndex={currentQuestionIndex}
//           userAnswers={userAnswers}
//           // onQuestionIndexClick={handleQuestionIndicationClick}
//         /> */}

//         <div className='col-span-3 mx-auto rounded-lg shadow-lg question_card h-fit md:w-3/5 md:space-y-8'>
//           {currentQuestion && (
//             <>
//               <ProgressBar percent={currentProgress} />
//               <QuestionsPage
//                 questions={questions}
//                 // selectedOption={selectedOption}
//                 // onAnswerSelected={handleSelectOption}
//                 // isLastQuestion={isLastQuestion}
//               />
//               <div className='relative w-11/12 py-4 mx-auto '>
//                 {currentQuestionIndex > 0 && (
//                   <button
//                     className='md:absolute md:left-0 btn_quiz primary-bg'
//                     onClick={() =>
//                       setCurrentQuestionIndex(currentQuestionIndex - 1)
//                     }
//                   >
//                     Previous Question
//                   </button>
//                 )}
//                 {currentQuestionIndex == totalQuestions - 1 ? (
//                   <button
//                     className='md:absolute md:right-0 btn_quiz primary-bg'
//                     disabled={!selectedOption}
//                     onClick={handleSubmit}
//                   >
//                     Submit
//                   </button>
//                 ) : (
//                   <button
//                     className='md:absolute md:right-0 primary-bg btn_quiz'
//                     disabled={!selectedOption}
//                     onClick={() => {
//                       handleNextQuestion
//                     }}
//                   >
//                     Next Question
//                   </button>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default QuizHomePage