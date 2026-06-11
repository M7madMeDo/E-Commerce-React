import { Link } from "react-router";
import { FiInfo } from "react-icons/fi";

export default function Register() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white p-4 selection:bg-black selection:text-white">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-4xl shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-gray-100 text-black">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold tracking-wide text-gray-400">
            Create your new account
          </h2>
        </div>

        <div className="mb-8 p-4 bg-cyan-500  rounded-xl flex items-start gap-3">
          <FiInfo className=" text-lg shrink-0 mt-0.5" />
          <p className="text-xs font-semibold  leading-relaxed">
            <strong className="block  text-sm mb-0.5">Demo</strong>
            This is a portfolio project using a mock API
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-5 py-3.5 bg-gray-50/80 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all placeholder:text-gray-300"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-5 py-3.5 bg-gray-50/80 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all placeholder:text-gray-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-5 py-3.5 bg-gray-50/80 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all placeholder:text-gray-300"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-5 py-3.5 bg-gray-50/80 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all placeholder:text-gray-300"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="button"
            className="w-full py-4 px-4 rounded-xl font-bold text-sm bg-gray-950 text-white hover:bg-black hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] active:scale-[0.98] transition-all duration-300 mt-6 flex justify-center items-center"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center">
          <span className="text-sm text-gray-500 font-medium">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-gray-950 font-extrabold hover:text-gray-500 transition-colors"
            >
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
