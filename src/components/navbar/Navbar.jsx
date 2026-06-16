import { useState, useEffect } from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../../hooks/cartSettings/CartSettings";
import SreachInput from "../sreachInput/SreachInput";
import MiniAsideCart from "../miniAsideCart/MiniAsideCart";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
        <div className="fixed inset-0 bg-neutral-bg/80 backdrop-blur-md z-9999 flex flex-col justify-center items-center transition-all duration-500">
          <span className="w-12 h-12 border-4 border-neutral-light border-t-primary-500 rounded-full animate-spin mb-5"></span>
          <h2 className="text-neutral-dark text-lg font-bold tracking-wider animate-pulse">
            Logging out securely
          </h2>
        </div>
      )}

      <header className="border-b border-neutral-light/50 bg-neutral-bg/95 backdrop-blur-md sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3.5 flex justify-between items-center gap-6 lg:gap-12">
          <Link to={"/"} onClick={closeMenu} className="shrink-0 group">
            <div className="group inline-flex items-center tracking-[0.25em] text-sm uppercase font-black text-neutral-dark transition-colors">
              A E T H E R
              <span className="text-neutral-light/40 group-hover:text-primary-500 transition-colors ml-0.5 font-normal">
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
                      ? "text-primary-500 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary-500 after:rounded-full"
                      : "text-neutral-dark/60 hover:text-primary-500"
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
                className="relative text-neutral-dark/70 hover:text-error transition-colors duration-300 p-1.5 flex items-center justify-center rounded-lg hover:bg-error/10"
              >
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 bg-error text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow-sm border-2 border-neutral-bg">
                    {wishlist.length}
                  </span>
                )}
                <FaHeart size={22} />
              </Link>

              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping Cart"
                className="relative text-neutral-dark/70 hover:text-primary-500 transition-colors duration-300 p-1.5 flex items-center justify-center rounded-lg hover:bg-neutral-light cursor-pointer"
              >
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 bg-primary-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow-sm border-2 border-neutral-bg">
                    {cartItems.length}
                  </span>
                )}
                <CiShoppingCart size={26} strokeWidth={0.5} />
              </button>
            </div>

            {token ? (
              <div className="flex items-center border-l border-neutral-light/50 pl-6 gap-4">
                <Link
                  to="/profile"
                  className="text-neutral-dark/70 hover:text-primary-500 hover:bg-neutral-light p-1.5 rounded-lg transition-colors"
                >
                  <CiUser size={26} strokeWidth={0.5} />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-neutral-dark/70 hover:text-error text-sm font-semibold transition-colors px-2 py-1"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3 border-l border-neutral-light/50 pl-6">
                <Link
                  to="/login"
                  className="text-neutral-dark/70 font-semibold text-sm hover:text-primary-500 transition-colors px-3 py-2 rounded-xl hover:bg-neutral-light"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-600 transition-all active:scale-95 shadow-sm"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          <button
            className="lg:hidden text-2xl text-neutral-dark p-2 hover:bg-neutral-light rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HiMenuAlt3 />
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-neutral-bg border-t border-neutral-light/50 px-4 py-6 space-y-6 shadow-[0_20px_40px_rgba(0,0,0,0.05)] absolute w-full left-0 top-full">
            <nav className="flex flex-col gap-4">
              {["Home", "About", "Contact", "Blog"].map((item) => (
                <NavLink
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-base font-semibold transition-colors px-2 py-1 rounded-lg ${
                      isActive
                        ? "text-primary-500 bg-neutral-light"
                        : "text-neutral-dark/60 hover:text-primary-500 hover:bg-neutral-light/50"
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </nav>

            <div className="flex justify-around pt-5 border-t border-neutral-light/50">
              <Link
                to="/whislist"
                onClick={closeMenu}
                className="relative text-neutral-dark/70 hover:text-error transition-colors p-2 rounded-xl hover:bg-error/10 flex flex-col items-center gap-1"
              >
                <div className="relative">
                  <FaHeart size={24} />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1.5 -right-2 min-w-4.5 h-4.5 bg-error text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 border-2 border-neutral-bg">
                      {wishlist.length}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-semibold">Wishlist</span>
              </Link>

              <button
                onClick={() => {
                  closeMenu();
                  setIsCartOpen(true);
                }}
                className="relative text-neutral-dark/70 hover:text-primary-500 transition-colors p-2 rounded-xl hover:bg-neutral-light flex flex-col items-center gap-1 cursor-pointer w-full"
              >
                <div className="relative">
                  <CiShoppingCart size={28} strokeWidth={0.5} />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-4.5 h-4.5 bg-primary-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 border-2 border-neutral-bg">
                      {cartItems.length}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-semibold">Cart</span>
              </button>

              {token && (
                <Link
                  to="/profile"
                  onClick={closeMenu}
                  className="text-neutral-dark/70 hover:text-primary-500 transition-colors p-2 rounded-xl hover:bg-neutral-light flex flex-col items-center gap-1"
                >
                  <CiUser size={28} strokeWidth={0.5} />
                  <span className="text-[10px] font-semibold">Profile</span>
                </Link>
              )}
            </div>

            <div className="flex flex-col gap-3 pt-5 border-t border-neutral-light/50">
              {token ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-center bg-neutral-light text-error py-3 rounded-xl font-bold text-sm hover:bg-error/10 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="w-full text-center border border-neutral-light text-neutral-dark py-3 rounded-xl font-bold text-sm hover:bg-neutral-light transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="w-full text-center bg-primary-500 text-white py-3 rounded-xl font-bold text-sm hover:bg-primary-600 transition-colors shadow-sm"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <MiniAsideCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
