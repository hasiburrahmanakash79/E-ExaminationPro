import './QuesAccordion.css'

const QuesAccordion = ({ shortQuestions }) => {
  return (
    <div className='container body md:mx-auto'>
      <div className='accordion'>
        {shortQuestions?.map((sq, index) => (
          <div key={index}>
            {sq.questions.map((question, qIndex) => (
              <div key={qIndex}>
                <input
                  type='radio'
                  name={`accordion-${index}`}
                  id={`question-${index}-${qIndex}`}
                />
                <label htmlFor={`question-${index}-${qIndex}`}>
                  {question?.question}
                </label>
                <div className='content'>
                  <p>{question?.answer}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuesAccordion
