import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAnswers: []
}
const longQuestionSlice = createSlice({
    name: 'longQuestionSlice',
    initialState,
    reducers: {
        addLongQuestionAnswers: ((state, { payload }) => {
            const { questionId, answer } = payload
            const indexToUpdate = state.userAnswers.findIndex(item => item.questionId === questionId)
            if (indexToUpdate !== -1) {
                state.userAnswers[indexToUpdate].answer = answer
            } else {

                state.userAnswers.push(payload)
            }
        })
    }
})
export const { addLongQuestionAnswers } = longQuestionSlice.actions
export default longQuestionSlice.reducer