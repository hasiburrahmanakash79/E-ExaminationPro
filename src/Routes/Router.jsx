import { Suspense, lazy } from "react";
const Payment = lazy(() =>
  import("../Pages/Dashboard/UserDashboard/Payment/Payment")
);
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import Profile from "../Pages/Authentication/UpdateProfile/Profile";
import UpdateProfile from "../Pages/Authentication/UpdateProfile/UpdateProfile";
import NewBlog from "../Pages/BlogPage/NewBlog/NewBlog";
import UnderBlog from "../Pages/BlogPage/NewBlog/UnderBlog";
import Contact from "../Pages/Contact/Contact";
import PrivateRouter from "./PrivateRouter";
import Error from "../Pages/Error/Error";
import Instructors from "../Pages/InstructorPage/Instructors";
import Dashboard from "../Layouts/Dashboard";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUser/ManageUsers";
import AdminHome from "../Pages/Dashboard/AdminDashboard/AdminHome/AdminHome";
import Notice from "../Pages/NoticePage/Notice/Notice";
import Exam2 from "../Pages/FreeCoursePage/ExamPage/Exam2";
import FreeCoursePage from "../Pages/FreeCoursePage/FreeCoursePage";
import CreateQuesPaper from "../Pages/Dashboard/InstructorDashboard/CreateQuestion/CreateQuesPaper";
import InstructorHome from "../Pages/Dashboard/InstructorDashboard/InstructorHome/InstructorHome";
import QuizDemo from "../Pages/Home/DemoTest/QuizDemo";
import UserHome from "../Pages/Dashboard/UserDashboard/UserHome/UserHome";
import PaymentHistory from "../Pages/Dashboard/UserDashboard/PaymentHistory/PaymentHistory";
import WrittenExams from "../Pages/Exams/WrittenExams/WrittenExams";
import CreateLiveExam from "../Pages/LiveExam/CreateLiveExam/CreateLiveExam";
import AppliedLiveExam from "../Pages/Dashboard/UserDashboard/AppliedLiveExam/AppliedLiveExam";
import ExamRoom from "../Pages/LiveExam/ExamRoom/ExamRoom";
import AddBlog from "../Pages/Dashboard/InstructorDashboard/AddBlog/AddBlog";
import UpcomingLiveExam from "../Pages/LiveExam/UpcomingLiveExam/UpcomingLiveExam";
import InstructorChatRoom from "../Pages/LiveExam/InstructorChatRoom/InstructorChatRoom";
import CreateNotice from "../Pages/Dashboard/AdminDashboard/CreateNotice/CreateNotice";
import ResultPageForMcqFib from "../components/examComponents/QuestionRelated/QuestionResults/ResultPageForMcqFib";
import HomePage from "../Pages/Home/HomePage/HomePage";
import ForumCommunity from "../Pages/Forum_Community/ForumCommunity";
import DemoResult from "../components/examComponents/QuestionRelated/DemoQuesResult/DemoResult";
import CreateSubject from "../Pages/Dashboard/AdminDashboard/CreateSubject/CreateSubject";
import AppliedLiveExamAdmin_Instructor from "../Pages/AppliedLiveExamAdmin_Instructor/AppliedLiveExamAdmin_Instructor";
import BlogDetails from "../Pages/BlogPage/BlogDetails/BlogDetails";
import Bot from "../Pages/Home/ChatBot/Bot";
import JoinLiveExam from "../Pages/LiveExam/JoinLiveExam/JoinLiveExam";
import AllGivenExam from "../Pages/Dashboard/UserDashboard/AllGivenExam/AllGivenExam";
import UpdateProfilePicture from "../Pages/Authentication/UpdateProfile/UpdateProfilePicture";
import AllUserPayment from "../Pages/Dashboard/AdminDashboard/AllUserPayment/AllUserPayment";
import NoticeBoard from "../Pages/Dashboard/UserDashboard/NoticeBoard/NoticeBoard";
import SSLCart from "../Pages/Home/Pricing/SSLCart";
import SSLCommerzSuccess from "../Pages/Dashboard/UserDashboard/Payment/SSLPage/SSLCommerzSuccess/SSLCommerzSuccess";
import SSLCommerzFail from "../Pages/Dashboard/UserDashboard/Payment/SSLPage/SSLCommerzFail/SSLCommerzFail";
import PaymentOption from "../Pages/Dashboard/UserDashboard/Payment/PaymentOption";
import AllExam from "../Pages/FreeCoursePage/ExamPage/allExam";
import ChatBotUI from "../Components/ChatBotUI/ChatBotUI";
import ExamResult from "../Pages/ExamResult/ExamResult";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import WelCome from "../Pages/WelCome/WelCome";
import LeaderboardPage from "../Pages/Dashboard/LeaderboardPage/LeaderboardPage";
import WrittenAnswersReview from "../Pages/Dashboard/InstructorDashboard/WrittenAnswersReview/WrittenAnswersReview";
import SingleUserAnswers from "../Pages/Dashboard/InstructorDashboard/WrittenAnswersReview/SingleUserAnswers";
import Loading from "../components/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/blog",
        element: <NewBlog />,
      },

      {
        path: "/blogDetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/blogUnderDetails/:id",
        element: <UnderBlog />,
      },

      {
        path: "/notice",
        element: (
          <PrivateRouter>
            <Notice />
          </PrivateRouter>
        ),
      },
      {
        path: "/leaderboard",
        element: (
          <PrivateRouter>
            <LeaderboardPage />,
          </PrivateRouter>
        ),
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/demo-test",
        element: <QuizDemo />,
      },
      {
        path: "/demo-result",
        element: <DemoResult />,
      },
      {
        path: "/bot",
        element: (
          <PrivateRouter>
            <Bot />
          </PrivateRouter>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/paymentOption/:id",
        element: (
          <PrivateRouter>
            <PaymentOption />
          </PrivateRouter>
        ),
      },
      {
        path: "/stripePayment",
        element: (
          <PrivateRouter>
            <Suspense fallback={<Loading />}>
              <Payment />
            </Suspense>
          </PrivateRouter>
        ),
      },
      {
        path: "/sslPayment",
        element: (
          <PrivateRouter>
            <SSLCart />
          </PrivateRouter>
        ),
      },
      {
        path: "/paymentOrder/success/:tranId",
        element: (
          <PrivateRouter>
            <SSLCommerzSuccess />
          </PrivateRouter>
        ),
      },
      {
        path: "/paymentOrder/fail/:tranId",
        element: (
          <PrivateRouter>
            <SSLCommerzFail />
          </PrivateRouter>
        ),
      },

      {
        path: "/allSubjects",

        element: (
          <PrivateRouter>
            <FreeCoursePage />
          </PrivateRouter>
        ),
      },
      {
        path: "/allexam",
        element: (
          <PrivateRouter>
            <AllExam />
          </PrivateRouter>
        ),
      },
      {
        path: "/exam/:id",
        element: <Exam2 />,
        loader: ({ params }) =>
          fetch(`https://e-exam-pro-server.vercel.app/questionPaper/${params.id}`),
      },
      {
        path: "/written",
        element: (
          <PrivateRouter>
            <WrittenExams />
          </PrivateRouter>
        ),
      },

      {
        path: "/createQues",
        element: (
          <InstructorRoute>
            <CreateQuesPaper />
          </InstructorRoute>
        ),
      },
      {
        path: "/results",
        element: (
          <PrivateRouter>
            <ResultPageForMcqFib />
          </PrivateRouter>
        ),
      },
      {
        path: "/examResults",
        element: (
          <PrivateRouter>
            <ExamResult />
          </PrivateRouter>
        ),
      },
      {
        path: "/forum",
        element: (
          <PrivateRouter>
            <ForumCommunity />
          </PrivateRouter>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRouter>
            <UpdateProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/updateProfilePicture",
        element: (
          <PrivateRouter>
            <UpdateProfilePicture />
          </PrivateRouter>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
      {
        path: "/createLiveExam",
        element: (
          <InstructorRoute>
            <CreateLiveExam />
          </InstructorRoute>
        ),
      },
      {
        path: "/upcomingLiveExam",
        element: (
          <PrivateRouter>
            <UpcomingLiveExam />
          </PrivateRouter>
        ),
      },
      {
        path: "/joinLiveExam",
        element: (
          <PrivateRouter>
            <JoinLiveExam />
          </PrivateRouter>
        ),
      },
      {
        path: "/allAppliedLiveExam",
        element: (
          <PrivateRouter>
            <AppliedLiveExamAdmin_Instructor />
          </PrivateRouter>
        ),
      },
      {
        path: "/booot",
        element: (
          <PrivateRouter>
            <ChatBotUI />
          </PrivateRouter>
        ),
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <Registration />,
  },
  {
    path: "/welCome",
    element: <WelCome />,
  },
  {
    path: "/examRoom",
    element: (
      <PrivateRouter>
        <ExamRoom />
      </PrivateRouter>
    ),
  },

  ///// DASHBOARD /////
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
      // Admin Dashboard Routes
      {
        path: "/dashboard/adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allPayments",
        element: (
          <AdminRoute>
            <AllUserPayment />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/createNotice",
        element: (
          <AdminRoute>
            <CreateNotice />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/createSubject",
        element: (
          <AdminRoute>
            <CreateSubject />
          </AdminRoute>
        ),
      },
      // Instructor Dashboard Routes
      {
        path: "/dashboard/instructorHome",
        element: (
          <InstructorRoute>
            <InstructorHome />
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/createQues",
        element: (
          <InstructorRoute>
            <CreateQuesPaper />
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/createLiveExam",
        element: (
          <InstructorRoute>
            <CreateLiveExam />
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/addBlog",
        element: (
          <InstructorRoute>
            <AddBlog />
          </InstructorRoute>
        ),
      },

      //User Dashboard
      {
        path: "/dashboard/userHome",
        element: (
          <PrivateRouter>
            <UserHome />
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/paymentHistory",
        element: (
          <PrivateRouter>
            <PaymentHistory />
          </PrivateRouter>
        ),
      },
      {
        path: "/dashboard/noticeBoard",
        element: <NoticeBoard />,
      },
      {
        path: "/dashboard/appliedLiveExam",
        element: <AppliedLiveExam />,
      },
      {
        path: "/dashboard/upcomingLiveExam",
        element: <UpcomingLiveExam />,
      },
      {
        path: "/dashboard/allgivenExam",
        element: <AllGivenExam />,
      },
      {
        path: "/dashboard/allgivenExam",
        element: <AllGivenExam />,
      },
      {
        path: "/dashboard/written-review",
        element: <WrittenAnswersReview />,
      },
      {
        path: "/dashboard/singleUserAnswer/:id",
        element: <SingleUserAnswers />,
      },
    ],
  },
  {
    path: "/instructorChatRoom",
    element: (
      <InstructorRoute>
        <InstructorChatRoom />
      </InstructorRoute>
    ),
  },
]);

export default router;
