import React from 'react'

const QuestionsPage = ({ question, selectedOption, onAnswerSelected }) => {
  const handleRadioChange = choiceId => {
    onAnswerSelected(question.id, choiceId)
  }

  return (
    <div className='w-1/2 mx-auto text-white md:p-6'>
      <h2 className='pb-4 text-2xl'>{question.text}</h2>
      <ul>
        {question.choices.map(choice => (
          <li key={choice.id} className='w-96'>
            <label
              className={`block cursor-pointer p-3 my-2 w-96 rounded-lg font-semibold hover:bg-slate-500 ${
                selectedOption === choice.id
                  ? 'selected_ans py-4 bg-slate-400 outline-slate-300'
                  : 'hover:text-slate-900 hover:outline'
              }`}
            >
              <input
                className='px-6 sr-only'
                type='radio'
                name={`question_${question.id}`}
                value={choice.id}
                checked={selectedOption === choice.id}
                onChange={() => handleRadioChange(choice.id)}
              />
              {choice.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionsPage
