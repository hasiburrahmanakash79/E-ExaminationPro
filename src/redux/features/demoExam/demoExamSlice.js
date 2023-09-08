import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [
        {
            "id": 1,
            "text": "What is the capital of France?",
            "choices": [
                { "id": "paris", "text": "Paris" },
                { "id": "london", "text": "London" },
                { "id": "berlin", "text": "Berlin" },
                { "id": "madrid", "text": "Madrid" }
            ],
            "correctAnswer": "paris"
        },
        {
            "id": 2,
            "text": "Which planet is known as the 'Red Planet'?",
            "choices": [
                { "id": "venus", "text": "Venus" },
                { "id": "mars", "text": "Mars" },
                { "id": "jupiter", "text": "Jupiter" },
                { "id": "saturn", "text": "Saturn" }
            ],
            "correctAnswer": "mars"
        },
        {
            "id": 3,
            "text": "What is the largest mammal in the world?",
            "choices": [
                { "id": "elephant", "text": "African Elephant" },
                { "id": "whale", "text": "Blue Whale" },
                { "id": "giraffe", "text": "Giraffe" },
                { "id": "lion", "text": "African Lion" }
            ],
            "correctAnswer": "bluewhale"
        },
        {
            "id": 4,
            "text": "Who wrote the play 'Romeo and Juliet'?",
            "choices": [
                { "id": "shakespeare", "text": "William Shakespeare" },
                { "id": "dickens", "text": "Charles Dickens" },
                { "id": "austen", "text": "Jane Austen" },
                { "id": "tolstoy", "text": "Leo Tolstoy" }
            ],
            "correctAnswer": "shakespeare"
        },
        {
            "id": 5,
            "text": "What is the chemical symbol for gold?",
            "choices": [
                { "id": "go", "text": "Go" },
                { "id": "gd", "text": "Gd" },
                { "id": "au", "text": "Au" },
                { "id": "ag", "text": "Ag" }
            ],
            "correctAnswer": "au"
        }
    ],
    userAnswers: [],
    currentQuestionIndex: 0,
    isSubmitted: false,

}
const demoTestSlice = createSlice(
    {
        name: 'demoTestSlice',
        initialState,
        reducers: {
            setQuestions: (state, { payload }) => {
                state.questions = payload
            },
            selectOption: (state, action) => {
                const { questionId, selectedOptionId } = action.payload;

                const existingAnswerIndex = state.userAnswers.findIndex(answer => answer.questionId == questionId)
                if (existingAnswerIndex !== -1) {
                    state.userAnswers[existingAnswerIndex].selectedOptionId = selectedOptionId


                } else {
                    state.userAnswers.push({ questionId, selectedOptionId })
                }
            },
            nextQuestion: (state, { payload }) => {
                // to add previous and next question functionality
                const direction = payload || 1

                state.currentQuestionIndex += direction;
            },
            submitTest: (state) => {
                state.isSubmitted = true
            }
        }
    }
)
export const { setQuestions, selectOption, nextQuestion, submitTest } = demoTestSlice.actions
export default demoTestSlice.reducer