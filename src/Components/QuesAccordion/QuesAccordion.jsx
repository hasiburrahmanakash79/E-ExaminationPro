import './QuesAccordion.css'

const QuesAccordion = ({ shortQuestions, answers }) => {
  const answersArray = answers
  console.log(answersArray)
  return (
    <div className='container sticky text-2xl text-white top-44 body md:mx-auto'>
      <div className='accordion min-w-100'>
        {shortQuestions?.map((sq, index) => (
          <div key={index}>
            {sq.questions.map(question => {
              const answer = answersArray?.find(
                a => a?.questionId == question?.id
              )
              console.log(question)
              console.log(question.question, answer)

              return (
                <div
                  className='p-5 m-5 rounded-md shadow-2xl primary-bg'
                  key={question.id}
                >
                  <input
                    type='radio'
                    name={`accordion-${index}`}
                    id={`question-${index}-${question.id}`}
                  />
                  <label
                    className='label1'
                    htmlFor={`question-${index}-${question.id}`}
                  >
                    {question?.question}
                  </label>
                  <div className='content '>
                    <p className='text-xl '>{answer?.answer}</p>{' '}
                    {/* Use answer directly */}
                    <p className='text-xl '>{answer?.questionId}</p>
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuesAccordion
