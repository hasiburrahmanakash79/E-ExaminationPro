import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaUser,
  FaCalendarAlt,
  FaChartBar,
  FaHome,
  FaCog,
  FaWallet,
  FaComment
} from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { RiLiveFill } from "react-icons/ri";
import { FaClipboardQuestion } from "react-icons/fa6";
import { MdHomeWork } from "react-icons/md";
import { IconContext } from "react-icons";
import logo from "../assets/logo.png";
import arrow from "../assets/control.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import useInstructor from "../Hooks/useInstructor/useInstructor";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(true);

  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  console.log(isAdmin);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Log Out Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };

  // Add an useEffect to detect screen width on component mount and resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    // Initial call
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iconMappings = {
    RoleHome: MdHomeWork,
    Users: FaUser,
    Schedule: FaCalendarAlt,
    Question: FaClipboardQuestion,
    Analytics: FaChartBar,
    Home: FaHome,
    Setting: FaCog,
    Payment: FaWallet,
    Live: RiLiveFill,
    Blog: FaComment,
    Notice: AiFillNotification,
  };

  const Menus = [
    {
      title: "Admin Home",
      path: "/dashboard/adminHome",
      icon: iconMappings.RoleHome,
      role: "admin",
      gap: true,
    },
    {
      title: "Users",
      path: "/dashboard/manageUsers",
      icon: iconMappings.Users,
      role: "admin",
    },
    {
      title: "Create Notice",
      path: "/dashboard/createNotice",
      icon: iconMappings.Notice,
      role: "admin",
    },
    {
      title: "Instructor Home ",
      icon: iconMappings.RoleHome,
      role: "instructor",
      gap: true,
    },
    {
      title: "Set Question",
      path: "/dashboard/createQues",
      icon: iconMappings.Question,
      role: "instructor",
    },
    { title: "Create Live Exam", path: "/dashboard/createLiveExam", icon: iconMappings.Live, role: "instructor" },
    { title: "Add Blog", path: "/dashboard/addBlog", icon: iconMappings.Blog, role: "instructor" },
    {
      title: "User Home",
      path: "/dashboard/userHome",
      icon: iconMappings.RoleHome,
      role: "user",
      gap: true,
    },
    { title: "Payment History", path: "/dashboard/paymentHistory", icon: iconMappings.Payment, role: "user" },
    { title: "Notice Board", path: "/dashboard/noticeBoard", icon: iconMappings.Notice, role: "user" },
    { title: "Upcoming Live Exam", path: "/dashboard/upcomingLiveExam", icon: iconMappings.Live, role: "user" },
    { title: "Applied Live Exam", path: "/dashboard/appliedLiveExam", icon: iconMappings.Live, role: "user" },
    { title: "Student Analytics", path: "/dashboard/studentAnalytics", icon: iconMappings.Analytics, role: "user" },

    {
      title: "Home ",
      path: "/",
      icon: iconMappings.Home,
      role: "general",
      gap: true,
    },
    { title: "Setting", icon: iconMappings.Setting, role: "general" },
  ];

  const adminMenus = Menus.filter((menu) => menu.role === "admin");
  const instructorMenus = Menus.filter((menu) => menu.role === "instructor");
  const userMenus = Menus.filter((menu) => menu.role === "user");
  const generalMenus = Menus.filter((menu) => menu.role === "general");

  return (
    <div className="flex ">
      {/* Dashboard Sidebar content */}
      <div
        className={` ${
          open ? "w-56 p-4" : "w-14 text-center "
        } bg-white/10 h-screen  fixed left-0 top-0 bottom-0 z-50 pt-8  duration-500 transition-all`}
      >
        <img
          src={arrow}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
			 border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-4">
          <img
            src={logo}
            className={`cursor-pointer w-full md:w-9/12 p-1 duration-500 ${open}`}
          />
        </div>
        <ul
          className={` ${
            open ? "" : " flex flex-col items-center justify-center"
          }`}
        >
          {isAdmin
            ? adminMenus.map((Menu, index) => (
                <li
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                    Menu.gap ? "mt-9" : "mt-2"
                  } ${index === 0 && "bg-light-white"}`}
                >
                  <Link to={Menu.path} className="flex items-center gap-x-4">
                    <IconContext.Provider value={{ className: "react-icon" }}>
                      <Menu.icon />
                    </IconContext.Provider>
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  </Link>
                </li>
              ))
            : //  Instructor menus
            isInstructor
            ? instructorMenus.map((Menu, index) => (
                <li
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                    Menu.gap ? "mt-9" : "mt-2"
                  } ${index === 0 && "bg-light-white"}`}
                >
                  <Link to={Menu.path} className="flex items-center gap-x-4">
                    <IconContext.Provider value={{ className: "react-icon" }}>
                      <Menu.icon />
                    </IconContext.Provider>
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  </Link>
                </li>
              ))
            : // User menus
              userMenus.map((Menu, index) => (
                <li
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                    Menu.gap ? "mt-9" : "mt-2"
                  } ${index === 0 && "bg-light-white"}`}
                >
                  <Link to={Menu.path} className="flex items-center gap-x-4">
                    <IconContext.Provider value={{ className: "react-icon" }}>
                      <Menu.icon />
                    </IconContext.Provider>
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {Menu.title}
                    </span>
                  </Link>
                </li>
              ))}
          {generalMenus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
            >
              <Link to={Menu.path} className="flex items-center gap-x-4">
                <IconContext.Provider value={{ className: "react-icon" }}>
                  <Menu.icon />
                </IconContext.Provider>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* User info */}
        <div className="absolute flex items-center space-x-4 mt-28 bottom-3">
          <img
            src={user?.photoURL}
            alt=""
            className="w-12 h-12 bg-gray-500 rounded-full "
          />
          <div className={`${!open && "hidden"} origin-left duration-200`}>
            <h2 className="text-sm font-semibold">{user?.displayName}</h2>
            <span className="flex items-center space-x-1">
              <a
                onClick={handleLogout}
                rel="noopener noreferrer"
                href="#"
                className="text-xs text-gray-600 hover:underline"
              >
                Logout
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* Dashboard main content */}
      <div className={` ${
          open ?  "pl-60 pr-4": "pl-16 pr-2"
        } flex-1  overflow-y-auto  duration-500 transition-all h-[100vh]`}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
