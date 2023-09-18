import { createSlice } from "@reduxjs/toolkit";

export const examPageSlice = createSlice({
    name: 'examPage',
    initialState: {
        examType: null,
        currentQuestion: 0,
        answerIndx: null,
        result: [],
        view: false,
        inputValue: null,
        optionMcq: null,
        question: null,
        correctAnswer: null,
    },
    reducers: {
        setExamType: (state, { payload }) => {
            state.examType = payload
        },
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


            const result1 = state.result.find(obj => obj.question === state.question) // check if the answer already stored or not
            if (result1) {
                if ((state.examType == 'mcq') || (state.examType == 'multimedia_mcq')) {
                    result1.userAns = state.optionMcq == null ? 'Skipped' : state.optionMcq
                    state.optionMcq = null
                }
                else {
                    result1.userAns = state.inputValue == null ? 'Skipped' : state.inputValue
                    state.inputValue = null
                }
            }
            else {
                if ((state.examType == 'mcq') || (state.examType == 'multimedia_mcq')) {
                    const newObject = {
                        question: state.question,
                        correctAnswer: state.correctAnswer,
                        userAns: state.optionMcq == null ? 'Skipped' : state.optionMcq
                    }
                    state.result.push(newObject)
                    state.optionMcq = null
                }
                else {
                    const newObject = {
                        question: state.question,
                        correctAnswer: state.correctAnswer,
                        userAns: state.inputValue == null ? 'Skipped' : state.inputValue
                    }
                    state.result.push(newObject)
                    state.inputValue = null
                }
            }

        },
        sendResult: (state, { payload }) => {

            const data = state.result.filter(ques => ques.userAns?.toLowerCase() == ques.correctAnswer.toLowerCase()).length * 5

            const resultData = state.result
            const results = { ...payload, resultData, mark: data }

            fetch('http://localhost:4000/examdata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(results)
            })
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
export const { nextQues, prevQues, resetQues, setAnswerIndex, setResult, setView, setInputValue, setMcq, resetResult, setQuestion, setCorrectAns, setExamType, sendResult } = examPageSlice.actions

export default examPageSlice.reducer