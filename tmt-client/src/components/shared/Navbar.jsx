import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // Outlined menu and close icons
import { Link, NavLink } from "react-router";
import { logo } from "../../assets";
import UserDropdown from "./UserDropDown";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  // fixed top-0 left-0 w-full z-50
  return (
    <header className="sticky top-0 z-[999]">
      {/* Top bar (Hidden on Small Screens) */}
      <div className="bg-slate-900 font-lato tracking-wide  text-gray-200 px-6 py-4 text-xs hidden md:flex justify-between items-center">
        {/* Contact Details */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+6562521461"
            className="flex items-center space-x-1 hover:text-tmt-prim"
          >
            <FaPhone /> <span>+65 62521461</span>
          </a>
          <a
            href="mailto:tmtquickservice@yahoo.com.sg"
            className="flex items-center space-x-1 hover:text-tmt-prim"
          >
            <FaEnvelope /> <span>tmtquickservice@yahoo.com.sg</span>
          </a>
          <a
            href="mailto:tmtquick@tmtquickservice.com"
            className="flex items-center space-x-1 hover:text-tmt-prim"
          >
            <FaEnvelope /> <span>tmtquick@tmtquickservice.com</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex text-base  space-x-3">
          <a href="https://www.facebook.com/TMTTravelAndTours?mibextid=wwXIfr&rdid=VkoibUSm9WG27ICS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18eL8T5rvB%2F%3Fmibextid%3DwwXIfr#" target="_blank" className="hover:text-tmt-prim">
            <FaFacebook />
          </a>
         
          <a href="#" className="hover:text-tmt-prim">
            <FaInstagram />
          </a>
         
         
        </div>
      </div>

      {/* Main navbar */}
      <nav className=" shadow-md bg-teal-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Mobile Menu Toggle (Outlined Icon) */}
          <button
            className="md:hidden text-gray-700 text-2xl hover:text-prim"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu className="cursor-pointer" />
          </button>
          {/* Logo */}

          <Link to="/">
            <div className="flex items-center space-x-2">
              {" "}
              <img src={logo} className="w-6 md:w-10" alt="TMT Travel" />
              <p className="text-lg md:text-2xl font-jost font-bold text-rose-900">
                TMT Travel
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex font-jost space-x-6 text-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-tmt-prim border-tmt-prim border-b-2" : ""
                }
              >
                {" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-travel-deals"
                className={({ isActive }) =>
                  isActive ? "text-tmt-prim border-tmt-prim border-b-2" : ""
                }
              >
                {" "}
                Travel Deals
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-tmt-prim border-tmt-prim border-b-2" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-tmt-prim border-tmt-prim border-b-2" : ""
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          {user && user?.email ? (
            <UserDropdown />
          ) : (
            <Link to="/login">
            <button className="bg-tmt-prim btn btn-sm md:btn-md cursor-pointer text-white px-6 py-2 rounded-md hover:bg-slate-700 transition duration-200 flex items-center justify-center ">
              Sign In
            </button></Link>
          )}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`fixed font-jost top-0 left-0 h-full w-72 bg-teal-50 shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-tmt-prim">
          <Link to="/">
            {" "}
            <div className="flex flex-row  gap-2">
              <img src={logo} className="w-8" alt="TMT Travel" />

              <p className="text-xl font-bold text-rose-800">TMT Travel</p>
            </div>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 text-2xl  cursor-pointer hover:text-prim"
          >
            <FiX className="cursor-pointer" /> {/* Outlined Close Icon */}
          </button>
        </div>

        <ul className="mt-4  space-y-4 px-4 text-gray-700">
          <li onClick={() => setMenuOpen(false)}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-tmt-prim border-tmt-prim border-b-2" : ""
              }
            >
              {" "}
              Home
            </NavLink>
          </li>
          <li onClick={() => setMenuOpen(false)}>
              <NavLink
                to="/all-travel-deals"
                className={({ isActive }) =>
                  isActive ? "text-tmt-prim border-tmt-prim border-b-2" : ""
                }
              >
                {" "}
                Travel Deals
              </NavLink>
            </li>
          
          <li onClick={() => setMenuOpen(false)}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-tmt-prim border-tmt-prim border-b-2" : ""
              }
            >
              {" "}
              About
            </NavLink>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-tmt-prim border-tmt-prim border-b-2" : ""
              }
            >
              {" "}
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Contact Details in Sidebar */}
        <div className="mt-6 px-4 border-t text-sm border-t-tmt-prim pt-4 text-gray-700">
          <a
            href="tel:+6562521461"
            className="flex items-center space-x-2 hover:text-prim mb-3"
          >
            <FaPhone /> <span>+65 62521461</span>
          </a>
          <a
            href="mailto:tmtquickservice@yahoo.com.sg"
            className="flex items-center space-x-2 hover:text-prim mb-3"
          >
            <FaEnvelope /> <span>tmtquickservice@yahoo.com.sg</span>
          </a>
          <a
            href="mailto:tmtquick@tmtquickservice.com"
            className="flex items-center space-x-2 hover:text-prim"
          >
            <FaEnvelope /> <span>tmtquick@tmtquickservice.com</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
