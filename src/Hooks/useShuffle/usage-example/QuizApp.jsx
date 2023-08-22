import { useState } from "react";
import useShuffle from "../useShuffle";

const initialQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: "Paris",
    hint: "Think about famous landmarks like the Eiffel Tower.",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Neptune"],
    correctAnswer: "Mars",
    hint: "This planet is often associated with its reddish appearance.",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
    hint: "This creature lives in the ocean and is the largest animal on Earth.",
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
    hint: "This playwright is considered one of the greatest in history.",
  },
  {
    question: "What gas do plants use for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
    correctAnswer: "Carbon Dioxide",
    hint: "Plants take in this gas from the atmosphere to make their own food.",
  },
];

const QuizApp = () => {

// using useShuffle hook for Shuffling
  const shuffledQuestions = useShuffle(initialQuestions);
//   need to define the index for rendering shuffled questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  //   managing hints Start
  const [hintStates, setHintStates] = useState(
    initialQuestions.map(() => false) // Initialize hint states for all questions
  );

  const toggleHint = () => {
    const newHintStates = [...hintStates];
    newHintStates[currentQuestionIndex] = true;
    setHintStates(newHintStates);
  };
  //   managing hints end

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz is completed
    }
  };

  const handleAnswerSelect = (selectedAnswer) => {
    // Check if the selected answer is correct
    // Update UI accordingly
    // Move to the next question
    handleNextQuestion();
  };

 

  

  if (shuffledQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];



  return (
    <div>
      <div>
        <h2 className="mx-5 my-3">Question {currentQuestionIndex + 1}</h2>
        <p className="mx-5 my-3">{currentQuestion.question}</p>
        <ul>
          {currentQuestion.options.map((option, index) => (
            <li
              className="mx-5"
              key={index}
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
        {/* Showing hint start */}
        {hintStates[currentQuestionIndex] && (
          <p className="mx-5 text-red-500">{currentQuestion.hint}</p>
        )}
        {/* Showing hint ends */}

        {/* Hint button */}
        <button className="btn-primary mx-5" onClick={toggleHint}>
          Show Hint
        </button>


        <button className="btn-primary" onClick={handleNextQuestion}>
          Next Question
        </button>
      </div>
    </div>
  );
};

export default QuizApp;
