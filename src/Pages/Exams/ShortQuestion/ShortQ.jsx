import React, { useState } from 'react'
import QuesAccordion from '../../../components/QuesAccordion/QuesAccordion'
import useShortQuestions from '../../../Hooks/useShortQuestions/useShortQuestions'
import TextEditor from '../../../components/TextEditor/TextEditor'

const ShortQ = () => {
  const [shortQuestions, loading, refetch] = useShortQuestions('Mathematics') //todo
  // const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  if (loading) {
    return null
  }
  // console.log(shortQuestions)
  const handleAnswersSubmit = (questionId, answerContent) => {
    const newAnswer = { questionId, answerContent }
    setAnswers(prevAnswers => [...prevAnswers, newAnswer])
  }
  // console.log(answers)

  return (
    <section className='container py-20 mx-auto '>
      <h2 className='mb-5 text-5xl text-center '>Short Questions</h2>

      <div className='grid-cols-5 gap-10 md:grid '>
        <div className='col-span-3'>
          {shortQuestions?.map(sq => (
            <div key={sq._id} className='mb-8 '>
              {sq.questions?.map(shortQs => (
                <TextEditor
                  key={shortQs.id}
                  questionId={shortQs.id}
                  onAnswerSubmit={handleAnswersSubmit}
                  shortQs={shortQs}
                />
              ))}
            </div>
          ))}
        </div>
        <div className='col-span-2 '>
          <QuesAccordion shortQuestions={shortQuestions} answers={answers} />
        </div>
      </div>
    </section>
  )
}

export default ShortQ
