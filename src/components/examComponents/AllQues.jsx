import React from 'react';

const AllQues = ({ questions, setCurrentQuestion, setAnswerIndx }) => {

    const operation=(index)=>{
      
        setCurrentQuestion(index)
        setAnswerIndx(null)
    }

    return (
        <div>
            <ul>
                {questions.map((ques, index) => <li className='m-2' key={ques.question} onClick={()=>operation(index)}>{index+1} - {ques.question}</li>)}
            </ul>
        </div>
    );
};

export default AllQues;