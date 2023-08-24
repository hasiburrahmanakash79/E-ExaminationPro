import './QuesAccordion.css'

const QuesAccordion = ({ shortQuestions, answers }) => {
  console.log(answers)
  return (
    <div className='container sticky text-2xl text-white top-44 body md:mx-auto'>
      <div className='accordion min-w-100'>
        {shortQuestions?.map((sq, index) => (
          <div key={index}>
            {sq.questions.map(question => {
              console.log(answers)
              const answer = answers?.find(a => a?.questionId == question?.id)
              console.log(answer)

              console.log(question, answer)
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
                    <p className='text-xl '>{answer?.answerContent}</p>
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
