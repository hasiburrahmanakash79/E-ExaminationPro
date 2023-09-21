import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import AboutUs from '../Pages/AboutUs/AboutUs'
import Login from '../Pages/Authentication/Login/Login'
import Registration from '../Pages/Authentication/Registration/Registration'
import Profile from '../Pages/Authentication/UpdateProfile/Profile'
import UpdateProfile from '../Pages/Authentication/UpdateProfile/UpdateProfile'
import NewBlog from '../Pages/BlogPage/NewBlog/NewBlog'
import UnderBlog from '../Pages/BlogPage/NewBlog/UnderBlog'
import Contact from '../Pages/Contact/Contact'
import PrivateRouter from './PrivateRouter'
import Error from '../Pages/Error/Error'
import Instructors from '../Pages/InstructorPage/Instructors'
import Dashboard from '../Layouts/Dashboard'
import ManageUsers from '../Pages/Dashboard/AdminDashboard/ManageUser/ManageUsers'
import AdminHome from '../Pages/Dashboard/AdminDashboard/AdminHome/AdminHome'
import Notice from '../Pages/NoticePage/Notice/Notice'

import Exam2 from '../Pages/FreeCoursePage/ExamPage/Exam2'
import FreeCoursePage from '../Pages/FreeCoursePage/FreeCoursePage'
import CreateQuesPaper from '../Pages/Dashboard/InstructorDashboard/CreateQuestion/CreateQuesPaper'
import InstructorHome from '../Pages/Dashboard/InstructorDashboard/InstructorHome/InstructorHome'
import Payment from '../Pages/Dashboard/UserDashboard/Payment/Payment'
import QuizDemo from '../Pages/Home/DemoTest/QuizDemo'
import UserHome from '../Pages/Dashboard/UserDashboard/UserHome/UserHome'
import PaymentHistory from '../Pages/Dashboard/UserDashboard/PaymentHistory/PaymentHistory'
import WrittenExams from '../Pages/Exams/WrittenExams/WrittenExams'
import CreateLiveExam from '../Pages/LiveExam/CreateLiveExam/CreateLiveExam'
import AppliedLiveExam from '../Pages/Dashboard/UserDashboard/AppliedLiveExam/AppliedLiveExam'
import StudentAnalytics from '../Pages/Dashboard/UserDashboard/StudentAnalytics/StudentAnalytics'
import ExamRoom from '../Pages/LiveExam/ExamRoom/ExamRoom'
import AddBlog from '../Pages/Dashboard/InstructorDashboard/AddBlog/AddBlog'
import UpcomingLiveExam from '../Pages/LiveExam/UpcomingLiveExam/UpcomingLiveExam'
import InstructorChatRoom from '../Pages/LiveExam/InstructorChatRoom/InstructorChatRoom'
import CreateNotice from '../Pages/Dashboard/AdminDashboard/CreateNotice/CreateNotice'
import ResultPageForMcqFib from '../components/examComponents/QuestionRelated/QuestionResults/ResultPageForMcqFib'
import HomePage from '../Pages/Home/HomePage/HomePage'
import ForumCommunity from '../Pages/Forum_Community/ForumCommunity'
import DemoResult from '../components/examComponents/QuestionRelated/DemoQuesResult/DemoResult'
import CreateSubject from '../Pages/Dashboard/AdminDashboard/CreateSubject/CreateSubject'
import AppliedLiveExamAdmin_Instructor from '../Pages/AppliedLiveExamAdmin_Instructor/AppliedLiveExamAdmin_Instructor'
import BlogDetails from '../Pages/BlogPage/BlogDetails/BlogDetails'
import Bot from '../Pages/Home/ChatBot/Bot'
import JoinLiveExam from '../Pages/LiveExam/JoinLiveExam/JoinLiveExam'
import AllGivenExam from '../Pages/Dashboard/UserDashboard/AllGivenExam/AllGivenExam'
import UpdateProfilePicture from '../Pages/Authentication/UpdateProfile/UpdateProfilePicture'
import AllUserPayment from '../Pages/Dashboard/AdminDashboard/AllUserPayment/AllUserPayment'
import NoticeBoard from '../Pages/Dashboard/UserDashboard/NoticeBoard/NoticeBoard'

import SSLCart from '../Pages/Home/Pricing/SSLCart'
import SSLCommerzSuccess from '../Pages/Dashboard/UserDashboard/Payment/SSLPage/SSLCommerzSuccess/SSLCommerzSuccess'
import SSLCommerzFail from '../Pages/Dashboard/UserDashboard/Payment/SSLPage/SSLCommerzFail/SSLCommerzFail'
import PaymentOption from '../Pages/Dashboard/UserDashboard/Payment/PaymentOption'
import AllExam from '../Pages/FreeCoursePage/ExamPage/allExam'
import ExamResult from '../Pages/ExamResult/ExamResult'
import LeaderboardPage from '../Pages/Dashboard/LeaderboardPage/LeaderboardPage'
import WrittenAnswersReview from '../Pages/Dashboard/InstructorDashboard/WrittenAnswersReview/WrittenAnswersReview'
import SingleUserAnswers from '../Pages/Dashboard/InstructorDashboard/WrittenAnswersReview/SingleUserAnswers'
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
        element: <BlogDetails></BlogDetails>
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
        path: '/leaderboard',
        element: <LeaderboardPage />
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
        path: '/demo-result',
        element: <DemoResult />
      },
      {
        path: '/bot',
        element: <Bot />
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/paymentOption/:id',
        element: <PaymentOption />
      },
      {
        path: '/stripePayment',
        element: (
          <PrivateRouter>
            <Payment />
          </PrivateRouter>
        )
      },
      {
        path: '/sslPayment',
        element: (
          <PrivateRouter>
            <SSLCart />
          </PrivateRouter>
        )
      },
      {
        path: '/paymentOrder/success/:tranId',
        element: <SSLCommerzSuccess />
      },
      {
        path: '/paymentOrder/fail/:tranId',
        element: <SSLCommerzFail />
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
        path: '/results',
        element: <ResultPageForMcqFib />
      },
      {
        path: '/examResults',
        element: <ExamResult />
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
        path: '/updateProfilePicture',
        element: (
          <PrivateRouter>
            <UpdateProfilePicture></UpdateProfilePicture>
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

      {
        path: '/allAppliedLiveExam',
        element: <AppliedLiveExamAdmin_Instructor />
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
        path: '/dashboard/allPayments',
        element: <AllUserPayment />
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
      {
        path: '/dashboard/userHome',
        element: <UserHome />
      },
      {
        path: '/dashboard/paymentHistory',
        element: <PaymentHistory />
      },
      {
        path: '/dashboard/noticeBoard',
        element: <NoticeBoard />
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
      },
      {
        path: '/dashboard/allgivenExam',
        element: <AllGivenExam />
      },
      {
        path: '/dashboard/written-review',
        element: <WrittenAnswersReview />
      },
      {
        path: '/dashboard/singleUserAnswer/:id',
        element: <SingleUserAnswers></SingleUserAnswers>
      }
    ]
  },
  {
    path: '/instructorChatRoom',
    element: <InstructorChatRoom />
  }
])

export default router
