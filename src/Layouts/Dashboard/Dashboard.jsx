import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaSearch, FaChartBar, FaHome, FaCog } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const Dashboard = () => {
	const [open, setOpen] = useState(true);

	const iconMappings = {
		
		Accounts: FaUser,
		Schedule: FaCalendarAlt,
		Search: FaSearch,
		Analytics: FaChartBar,
		Home: FaHome,
		Setting: FaCog,
	  };

	  

	const Menus = [
	  { title: "Accounts",  icon: iconMappings.Accounts, gap: true },
	  { title: "Schedule ",   icon: iconMappings.Schedule },
	  { title: "Search",   icon: iconMappings.Search },
	  { title: "Analytics",   icon: iconMappings.Analytics },
	  { title: "Home ", path: '/',   icon: iconMappings.Home, gap: true },
	  { title: "Setting",   icon: iconMappings.Setting },
	];


	return (
		<div className="flex ">
		<div
		  className={` ${
			open ? "w-48" : "w-14 text-center "
		  } bg-black h-screen   pt-8 relative duration-300`}
		>
		  <img
			src="./src/assets/control.png"
			className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
			 border-2 rounded-full  ${!open && "rotate-180"}`}
			onClick={() => setOpen(!open)}
		  />
		  <div className="flex items-center gap-x-4">
			<img
			  src="./src/assets/logo.png"
			  className={`cursor-pointer w-full md:w-9/12 p-1 duration-500 ${
				open
			  }`}
			/>
			
		  </div>
		  <ul className={` ${
			open ? "" : " flex flex-col items-center justify-center"
		  }`}>
			{Menus.map((Menu, index) => (
			   <li
			   key={index}
			   className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
			 >
			   <Link to={Menu.path} className="flex items-center gap-x-4">
			   <IconContext.Provider value={{ className: 'react-icon' }}>
          <Menu.icon />
        </IconContext.Provider>
				 <span className={`${!open && "hidden"} origin-left duration-200`}>
				   {Menu.title}
				 </span>
			   </Link>
			 </li>
			 
			))}
			
		  </ul>
		  
		  {/* User info */}
		  <div className="absolute flex items-center space-x-4 mt-28 bottom-3">
		<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="bg-gray-500 rounded-full sm:w-4 md:w-12 md:h-12" />
		<div className={`${!open && "hidden"} origin-left duration-200`}>
			<h2 className="text-sm font-semibold">Leroy Jenkins</h2>
			<span className="flex items-center space-x-1">
				<a rel="noopener noreferrer" href="#" className="text-xs text-gray-600 hover:underline">View profile</a>
			</span>
		</div>
	</div>
		</div>
		<div className="flex-1 h-screen p-7">
		  <h1 className="text-2xl font-semibold ">Home Page</h1>
		</div>
	  </div>
	);
  };

export default Dashboard;