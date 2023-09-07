import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import AboutUs from '../Pages/AboutUs/AboutUs'
import Login from '../Pages/Authentication/Login/Login'
import Registration from '../Pages/Authentication/Registration/Registration'
import HomePage from '../Pages/Home/HomePage/HomePage'
// import Blog from '../Pages/BlogPage/Blog/Blog'
import Dashboard from '../Layouts/Dashboard'
import Contact from '../Pages/Contact/Contact'
import AdminHome from '../Pages/Dashboard/AdminDashboard/AdminHome/AdminHome'
import ManageUsers from '../Pages/Dashboard/AdminDashboard/ManageUser/ManageUsers'
import Error from '../Pages/Error/Error'
import ShortQ from '../Pages/Exams/ShortQuestion/ShortQ'
import Instructors from '../Pages/InstuctorPage/Instructors'
import ResultPageForMcqFib from '../components/QuestionRelated/ResultPageForMcqFib'
import PrivateRouter from './PrivateRouter'

import UpdateProfile from '../Pages/Authentication/UpdateProfile/UpdateProfile'
import NewBlog from '../Pages/BlogPage/NewBlog/NewBlog'
import NewBlogDetails from '../Pages/BlogPage/NewBlog/NewBlogDetails'
import UnderBlog from '../Pages/BlogPage/NewBlog/UnderBlog'
import CreateQuesPaper from '../Pages/Dashboard/InstructorDashboard/CreateQuestion/CreateQuesPaper'
import InstructorHome from '../Pages/Dashboard/InstructorDashboard/InstructorHome/InstructorHome'
import Payment from '../Pages/Dashboard/UserDashboard/Payment/Payment'
import PaymentHistory from '../Pages/Dashboard/UserDashboard/PaymentHistory/PaymentHistory'
import UserHome from '../Pages/Dashboard/UserDashboard/UserHome/UserHome'
import Exam2 from '../Pages/FreeCoursePage/ExamPage/Exam2'
import AllExam from '../Pages/FreeCoursePage/ExamPage/allExam'
import FreeCoursePage from '../Pages/FreeCoursePage/FreeCoursePage'
import QuizHomePage from '../Pages/Home/DemoTest/QuizHomePage'
import ResultPage from '../Pages/Home/DemoTest/ResultPage'
import Notice from '../Pages/NoticePage/Notice/Notice'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
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
        path: "/blog",
        element: <NewBlog></NewBlog>
      },

      {
        path: "/blogDetails/:id",
        element: <NewBlogDetails></NewBlogDetails>
      },
      // {
      //   path: "/blogDetails/:id",
      //   element: <NewBlogDetails></NewBlogDetails>
      // },


      {
        path: "/blogUnderDetails/:id",
        element: <UnderBlog></UnderBlog>
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
        path: '/payment/:id',
        element: <PrivateRouter><Payment /></PrivateRouter>
      },
      {
        path: '/allSubjects',

        element: (
          <PrivateRouter>
            <FreeCoursePage />
          </PrivateRouter>
        )
      },
      {
        path: '/allexam',
        element: <AllExam />
      },
      {
        path: '/exam/:id',
        element: <Exam2 />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/questionPaper/${params.id}`
          )
      },
      {
        path: '/shortQ',
        element: <ShortQ />
      },
      {
        path: '/result',
        element: <ResultPageForMcqFib />
      },
      {
        path: '/updateProfile',
        element: <PrivateRouter><UpdateProfile></UpdateProfile></PrivateRouter>
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
    element: <PrivateRouter><Dashboard /></PrivateRouter>,
    children: [
      {
        path: '/dashboard/adminHome',
        element: <AdminHome />
      },
      {
        path: '/dashboard/manageUsers',
        element: <ManageUsers />
      },
      {
        path: '/dashboard/instructorHome',
        element: <InstructorHome />
      },
      {
        path: '/dashboard/createQues',
        element: <CreateQuesPaper />
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment />
      },
      {
        path: '/dashboard/userHome',
        element: <UserHome />
      },
      {
        path: '/dashboard/paymentHistory',
        element: <PaymentHistory />
      },
    ]
  }
])

export default router


