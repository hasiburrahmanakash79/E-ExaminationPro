import { createSlice } from "@reduxjs/toolkit";

export const quesPaperSlice = createSlice({
    name: 'quesPaper',
    initialState: {
        type: '',
        formData: {
            subjectName: '',
            subjectCode: '',
            semester: '',
            date: '',
            email: '',
        },
        questions: [],
    },
    reducers: {
        examType: (state, { payload }) => {
            state.type = payload
        },
        subjectInfo: (state, { payload }) => {
            const { name, value } = payload.target
            state.formData = {
                ...state.formData
                , [name]: value
            }
        },
        quesPaper: (state, { payload }) => {
           const newQues={
                question: '',
                options: ['', '', '', ''],
                correctAnswer: '',
            }
            state.questions = [...state.questions, newQues ]
            if(payload){
                const updatedQuestions = [...state.questions];
                updatedQuestions[payload?.index][payload?.field] = payload?.value
                state.questions = updatedQuestions
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { examType, subjectInfo, quesPaper } = quesPaperSlice.actions

export default quesPaperSlice.reducer