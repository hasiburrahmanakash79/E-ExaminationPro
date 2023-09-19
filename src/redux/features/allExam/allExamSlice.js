import { createSlice } from "@reduxjs/toolkit"


export const allExamSlice = createSlice({
    name: 'allExam',
    initialState: {
        exams: [],
        type: null,
        batch: null,
    },
    reducers: {
        examType: (state, { payload }) => {

            state.type = payload
        },
        allExam: (state, { payload }) => {
            state.exams = [...payload]
            //console.log(payload)
        },
        checkBatch: (state, { payload }) => {
            //console.log(payload,'-------------------------------------------   21 all exam slice')
            state.batch = payload.batch
        }
    }
})


export const { examType, allExam, checkBatch } = allExamSlice.actions

export default allExamSlice.reducer