import { configureStore } from "@reduxjs/toolkit"
import demoExamSlice from "./features/demoExam/demoExamSlice";


const store = configureStore({
    reducer: {
        demoExam: demoExamSlice
    }
})

export default store;