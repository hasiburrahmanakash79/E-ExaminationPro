import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ResultSideBar from './ResultSideBar'
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from 'recharts'
import ReviewAnswerAfterResult from './QuestionResults/ReviewAnswerAfterResult'

import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import ResultPdfConverter from './QuestionResults/ResultPdfConverter'
// import { useSelector } from 'react-redux'
import FeedBack from '../../Feedback/Feedback'
import { useEffect, useState } from 'react'
import QuestionTimeChart from './QuestionTimeChart'

const ResultPageForMcqFib = () => {
  /*========Answer Reviewing=======
  ========================*/
  // const { questions, userAnswers } = useSelector(state => state.demoExam)
  // calculating percentage
  const [questions, setQuestions] = useState([])
  const [results, setResults] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/result?id=64e8b9586f2385caa12fd4c5")
      // fetch(`http://localhost:5000/result?id=${id}`)
      .then(res => res.json())
      .then(data => setQuestions(data))
  }, [])

  if (questions?.resutData) {
    setResults(questions?.resutData)
  }
  console.log(results);

  // const totalQuestions = questions.length
  // const correctAnswers = userAnswers?.reduce((count, answer) => {
  //   const question = questions?.find(q => q.id === answer.questionId)
  //   return question && answer.selectedOptionId === question.correctAnswer
  //     ? count + 1
  //     : count
  // }, 0)

  const qLength = (3 / 5) * 100;

  // const percentage = (correctAnswers / totalQuestions) * 100
  // console.log(percentage)
  // const percentage = (correctAnswers / totalQuestions) * 100
  // console.log(percentage)
  // const questions = [
  //   {
  //     text: 'test1',
  //     correctAnswer: 'correct'
  //   }
  // ]

  //   temp data for bar chart
  const data = [
    { Ques: 1, time: 6 },
    { Ques: 2, time: 4 },
    { Ques: 3, time: 7 },
    { Ques: 4, time: 3 },
    { Ques: 5, time: 5 },
  ];
  // const data = [
  //   { Ques: 'Q.1', time: 6 },
  //   { Ques: 'Q.2', time: 4 },
  //   { Ques: 'Q.3', time: 7 },
  //   { Ques: 'Q.4', time: 3 },
  //   { Ques: 'Q.5', time: 5 },
  // ];
  //   result data

  return (
    <section className='grid w-9/12 md:h-screen grid-cols-5 pt-6 m-auto'>
      <div className='col-span-1 md:col-span-4'>
        {/* Top of the result page where we can show TOP SCORE, Export the result */}
        <div className='md:flex items-center justify-between h-fit'>
          <h4 className='w-44  md:mb-0 mb-3 p-3 font-semibold text-white rounded-lg outline'>
            TOP SCORE: 97%
          </h4>
          {/* handling the btn where when user clicks his result should be downloaded */}
          {/* <span>Saifuk</span> */}
          <PDFDownloadLink
            document={
              <ResultPdfConverter
                // userAnswers={userAnswers}
                questions={questions?.resutData}
              />
            }
            // document=
            // {
            //   questions?.resutData?.map((data, index) => <ResultPdfConverter
            //     // userAnswers={userAnswers}
            //     key={index}
            //     questions={data}
            //     index={index}
            //   />)
            // }
            fileName='result.pdf'
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                'Loading document...'
              ) : (
                <button className='btn primary-btn w-44'>Export Result As PDF</button>
              )
            }
          </PDFDownloadLink>
        </div>
        {/* visual progress showing section */}
        <div className='md:flex items-center justify-between w-full mx-auto md:mx-0 md:p-4 md:mt-16 h-fit'>
          {/* PieChart to show the performance of the exam based on time took in total , total correct answer  */}
          <div className='md:w-28 md:h-28 w-32 h-32 pt-6 md:pt-0'>
            <h3 className='pb-4 md:text-lg text-xl font-semibold text-white '>
              Performance
            </h3>
            {

            }
            <CircularProgressbar
              // value={percentage}
              value={qLength}
              strokeWidth={50}
              styles={buildStyles({
                strokeLinecap: 'butt'
              })}
            />
          </div>
          {/* adding a bar to show each question time to answer */}
          {/* Chart section */}
          <div style={{ width: '100%', height: 250 }}>
            {/* <ResponsiveContainer>
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
            </ResponsiveContainer> */}
            <QuestionTimeChart data={data} />
          </div>
          {/* exam result showing in percentage using react-circular-progressbar. Using animation to do that */}
          {/* TODO:make this progressbar animated and dynamic */}
          {/* <div className='w-28'>
            <CircularProgressbar
              // value={percentage}
              // text={`${percentage}%`}
              value={qLength}
              text={`${qLength}%`}
              styles={buildStyles({
                strokeLinecap: 'butt'
              })}
            />
          </div> */}
        </div>
        {/* bottom options like review answered questions, giving feedback, sharing the result with other social platforms */}
        <div className='grid md:grid-cols-2 gap-3 py-6 md:py-0'>
          {/* modal to show review answers */}
          <div>
            {/* Open the modal using ID.showModal() method */}
            <button
              className='btn btn_quiz primary-btn w-44'
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
                {/* <ReviewAnswerAfterResult
                userAnswers={userAnswers}
                questions={questions}
                /> */}
                {
                  questions?.resutData?.map((data, index) => <ReviewAnswerAfterResult
                    // userAnswers={userAnswers}
                    key={index}
                    questions={data}
                    index={index}
                  />)
                }

              </form>
              <form method='dialog' className='modal-backdrop'>
                <button>close</button>
              </form>
            </dialog>
          </div>
          <div>
            {/* Open the modal using ID.showModal() method */}
            <button
              className='btn btn_quiz primary-btn w-44'
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
    </section >
  )
}

export default ResultPageForMcqFib;