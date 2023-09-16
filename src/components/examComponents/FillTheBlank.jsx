import React from 'react';
import { useSelector } from 'react-redux';

const FillTheBlank = ({ inputValue, handleInputChange}) => {
  
    return (
        <div>

            <input className='input w-full bg-slate-600 text-white' type="text" placeholder='Answer' value={inputValue!==null?inputValue:''} onChange={handleInputChange} />

        </div>
    );
};

export default FillTheBlank;