import { useState, useEffect } from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../../hooks/cartSettings/CartSettings";
import SreachInput from "../sreachInput/SreachInput";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const { cartItems, wishlist } = useCart();
  const loaction = useLocation();

  useEffect(() => {
    const savedToken = Cookies.get("Token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, [loaction.pathname]);

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
        <div className="fixed inset-0 bg-white/80 backdrop-blur-md z-9999 flex flex-col justify-center items-center transition-all duration-500">
          <span className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin mb-5"></span>
          <h2 className="text-gray-900 text-lg font-bold tracking-wider animate-pulse">
            Logging out securely
          </h2>
        </div>
      )}

      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3.5 flex justify-between items-center gap-6 lg:gap-12">
          <Link to={"/"} onClick={closeMenu} className="shrink-0 group">
            <div className="group inline-flex items-center tracking-[0.25em] text-sm uppercase font-black text-gray-900 transition-colors">
              A E T H E R
              <span className="text-gray-300 group-hover:text-black transition-colors ml-0.5 font-normal">
                .
              </span>
            </div>
          </Link>

          <SreachInput />

          <nav className="hidden lg:flex items-center gap-8">
            {["Home", "About", "Contact", "Blog"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-300 relative py-1 ${
                    isActive
                      ? "text-black after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-black after:rounded-full"
                      : "text-gray-500 hover:text-black"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-5">
              <Link
                to="/whislist"
                aria-label="wishlist"
                className="relative text-gray-600 hover:text-red-500 transition-colors duration-300 p-1.5 flex items-center justify-center rounded-lg hover:bg-red-50"
              >
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow-sm border-2 border-white">
                    {wishlist.length}
                  </span>
                )}
                <FaHeart size={22} />
              </Link>

              <Link
                to="/shopCart"
                aria-label="Shopping Cart"
                className="relative text-gray-600 hover:text-black transition-colors duration-300 p-1.5 flex items-center justify-center rounded-lg hover:bg-gray-100"
              >
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow-sm border-2 border-white">
                    {cartItems.length}
                  </span>
                )}
                <CiShoppingCart size={26} strokeWidth={0.5} />
              </Link>
            </div>

            {token ? (
              <div className="flex items-center border-l border-gray-200 pl-6 gap-4">
                <Link
                  to={"/profile"}
                  className="text-gray-600 hover:text-black hover:bg-gray-100 p-1.5 rounded-lg transition-colors"
                >
                  <CiUser size={26} strokeWidth={0.5} />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-red-600 text-sm font-semibold transition-colors px-2 py-1"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
                <Link
                  to={"/login"}
                  className="text-gray-600 font-semibold text-sm hover:text-black transition-colors px-3 py-2 rounded-xl hover:bg-gray-50"
                >
                  Login
                </Link>
                <Link
                  to={"/register"}
                  className="bg-gray-950 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-all active:scale-95 shadow-sm"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          <button
            className="lg:hidden text-2xl text-gray-800 p-2 hover:bg-gray-50 rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HiMenuAlt3 />
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-6 shadow-[0_20px_40px_rgba(0,0,0,0.05)] absolute w-full left-0 top-full">
            <nav className="flex flex-col gap-4">
              {["Home", "About", "Contact", "Blog"].map((item) => (
                <NavLink
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-base font-semibold transition-colors px-2 py-1 rounded-lg ${
                      isActive
                        ? "text-black bg-gray-50"
                        : "text-gray-500 hover:text-black hover:bg-gray-50/50"
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </nav>

            <div className="flex justify-around pt-5 border-t border-gray-100">
              <Link
                to="/whislist"
                onClick={closeMenu}
                className="relative text-gray-600 hover:text-red-500 transition-colors p-2 rounded-xl hover:bg-red-50 flex flex-col items-center gap-1"
              >
                <div className="relative">
                  <FaHeart size={24} />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1.5 -right-2 min-w-4.5 h-4.5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 border-2 border-white">
                      {wishlist.length}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-semibold">Wishlist</span>
              </Link>

              <Link
                to="/shopCart"
                onClick={closeMenu}
                className="relative text-gray-600 hover:text-black transition-colors p-2 rounded-xl hover:bg-gray-50 flex flex-col items-center gap-1"
              >
                <div className="relative">
                  <CiShoppingCart size={28} strokeWidth={0.5} />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 border-2 border-white">
                      {cartItems.length}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-semibold">Cart</span>
              </Link>

              {token && (
                <Link
                  to="/profile"
                  onClick={closeMenu}
                  className="text-gray-600 hover:text-black transition-colors p-2 rounded-xl hover:bg-gray-50 flex flex-col items-center gap-1"
                >
                  <CiUser size={28} strokeWidth={0.5} />
                  <span className="text-[10px] font-semibold">Profile</span>
                </Link>
              )}
            </div>

            <div className="flex flex-col gap-3 pt-5 border-t border-gray-100">
              {token ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-center bg-gray-50 text-red-600 py-3 rounded-xl font-bold text-sm hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to={"/login"}
                    onClick={closeMenu}
                    className="w-full text-center border border-gray-200 text-gray-800 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/register"}
                    onClick={closeMenu}
                    className="w-full text-center bg-gray-950 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-600 transition-colors shadow-sm"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
