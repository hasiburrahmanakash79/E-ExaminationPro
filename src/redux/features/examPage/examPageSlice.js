import { createSlice } from "@reduxjs/toolkit";

export const examPageSlice = createSlice({
    name: 'examPage',
    initialState: {
        currentQuestion: 0,
        answerIndx: null,
        result: [],
        view: false,
        inputValue: '',
        optionMcq: null,
        question: null,
        correctAnswer:null,
    },
    reducers: {
        nextQues: (state, { payload }) => {

            state.currentQuestion = state.currentQuestion + 1

        },
        prevQues: (state, { payload }) => {
            state.currentQuestion = state.currentQuestion - 1
        },
        resetQues: (state, { payload }) => {
            state.currentQuestion = 0;
        },
        setAnswerIndex: (state, { payload }) => {
            state.answerIndx = payload
        },
        setResult: (state, { payload }) => {
            ////////////////
            const result1 = state.result.find(obj => obj.question === state.question) // check if the answer allready stored or not
            if (result1) {
                console.log()
                result1.userAns = state.optionMcq
            } else {
                const newObject = {
                    question: state.question,
                    correctAnswer: state.correctAnswer,
                    userAns: state.optionMcq
                }

                state.result.push(newObject)

            }
        },
        setView: (state, { payload }) => {
            state.view = payload
        },
        setQuestion: (state, { payload }) => {
            state.question = payload
        },
        setCorrectAns: (state, { payload }) => {
            state.correctAnswer = payload
        },
        setInputValue: (state, { payload }) => {
            state.inputValue = payload
        },
        setMcq: (state, { payload }) => {
            state.optionMcq = payload
        },
        resetResult: (state) => {
            state.result = []
            state.currentQuestion = 0
        },

    }
})

// Action creators are generated for each case reducer function
export const { nextQues, prevQues, resetQues, setAnswerIndex, setResult, setView, setInputValue, setMcq, resetResult,setQuestion,setCorrectAns } = examPageSlice.actions

export default examPageSlice.reducer