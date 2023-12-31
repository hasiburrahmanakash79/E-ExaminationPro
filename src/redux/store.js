import { configureStore } from '@reduxjs/toolkit'
import quesPaperReducer from './features/quesPaper/quesPaperSlice'
import allExamReducer from './features/allExam/allExamSlice'
import examPageReducer from './features/examPage/examPageSlice'
import demoExamSlice from "./features/demoExam/demoExamSlice";
import writtenQuestionSlice from "./features/WrittenQuestion/writtenQuestionSlice";
// import ExamRoomControllerReducer from './features/ExamRoomController/ExamRoomControllerSlice';
import liveExamSlice from "./features/liveExamQuesPaper/liveExamQuesPaper";
import ExamRoomControllerSlice from './features/ExamRoomController/ExamRoomControllerSlice';
import userGemsSlice from './features/userGems/userGemsSlice';







const store = configureStore({
        reducer: {
                questionPaper: quesPaperReducer,
                allExam: allExamReducer,
                examPage: examPageReducer,
                demoExam: demoExamSlice,
                writtenQuestions: writtenQuestionSlice,
                examRoomControls: ExamRoomControllerSlice,
                liveExam: liveExamSlice,
                userGems:userGemsSlice
        },
})

export default store
