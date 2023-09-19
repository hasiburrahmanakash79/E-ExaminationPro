import React from 'react'

const McqPage = ({
  correctAnswer,
  question,
  onSelectOption,
  options,
  answerIndx,
  examType,
  start
}) => {
  return (
    <div>
      <ul className='grid grid-cols-1 gap-4 mt-3 sm:grid-cols-2'>
        {options?.map((option, index) => {
          return (
            <li
              onClick={() =>
                onSelectOption(index, option, question, correctAnswer)
              }
              className={
                index === answerIndx
                  ? 'md:ms-10 text-white  px-5 py-2 border-2 border-slate-100 bg-violet-900  rounded-3xl '
                  : 'box-border md:ms-10 px-5 py-2 border-2 font-semibold border-blue-800 rounded-3xl'
              }
              key={option}
            >
              {' '}
              {((examType == 'multimedia_mcq' && start == true) ||
                examType == 'mcq') &&
                option}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default McqPage
