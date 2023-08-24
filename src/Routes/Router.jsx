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
import Instructors from '../Pages/InstuctorPage/Instructors'
import Blog from '../Pages/BlogPage/Blog/Blog'
import Notice from '../Pages/NoticePage/Notice/Notice'
import AdminHome from '../Pages/Dashboard/AdminHome/AdminHome'
import Dashboard from '../Layouts/Dashboard'
import ManageUsers from '../Pages/Dashboard/ManageUsers/ManageUsers'
import ResultPageForMcqFib from '../components/QuestionRelated/ResultPageForMcqFib'

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
        path: '/instructors',
        element: <Instructors />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/notice',
        element: <Notice />
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
        element: <Exam></Exam>
      },
      {
        path: '/shortQ',
        element: <ShortQ />
      },
      {
        path: '/result',
        element: <ResultPageForMcqFib />
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
  },
  {
    path: '/dashboard',
    element: <Dashboard/>,
    children: [
      {
        path: '/dashboard/adminHome',
        element: <AdminHome/>
      },
      {
        path: '/dashboard/manageUsers',
        element: <ManageUsers/>
      },
    ]
  },
  
])

export default router
