/* eslint-disable react/prop-types */
const QuizProgressVisualizer = ({
  questions,
  userAnswers,
  currentQuestionIndex,
  onQuestionIndexClick
}) => {
  return (
    <section className='grid w-64 grid-cols-4 gap-3 place-content-center'>
      {questions.map((question, index) => {
        const isSelected = currentQuestionIndex === index
        const selectedAnswer = userAnswers.find(
          answer => answer.questionId === question.id
        )

        return (
          <div
            key={question.id}
            className={`border hover:scale-105 h-10 text-center pt-1 hover:outline ${
              isSelected
                ? 'text-xl hover: ag-slate-300 hover:text-blue-900 hover:font-bold hover:delay-75'
                : 'text-lg  ag-transparent'
            }
            ${selectedAnswer ? ' ag-green-500' : ''} ${
              isSelected ? ' ag-slate-400 ' : ''
            }`}
            onClick={() => onQuestionIndexClick(index)}
          >
            {index + 1}
          </div>
        )
      })}
    </section>
  )
}
export default QuizProgressVisualizer
