import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import HomePage from "../Pages/Home/HomePage/HomePage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import Blog from "../Pages/BlogPage/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
// import ShortQ from "../Pages/Exams/ShortQuestion/ShortQ";
import PrivateRouter from "./PrivateRouter";
import Error from "../Pages/Error/Error";
import Instructors from "../Pages/InstuctorPage/Instructors";
import Dashboard from "../Layouts/Dashboard";

// import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUser/ManageUsers";
// import AdminHome from "../Pages/Dashboard/AdminDashboard/AdminHome/AdminHome";
// import ResultPageForMcqFib from "../components/QuestionRelated/ResultPageForMcqFib";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUser/ManageUsers";
import AdminHome from "../Pages/Dashboard/AdminDashboard/AdminHome/AdminHome";

// import QuizHomePage from "../Pages/Home/DemoTest/QuizHomePage";
// import ResultPage from "../Pages/Home/DemoTest/ResultPage";
import Notice from "../Pages/NoticePage/Notice/Notice";
import AllExam from "../Pages/FreeCoursePage/ExamPage/allExam";
import Exam2 from "../Pages/FreeCoursePage/ExamPage/Exam2";
import FreeCoursePage from "../Pages/FreeCoursePage/FreeCoursePage";
import CreateQuesPaper from "../Pages/Dashboard/InstructorDashboard/CreateQuestion/CreateQuesPaper";
import InstructorHome from "../Pages/Dashboard/InstructorDashboard/InstructorHome/InstructorHome";
import Payment from "../Pages/Dashboard/UserDashboard/Payment/Payment";
import QuizDemo from "../Pages/Home/DemoTest/QuizDemo";
import UserHome from "../Pages/Dashboard/UserDashboard/UserHome/UserHome";
import PaymentHistory from "../Pages/Dashboard/UserDashboard/PaymentHistory/PaymentHistory";
import CommentApp from "../Pages/Furam/CommentApp";
import WrittenExams from "../Pages/Exams/WrittenExams/WrittenExams";
import ResultPageForMcqFib from "../components/examComponents/QuestionRelated/ResultPageForMcqFib";
import Profile from "../Pages/Authentication/UpdateProfile/Profile";
import UpdateProfile from "../Pages/Authentication/UpdateProfile/UpdateProfile";
// import UpdateProfile from "../Pages/Authentication/UpdateProfile/UpdateProfile";
// import UserHome from "../Pages/Dashboard/UserDashboard/UserHome/UserHome";
// import PaymentHistory from "../Pages/Dashboard/UserDashboard/PaymentHistory/PaymentHistory";
// import CommentApp from "../Pages/Furam/CommentApp";
import CreateLiveExam from "../Pages/LiveExam/CreateLiveExam/CreateLiveExam";
import JoinLiveExam from "../Pages/LiveExam/JoinLiveExam/JoinLiveExam";
import AppliedLiveExam from "../Pages/Dashboard/UserDashboard/AppliedLiveExam/AppliedLiveExam";
import StudentAnalytics from "../Pages/Dashboard/UserDashboard/StudentAnalytics/StudentAnalytics";
import ExamRoom from "../Pages/LiveExam/ExamRoom/ExamRoom";
import AddBlog from "../Pages/Dashboard/InstructorDashboard/AddBlog/AddBlog";
import UpcomingLiveExam from "../Pages/LiveExam/UpcomingLiveExam/UpcomingLiveExam";
import InstructorChatRoom from "../Pages/LiveExam/InstructorChatRoom/InstructorChatRoom";
import CreateNotice from "../Pages/Dashboard/AdminDashboard/CreateNotice/CreateNotice";
import ResultPage from "../Pages/Home/DemoTest/ResultPage";
import ForumCommunity from "../Pages/Forum_Community/ForumCommunity";

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
        element: <Blog />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },

      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/demo-test",
        element: <QuizDemo />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      // {
      //   path: "/payment/:id",
      //   element: (
      //     <PrivateRouter>
      //       <Payment />
      //     </PrivateRouter>
      //   ),
      // },
      // {
      //   path: "/demoTest",
      //   element: <QuizHomePage />,
      // },
      {
        path: "/home-quiz-result",
        element: <ResultPage />,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRouter>
            <Payment />
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
        element: <AllExam />,
      },
      {
        path: "/exam/:id",
        element: <Exam2 />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/questionPaper/${params.id}`),
      },
      {
        path: "/written",
        element: <WrittenExams />,
      },

      {
        path: "/createQues",
        element: <CreateQuesPaper />,
        
      },
      {
        path: "/result",
        element: <ResultPageForMcqFib />,
      },
      {
        path: '/forum',
        // element: <CommentApp />
        element: <ForumCommunity />
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRouter>
            <UpdateProfile></UpdateProfile>
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
        element: <CreateLiveExam />,
      },
      // {
      //   path: "/createLiveExam",
      //   element: <CreateLiveExam />,
      // },
      {
        path: "/joinLiveExam",
        element: <JoinLiveExam />,
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
    path: "/examRoom",
    element: <ExamRoom />,
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
        element: <AdminHome />,
      },
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers />,
      },
      {
        path: "/dashboard/createNotice",
        element: <CreateNotice />,
      },
      // Instructor Dashboard Routes
      {
        path: "/dashboard/instructorHome",
        element: <InstructorHome />,
      },
      {
        path: "/dashboard/createQues",
        element: <CreateQuesPaper />,
      },
      {
        path: "/dashboard/createLiveExam",
        element: <CreateLiveExam />,
      },
      {
        path: "/dashboard/addBlog",
        element: <AddBlog />,
      },
      // User Dashboard Routes
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
      },
      {
        path: "/dashboard/userHome",
        element: <UserHome />,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory />,
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
        path: "/dashboard/studentAnalytics",
        element: <StudentAnalytics />,
      },
    ],
  },
  {
    path:"/instructorChatRoom",
    element: <InstructorChatRoom/>
  }
]);

export default router;
