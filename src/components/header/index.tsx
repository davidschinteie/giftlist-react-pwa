import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useAuth();

  const [toggleVisible, setToggleVisible] = useState(false);
  return (
    <nav className="flex items-center bg-gray-800 px-3 py-4 flex-wrap fixed top-0 left-0 right-0 z-10">
      <Link to="/" className="p-2 mr-4 inline-flex items-center">
        <svg viewBox="0 0 512 512" className="fill-slate-500 h-8 w-8 mr-2">
          <path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z" />
        </svg>
        <span className="text-xl text-white font-bold uppercase tracking-wide">
          Gift List
        </span>
      </Link>
      <button
        className="responsive-btn ml-auto"
        onClick={() => setToggleVisible(!toggleVisible)}
      >
        <svg
          className="fill-stroke text-white"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 18H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {toggleVisible && (
        <div className="top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            {user && (
              <button
                onClick={logout}
                className="w-full px-3 py-2 rounded text-gray-400 text-center font-bold lg:inline-flex lg:w-auto lg:items-center lg:justify-center hover:bg-gray-900 hover:text-white"
              >
                Logout
              </button>
            )}
            {!user && (
              <>
                <Link
                  to="/signIn"
                  className="w-full px-3 py-2 rounded text-gray-400 text-center font-bold lg:inline-flex lg:w-auto lg:items-center lg:justify-center hover:bg-gray-900 hover:text-white"
                >
                  <span>Sign In</span>
                </Link>
                <Link
                  to="/register"
                  className="w-full px-3 py-2 rounded text-gray-400 text-center font-bold lg:inline-flex lg:w-auto lg:items-center lg:justify-center hover:bg-gray-900 hover:text-white"
                >
                  <span>Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          {user && (
            <button
              onClick={logout}
              className="w-full px-3 py-2 rounded text-gray-400 text-center font-bold lg:inline-flex lg:w-auto lg:items-center lg:justify-center hover:bg-gray-900 hover:text-white"
            >
              Logout
            </button>
          )}
          {!user && (
            <>
              <Link
                to="/signin"
                className="w-full px-3 py-2 rounded text-gray-400 text-center font-bold lg:inline-flex lg:w-auto lg:items-center lg:justify-center hover:bg-gray-900 hover:text-white"
              >
                <span>Sign In</span>
              </Link>
              <Link
                to="/register"
                className="w-full px-3 py-2 rounded text-gray-400 text-center font-bold lg:inline-flex lg:w-auto lg:items-center lg:justify-center hover:bg-gray-900 hover:text-white"
              >
                <span>Register</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
