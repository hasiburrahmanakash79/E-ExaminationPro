import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [],
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
                    state.userAnswers[existingAnswerIndex] = {
                        ...state.userAnswers[existingAnswerIndex], selectedOptionId
                    }

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



























