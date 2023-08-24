import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import HomePage from '../Pages/Home/HomePage/HomePage'

import Contact from '../Pages/Contact/Contact'
import QuizHomePage from '../Pages/Home/DemoTest/QuizHomePage'
import ResultPage from '../Pages/Home/DemoTest/ResultPage'
import Login from '../Pages/Authentication/Login/Login'
import Registration from '../Pages/Authentication/Registration/Registration'
import FreeCoursePage from '../Pages/FreeCoursePage/FreeCoursePage'
import Exam from '../Pages/FreeCoursePage/ExamPage/Exam'
import ShortQ from '../Pages/Exams/ShortQuestion/ShortQ'
import Exam2 from '../Pages/FreeCoursePage/ExamPage/Exam2'
import CreateQuesPaper from '../Pages/DashboardPages/InstructorPages/CreateQuesPaper/CreateQuesPaper'
import AllExam from '../Pages/FreeCoursePage/ExamPage/allExam'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/demo-test',
        element: <QuizHomePage />
      },
      {
        path: '/home-quiz-result',
        element: <ResultPage />
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/free_courses',
        element: <FreeCoursePage></FreeCoursePage>
      },
      {
        path: '/exam',
        element: <AllExam/>
      },
      {
        path: "/shortQ",
        element: <ShortQ />
      }  ,
      {
        path: '/createQues',
        element: <CreateQuesPaper />
      }

    ]
  },

  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signUp',
    element: <Registration />
  }

])

export default router
