import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

export const quesPaperSlice = createSlice({
    name: 'quesPaper',
    initialState: {
        allSubject: [],
        type: null,
        formData: {
            subjectName: null,
            exam_code: null,
            subject_code: null,
            batch: null,
            date: null,
            email: null,
            videoURL: null,
        },
        questions: [],
        codeRepeat: null,
    },
    reducers: {
        setSubject: (state, { payload }) => {
            state.allSubject = [...payload]
        },
        examType: (state, { payload }) => {
            state.type = payload
        },
        setSubjectCode: (state, { payload }) => {
            console.log(payload)
            state.formData.subject_code = payload
        }
        ,
        setEmail: (state, { payload }) => {

            state.formData.email = payload
        }
        ,
        subjectInfo: (state, { payload }) => {

            const { name, value } = payload.target
            console.log(name, value, 'sssssssssssss')


            if (name === 'exam_code') {
                console.log(name, '------------------------------------------44')
                state.codeRepeat = value

            }


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
export const { examType, setSubject, subjectInfo, quesPaper, setEmail, setSubjectCode } = quesPaperSlice.actions

export default quesPaperSlice.reducer