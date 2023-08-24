import { useState, useEffect } from 'react';

const useShuffle = (array) => {
  const [shuffledArray, setShuffledArray] = useState([]);

  useEffect(() => {
    const shuffled = [...array]; // Create a copy of the original array
    console.log(shuffled)
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    setShuffledArray(shuffled);
  }, [array]);


  //   // Simple shuffle
//   const shuffleArray = (array) => {
//     return array.slice().sort(() => Math.random() - 0.5); 
//   };

// // Fisher-Yates Shuffle
// const shuffleArray = (array) => {
//     const shuffledArray = [...array]; // Create a copy of the original array
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
//       [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
//     }
//     return shuffledArray;
//   };

  return shuffledArray;
};

export default useShuffle;
