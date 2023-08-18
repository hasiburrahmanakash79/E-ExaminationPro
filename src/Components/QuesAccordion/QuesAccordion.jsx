import './QuesAccordion.css'

const QuesAccordion = ({ shortQuestions }) => {
  return (
    <div className='container sticky top-44  text-white text-2xl body md:mx-auto'>
      <div className='accordion min-w-100'>
        {shortQuestions?.map((sq, index) => (
          <div key={index}>
            {sq.questions.map((question, qIndex) => (
              <div className=' shadow-2xl m-5 p-5 rounded-md navigation-bar' key={qIndex}>
                <input
                  type='radio'
                  name={`accordion-${index}`}
                  id={`question-${index}-${qIndex}`}
                />
                <label className='label1' htmlFor={`question-${index}-${qIndex}`}>
                  {question?.question}
                </label>
                <div className='content '>
                  <p className='text-xl '>{question?.answer}</p>
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
