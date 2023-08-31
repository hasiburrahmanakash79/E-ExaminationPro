import { createSlice } from "@reduxjs/toolkit";

export const examPageSlice = createSlice({
    name: 'examPage',
    initialState: {
        currentQuestion:0,
        answerIndx:null,
        result:[],
        view:false,
        inputValue:'',
        optionMcq:null,
    },
    reducers: {
    nextQues:(state,{payload})=>{

        state.currentQuestion=state.currentQuestion+1

    },
    prevQues:(state,{payload})=>{
        state.currentQuestion=state.currentQuestion-1
    },
    resetQues:(state,{payload})=>{
        state.currentQuestion=0;
    },
    setAnswerIndex:(state,{payload})=>{
        state.answerIndx=payload
    },
    setResult:(state,{payload})=>{
    state.result.push(payload)
   },
    setView:(state,{payload})=>{
        state.view=payload
    },
    setInputValue:(state,{payload})=>{
        state.inputValue=payload
    },
    setMcq:(state,{payload})=>{
        state.optionMcq=payload
    },
    resetResult:(state)=>{
        state.result=[]
        state.currentQuestion=0
    },
    
}})

// Action creators are generated for each case reducer function
export const { nextQues,prevQues,resetQues,setAnswerIndex,setResult,setView,setInputValue,setMcq,resetResult } = examPageSlice.actions

export default examPageSlice.reducer