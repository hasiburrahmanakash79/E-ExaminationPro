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
import Instructors from '../Pages/InstuctorPage/Instructors'
import Blog from '../Pages/BlogPage/Blog/Blog'
import Notice from '../Pages/NoticePage/Notice/Notice'
import Dashboard from '../Layouts/Dashboard'
import ResultPageForMcqFib from '../components/QuestionRelated/ResultPageForMcqFib'
import ManageUsers from '../Pages/Dashboard/AdminDashboard/ManageUser/ManageUsers'
import AdminHome from '../Pages/Dashboard/AdminDashboard/AdminHome/AdminHome'

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
        path: '/allexam',
        element: <AllExam/>
      },
      {
        path: '/exam/:id',
        element: <Exam2/>,
        loader:({params})=>fetch(`http://localhost:5000/questionPaper/${params.id}`)
      },
      {
        path: '/shortQ',
        element: <ShortQ />
      }  ,
      {
        path: '/createQues',
        element: <CreateQuesPaper />
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
