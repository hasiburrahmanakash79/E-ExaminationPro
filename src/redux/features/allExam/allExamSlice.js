import { createSlice } from "@reduxjs/toolkit"


export const allExamSlice=createSlice({
    name:'allExam',
    initialState:{
        exams:[],
        type:''
    },
    reducers:{
        examType:(state,{payload})=>{
            
            state.type=payload
        },
        allExam:(state,{payload})=>{
            state.exams=[...payload]
            console.log(payload)
        }
    }
})


export const { examType,allExam } = allExamSlice.actions

export default allExamSlice.reducer