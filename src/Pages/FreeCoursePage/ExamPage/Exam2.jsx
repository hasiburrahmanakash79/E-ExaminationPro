import { useEffect, useState } from 'react'

import { useLoaderData, useLocation } from 'react-router-dom'
import AnsDataPage from '../../../components/examComponents/AnsDataPage'
import FillTheBlank from '../../../components/examComponents/FillTheBlank'
import McqPage from '../../../components/examComponents/McqPage'
import TimeRemain from '../../../components/examComponents/TimeRemain'


import React from 'react';

const Exam2 = () => {
    //////////////////////
    // const location = useLocation()
    // const searchParams = new URLSearchParams(location.search) /////get exam type from route
    // const examType = searchParams.get('type')
    // console.log(examType)
    //////////////////
    const ques = useLoaderData();
    const questions = ques.questions
    const examType = ques.type
    const examTypess = ques.type
    console.log(questions, examType)

    // const questions = examType == 'mcq' ? jsQuizz.question : mathQues.questions ///store question based on type

    const [currentQuestion, setCurrentQuestion] = useState(0) // default current question 0, index of array
    const { question, options, correctAnswer } = questions[currentQuestion] //destructure array of objects
    const [answerIndx, setAnswerIndx] = useState(null) // related with options index

    const [result, setResult] = useState([])

    const [view, setView] = useState(false) // show exam page or result page based on state
    const [inputValue, setInputValue] = useState('') // store user answer from input value

    const [countdown, setCountdown] = useState(3) // 3 sec countdown before start exam

    const [timer, setTimer] = useState(null)// store time interval to clear the time interval.

    const [optionMcq, setMcq] = useState(null) // it use to store user selected option from mcq

    const [start, setStart] = useState(false) // it use to store user selected option from mcq


    useEffect(() => {

        ////////////////
        if (countdown > 0) {
            const countdownTimer = setInterval(() => {
                if (countdown > 0) {
                    setCountdown(prevCountdown => prevCountdown - 1) /// function for 3 sec countdown before start exam
                    console.log(countdown)
                } else {
                    clearInterval(countdownTimer)
                }
            }, 1000)

            return () => clearInterval(countdownTimer)
        }
        ////////////////

    }, [countdown])


    /////data sending function

    const sendData = (result) => {
        fetch('http://localhost:5000/examdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result)
        })
    }

    ////////// This code will execute when time remain for exam is 0.
    const handleFinishExam = () => {
        setView(true)
        setCurrentQuestion(0)
        clearInterval(timer)///stop timer
        sendData(result)
    }
    //////////// end

    const handleInputChange = event => {
        setInputValue(event.target.value) //store neumeric type value from input field
    }
    ///////////// when user select option in mcq ////////////////
    const onSelectOption = (index, option, question) => {
        setAnswerIndx(index)
        const result1 = result.find(obj => obj.question === question) // check if the answer allready stored or not
        if (result1) {
            result1.userAns = option
        } else {
            const newObject = {
                question: question,
                correctAnswer: correctAnswer,
                userAns: option
            }
            setResult(prevArray => [...prevArray, newObject])
            setMcq(option) // store user selected option
        }
    }
    ////////////////////// END //////////////////
    if (inputValue == NaN) {
        setInputValue(parseFloat(inputValue).toFixed(2))
    }

    ///////////// next button action ///////////////////
    const onClickNext = () => {
        setMcq(null) // set user selected option to null

        if (examType == 'FillInTheBlank') { //for fill in the blank
            const result1 = result.find(obj => obj.question === question) // check if answer stored or not
            if (result1) {
                result1.userAns = inputValue || 'Skipped'
                setInputValue('')
            } else {
                const newObject = {
                    question: question,
                    correctAnswer: correctAnswer,
                    userAns: inputValue || 'Skipped'
                }
                setResult(prevArray => [...prevArray, newObject]) //store object in result array
                setInputValue('')
            }
        } else {
            if (optionMcq == null) {
                const newObject = {
                    question: question,
                    correctAnswer: correctAnswer,
                    userAns: 'Skipped'
                }
                setResult(prevArray => [...prevArray, newObject]) //store object in result array
            }
        } /// fill in the blank end

        setAnswerIndx(null)

        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion(prev => prev + 1)
        }
        else {
            setView(true)
            setCurrentQuestion(0)
            console.log('hit')
            console.log(result)
            clearInterval(timer)
            //  sendData(result) /// send data to backend server
        }
    }
    ///// previous button action
    const onClickPrevious = () => {
        setAnswerIndx(null)
        if (currentQuestion !== 0) {
            setCurrentQuestion(prev => prev - 1)
        }
        setInputValue('')
    }
    /////end//////

    useEffect(() => {
        // This effect will run whenever the `result` state changes 
        if (result.length == questions.length) {
            sendData(result);
        }
    }, [result])

    return (
        <>  {/* show 3sec countdown before start exam */}
            {
                countdown > 0 ?
                    <div className=' h-[80vh] flex flex-col justify-center items-center '>
                        <div className='text-center '>
                            <h1 className='my-1 font-bold text-red-600 text-9xl'>

                                {countdown}
                            </h1>

                            <h1 className='text-7xl'>Get Ready</h1>
                        </div>
                    </div>
                    :
                    <div>
                        {
                            view ? <div className='flex justify-center my-5'> {/* show result when view true */}
                                <AnsDataPage
                                    questions={questions}
                                    result={result}
                                ></AnsDataPage>
                            </div>
                                : <>{/* show remaining time */}
                                    {((examType == 'multimedia_mcq' && start==true)||(examType == 'mcq')|| (examType=='FillInTheBlank'))&&<TimeRemain
                                    examType={ques.type}
                                    start={start}
                                        handleFinishExam={handleFinishExam}
                                        setTimer={setTimer}
                                    ></TimeRemain>}
                                    <div className=' min-h-[70vh] flex justify-center md:mt-0 mt-10 md:items-center'>
                                        <div className='md:mx-20 mx-2 w-full'>

                                            <div className='flex justify-center my-10 mb-5'>

                                                {examType == 'multimedia_mcq' &&
                                                    <>
                                                        <iframe width="800" height="500" src={ques.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                                                    </>
                                                }
                                            </div>

                                            <div className='max-w-[50px]  min-h-[50px] text-white bg-blue-900 rounded-full flex justify-center items-center'>
                                                <div>
                                                    <span className='text-3xl font-semibold'>{currentQuestion + 1}</span>{/* show current question number */}
                                                    <span className='text-xl font-semibold'>/{questions.length}</span> {/* show total question in number */}
                                                </div>
                                            </div>
                                            {((examType == 'multimedia_mcq' && start==true)|| examType == 'mcq')?<h1 className='text-3xl my-7  font-semibold'>{currentQuestion + 1}- {question}</h1>:<h1 className='text-3xl my-7  font-semibold'>Are You Ready?? Please Start Exam</h1>}  {/* show question  */}

                                            {
                                                (examType == 'mcq' || examType == 'multimedia_mcq') ? // check exam type
                                                    <McqPage
                                                    examType={ques.type}
                                                    start={start}
                                                        options={options}
                                                        answerIndx={answerIndx}
                                                        questions={questions}
                                                        currentQuestion={currentQuestion}
                                                        question={question}
                                                        onSelectOption={onSelectOption}
                                                    ></McqPage>
                                                    :
                                                    <FillTheBlank
                                                        questions={questions}
                                                        currentQuestion={currentQuestion}
                                                        question={question}
                                                        inputValue={inputValue}
                                                        handleInputChange={handleInputChange}
                                                    ></FillTheBlank>
                                            }
                                            <div className=''>
                                            <div className='flex justify-between mt-10'>
                                                <button disabled={((currentQuestion == 0)||(examType == 'multimedia_mcq' && start==false))} onClick={onClickPrevious} className='btn navigation-bar text-white hover:bg-blue-900 '>Previous</button>
                                                <button disabled={(examType == 'multimedia_mcq' && start==false)} onClick={onClickNext} className='btn text-white  navigation-bar '>{currentQuestion == questions.length - 1 ? 'Finish' : 'Next'}</button>
                                            </div>
                                            <div className='flex justify-center'>
                                                {examType=='multimedia_mcq'&&<button className='btn btn-primary my-5' onClick={()=>setStart(true)} >Start</button>}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
            }
        </>
    );
};

export default Exam2;