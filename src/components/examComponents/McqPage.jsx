import React from 'react';

const McqPage = ({correctAnswer,question,onSelectOption,options,answerIndx,examType,start}) => {
    console.log(correctAnswer,question)
    return (
        <div>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4   mt-3'>
                {options?.map((option, index) => {
                    return <li onClick={() => onSelectOption(index, option, question,correctAnswer)} className={index === answerIndx ? "md:ms-10 text-white navigation-bar px-5 py-2 rounded-3xl box-border" : 'box-border md:ms-10 px-5 py-2 border-2 font-semibold border-blue-800 rounded-3xl'} key={option}> {((examType == 'multimedia_mcq' && start==true)|| examType == 'mcq')&&option}</li>
                })}
            </ul>
        </div>
    );
};

export default McqPage;
