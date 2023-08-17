import React, { useEffect, useState } from 'react';
import { jsQuizz, mathQues } from '../../../../public/question';
import { useLocation } from 'react-router-dom';

import '../ExamPage/Exam.css'



const Exam = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const examType = searchParams.get('type')
    console.log(examType)


    const questions = examType == 'mcq' ? jsQuizz.question : mathQues.questions;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { question, choices, correctAnswer } = questions[currentQuestion];
    const [answerIndx, setAnswerIndx] = useState(null);

    const [result, setResult] = useState([]);
    const [view, setView] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const [timerProgress, setTimerProgress] = useState(100) //progress bar state
    const totalDuration = 30
    const [timeRemaining, setTimeRemaining] = useState(30)

    const [countdown, setCountdown] = useState(3) //countdown



    useEffect(() => {

        if (countdown > 0) {
            const countdownTimer = setInterval(() => {
                if (countdown > 0) {
                    setCountdown(prevCountdown => prevCountdown - 1);
                    console.log(countdown)

                } else {
                    clearInterval(countdownTimer);
                }
            }, 1000);

            return () => clearInterval(countdownTimer);
        }

        if (timeRemaining <= 0) {
            // Time is up, finish the exam
            handleFinishExam();
            return;
        }

        const timer = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 1);
            setTimerProgress((timeRemaining / totalDuration) * 100);

        }, 1000); // Decrease timeRemaining every 1 second

        return () => clearInterval(timer); // Clean up the timer when component unmounts

    }, [timeRemaining, countdown])


    const handleFinishExam = () => {
        setView(true);
        setCurrentQuestion(0);

        fetch('http://localhost:5000/examdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result),
        });
    }


    const [optionMcq,setMcq]=useState(null)


    const handleInputChange = (event) => {
        setInputValue(parseFloat(event.target.value));
    };

    const onSelectOption = (index, option, question) => {
        setAnswerIndx(index)
        const result1 = result.find(obj => obj.question === question)
        if (result1) {
            result1.userAns = option;
        }
        else {
            const newObject = { question: question, correctAnswer: correctAnswer, userAns: option }
            setResult(prevArray => [...prevArray, newObject])
            setMcq(option)
        }
    }

    const onClickNext = () => {
        setMcq(null)
        if (examType == 'fib') {
            const result1 = result.find(obj => obj.question === question)
            if (result1) {
                result1.userAns = inputValue ;
                setInputValue("")
            }
            else {
                const newObject = { question: question, correctAnswer: correctAnswer, userAns: inputValue || 'Skipped' }
                setResult(prevArray => [...prevArray, newObject])
                setInputValue("")
            }
        }
        else {
            
            /////////////////////////////////////////////////////////////////////////////////
            if(optionMcq==null){
                const newObject = { question: question, correctAnswer: correctAnswer, userAns: 'Skipped' }
                setResult(prevArray => [...prevArray, newObject])
            }

        }

        setAnswerIndx(null)
        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1)
        }
        else {
            setView(true)
            setCurrentQuestion(0)
            console.log('hit')
            console.log(result)
            fetch('http://localhost:5000/examdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(result),
            })
        }
    }
    const onClickPrevious = () => {
        setAnswerIndx(null)
        if (currentQuestion !== 0) {
            setCurrentQuestion((prev) => prev - 1)
        }
        setInputValue('')
    }
    console.log(inputValue)
    return (
        <div className='container mx-auto   '>

            {
                countdown > 0 ?
                    <div className=" h-[80vh] flex flex-col justify-center items-center ">
                        <div className='text-center  '>

                            <h1 className='   text-9xl font-bold text-red-600 my-1'> {countdown}</h1>
                      
                    
                            <h1 className='text-7xl'>Get Ready</h1>
                        </div>
                    </div>
                    :
                    <div>
                        {
                            examType == 'mcq' ?
                                <div>
                                    {
                                        !view ?
                                            <div>
                                                <div className="relative h-4 w-full bg-gray-200 rounded">
                                                    <div
                                                        className=" h-full mt-2 animate-progress rounded "
                                                        style={{
                                                            width: `${timerProgress}%`,
                                                        }}
                                                    ></div>
                                                    <div className='text-3xl text-center my-7 font-semibold'>
                                                        Time Remaining: {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}
                                                    </div>
                                                </div>
                                                <div className=' min-h-[70vh] flex justify-center md:mt-0 mt-10 md:items-center'>


                                                    <div className='md:mx-20 mx-2 w-full'>
                                                        <div className='max-w-[50px]  min-h-[50px] text-white bg-blue-900 rounded-full flex justify-center items-center'>
                                                            <div>
                                                                <span className='text-3xl font-semibold'>{currentQuestion + 1}</span>
                                                                <span className='text-xl font-semibold'>/{questions.length}</span>
                                                            </div>
                                                        </div>

                                                        <h1 className='text-3xl my-7  font-semibold'>{currentQuestion + 1}- {question}</h1>

                                                        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4   mt-3'>
                                                            {choices.map((option, index) => {
                                                                return <li onClick={() => onSelectOption(index, option, question)} className={index === answerIndx ? "md:ms-10 text-white navigation-bar px-5 py-2 rounded-3xl box-border" : 'box-border md:ms-10 px-5 py-2 border-2 font-semibold border-blue-800 rounded-3xl'} key={option}> {option}</li>
                                                            })}
                                                        </ul>

                                                        <div className='flex justify-between mt-10'>
                                                            <button disabled={currentQuestion == 0} onClick={onClickPrevious} className='btn navigation-bar text-white hover:bg-blue-900 '>Previous</button>
                                                            <button onClick={onClickNext} className='btn text-white  navigation-bar '>{currentQuestion == questions.length - 1 ? 'Finish' : 'Next'}</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className='flex justify-center my-5'>

                                                <div>
                                                    <div className='max-w-[100px]   min-h-[60px] text-white bg-blue-900 rounded-full flex justify-center items-center'>
                                                        <h1 className='text-3xl font-bold'> <span className='text-red-500'>{result.filter(ques => ques.correctAnswer == ques.userAns).length * 5}</span>/<span>25</span> </h1>
                                                    </div>

                                                    {result?.map((ques, index) => <div className='mt-4 border-2 border-blue-900 py-5 rounded-2xl px-5' key={index}>
                                                        <h1 className='text-3xl font-bold'>{index + 1}- {ques.question}</h1>
                                                        <p className='text-xl mt-3'><span className='  font-semibold me-4'>Your Ans: </span><span className={ques.userAns == ques.correctAnswer ? "text-white bg-green-600 rounded-3xl py-1 px-4" : 'text-white bg-red-600 rounded-3xl py-1 px-4'}>{ques.userAns}</span></p>
                                                        <p className='text-xl mt-3'><span className='  font-semibold me-4'>Correct Ans:</span><span className='text-white bg-green-600 rounded-3xl py-1 px-4'>{ques.correctAnswer}</span></p>

                                                    </div>)}
                                                </div>

                                            </div>
                                    }
                                </div>
                                :
                                <div>
                                    {
                                        !view ?
                                            <div>
                                                <div className="relative h-4 w-full bg-gray-200 rounded">
                                                    <div
                                                        className=" mt-3 h-full animate-progress rounded"
                                                        style={{ width: `${timerProgress}%` }}
                                                    ></div>
                                                    <div className='text-3xl text-center my-7 font-semibold'>
                                                        Time Remaining: {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}
                                                    </div>
                                                </div>
                                                <div className=' min-h-[70vh] flex justify-center md:mt-0 mt-10 md:items-center'>



                                                    <div className='md:mx-20 mx-2 w-full'>
                                                        <div className='max-w-[50px]  min-h-[50px] text-white bg-blue-900 rounded-full flex justify-center items-center'>
                                                            <div>
                                                                <span className='text-3xl font-semibold'>{currentQuestion + 1}</span>
                                                                <span className='text-xl font-semibold'>/{questions.length}</span>
                                                            </div>
                                                        </div>

                                                        <h1 className='text-3xl my-7  font-semibold'>{currentQuestion + 1}- {question}</h1>

                                                        <input className='input w-full bg-slate-600 text-white' type="text" placeholder='Answer' value={inputValue} onChange={handleInputChange} />

                                                        <div className='flex justify-between mt-10'>
                                                            <button disabled={currentQuestion == 0} onClick={onClickPrevious} className='btn navigation-bar text-white  '>Previous</button>
                                                            <button onClick={onClickNext} className='btn text-white navigation-bar '>{currentQuestion == questions.length - 1 ? 'Finish' : 'Next'}</button>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className='flex justify-center my-5'>

                                                <div>
                                                    <div className='max-w-[100px]   min-h-[60px] text-white bg-blue-900 rounded-full flex justify-center items-center'>
                                                        <h1 className='text-3xl font-bold'> <span className='text-red-500'>{result.filter(ques => ques.userAns === ques.correctAnswer).length * 5}</span>/<span>{questions.length * 5}</span> </h1>
                                                    </div>

                                                    {result?.map((ques, index) => <div className='mt-4 border-2 border-blue-900 py-5 rounded-2xl px-5' key={index}>
                                                        <h1 className='text-3xl font-bold'>{index + 1}- {ques.question}</h1>
                                                        <p className='text-xl mt-3'><span className='  font-semibold me-4'>Your Ans: </span><span className={ques.userAns == ques.correctAnswer ? "text-white bg-green-600 rounded-3xl py-1 px-4" : 'text-white bg-red-600 rounded-3xl py-1 px-4'}>{ques.userAns}</span></p>
                                                        <p className='text-xl mt-3'><span className='  font-semibold me-4'>Correct Ans:</span><span className='text-white bg-green-600 rounded-3xl py-1 px-4'>{ques.correctAnswer}</span></p>

                                                    </div>)}
                                                </div>

                                            </div>
                                    }
                                </div>
                        }
                    </div>

            }

        </div>
    );
};

export default Exam;



