import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import "./Header.css";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/my-donation">My Donation</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
    </>
  );

  return (
    <nav id="navbar" className="navbar bg-base-100 drop-shadow-md sticky top-0 z-[10]">
      <div className="container mx-auto">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex flex-col gap-2"
            >
              {links}
            </ul>
          </div>
          <NavLink to="/" className="logo btn btn-ghost text-xl">
            <img className=" w-36" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal flex gap-6">{links}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
