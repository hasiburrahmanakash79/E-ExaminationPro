const ReviewAnswerAfterResult = () => {
  const quizzes = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
  ]
  const shortQuestions = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
  ]
  const longQuestions = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
  ]
  const fillInTheBlanks = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
  ]

  return (
    <>
      {quizzes && (
        <div className='grid grid-cols-1 md:grid-cols-3'>
          <h1 className='text-xl font-semibold col-span-full'>Quiz Result</h1>
          {quizzes.map((quiz, index) => (
            <div key={quiz.id} className='hover:outline hover:scale-105'>
              <h1 className='text-xl font-bold'>
                {index + 1}. {quiz.text}
              </h1>

              <p className='my-2 ml-2 font-semibold'>
                You Selected: {quiz.selectedOptionId}
              </p>

              <p className='ml-2 font-semibold'>
                Correct Answer:
                <span className=''>{quiz.correctAnswer}</span>
              </p>
            </div>
          ))}
        </div>
      )}

      {shortQuestions && (
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
      )}
    </>
  )
}

export default ReviewAnswerAfterResult
