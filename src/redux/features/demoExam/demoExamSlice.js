import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [
        {
            id: 1,
            text: 'What is the capital of France?',
            choices: [
                { id: 'paris', text: 'Paris' },
                { id: 'london', text: 'London' },
                { id: 'berlin', text: 'Berlin' },
                { id: 'madrid', text: 'Madrid' }
            ],
            correctAnswer: 'paris'
        },
        {
            id: 2,
            text: "Which planet is known as the 'Red Planet'?",
            choices: [
                { id: 'venus', text: 'Venus' },
                { id: 'mars', text: 'Mars' },
                { id: 'jupiter', text: 'Jupiter' },
                { id: 'saturn', text: 'Saturn' }
            ],
            correctAnswer: 'mars'
        },
        {
            id: 3,
            text: "Which planet is known as the Dwarf Planet?",
            choices: [
                { id: 'venus', text: 'Venus' },
                { id: 'mars', text: 'Mars' },
                { id: 'jupiter', text: 'Jupiter' },
                { id: 'pluto', text: 'pluto' }
            ],
            correctAnswer: 'pluto'
        },
        {
            id: 4,
            text: "Which planet is known as the hottest planet?",
            choices: [
                { id: 'venus', text: 'Venus' },
                { id: 'mars', text: 'Mars' },
                { id: 'jupiter', text: 'Jupiter' },
                { id: 'saturn', text: 'Saturn' }
            ],
            correctAnswer: 'venus'
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