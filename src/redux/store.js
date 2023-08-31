import { configureStore } from "@reduxjs/toolkit"
import demoExamSlice from "./features/demoExam/demoExamSlice";
import shortQuestionSlice from "./features/shortQuestion/shortQuestionSlice";


const store = configureStore({
    reducer: {
        demoExam: demoExamSlice,
        shortQuestions: shortQuestionSlice
    }
})

export default store;