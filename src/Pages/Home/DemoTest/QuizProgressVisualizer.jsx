/* eslint-disable react/prop-types */

const QuizProgressVisualizer = ({
  questions,
  currentQuestionIndex,
  onQuestionIndexClick
}) => {
  return (
    <section className='grid grid-cols-4 gap-3 place-content-center'>
      {questions.map((question, index) => (
        <div
          key={question.id}
          // conditionally changing the color of the small boxes based on the question answered
          className={`border hover:scale-105 h-10 text-center pt-1 hover:outline hover:bg-slate-300 hover:text-blue-900 hover:font-bold hover:delay-75
          ${
            currentQuestionIndex === index
              ? 'bg-slate-400 text-xl text-white'
              : 'text-lg bg-transparent'
          }
          `}
          onClick={() => onQuestionIndexClick(index)}
        >
          {index + 1}
        </div>
      ))}
    </section>
  )
}

export default QuizProgressVisualizer
