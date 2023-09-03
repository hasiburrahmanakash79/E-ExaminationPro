import { useEffect, useState } from 'react'

import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import AnsDataPage from '../../../components/examComponents/AnsDataPage'
import FillTheBlank from '../../../components/examComponents/FillTheBlank'
import McqPage from '../../../components/examComponents/McqPage'
import TimeRemain from '../../../components/examComponents/TimeRemain'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import {
  nextQues,
  prevQues,
  resetQues,
  setAnswerIndex,
  setResult,
  setInputValue,
  setMcq,
  setView,
  setQuestion,
  setCorrectAns
} from '../../../redux/features/examPage/examPageSlice'
import StartCountdowns from '../../../components/examComponents/startCountdowns'

const Exam2 = () => {

  const { currentQuestion, answerIndx, result, inputValue, optionMcq, view } =
    useSelector(state => state.examPage)
  const dispatch = useDispatch()
  const ques = useLoaderData()
  const questions = ques?.questions
  const examType = ques.type
  const { question, options, correctAnswer } = questions[currentQuestion] //destructure array of objects
  const [countdown, setCountdown] = useState(3) // 3 sec countdown before start exam
  const [timer, setTimer] = useState(null) // store time interval to clear the time interval.
  const [start, setStart] = useState(false) // it use to store user selected option from mcq
console.log(result)
  const sendData = result => {
    fetch('http://localhost:5000/examdata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(result)
    })
  }

  const handleFinishExam = () => {
    ////////// This code will execute when time remain for exam is 0.
    dispatch(setView(true)) //setView(true)
    dispatch(resetQues()) //setCurrentQuestion(0)
    clearInterval(timer) ///stop timer
    sendData(result)
  }

  const handleInputChange = event => {
    dispatch(setInputValue(event.target.value)) // setInputValue(event.target.value) //store neumeric type value from input field
  }

  ///////////// when user select option in mcq ////////////////
  const onSelectOption = (index, option, question,correctAnswer) => {
    dispatch(setAnswerIndex(index)) //redux // setAnswerIndx(index)

    // const result1 = result.find(obj => obj.question === question) // check if the answer allready stored or not
    // if (result1) {
    //   console.log()
    //   result1.userAns = option
    // } else {
    //   const newObject = {
    //     question: question,
    //     correctAnswer: correctAnswer,
    //     userAns: option
    //   }
    console.log(question,option,correctAnswer)
    dispatch(setQuestion(question))
    dispatch(setMcq(option)) // setMcq(option) // store user selected option
    dispatch(setCorrectAns(correctAnswer))
    dispatch(setResult()) //setResult(prevArray => [...prevArray, newObject])

  
}

if (inputValue == NaN) {
  //check nan
  dispatch(setInputValue(parseFloat(inputValue).toFixed(2))) //setInputValue(parseFloat(inputValue).toFixed(2))
}

///////////// next button action ///////////////////
const onClickNext = () => {
  dispatch(setMcq(null)) // setMcq(null) // set user selected option to null

  if (examType == 'FillInTheBlank') {
    //for fill in the blank
    const result1 = result.find(obj => obj.question === question) // check if answer stored or not
    if (result1) {
      result1.userAns = inputValue || 'Skipped'
      dispatch(setInputValue('')) // setInputValue('')
    } else {
      const newObject = {
        question: question,
        correctAnswer: correctAnswer,
        userAns: inputValue || 'Skipped'
      }
      dispatch(setResult(newObject)) // setResult(prevArray => [...prevArray, newObject]) //store object in result array
      dispatch(setInputValue('')) //setInputValue('')
    }
  } else {
    if (optionMcq == null) {
      const newObject = {
        question: question,
        correctAnswer: correctAnswer,
        userAns: 'Skipped'
      }
      dispatch(setResult(newObject)) // setResult(prevArray => [...prevArray, newObject]) //store object in result array
    }
  } /// fill in the blank end

  //setAnswerIndx(null)
  dispatch(setAnswerIndex(null)) //redux

  if (currentQuestion !== questions.length - 1) {
    console.log(currentQuestion, questions)
    dispatch(nextQues())
    // set cur + 1
  } else {
    dispatch(setView(true)) //setView(true)
    dispatch(resetQues())

    //setCurrentQuestion(0)
    console.log('hit')
    console.log(result)
    clearInterval(timer)
    //  sendData(result) /// send data to backend server
  }
}
///// previous button action
const onClickPrevious = () => {
  dispatch(setAnswerIndex(null)) //redux
  //setAnswerIndx(null)
  if (currentQuestion !== 0) {
    dispatch(prevQues())
    //setCurrentQuestion(prev => prev - 1)
  }
  dispatch(setInputValue('')) // setInputValue('')
}
/////end//////

useEffect(() => {
  // This effect will run whenever the `result` state changes
  if (result.length == questions.length) {
    sendData(result)
  }
}, [result])
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
        {view ? (
          <div className='flex justify-center my-5'>

            {/* show result when view true */}
            <AnsDataPage questions={questions} result={result}></AnsDataPage>
          </div>
        ) : (
          <>
            {/* show remaining time */}
            {((examType == 'multimedia_mcq' && start == true) ||
              examType == 'mcq' ||
              examType == 'FillInTheBlank') && (
                <TimeRemain
                  examType={ques.type}
                  start={start}
                  handleFinishExam={handleFinishExam}
                  setTimer={setTimer}
                ></TimeRemain>
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
