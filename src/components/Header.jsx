import React, { use, useState } from "react";
import { CiLogin, CiLogout } from "react-icons/ci";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import userImg from "../assets/user.png";
import darkLogo from "../assets/dark-logo.png";
import { AuthContext } from "../context/AuthContext";
import { Slide, toast } from "react-toastify";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { user, userSignout } = use(AuthContext);
  const navLink = (
    <>
      <li className="text-base font-medium ">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 p-1 border-base-300 text-navlink"
              : "hover:border-b-2 p-1 border-base-300 rounded-0 text-navlink"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="text-base font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 p-1 border-base-300 text-navlink"
              : "hover:border-b-2 p-1 border-base-300 text-navlink"
          }
          to={"/upcoming-events"}
        >
          Upcoming Events
        </NavLink>
      </li>
    </>
  );

  const navLinkDropdown = (
    <ul className="z-1 space-y-2">
      <li className="text-base font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-1 text-navlink"
              : "hover:border-b-2 p-1 border-base-300"
          }
          to={"/create-event"}
        >
          Create event
        </NavLink>
      </li>
      <li className="text-base font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-1 text-navlink"
              : "hover:border-b-2 p-1 border-base-300"
          }
          to={"/join-event"}
        >
          Join Event
        </NavLink>
      </li>
      <li className="text-base font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? " p-1 text-navlink"
              : "hover:border-b-2 p-1 border-base-300 "
          }
          to={"/manage-events"}
        >
          Manage Events
        </NavLink>
      </li>
    </ul>
  );

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // handle logout

  const handleSignOut = () => {
    userSignout()
      .then(() => {
        toast.success("Logout successful ", {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          autoClose: 3000,
          hideProgressBar: true,
          transition: Slide,
        });
      });
  };
  return (
    <div className="">
      <div className="navbar max-w-[1420px] rounded-lg mx-auto px-5 h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <div className="w-full relative">
              <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-8 w-52 p-2 shadow space-y-2 "
            >
              <li>
                <div className="avatar space-x-2 py-2.5">
                  <div className="ring-btn ring-offset-base-100 w-8 h-8 rounded-full ring-1 ring-offset-2">
                    <img src={user ? user?.photoURL : userImg} />
                  </div>
                  <NavLink className="text-base font-medium">
                    My Profile
                  </NavLink>
                </div>
              </li>
              {navLink}
              <li>
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="btn bg-gradient-to-r from-primary to-secondary text-white shadow-none px-5 sm:px-10 flex items-center"
                  >
                    <CiLogout size={22} /> Logout
                  </button>
                ) : (
                  <Link
                    className="btn bg-gradient-to-r from-primary to-secondary text-white shadow-none px-5 sm:px-10 flex items-center"
                    to={"/auth/login"}
                  >
                    Login
                    <CiLogin size={22} />
                  </Link>
                )}
              </li>
            </ul>
            </div>
          </div>
          <Link to={"/"}>
            <img className="w-40" src={darkMode ? darkLogo : logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-3">{navLink}</ul>
        </div>
        <div className="navbar-end space-x-5 relative">
          <div className=" lg:flex  flex-col hidden dropdown">
            {user && (
              <div
              role="button"
              tabIndex={0}
                className="group"
              >
                <img
                  src={user ? user?.photoURL : userImg}
                  className="hidden ring-offset-base-100 sm:inline ring-btn w-10 h-10 rounded-full ring-1 ring-offset-3 cursor-pointer"
                />
                <p className="absolute top-13 z-10 bg-black text-white text-base px-5 whitespace-nowrap w-auto rounded-full opacity-0 group-hover:opacity-100">
                  {user?.displayName}
                </p>
              </div>
            )}
            <div
              className={`absolute top-20  p-3 bg-base-200 shadow rounded-lg dropdown-content z-[1] w-auto whitespace-nowrap`}
            >
              {navLinkDropdown}
            </div>
          </div>
          <div>
            <label className="flex cursor-pointer gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                value="dark"
                type="checkbox"
                className="toggle theme-controller border border-base-content"
                onClick={handleDarkMode}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>

          {user ? (
            <button
              onClick={handleSignOut}
              className="btn bg-gradient-to-r from-primary to-secondary text-white shadow-none px-5 sm:px-6 sm:flex items-center hidden border-0"
            >
              <CiLogout size={22} /> Logout
            </button>
          ) : (
            <Link
              className="btn bg-gradient-to-r from-primary to-secondary text-white shadow-none px-5 sm:px-10 sm:flex items-center hidden"
              to={"/auth/login"}
            >
              Login
              <CiLogin size={22} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
