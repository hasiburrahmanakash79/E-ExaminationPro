import { createSlice } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";


import axios from "axios";
export const liveExamQuesPaper = createSlice({
    name: 'quesPaper',
    initialState: {
        allSubject: [],
        type: null,
        e_id: null,
        examData: null,
        formData: {
            video: null,
        },
        questions: [],
    },
    reducers: {
        setExamData: (state, { payload }) => {
            state.e_id = payload
            //state.examData= payload
        },
        setSubject: (state, { payload }) => {
            state.allSubject = [...payload]
        },
        examType: (state, { payload }) => {
            state.type = payload
        },

        setSubjectCode: (state, { payload }) => {
            //console.log(payload)
            state.formData.subject_code = payload
        }
        ,
        setEmail: (state, { payload }) => {

            state.formData.email = payload
        }
        ,
        subjectInfo: (state, { payload }) => {
            const { name, value } = payload.target
            state.formData = {
                ...state.formData
                , [name]: value
            }
        },
        quesPaper: (state, { payload }) => {
            if (payload?.add == 'add') {
                const newQues = {
                    question: '',
                    options: ['', '', '', ''],
                    correctAnswer: '',
                }
                state.questions = [...state.questions, newQues]
            }
            else {

                const updatedQuestions = [...state.questions];
                updatedQuestions[payload?.index][payload?.field] = payload?.value
                state.questions = updatedQuestions

            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { examType, setSubject, subjectInfo, quesPaper, setEmail, setSubjectCode, setExamData } = liveExamQuesPaper.actions

export default liveExamQuesPaper.reducer