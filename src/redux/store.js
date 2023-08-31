import { configureStore } from '@reduxjs/toolkit'
import quesPaperReducer from './features/quesPaper/quesPaperSlice'
import allExamReducer from './features/allExam/allExamSlice'
import examPageReducer from './features/examPage/examPageSlice'
 const store = configureStore({
  reducer: {
    questionPaper: quesPaperReducer,
    allExam: allExamReducer,
    examPage:examPageReducer
  },
})

export default store