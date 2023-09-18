import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import ResultPdfConverter from './ResultPdfConverter'
import { useLocation } from 'react-router-dom'
import useResult from '../../../../Hooks/useResult/useResult'
import { useContext, useEffect, useState } from 'react'
import ReviewAnswerAfterResult2 from './ReviewAnswerAfterResult2'
import FeedBack from './Feedback'
import { getColor } from '../../../../utils/getColor'
import { AuthContext } from '../../../../Provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const ResultPageForMcqFib = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const examId = searchParams.get('id')
 
  const [result, refetch, loadings] = useResult(examId)


  // const { user, loading } = useContext(AuthContext)

  // const {data: result,refetch,isLoading: loadings} = useQuery({
  //   queryKey: ['result'],
  //   enabled:!loading ,
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       `https://e-exam-pro-server.vercel.app/result?examId=${examId}&email=${user?.email}`
  //     )
  //     //console.log(res)
  //     return res.data
  //   }
  // })

//   const [result,setResult]=useState(null)
//   const [loadings,setLoading]=useState(true)

//   useEffect(()=>{
//     setLoading(true)
// if(!loading){
//   fetch(`https://e-exam-pro-server.vercel.app/result?examId=${examId}&email=${user?.email}`)
//   .then(res=>res.json())
//   .then(data=>{
//     setResult(data)
//     setLoading(false)
//   })
// }
//   },[user?.email,loading])

 

  if (loadings) {
    return <p>loadings..</p>
  }
  console.log(result)

refetch()
  

  const percentage = (result.mark / result.totalMark) * 100
  return (
    <section className='grid w-11/12 pt-6 mx-auto '>
      {result && (
        <div className='relative grid'>
          {/* Top of the result page where we can show TOP SCORE, Export the result */}
          <div className='items-center justify-between md:flex h-fit'>
            <h4 className='p-3 mb-3 font-semibold text-white rounded-lg w-44 md:mb-0'>
              TOP SCORE: 97%
            </h4>
            {/* handling the btn where when user clicks his result should be downloaded */}

            <PDFDownloadLink
              document={<ResultPdfConverter resultInfo={result?.resultData} />}
              fileName='result.pdf'
            >
              {({ blob, url, loadings, error }) =>
                loadings ? (
                  'loadings document...'
                ) : (
                  <button className='btn primary-btn w-44'>
                    Export Result As PDF
                  </button>
                )
              }
            </PDFDownloadLink>
          </div>
          {/* visual progress showing section */}
          <div className='grid grid-cols-1 mt-8 md:gap-8 md:grid-cols-6'>
            <div className='order-2 col-span-1 mb-6 md:order-1 md:col-span-4'>
              {result.resultData?.map((singleQ, index) => (
                <ReviewAnswerAfterResult2 key={index} singleQ={singleQ} />
              ))}
            </div>
            <div className='mb-6 order-1 md:order-2 md:col-span-2 h-fit mx-auto text-center mt-0 md:mb-6 bg-gradient-to-r from-[#052b83] to-[#25176A] hover:bg-gradient-to-r hover:from-[#18125d] hover:to-[#05418f] p-3 md:p-6 rounded-lg shadow-2xl transition duration-300'>
              <h3 className='pb-4 text-xl font-semibold tracking-wider text-white md:text-lg'>
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
          {/* Feedback */}
          <div className='mx-auto mb-6 md:ml-auto md:absolute md:right-0 md:bottom-28'>
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
      )}
    </section>
  )
}

export default ResultPageForMcqFib
