const ReviewAnswerAfterResult2 = ({ singleQ }) => {
  return (
    <>
      <div className='p-2 my-2 space-y-3 transition-all border-2 rounded shadow-xl hover:   '>
        <p className='text-lg font-semibold  '>{singleQ?.question}</p>
        {/* TODO: making a indicator to show it's the right answer for which user clicks on the right answer */}
        <p className='text-sm'>
          User Answer :
          <span
            className={
              singleQ?.correctAnswer == singleQ?.userAns
                ? 'font-semibold '
                : 'font-semibold text-red-500'
            }
          >
            {' '}
            {singleQ?.userAns}
          </span>
        </p>
        <p className='text-sm'>
          Correct Answer :{' '}
          <span className='text-base font-semibold  '>
            {' '}
            {singleQ?.correctAnswer}
          </span>
        </p>
      </div>
      {/* {questions?.map((question, index) => {
        const userAnswer = userAnswers.find(
          answer => answer?.questionId === question?.id
        )
        return (
          <div className='w-1/2 mx-auto my-12' key={question?.id}>
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
      })} */}
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

export default ReviewAnswerAfterResult2
