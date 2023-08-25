import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaUser,
  FaCalendarAlt,
  FaSearch,
  FaChartBar,
  FaHome,
  FaCog,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import logo from "../assets/logo.png";
import arrow from "../assets/control.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import useInstructor from "../Hooks/useInstructor/useInstructor";

const Dashboard = () => {
	// set user role dynamically
	// const isAdmin = true;
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const isAdmin = useAdmin()
  const isInstructor = useInstructor()


  console.log(isAdmin, isInstructor);

  const iconMappings = {
    Users: FaUser,
    Schedule: FaCalendarAlt,
    Search: FaSearch,
    Analytics: FaChartBar,
    Home: FaHome,
    Setting: FaCog,
  };

  const Menus = [
    {
      title: "Admin Home",
      path: "/dashboard/adminHome",
      icon: iconMappings.Home,
	  role: "admin",
      gap: true,
    },
    {
      title: "Users",
      path: "/dashboard/manageUsers",
      icon: iconMappings.Users,
	  role: "admin",
    },
    { title: "Schedule ", icon: iconMappings.Schedule, role: "instructor" },
    { title: "Search", icon: iconMappings.Search, role: "instructor" },
    { title: "Analytics", icon: iconMappings.Analytics },
    { title: "Home ", path: "/", icon: iconMappings.Home, gap: true },
    { title: "Setting", icon: iconMappings.Setting },
  ];

  const adminMenus = Menus.filter((menu) => menu.role === "admin");
  const instructorMenus = Menus.filter((menu) => menu.role === "instructor");

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-48" : "w-14 text-center "
        } bg-black h-screen   pt-8 relative duration-300`}
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
          {isAdmin ? (adminMenus.map((Menu, index) => (
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
          )))
		  :
		//  Instructor menus 
		  (instructorMenus.map((Menu, index) => (
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
          )))}
        </ul>

        {/* User info */}
        <div className="absolute flex items-center space-x-4 mt-28 bottom-3">
          <img
            src={user?.photoURL}
            alt=""
            className="bg-gray-500 rounded-full sm:w-4 md:w-12 md:h-12"
          />
          <div className={`${!open && "hidden"} origin-left duration-200`}>
            <h2 className="text-sm font-semibold">{user?.displayName}</h2>
            <span className="flex items-center space-x-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs text-gray-600 hover:underline"
              >
                View profile
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* Dashboard main content */}
      <div className="flex-1 h-screen p-7">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
