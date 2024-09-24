//Navbar, Chitra Savaj, 301384748, 24/09/2024
import { useEffect, useState } from "react";
import logo from "../assets/cs-orange-color-logo-design-for-your-company-free-vector.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="relative">
        {/* Navbar */}
        <div className="fixed w-screen flex items-center justify-between px-10 lg:justify-around py-2 bg-white z-[9999]">
          <Link>
            <img src={logo} alt="logo" width={100} />
          </Link>
          <ul className="items-center lg:space-x-6 text-gray-400 hidden md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#ff7a57] rounded-full px-4 py-1 cursor-pointer text-white"
                    : ""
                } hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#ff7a57] rounded-full px-4 py-1 cursor-pointer text-white"
                    : ""
                } hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#ff7a57] rounded-full px-4 py-1 cursor-pointer text-white"
                    : ""
                } hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer`
              }
            >
              Service
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#ff7a57] rounded-full px-4 py-1 cursor-pointer text-white"
                    : ""
                } hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#ff7a57] rounded-full px-4 py-1 cursor-pointer text-white"
                    : ""
                } hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer`
              }
            >
              Contact
            </NavLink>
          </ul>
          <RxHamburgerMenu
            className="md:hidden text-3xl cursor-pointer"
            onClick={handleNavbar}
          />
        </div>

        {/* Mobile Navbar */}
        <div
          className={`fixed top-0 left-0 shadow-md bg-white md:hidden z-[9999] ${
            nav ? "w-80" : "w-0"
          } transition-all duration-500 ease-in-out overflow-hidden`}
        >
          <div className="flex items-center justify-between p-4">
            <img src={logo} alt="logo" width={70} />
            <RxHamburgerMenu
              className="md:hidden text-3xl cursor-pointer"
              onClick={handleNavbar}
            />
          </div>
          <ul className="flex flex-col items-center space-y-7 text-gray-400 shadow-lg h-screen">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#ff7a57] rounded-full px-4 py-1 cursor-pointer text-white"
                    : ""
                } hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#ff7a57] rounded-full px-4 py-1 cursor-pointer text-white"
                    : ""
                } hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#ff7a57] rounded-full px-4 py-1 cursor-pointer text-white"
                    : ""
                } hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer`
              }
            >
              Service
            </NavLink>
            
            
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#ff7a57] rounded-full px-4 py-1 cursor-pointer text-white"
                    : ""
                } hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-[#ff7a57] rounded-full px-4 py-1 cursor-pointer text-white"
                    : ""
                } hover:bg-[#ff7a57] hover:text-white px-4 py-1 hover:rounded-full cursor-pointer`
              }
            >
              Contact
            </NavLink>
            
          </ul>
        </div>

        {/* Page Content Wrapper with Padding */}
        <div className="pt-14 lg:pt-8"> 
          
        </div>
      </div>
    </>
  );
};
export default Navbar;
