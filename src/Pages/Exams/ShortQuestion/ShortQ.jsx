import { useState } from 'react'
import QuesAccordion from '../../../components/QuesAccordian/QuesAccordion'
import TextEditor from '../../../Components/TextEditor/TextEditor'

const ShortQ = () => {
  let shortQues = [
    {
      id: 1,
      question: 'What is the law of conservation of energy?',
      ans: 'The law of conservation of energy states that energy cannot be created or destroyed, only converted from one form to another.'
    },
    {
      id: 2,
      question: 'What is the law of conservation of energy?',
      ans: 'The law of conservation of energy states that energy cannot be created or destroyed, only converted from one form to another.'
    },
    {
      id: 3,
      question: 'What is the law of conservation of energy?',
      ans: 'The law of conservation of energy states that energy cannot be created or destroyed, only converted from one form to another.'
    },
    {
      id: 4,
      question: 'What is the law of conservation of energy?',
      ans: 'The law of conservation of energy states that energy cannot be created or destroyed, only converted from one form to another.'
    },
    {
      id: 5,
      question: 'What is the law of conservation of energy?',
      ans: 'The law of conservation of energy states that energy cannot be created or destroyed, only converted from one form to another.'
    }
  ]
  shortQues = useSu
  const [shortQs, setShortQs] = useState(shortQues)
  const [questionIndex, setQuestionIndex] = useState(0)

  return (
    <section className='py-20'>
      <h2 className='text-2xl text-center col-span-full'>Short Questions</h2>
      {shortQs.map(sq => (
        <div
          key={sq.id}
          className='grid grid-cols-1 md:grid-cols-5 place-items-center '
        >
          <div className='col-span-2'>
            <TextEditor sq={sq} />
          </div>
          <div className='col-span-2'>
            <QuesAccordion sq={sq} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default ShortQ