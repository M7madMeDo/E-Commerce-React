import { useState, useEffect } from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router";
import Cookies from "js-cookie";
import { FaHeart } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const savedToken = Cookies.get("Token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);
  function handleLogout() {
    if (!token) return;
    Cookies.remove("Token");
    window.location.href = "/";
  }

  return (
    <header className="border-b border-[#B5B5B5] bg-white">
      <div className="container mx-auto py-4 flex justify-between items-center gap-4 lg:gap-16">
        <Link to={"/"} className="shrink-0 px-4">
          <img src="/assets/pics/Logo.webp" alt="logo" className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center justify-center grow max-w-92.5 bg-[#F5F5F5] rounded-lg p-4 gap-2">
          <CiSearch className="text-2xl text-[#989898]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full text-black"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black font-medium"
                : "text-[#989898] hover:text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-black font-medium"
                : "text-[#989898] hover:text-black"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-black font-medium"
                : "text-[#989898] hover:text-black"
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-black font-medium"
                : "text-[#989898] hover:text-black"
            }
          >
            Blog
          </NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button className="text-3xl hover:text-red-700 transition ">
              <FaHeart />
            </button>
            <Link
              to="/shopCart"
              className="text-3xl hover:text-gray-600 transition"
            >
              <CiShoppingCart />
            </Link>
          </div>

          {token ? (
            <div className="flex items-center border-l border-gray-300 pl-6 gap-4">
              <Link
                to={"/profile"}
                className="text-3xl hover:text-gray-600 transition"
              >
                <CiUser />
              </Link>
              <button
                onClick={() => handleLogout()}
                className="text-white bg-black  rounded-2xl font-medium hover:text-gray-200 transition px-6 py-2.5"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 border-l border-gray-300 pl-6">
              <Link
                to={"/login"}
                className="text-black font-medium hover:text-gray-600 transition px-2 py-2"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        <button
          className="lg:hidden text-3xl px-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-medium"
                  : "text-[#989898] hover:text-black"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-medium"
                  : "text-[#989898] hover:text-black"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-medium"
                  : "text-[#989898] hover:text-black"
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-medium"
                  : "text-[#989898] hover:text-black"
              }
            >
              Blog
            </NavLink>
          </nav>

          <div className="flex gap-6 pt-4 border-t border-gray-200">
            <button className="text-6xl hover:text-gray-600 transition">
              <CiHeart />
            </button>
            <Link
              to="/shopCart"
              className="text-2xl hover:text-gray-600 transition"
            >
              <CiShoppingCart />
            </Link>
            {token && (
              <button className="text-2xl hover:text-gray-600 transition">
                <CiUser />
              </button>
            )}
          </div>

          {!token && (
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <Link
                to={"/login"}
                className="w-full text-center border border-black text-black py-2.5 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="w-full text-center bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
