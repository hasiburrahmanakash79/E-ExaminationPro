import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import AboutUs from '../Pages/AboutUs/AboutUs'
import Login from '../Pages/Authentication/Login/Login'
import Registration from '../Pages/Authentication/Registration/Registration'
import NewBlog from '../Pages/BlogPage/NewBlog/NewBlog'
import NewBlogDetails from '../Pages/BlogPage/NewBlog/NewBlogDetails'
import UnderBlog from '../Pages/BlogPage/NewBlog/UnderBlog'
import Contact from '../Pages/Contact/Contact'
import PrivateRouter from './PrivateRouter'
import Error from '../Pages/Error/Error'
import Instructors from '../Pages/InstructorPage/Instructors'
import Dashboard from '../Layouts/Dashboard'
import ManageUsers from '../Pages/Dashboard/AdminDashboard/ManageUser/ManageUsers'
import AdminHome from '../Pages/Dashboard/AdminDashboard/AdminHome/AdminHome'
import Notice from '../Pages/NoticePage/Notice/Notice'
import AllExam from '../Pages/FreeCoursePage/ExamPage/allExam'
import Exam2 from '../Pages/FreeCoursePage/ExamPage/Exam2'
import FreeCoursePage from '../Pages/FreeCoursePage/FreeCoursePage'
import CreateQuesPaper from '../Pages/Dashboard/InstructorDashboard/CreateQuestion/CreateQuesPaper'
import InstructorHome from '../Pages/Dashboard/InstructorDashboard/InstructorHome/InstructorHome'
import Payment from '../Pages/Dashboard/UserDashboard/Payment/Payment'
import QuizDemo from '../Pages/Home/DemoTest/QuizDemo'
import UserHome from '../Pages/Dashboard/UserDashboard/UserHome/UserHome'
import PaymentHistory from '../Pages/Dashboard/UserDashboard/PaymentHistory/PaymentHistory'
import WrittenExams from '../Pages/Exams/WrittenExams/WrittenExams'
import Profile from '../Pages/Authentication/UpdateProfile/Profile'
import UpdateProfile from '../Pages/Authentication/UpdateProfile/UpdateProfile'
import CreateLiveExam from '../Pages/LiveExam/CreateLiveExam/CreateLiveExam'
import JoinLiveExam from '../Pages/LiveExam/JoinLiveExam/JoinLiveExam'
import AppliedLiveExam from '../Pages/Dashboard/UserDashboard/AppliedLiveExam/AppliedLiveExam'
import StudentAnalytics from '../Pages/Dashboard/UserDashboard/StudentAnalytics/StudentAnalytics'
import ExamRoom from '../Pages/LiveExam/ExamRoom/ExamRoom'
import AddBlog from '../Pages/Dashboard/InstructorDashboard/AddBlog/AddBlog'
import UpcomingLiveExam from '../Pages/LiveExam/UpcomingLiveExam/UpcomingLiveExam'
import InstructorChatRoom from '../Pages/LiveExam/InstructorChatRoom/InstructorChatRoom'
import CreateNotice from '../Pages/Dashboard/AdminDashboard/CreateNotice/CreateNotice'
import ResultPage from '../Pages/Home/DemoTest/ResultPage'
import ExamResult from '../Pages/ExamResult/ExamResult'
import ResultPageForMcqFib from '../components/examComponents/QuestionRelated/QuestionResults/ResultPageForMcqFib'
import HomePage from '../Pages/Home/HomePage/HomePage'
import ForumCommunity from '../Pages/Forum_Community/ForumCommunity'
import CreateSubject from '../Pages/Dashboard/AdminDashboard/CreateSubject/CreateSubject'
import AppliedLiveExamAdmin_Instructor from '../Pages/AppliedLiveExamAdmin_Instructor/AppliedLiveExamAdmin_Instructor'
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
        path: '/blog',
        element: <NewBlog></NewBlog>
      },

      {
        path: '/blogDetails/:id',
        element: <NewBlogDetails></NewBlogDetails>
      },
      {
        path: '/blogUnderDetails/:id',
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
        element: <ForumCommunity />
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
      },
      {
        path: '/allAplliedLiveExam',
        element: <AppliedLiveExamAdmin_Instructor />
      },
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
      {
        path: '/dashboard/createSubject',
        element: <CreateSubject />
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
