import React from 'react';

const FillTheBlank = ({questions,currentQuestion,question,onClickNext,inputValue,handleInputChange,onClickPrevious}) => {
    return (
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
            <button disabled={currentQuestion == 0} onClick={onClickPrevious} className='btn navigation-bar text-white  shadow-lg border-none   '>Previous</button>
            <button onClick={onClickNext} className='btn  shadow-lg border-none  text-white navigation-bar '>{currentQuestion == questions.length - 1 ? 'Finish' : 'Next'}</button>
        </div>
    </div>
    );
};

export default FillTheBlank;