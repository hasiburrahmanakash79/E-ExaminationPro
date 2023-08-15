import React, { useState } from 'react';
import { jsQuizz, mathQues } from '../../../../public/question'
import { useLocation } from 'react-router-dom';





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

    const handleInputChange = (event) => {
        setInputValue(parseFloat(event.target.value));
    };

    const onSelectOption = (index, option, question) => {
        setAnswerIndx(index)
        if (option == correctAnswer) {
            setAnswer(option)
        }
        else {
            setAnswer(option)
        }
        const result1 = result.find(obj => obj.question === question)
        if (result1) {
            result1.userAns = option;
        }
        else {
            const newObject = { question: question, correctAnswer: correctAnswer, userAns: option }
            setResult(prevArray => [...prevArray, newObject])
        }
    }

    const onClickNext = () => {
 
        if (examType == 'fib') {


            const result1 = result.find(obj => obj.question === question)

            if (result1) {
                console.log(inputValue)
                result1.userAns = inputValue || 'skipped';
                setInputValue("")
            }
            else {

                console.log(inputValue)
                const newObject = { question: question, correctAnswer: correctAnswer, userAns: inputValue || 'skipped' }
                setResult(prevArray => [...prevArray, newObject])
                setInputValue("")
            }
        }
        else {
            // setMarks((prev)=>prev-5)
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
        <>

            {
                examType == 'mcq' ?
                    <div>
                        {
                            !view ? <div className=' min-h-[70vh] flex justify-center md:mt-0 mt-10 md:items-center'>
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
                                            return <li onClick={() => onSelectOption(index, option, question)} className={index === answerIndx ? "box-border md:ms-10 px-5 py-2 border-2 font-semibold border-blue-800 rounded-3xl" : 'md:ms-10 text-white bg-blue-800 px-5 py-2 rounded-3xl box-border'} key={option}> {option}</li>
                                        })}
                                    </ul>

                                    <div className='flex justify-between mt-10'>
                                        <button disabled={currentQuestion == 0} onClick={onClickPrevious} className='btn bg-blue-800 text-white hover:bg-blue-900 '>Previous</button>
                                        <button onClick={onClickNext} className='btn text-white hover:bg-blue-900 bg-blue-800 '>{currentQuestion == questions.length - 1 ? 'Finish' : 'Next'}</button>
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
                                            <button disabled={currentQuestion == 0} onClick={onClickPrevious} className='btn bg-blue-800 text-white hover:bg-blue-900 '>Previous</button>
                                            <button onClick={onClickNext} className='btn text-white hover:bg-blue-900 bg-blue-800 '>{currentQuestion == questions.length - 1 ? 'Finish' : 'Next'}</button>
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

        </>
    );
};

export default Exam;



