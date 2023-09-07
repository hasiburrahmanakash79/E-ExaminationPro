import { configureStore } from '@reduxjs/toolkit'
import quesPaperReducer from './features/quesPaper/quesPaperSlice'
import allExamReducer from './features/allExam/allExamSlice'
import examPageReducer from './features/examPage/examPageSlice'
import demoExamSlice from "./features/demoExam/demoExamSlice";
import shortQuestionSlice from "./features/shortQuestion/shortQuestionSlice";
import longQuestionSlice from "./features/LongQuestion/longQuestionSlice";
import liveExamSlice from "./features/liveExamQuesPaper/liveExamQuesPaper";




const store = configureStore({
    reducer: {
        questionPaper: quesPaperReducer,
        longQuestions: longQuestionSlice,
        allExam: allExamReducer,
        examPage: examPageReducer,
        demoExam: demoExamSlice,
        shortQuestions: shortQuestionSlice,
        liveExam:liveExamSlice
        
    },
})

export default store
