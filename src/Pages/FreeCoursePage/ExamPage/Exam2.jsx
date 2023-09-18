import { useEffect, useState } from 'react'

import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import AnsDataPage from '../../../components/examComponents/AnsDataPage'
import FillTheBlank from '../../../components/examComponents/FillTheBlank'
import McqPage from '../../../components/examComponents/McqPage'
import TimeRemain from '../../../components/examComponents/TimeRemain'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import {
  setShowHints,
  nextQues,
  prevQues,
  resetQues,
  setAnswerIndex,
  setResult,
  setInputValue,
  setMcq,
  setView,
  setQuestion,
  setCorrectAns,
  setExamType,
  sendResult
} from '../../../redux/features/examPage/examPageSlice'
import StartCountdowns from '../../../components/examComponents/startCountdowns'
import { useContext } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider'
import useUser from '../../../Hooks/useUser/useUser'
import { reduceGems } from '../../../redux/features/userGems/userGemsSlice'

const Exam2 = () => {

  const [takingTime, setTakingTime] = useState(0)

  const { currentQuestion, answerIndx, inputValue, view, showHints } =
    useSelector(state => state.examPage)
  const { remainGems } =
    useSelector(state => state.userGems)
  const dispatch = useDispatch()
  const ques = useLoaderData()
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  ////console.log(ques)
  const questions = ques?.questions
  const examType = ques?.type

  const time=ques?.time*60

  const [timerProgress, setTimerProgress] = useState(100) //progress bar state
  const totalDuration = time //define total duration
  const [timeRemaining, setTimeRemaining] = useState(time) // time remain state



  dispatch(setExamType(ques.type))
  const { question, options, correctAnswer, hints } = questions[currentQuestion] //destructure array of objects
  const [countdown, setCountdown] = useState(3) // 3 sec countdown before start exam
  const [timer, setTimer] = useState(null) // store time interval to clear the time interval.
  const [start, setStart] = useState(false) // it use to store user selected option from mcq

  const [info, refetch, p_loading] = useUser(user?.email)


  const examInfo = {
    examID: ques._id,
    subjectName: ques.subjectName,
    batch: ques.batch,
    ins_email: ques.email,
    stu_email: user?.email,
    stu_name: user?.displayName,
    date: ques.date,
    exam_code: ques.exam_code,
    subject: ques.subjectName,
    sub_code: ques.subject_code,
    examType: ques.type,
    timeConsume: takingTime,
    totalQuestion: questions.length,
    totalMark: questions.length * 5
  }

  //console.log(result, 'send data2')

  const sendData = () => {
    dispatch(sendResult(examInfo))
  }

  const handleFinishExam = () => {
    ////////// This code will execute when time remain for exam is 0.
    dispatch(setView(true)) //setView(true)
    dispatch(resetQues()) //setCurrentQuestion(0)
    clearInterval(timer) ///stop timer
    sendData()
    setTimeout(() => {

      dispatch(setView(false))
      navigate(`/results?id=${ques?._id}`)
    }, 3000)
  }

  const handleInputChange = event => {
    dispatch(setInputValue(event.target.value)) // setInputValue(event.target.value) //store numeric type value from input field
  }

  ///////////// when user select option in mcq ////////////////
  const onSelectOption = (index, option, question, correctAnswer) => {
    dispatch(setAnswerIndex(index))
    ////console.log(question, option, correctAnswer)
    dispatch(setMcq(option)) // setMcq(option) // store user selected option
    //setResult(prevArray => [...prevArray, newObject])
  }

  if (inputValue == NaN) {
    //check nan
    dispatch(setInputValue(parseFloat(inputValue).toFixed(2))) //setInputValue(parseFloat(inputValue).toFixed(2))
  }

  ///////////// next button action ///////////////////
  const onClickNext = () => {
    dispatch(setShowHints(false))
    dispatch(setQuestion(question))
    dispatch(setCorrectAns(correctAnswer))
    dispatch(setResult())
    dispatch(setAnswerIndex(null))

    if (currentQuestion !== questions.length - 1) {
      // //console.log(currentQuestion, questions)
      dispatch(nextQues())
    } else {
      dispatch(setView(true)) //setView(true)
      dispatch(resetQues())
      //sendData(resultData)
      // //console.log('hit')
      // //console.log(result, 'ghghgjgjh')
      clearInterval(timer)
      handleFinishExam()
    }
  }

  ///// previous button action
  const onClickPrevious = () => {
    dispatch(setShowHints(false))
    dispatch(setAnswerIndex(null)) //redux
    //setAnswerIndx(null)
    if (currentQuestion !== 0) {
      dispatch(prevQues())
      //setCurrentQuestion(prev => prev - 1)
    }
    dispatch(setInputValue(null)) // setInputValue('')
  }
  refetch()

  console.log(info?.gems)
  return (
    <>
      {/* show 3sec countdown before start exam */}
      {countdown > 0 ? (
        <div>
          <StartCountdowns
            countdown={countdown}
            setCountdown={setCountdown}
          ></StartCountdowns>
        </div>
      ) : (
        <div>
          {view == true ? (
            <div className='flex justify-center my-5'>
              <h1 className='text-xl'>Your Result is now Processing....</h1>
            </div>
          ) : (
            <>
              {/* show remaining time */}
              {((examType == 'multimedia_mcq' && start == true) ||
                examType == 'mcq' ||
                examType == 'FillInTheBlank') && (
                  <div>

                    <div>
                      <TimeRemain
                        timerProgress={timerProgress}
                        setTimerProgress={setTimerProgress}
                        totalDuration={totalDuration}
                        timeRemaining={timeRemaining}
                        setTimeRemaining={setTimeRemaining}
                        examType={ques.type}
                        start={start}
                        handleFinishExam={handleFinishExam}
                        setTimer={setTimer}
                        takingTime={takingTime}
                        setTakingTime={setTakingTime}
                      ></TimeRemain>
                    </div>

                  </div>

                )}
              <div className=' min-h-[70vh] flex justify-center md:mt-0 mt-10 md:items-center'>
                <div className='w-full mx-2 md:mx-20'>
                  <div className='flex justify-center my-10 mb-5'>
                    {examType == 'multimedia_mcq' && (
                      <>
                        <iframe
                          width='800'
                          height='500'
                          src={ques.video}
                          title='YouTube video player'
                          frameborder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                          allowFullscreen
                        ></iframe>
                      </>
                    )}
                  </div>
                  <div className='grid md:grid-cols-3 grid-cols-1' >
                    <div className='max-w-[50px]  min-h-[50px] text-white bg-blue-900 rounded-full flex justify-center items-center'>
                      <div>
                        <span className='text-3xl font-semibold'>
                          {currentQuestion + 1}
                        </span>
                        {/* show current question number */}
                        <span className='text-xl font-semibold'>
                          /{questions.length}
                        </span>{' '}
                        {/* show total question in number */}
                      </div>
                    </div>
                    <div>
                      <h1 className='text-2xl text-center mt-5'>Your Gems:<span className='text-green-500'> {info.gems}</span></h1>
                      <div>{info?.gems < 1 && <h1 className='bg-red-500 text-white p-1 rounded-lg mt-2 w-1/2 mx-auto|||||||| text-center'>You Do Not Have Enough Gems</h1>}</div>
                    </div>
                    <div>


                      <div className={showHints === true ? 'tooltip tooltip-open tooltip-success' : ''} data-tip={hints}>
                        <button disabled={(showHints === true) || (info?.gems < 1)} onClick={() => {
                          dispatch(reduceGems(user?.email))
                          dispatch(setShowHints(true))
                          refetch()
                        }} className="btn btn-sm btn-warning">Hints</button>
                      </div>

                    </div>
                  </div>

                  {(examType == 'multimedia_mcq' && start == true) ||
                    examType == 'mcq' ||
                    examType == 'FillInTheBlank' ? (
                    <h1 className='text-3xl font-semibold my-7'>
                      {currentQuestion + 1}- {question}
                    </h1>
                  ) : (
                    <h1 className='text-3xl font-semibold my-7'>
                      Are You Ready?? Please Start Exam
                    </h1>
                  )}
                  {/* show question  */}
                  {examType == 'mcq' || examType == 'multimedia_mcq' ? ( // check exam type
                    <McqPage
                      correctAnswer={correctAnswer}
                      examType={ques.type}
                      start={start}
                      options={options}
                      answerIndx={answerIndx}
                      questions={questions}
                      currentQuestion={currentQuestion}
                      question={question}
                      onSelectOption={onSelectOption}
                    ></McqPage>
                  ) : (
                    <FillTheBlank
                      questions={questions}
                      currentQuestion={currentQuestion}
                      question={question}
                      inputValue={inputValue}
                      handleInputChange={handleInputChange}
                    ></FillTheBlank>
                  )}
                  <div className=''>
                    <div className='flex justify-between mt-10'>
                      <button
                        disabled={
                          currentQuestion == 0 ||
                          (examType == 'multimedia_mcq' && start == false)
                        }
                        onClick={onClickPrevious}
                        className='text-white btn navigation-bar hover:bg-blue-900 '
                      >
                        Previous
                      </button>
                      <button
                        disabled={
                          examType == 'multimedia_mcq' && start == false
                        }
                        onClick={onClickNext}
                        className='text-white btn navigation-bar '
                      >
                        {currentQuestion == questions.length - 1
                          ? 'Finish'
                          : 'Next'}
                      </button>
                    </div>
                    <div className='flex justify-center'>
                      {examType == 'multimedia_mcq' && (
                        <button
                          className='my-5 btn btn-primary'
                          onClick={() => setStart(true)}
                        >
                          Start
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default Exam2
