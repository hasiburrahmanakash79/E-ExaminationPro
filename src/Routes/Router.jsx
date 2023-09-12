import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../Layouts/Dashboard'
import Main from '../Layouts/Main'
import AboutUs from '../Pages/AboutUs/AboutUs'
import Login from '../Pages/Authentication/Login/Login'
import Registration from '../Pages/Authentication/Registration/Registration'
import Profile from '../Pages/Authentication/UpdateProfile/Profile'
import UpdateProfile from '../Pages/Authentication/UpdateProfile/UpdateProfile'
import NewBlog from '../Pages/BlogPage/NewBlog/NewBlog'
import NewBlogDetails from '../Pages/BlogPage/NewBlog/NewBlogDetails'
import UnderBlog from '../Pages/BlogPage/NewBlog/UnderBlog'
import Contact from '../Pages/Contact/Contact'
import AdminHome from '../Pages/Dashboard/AdminDashboard/AdminHome/AdminHome'
import CreateNotice from '../Pages/Dashboard/AdminDashboard/CreateNotice/CreateNotice'
import ManageUsers from '../Pages/Dashboard/AdminDashboard/ManageUser/ManageUsers'
import AddBlog from '../Pages/Dashboard/InstructorDashboard/AddBlog/AddBlog'
import CreateQuesPaper from '../Pages/Dashboard/InstructorDashboard/CreateQuestion/CreateQuesPaper'
import InstructorHome from '../Pages/Dashboard/InstructorDashboard/InstructorHome/InstructorHome'
import AppliedLiveExam from '../Pages/Dashboard/UserDashboard/AppliedLiveExam/AppliedLiveExam'
import Payment from '../Pages/Dashboard/UserDashboard/Payment/Payment'
import PaymentHistory from '../Pages/Dashboard/UserDashboard/PaymentHistory/PaymentHistory'
import StudentAnalytics from '../Pages/Dashboard/UserDashboard/StudentAnalytics/StudentAnalytics'
import UserHome from '../Pages/Dashboard/UserDashboard/UserHome/UserHome'
import Error from '../Pages/Error/Error'
import ExamResult from '../Pages/ExamResult/ExamResult'
import WrittenExams from '../Pages/Exams/WrittenExams/WrittenExams'
import Exam2 from '../Pages/FreeCoursePage/ExamPage/Exam2'
import AllExam from '../Pages/FreeCoursePage/ExamPage/allExam'
import FreeCoursePage from '../Pages/FreeCoursePage/FreeCoursePage'
import CommentApp from '../Pages/Furam/CommentApp'
import QuizDemo from '../Pages/Home/DemoTest/QuizDemo'
import ResultPage from '../Pages/Home/DemoTest/ResultPage'
import HomePage from '../Pages/Home/HomePage/HomePage'
import Instructors from '../Pages/InstuctorPage/Instructors'
import CreateLiveExam from '../Pages/LiveExam/CreateLiveExam/CreateLiveExam'
import ExamRoom from '../Pages/LiveExam/ExamRoom/ExamRoom'
import InstructorChatRoom from '../Pages/LiveExam/InstructorChatRoom/InstructorChatRoom'
import JoinLiveExam from '../Pages/LiveExam/JoinLiveExam/JoinLiveExam'
import UpcomingLiveExam from '../Pages/LiveExam/UpcomingLiveExam/UpcomingLiveExam'
import Notice from '../Pages/NoticePage/Notice/Notice'
import ResultPageForMcqFib from '../components/examComponents/QuestionRelated/ResultPageForMcqFib'
import PrivateRouter from './PrivateRouter'
import BlogDetails from '../Pages/BlogPage/BlogDetails/BlogDetails'
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
        // element: <NewBlogDetails></NewBlogDetails>
        element:<BlogDetails></BlogDetails>
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
        element: <QuizDemo />
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/home-quiz-result',
        element: <ResultPage />
      },
      ,
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/payment/:id',
        element: (
          <PrivateRouter>
            <Payment />
          </PrivateRouter>
        )
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
          fetch(`http://localhost:4000/questionPaper/${params.id}`)
      },
      {
        path: '/written',
        element: <WrittenExams />
      },

      {
        path: '/createQues',
        element: <CreateQuesPaper />
      },
      {
        path: '/result',
        element: <ResultPageForMcqFib />
      },
      {
        path: '/forum',
        element: <CommentApp />
      },
      {
        path: '/updateProfile',
        element: (
          <PrivateRouter>
            <UpdateProfile></UpdateProfile>
          </PrivateRouter>
        )
      },
      {
        path: '/profile',
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        )
      },
      {
        path: '/createLiveExam',
        element: <CreateLiveExam />
      },
      {
        path: '/upcomingLiveExam',
        element: <UpcomingLiveExam />
      },
      {
        path: '/joinLiveExam',
        element: <JoinLiveExam />
      },
      ,
      {
        path: '/examResults',
        element: <ExamResult />
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
    path: '/examRoom',
    element: <ExamRoom />
  },

  ///// DASHBOARD /////
  {
    path: '/dashboard',
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
      // Admin Dashboard Routes
      {
        path: '/dashboard/adminHome',
        element: <AdminHome />
      },
      {
        path: '/dashboard/manageUsers',
        element: <ManageUsers />
      },
      {
        path: '/dashboard/createNotice',
        element: <CreateNotice />
      },
      // Instructor Dashboard Routes
      {
        path: '/dashboard/instructorHome',
        element: <InstructorHome />
      },
      {
        path: '/dashboard/createQues',
        element: <CreateQuesPaper />
      },
      {
        path: '/dashboard/createLiveExam',
        element: <CreateLiveExam />
      },
      {
        path: '/dashboard/addBlog',
        element: <AddBlog />
      },
      // User Dashboard Routes
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
      {
        path: '/dashboard/appliedLiveExam',
        element: <AppliedLiveExam />
      },
      {
        path: '/dashboard/upcomingLiveExam',
        element: <UpcomingLiveExam />
      },
      {
        path: '/dashboard/studentAnalytics',
        element: <StudentAnalytics />
      }
    ]
  },
  {
    path: '/instructorChatRoom',
    element: <InstructorChatRoom />
  }
])

export default router
