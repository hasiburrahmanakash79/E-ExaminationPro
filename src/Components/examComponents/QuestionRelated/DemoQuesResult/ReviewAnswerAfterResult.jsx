const ReviewAnswerAfterResult = ({ questions, userAnswers }) => {
  return (
    <>
      {questions?.map((question, index) => {
        const userAnswer = userAnswers.find(
          answer => answer?.questionId === question?.id
        )
        return (
          <div
            className='p-6 my-4 space-y-3 border-2 rounded shadow-xl '
            key={question.id}
          >
            <h1 className='text-xl font-bold'>
              {index + 1}. {question?.text}
            </h1>

            {userAnswer && (
              <p className='my-1 ml-2'>
                You Selected:{' '}
                <span className='font-bold underline underline-offset-2'>
                  {userAnswer?.selectedOptionId}
                </span>
              </p>
            )}
            <p className='ml-2 '>
              Correct Answer:{' '}
              <span className='px-2 py-1 italic font-bold rounded bg-green-600'>
                {question?.correctAnswer}
              </span>
            </p>
          </div>
        )
      })}
    </>
  )
}

export default ReviewAnswerAfterResult
