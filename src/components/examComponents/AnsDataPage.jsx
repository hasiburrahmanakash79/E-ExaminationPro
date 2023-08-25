
const AnsDataPage = ({result,questions}) => {
    return (
        <div>
            <div className='max-w-[100px]   min-h-[60px] text-white bg-blue-900 rounded-full flex justify-center items-center'>
                <h1 className='text-3xl font-bold'> <span className='text-red-500'>{result.filter(ques => ques.userAns.toLowerCase() === ques.correctAnswer.toLowerCase()).length * 5}</span>/<span>{questions.length * 5}</span> </h1>
            </div>

            {result?.map((ques, index) => <div className='mt-4 border-2 border-blue-900 py-5 rounded-2xl px-5' key={index}>
                <h1 className='text-3xl font-bold'>{index + 1}- {ques.question}</h1>
                <p className='text-xl mt-3'><span className='  font-semibold me-4'>Your Ans: </span><span className={ques.userAns.toLowerCase() == ques.correctAnswer.toLowerCase() ? "text-white bg-green-600 rounded-3xl py-1 px-4" : 'text-white bg-red-600 rounded-3xl py-1 px-4'}>{ques.userAns}</span></p>
                <p className='text-xl mt-3'><span className='  font-semibold me-4'>Correct Ans:</span><span className='text-white bg-green-600 rounded-3xl py-1 px-4'>{ques.correctAnswer}</span></p>

            </div>)}
        </div>
    );
};

export default AnsDataPage;