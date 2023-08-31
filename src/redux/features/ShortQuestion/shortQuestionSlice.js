import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAnswers: []
}
const shortQuestionSlice = createSlice({
    name: 'shortQuestionSlice',
    initialState,
    reducers: {
        addUserAnswer: ((state, { payload }) => {
            /* well this is an interesting problem i had to figure out like when i was dispatching the data it weren't updating in the selector function. then i googled like if there any way of refetch type functionality in redux toolkit, then i realized that i was implementing wrong. 

            // Solved: I just updated the answered array in the reducer. :)
            
            */
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
export const { addUserAnswer } = shortQuestionSlice.actions
export default shortQuestionSlice.reducer