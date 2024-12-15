import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "./auth/AuthProvider";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useContext(authContext);
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/learning">Start-learning</NavLink>
      </li>
      <li>
        <NavLink to="/tutorials">Tutorials</NavLink>
      </li>
      <li>
        <NavLink to="/about">About-us</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="bg-primary text-white">
      <div className="w-11/12 mx-auto">
        {user && (
          <h2 className="text-center pt-2 -mb-4 text-sm text-green-800">
            Hey, Welcome {user.displayName}!
          </h2>
        )}
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm text-base dropdown-content bg-primary rounded-box z-[1] mt-2 w-52 p-2 shadow"
              >
                {navlinks}
              </ul>
            </div>
            <figure className="w-32">
              <img src={logo} />
            </figure>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlinks}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex items-center gap-4">
                <img
                  onClick={handleProfile}
                  className="w-12 h-12 rounded-full object-cover"
                  src={user.photoURL}
                />

                <Link
                  onClick={logout}
                  to="/login"
                  className="bg-secondary px-4 md:px-6 py-2 rounded-lg"
                >
                  Logout
                </Link>
              </div>
            ) : (
              <Link to="/login" className="bg-secondary px-6 py-2 rounded-lg">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
