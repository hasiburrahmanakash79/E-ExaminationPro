import { useState, useEffect } from 'react';
import Hotkeys from 'react-hot-keys';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const ShortcutKey = () => {
  const [questions, setQuestions] = useState([
    'What is your Team name?',
    'How many members are is your team?',
    'Akash, Abir, Arafat, Naser, Saiful',
    'What is your name?',
    'Where are you from?',
    'What is your favorite color?',
    'What is your favorite hobby?',
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleInputChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  const handleArrowClick = (direction) => {
    if (direction === 'next') {
      setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questions.length - 1));
      console.log("You wen ahead with the question ");
    } else if (direction === 'prev') {
      setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      console.log("You wen to the back question ");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit button clicked');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmit(e);
      } else if (e.key === 'ArrowLeft') {
        handleArrowClick('prev');
      } else if (e.key === 'ArrowRight') {
        handleArrowClick('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='w-1/2 mx-auto my-28 text-center'>
      <Hotkeys keyName='shift+enter'>
        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <p className=''>{questions[currentQuestionIndex]}</p>
          </div>
          <div className='flex items-center justify-center'>
            <button
              type='button'
              onClick={() => handleArrowClick('prev')}
              className='inline-flex items-center gap-3'
            >
              <span className='ml-3 text-2xl text-white font-bold py-2 px-5 rounded-lg bg-[#5a386e] shadow-xl hover:bg-transparent hover:text-slate-900 transition duration-200'>
                <AiOutlineLeft />
              </span>{' '}
              <span className='text-lg font-medium'>Previous</span>
            </button>
            <button
              type='button'
              onClick={() => handleArrowClick('next')}
              className='inline-flex items-center gap-3'
            >
              <span className='text-lg font-medium'>Next</span>{' '}
              <span className='mr-3 text-2xl text-white font-bold py-2 px-5 rounded-lg bg-[#5a386e]'>
                <AiOutlineRight />
              </span>
            </button>
          </div>
          <div>
            <button
              type='submit'
              className='py-2 px-6 bg-[#61367a] text-white hover:bg-transparent hover:text-slate-900 shadow-lg border rounded-lg transition duration-200'
            >
              Submit
            </button>
          </div>
        </form>
      </Hotkeys>
    </div>
  );
};

export default ShortcutKey;