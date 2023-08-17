import React, { useEffect, useState } from 'react';
import { jsQuizz, mathQues } from '../../../../public/question';
import { useLocation } from 'react-router-dom';


// import AnsDataPage from './component/AnsDataPage';
// import FillTheBlank from './component/FillTheBlank';
// import McqPage from './component/McqPage';
// import TimeRemain from './component/TimeRemain';
// import AllQues from './component/AllQues';



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
    const totalDuration = 60
    const [timeRemaining, setTimeRemaining] = useState(60)

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


    const [optionMcq, setMcq] = useState(null)


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
                result1.userAns = inputValue;
                setInputValue("")
            }
            else {
                const newObject = { question: question, correctAnswer: correctAnswer, userAns: inputValue || 'Skipped' }
                setResult(prevArray => [...prevArray, newObject])
                setInputValue("")
            }
        }
        else {

            if (optionMcq == null) {
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
                                                <div >
                                                    <TimeRemain
                                                        timerProgress={timerProgress}
                                                        timeRemaining={timeRemaining}
                                                    ></TimeRemain>
                                                </div>
                                                <div className=' min-h-[70vh] flex justify-center md:mt-0 mt-10 md:items-center'>

                                                    <McqPage
                                                        choices={choices}
                                                        answerIndx={answerIndx}
                                                        questions={questions}
                                                        currentQuestion={currentQuestion}
                                                        question={question}
                                                        onClickNext={onClickNext}
                                                        onSelectOption={onSelectOption}
                                                        onClickPrevious={onClickPrevious}
                                                    ></McqPage>



                                                </div>
                                            </div>
                                            :
                                            <div className='flex justify-center my-5'>

                                                <AnsDataPage
                                                    questions={questions}
                                                    result={result}
                                                ></AnsDataPage>



                                            </div>
                                    }
                                </div>
                                :
                                <div>
                                    {
                                        !view ?
                                            <div>
                                                <div >
                                                    <TimeRemain
                                                        timerProgress={timerProgress}
                                                        timeRemaining={timeRemaining}
                                                    ></TimeRemain>
                                                </div>
                                                <div className=' min-h-[70vh] flex justify-center md:mt-0 mt-10 md:items-center'>
                                                    <FillTheBlank
                                                        questions={questions}
                                                        currentQuestion={currentQuestion}
                                                        question={question}
                                                        onClickNext={onClickNext}
                                                        inputValue={inputValue}
                                                        handleInputChange={handleInputChange}
                                                        onClickPrevious={onClickPrevious}
                                                    ></FillTheBlank>

                                                    <AllQues questions={questions} setCurrentQuestion={setCurrentQuestion} setAnswerIndx={setAnswerIndx} ></AllQues>
                                                </div>
                                            </div>
                                            :
                                            <div className='flex justify-center my-5'>

                                                <AnsDataPage
                                                    questions={questions}
                                                    result={result}
                                                ></AnsDataPage>

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



