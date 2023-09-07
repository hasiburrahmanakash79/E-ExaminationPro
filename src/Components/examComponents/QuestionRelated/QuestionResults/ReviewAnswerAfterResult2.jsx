const ReviewAnswerAfterResult2 = ({ questions, index, userAnswers }) => {
  // console.log(questions);
  return (
    <>
      <div className="py-2">
        <p><span className="text-xl font-semibold">{index + 1}.</span> <span className="text-lg font-semibold text-slate-100">{questions?.question}</span></p>
        <p className="text-sm">User Answer : {questions?.userAns}</p>
        <p className="text-sm">Correct Answer : <span className=" text-green-600 text-base"> {questions?.correctAnswer}</span></p>
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

export default ReviewAnswerAfterResult2;
