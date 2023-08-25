import logo from "../../assets/logo12.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(
        Swal.fire({
          icon: "success",
          title: "Log Out Successful",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .catch((error) => console.log(error));
  };

  const navbarLink_First = (
    <>
      <li>
        <Link>Home</Link>
      </li>
    </>
  );

  const navbarLink_Middle = (
    <>
      <details className="z-[1]">
        <summary>Exam</summary>
        <ul className="p-2 z-50 navigation-bar rounded-lg md:rounded-none">
          <li>
            <Link to='/free_courses'>All Subject</Link>
          </li>
          <li>
            <Link>Rules</Link>
          </li>
        </ul>
      </details>
    </>
  );

  const navbarLink_Last = (
    <>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to='/createQues'>Create Ques</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
    </>
  );

  const searchData = (e) => {
    e.preventDefault();
    const data = document.getElementById("search").value;

    console.log(data);
  };

  return (
    <nav className="primary-bg">
      <div className="navbar z-[40]  container mx-auto  sticky top-0   text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 primary-bg"
            >
              {/* navbarFirst */}
              {navbarLink_First}
              <li>
                {/* navbar_middle */}
                {navbarLink_Middle}
              </li>
              {/* navbar Last */}
              {navbarLink_Last}
            </ul>
          </div>
          <img
            className="w-[200px] hover:-translate-y-0.5 duration-200"
            src={logo}
            alt=""
          />
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            {/* navbarFirst */}
            {navbarLink_First}
            <li tabIndex={0}>
              {/* navbar_middle */}
              {navbarLink_Middle}
            </li>
            {/* navbar Last */}
            {navbarLink_Last}
          </ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => window.my_modal_3.showModal()}
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {user ? (
            <div className="z-50 ml-5 dropdown dropdown-end">
              <div
                className="tooltip tooltip-left"
                data-tip={user?.displayName}
              >
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
              </div>

              <ul
                tabIndex={0}
                className="p-2 mt-3 text-white bg-black shadow menu menu-compact dropdown-content rounded-box w-52"
              >
                <li>
                  <Link className="justify-between w-full">
                    {user?.displayName}
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/adminHome">Dashboard</Link>
                </li>
                <li>
                  <Link className="w-full" onClick={handleLogout}>
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-white border-none shadow-md btn primary-bg"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <div>
        <dialog
          id="my_modal_3"
          className="modal modal-top max-w-[400px] mx-auto mt-[68px] "
        >
          <form method="dialog" className="modal-box primary-bg ">
            <button className="absolute z-20 btn btn-sm btn-circle btn-ghost right-2 top-2">
              ✕
            </button>
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Type here"
              className="z-10 w-full max-w-xs bg-transparent input top-20 input-bordered"
            />
            <button onClick={searchData} className="absolute p-4 right-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </dialog>
      </div>
    </nav>
  );
};

export default Navbar;
