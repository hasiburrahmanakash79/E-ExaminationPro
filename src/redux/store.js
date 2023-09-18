import { configureStore } from '@reduxjs/toolkit'
import quesPaperReducer from './features/quesPaper/quesPaperSlice'
import allExamReducer from './features/allExam/allExamSlice'
import examPageReducer from './features/examPage/examPageSlice'
import demoExamSlice from "./features/demoExam/demoExamSlice";
import shortQuestionSlice from "./features/shortQuestion/shortQuestionSlice";
import longQuestionSlice from "./features/LongQuestion/longQuestionSlice";
// import ExamRoomControllerReducer from './features/ExamRoomController/ExamRoomControllerSlice';
import liveExamSlice from "./features/liveExamQuesPaper/liveExamQuesPaper";
import ExamRoomControllerSlice from './features/ExamRoomController/ExamRoomControllerSlice';
import userGemsSlice from './features/userGems/userGemsSlice';







const store = configureStore({
        reducer: {
                questionPaper: quesPaperReducer,
                longQuestions: longQuestionSlice,
                allExam: allExamReducer,
                examPage: examPageReducer,
                demoExam: demoExamSlice,
                shortQuestions: shortQuestionSlice,
                examRoomControls: ExamRoomControllerSlice,
                liveExam: liveExamSlice,
                userGems:userGemsSlice
        },
})

export default store
