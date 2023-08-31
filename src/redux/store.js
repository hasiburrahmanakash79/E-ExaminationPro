import { configureStore } from '@reduxjs/toolkit'
import quesPaperReducer from './features/quesPaper/quesPaperSlice'
import allExamReducer from './features/allExam/allExamSlice'
import examPageReducer from './features/examPage/examPageSlice'
import demoExamSlice from "./features/demoExam/demoExamSlice";
import shortQuestionSlice from "./features/shortQuestion/shortQuestionSlice";
 const store = configureStore({
  reducer: {
    questionPaper: quesPaperReducer,
    allExam: allExamReducer,
    examPage:examPageReducer,
    demoExam: demoExamSlice,
    shortQuestions: shortQuestionSlice
  },
})

export default store
