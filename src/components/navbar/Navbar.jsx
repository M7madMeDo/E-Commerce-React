import { useState, useEffect } from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../../hooks/cartSettings/CartSettings";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();
  useEffect(() => {
    const savedToken = Cookies.get("Token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  function handleLogout() {
    if (!token) return;
    setIsMenuOpen(false);
    setIsLoggingOut(true);
    setTimeout(() => {
      Cookies.remove("Token");
      setToken("");
      setIsLoggingOut(false);
      navigate("/");
    }, 800);
  }
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
      {isLoggingOut && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-9999 flex flex-col justify-center items-center transition-opacity duration-300">
          <span className="w-14 h-14 border-4 border-gray-300 border-t-white rounded-full animate-spin mb-4"></span>
          <h2 className="text-white text-xl font-medium tracking-wide animate-pulse">
            Logging out...
          </h2>
        </div>
      )}

      <header className="border-b border-[#B5B5B5] bg-white sticky top-0 z-50">
        <div className="container mx-auto py-4 flex justify-between items-center gap-4 lg:gap-16">
          <Link to={"/"} onClick={closeMenu} className="shrink-0 px-4">
            <img
              src="/assets/pics/Logo.webp"
              alt="logo"
              className="h-8 w-auto"
            />
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
            <div className="flex items-center gap-5">
              <button
                aria-label="wishlist"
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 focus:outline-none"
              >
                <FaHeart size={26} />
              </button>

              <Link
                to="/shopCart"
                className="relative text-gray-700 hover:text-gray-900 transition-colors duration-200 p-1 flex items-center justify-center"
                aria-label="Shopping Cart"
              >
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow-sm">
                    {cartItems.length}
                  </span>
                )}
                <CiShoppingCart size={30} />
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
                  onClick={handleLogout}
                  className="text-white bg-black rounded-2xl font-medium hover:text-gray-200 transition px-6 py-2.5 cursor-pointer"
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
            className="lg:hidden text-3xl px-4 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HiMenuAlt3 />
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t px-4 py-4 space-y-4 shadow-lg absolute w-full left-0">
            <nav className="flex flex-col gap-4">
              <NavLink
                to="/"
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
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
              <button className="text-2xl hover:text-red-700 transition">
                <FaHeart />
              </button>
              <Link
                to="/shopCart"
                onClick={closeMenu}
                className="text-2xl hover:text-gray-600 transition"
              >
                <CiShoppingCart />
              </Link>
              {token && (
                <Link
                  to="/profile"
                  onClick={closeMenu}
                  className="text-2xl hover:text-gray-600 transition"
                >
                  <CiUser />
                </Link>
              )}
            </div>

            {token ? (
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handleLogout}
                  className="w-full text-center bg-red-600 text-white py-2.5 rounded-lg font-medium hover:bg-red-700 transition cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Link
                  to={"/login"}
                  onClick={closeMenu}
                  className="w-full text-center border border-black text-black py-2.5 rounded-lg font-medium hover:bg-gray-50 transition"
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  onClick={closeMenu}
                  className="w-full text-center bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
}
