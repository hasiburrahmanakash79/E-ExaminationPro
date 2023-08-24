import React from 'react';

const FillTheBlank = ({ questions, currentQuestion, question, onClickNext, inputValue, handleInputChange, onClickPrevious }) => {
    return (
        <div>

            <input className='input w-full bg-slate-600 text-white' type="number" placeholder='Answer' value={inputValue} onChange={handleInputChange} />

        </div>
    );
};

export default FillTheBlank;