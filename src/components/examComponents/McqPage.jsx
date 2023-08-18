import React from 'react';

const McqPage = ({currentQuestion,questions,question,onSelectOption,onClickPrevious,onClickNext,choices,answerIndx}) => {
    return (
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
                <button disabled={currentQuestion == 0} onClick={onClickPrevious} className='btn navigation-bar text-white border-none shadow-lg hover:bg-blue-900 '>Previous</button>
                <button onClick={onClickNext} className='btn text-white shadow-lg border-none navigation-bar '>{currentQuestion == questions.length - 1 ? 'Finish' : 'Next'}</button>
            </div>

        </div>
    );
};

export default McqPage;