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
    </>
  )
}

export default ReviewAnswerAfterResult2
