import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAnswers: [],
    currentQuestionIndex: 0
}
const writtenQuestionSlice = createSlice({
    name: 'writtenQuestionSlice',
    initialState,
    reducers: {
        nextWrittenQuestion: (state) => {
            state.currentQuestionIndex += 1



        },
        addUserAnswer: ((state, { payload }) => {
            /* well this is an interesting problem i had to figure out like when i was dispatching the data it weren't updating in the selector function. then i googled like if there any way of refetch type functionality in redux toolkit, then i realized that i was implementing wrong. 

            // Solved: I just updated the answered array in the reducer. :)
            
            */
            const { questionId, question, ins_answer, stu_answer } = payload
            let indexToUpdate = -1;
            indexToUpdate = state.userAnswers.findIndex(item => item.questionId === questionId)
            if (indexToUpdate === -1) {
                state.userAnswers.push(payload)
            } else {
                state.userAnswers[indexToUpdate].stu_answer = stu_answer

            }
        })

    }
})
export const { addUserAnswer, nextWrittenQuestion } = writtenQuestionSlice.actions
export default writtenQuestionSlice.reducer