import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ResultSideBar from './ResultSideBar'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import ReviewAnswerAfterResult from './ReviewAnswerAfterResult'
import FeedBack from '../Feedback/Feedback'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import ResultPdfConverter from './ResultPdfConverter'

const ResultPageForMcqFib = () => {
  /*========Answer Reviewing=======
      ========================*/
  const userAnswers = []
  const questions = [
    {
      text: 'test1',
      correctAnswer: 'correct'
    }
  ]

  //   temp data for bar chart
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ]
  //   result data
  const percentage = 66

  return (
    <section className='grid w-full h-screen grid-cols-5 pt-6 m-auto'>
      <ResultSideBar></ResultSideBar>
      <div className='col-span-1 md:col-span-4'>
        {/* Top of the result page where we can show TOP SCORE, Export the result */}
        <div className='flex items-center justify-between h-fit'>
          <h4 className='p-3 font-semibold text-white rounded-lg outline'>
            TOP SCORE: 100%
          </h4>
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
                <button className='btn primary-bg'>Export Result As PDF</button>
              )
            }
          </PDFDownloadLink>
        </div>
        {/* visual progress showing section */}
        <div className='flex items-center justify-between w-full md:p-4 md:mt-16 h-fit'>
          {/* PieChart to show the performance of the exam based on time took in total , total correct answer  */}
          <div className='w-24 h-24'>
            <CircularProgressbar
              value={75}
              strokeWidth={50}
              styles={buildStyles({
                strokeLinecap: 'butt'
              })}
            />
          </div>
          {/* adding a bar to show each question time to answer */}
          <div style={{ width: '50%', height: 250 }}>
            <ResponsiveContainer>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='pv' fill='#8884d8' />
                <Bar dataKey='uv' fill='#82ca9d' />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* exam result showing in percentage using react-circular-progressbar. Using animation to do that */}
          {/* TODO:make this progressbar animated and dynamic */}
          <div className='w-24'>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                strokeLinecap: 'butt'
              })}
            />
          </div>
        </div>
        {/* bottom options like review answered questions, giving feedback, sharing the result with other social platforms */}
        <div className='grid grid-cols-2 md:gap-3'>
          {/* modal to show review answers */}
          <div>
            {/* Open the modal using ID.showModal() method */}
            <button
              className='btn btn_quiz primary-bg'
              onClick={() => window.my_modal_1.showModal()}
            >
              View Answers
            </button>
            <dialog id='my_modal_1' className=' modal'>
              <form
                method='dialog'
                className='relative w-full h-screen rounded-lg shadow-lg modal-box primary-bg'
              >
                <small className='top-0 right-0 text-xs'>
                  Press ESC key or click outside to close
                </small>

                <ReviewAnswerAfterResult
                  userAnswers={userAnswers}
                  questions={questions}
                />
              </form>
              <form method='dialog' className='modal-backdrop'>
                <button>close</button>
              </form>
            </dialog>
          </div>
          <div>
            {/* Open the modal using ID.showModal() method */}
            <button
              className='btn btn_quiz primary-bg'
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
      </div>
    </section>
  )
}

export default ResultPageForMcqFib
