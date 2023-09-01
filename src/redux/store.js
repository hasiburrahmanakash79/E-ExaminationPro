import { configureStore } from "@reduxjs/toolkit"
import demoExamSlice from "./features/demoExam/demoExamSlice";
import shortQuestionSlice from "./features/shortQuestion/shortQuestionSlice";
import longQuestionSlice from "./features/LongQuestion/longQuestionSlice";


const store = configureStore({
    reducer: {
        demoExam: demoExamSlice,
        shortQuestions: shortQuestionSlice,
        longQuestions: longQuestionSlice
    }
})

export default store;