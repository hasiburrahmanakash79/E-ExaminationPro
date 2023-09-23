const ReviewAnswerAfterResult = ({ questions, userAnswers }) => {
  return (
    <>
      {questions?.map((question, index) => {
        const userAnswer = userAnswers.find(
          answer => answer?.questionId === question?.id
        )
        return (
          <div
            className='p-2 my-2 space-y-3 transition-all border-2 rounded shadow-xl hover:   '
            key={question.id}
          >
            <h1 className='text-xl font-bold'>
              {index + 1}. {question?.text}
            </h1>

            {userAnswer && (
              <p className='my-2 ml-2 font-semibold'>
                You Selected: {userAnswer?.selectedOptionId}
              </p>
            )}
            <p className='ml-2 font-semibold'>
              Correct Answer:{' '}
              <span className='text-green-500'>{question?.correctAnswer}</span>
            </p>
          </div>
        )
      })}

      {/* {shortQuestions && (
        <div>
          {shortQuestions.map(sq => (
            <article key={sq.id}>
              <h3 className='text-lg'>{sq.name}</h3>
              <p>{sq.answer}</p>
            </article>
          ))}
        </div>
      )}
      {longQuestions && (
        <div>
          {longQuestions.map(longQ => (
            <article key={longQ.id}>
              <h3 className='text-lg'>{longQ.name}</h3>
              <p>{longQ.answer}</p>
            </article>
          ))}
        </div>
      )}

      {fillInTheBlanks && (
        <div>
          {fillInTheBlanks.map(fillInBlank => (
            <article key={fillInBlank.id}>
              <h3 className='text-lg'>{fillInBlank.name}</h3>
              <p>{fillInBlank.answer}</p>
            </article>
          ))}
        </div>
      )} */}
    </>
  )
}

export default ReviewAnswerAfterResult
