import React, { useState } from 'react'
import './TextEditor.css'

const TextEditor = ({ shortQuestions, onAnswerSubmit }) => {
  const [answers, setAnswers] = useState([]) // Store answer objects in an array

  const handleTextareaChange = (questionId, value) => {
    const existingAnswerIndex = answers.findIndex(
      answer => answer.questionId === questionId
    )

    if (existingAnswerIndex !== -1) {
      // If an answer object already exists for the question, update it
      const updatedAnswers = [...answers]
      updatedAnswers[existingAnswerIndex] = { questionId, answer: value }
      setAnswers(updatedAnswers)
    } else {
      // If no answer object exists for the question, create a new one
      setAnswers(prevAnswers => [...prevAnswers, { questionId, answer: value }])
    }
  }

  const handleSubmit = () => {
    onAnswerSubmit(answers) // Pass all collected answer objects to the parent component
    console.log(answers)
  }

  return (
    <>
      {shortQuestions?.map((sq, index) => (
        <div key={index}>
          {sq.questions.map(question => (
            <form
              key={question.id}
              className='primary-bg px-3 md:px-7 shadow-xl mx-auto my-6 min-h-[40vh]  rounded-md'
            >
              <div className='p-4 text-2xl text-center text-white '>
                Question: {question?.question}
                Question: {question?.id}
              </div>

              <textarea
                value={
                  (
                    answers.find(answer => answer.questionId === question.id) ||
                    {}
                  ).answer || ''
                } // Get answer from state
                onChange={e =>
                  handleTextareaChange(question.id, e.target.value)
                } // Update state on change
                className='w-full min-h-[30vh] text-black bg-white rounded-md'
              />

              <div className='mt-2'>
                <button
                  type='button' // Use type='button' to prevent form submission
                  onClick={handleSubmit}
                  className='px-6 py-2 text-lg font-medium tracking-wide text-white bg-orange-600 rounded-md'
                >
                  Ans Submit
                </button>
              </div>
            </form>
          ))}
        </div>
      ))}
    </>
  )
}

export default TextEditor
