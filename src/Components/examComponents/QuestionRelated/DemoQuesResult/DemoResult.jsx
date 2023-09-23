import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ReviewAnswerAfterResult from './ReviewAnswerAfterResult'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import ResultPdfConverter from './ResultPdfConverter'
import { useSelector } from 'react-redux'
import FeedBack from '../QuestionResults/Feedback'
import { getColor } from '../../../../utils/getColor'

const DemoResult = () => {
  const { questions, userAnswers } = useSelector(state => state.demoExam)

  const totalQuestions = questions?.length
  const correctAnswers = userAnswers?.reduce((count, answer) => {
    const question = questions?.find(q => q.id === answer.questionId)
    return question && answer?.selectedOptionId === question.correctAnswer
      ? count + 1
      : count
  }, 0)

  const percentage = (correctAnswers / totalQuestions) * 100

  return (
    <section className='container pt-6 mx-auto h-fit'>
      {/* Top of the result page where we can show TOP SCORE, Export the result */}
      <h2 className='mb-4 text-lg font-bold text-center  break-words md:mb-6 md:text-2xl'>
        This is a demo result page. Please explore exam page for comprehensive
        result experience
      </h2>
      <div className='relative grid w-full py-12'>
        <div className='text-center md:absolute md:right-0'>
          {/* handling the btn where when user clicks his result should be downloaded */}

          <PDFDownloadLink
            document={
              <ResultPdfConverter
                userAnswers={userAnswers}
                questions={questions}
              />
            }
            fileName='result.pdf'
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                'Loading document...'
              ) : (
                <button className='btn primary-btn'>
                  Export Result As PDF
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
        {/* visual progress showing section */}
        <div className='grid grid-cols-1 mt-8 md:gap-8 md:grid-cols-6'>
          <div className='order-2 col-span-1 mb-6 md:order-1 md:col-span-4'>
            <ReviewAnswerAfterResult
              userAnswers={userAnswers}
              questions={questions}
            />
          </div>
          <div className='mb-6 order-1 md:order-2 md:col-span-2 h-fit mx-auto text-center mt-0 md:mb-6 p-3 md:p-6 rounded-lg shadow-md transition duration-300'>
            <h3 className='pb-4 text-xl font-semibold tracking-wider  md:text-lg'>
              Score
            </h3>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                strokeLinecap: 'butt',
                textColor: getColor(percentage),
                pathColor: getColor(percentage),
                trailColor: '#fff'
              })}
            />
          </div>
        </div>
        <div className='mx-auto mb-6 md:ml-auto md:absolute md:right-0 md:bottom-28 lg:bottom-12'>
          {/* Open the modal using ID.showModal() method */}
          <button
            className='btn btn_quiz primary-btn'
            onClick={() => window.my_modal_2.showModal()}
          >
            Give FeedBack
          </button>
          <dialog id='my_modal_2' className=' modal'>
            <form
              method='dialog'
              className='relative max-w-5xl p-0 border w-fit h-fit modal-box primary-bg'
            >
              <small className='absolute top-0 right-0 p-1 text-xs'>
                Press ESC key or click outside to close
              </small>

              <FeedBack />
            </form>
            <form method='dialog' className='modal-backdrop'>
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </section>
  )
}

export default DemoResult
