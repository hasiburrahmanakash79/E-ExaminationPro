import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import HomePage from '../Pages/Home/HomePage/HomePage'

import AboutUs from '../Pages/AboutUs/AboutUs'
import Login from '../Pages/Authentication/Login/Login'
import Registration from '../Pages/Authentication/Registration/Registration'
import Blog from '../Pages/BlogPage/Blog/Blog'
import Contact from '../Pages/Contact/Contact'
import ShortQ from '../Pages/Exams/ShortQuestion/ShortQ'
import Exam from '../Pages/FreeCoursePage/ExamPage/Exam'
import Instructors from '../Pages/InstuctorPage/Instructors'
// import Blog from '../Pages/BlogPage/Blog/Blog'
// import Notice from '../Pages/NoticePage/Notice/Notice'
import Dashboard from '../Layouts/Dashboard'
import ResultPageForMcqFib from '../components/QuestionRelated/ResultPageForMcqFib'
import ManageUsers from '../Pages/Dashboard/AdminDashboard/ManageUser/ManageUsers'
import AdminHome from '../Pages/Dashboard/AdminDashboard/AdminHome/AdminHome'
import FreeCoursePage from '../Pages/FreeCoursePage/FreeCoursePage'
import QuizHomePage from '../Pages/Home/DemoTest/QuizHomePage'
import ResultPage from '../Pages/Home/DemoTest/ResultPage'
// import Instructors from '../Pages/InstuctorPage/Instructors'
import Notice from '../Pages/NoticePage/Notice/Notice'


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
        path: '/about',
        element: <AboutUs></AboutUs>

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
