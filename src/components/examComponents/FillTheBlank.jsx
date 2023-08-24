import React from 'react';

const FillTheBlank = ({  inputValue, handleInputChange}) => {
    return (
        <div>

            <input className='input w-full bg-slate-600 text-white' type="text" placeholder='Answer' value={inputValue} onChange={handleInputChange} />

        </div>
    );
};

export default FillTheBlank;