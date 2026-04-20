import React from "react";
import { Link } from "react-router";
export default function Register() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-200 text-black">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-tight">
          Register
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-1 focus:ring-black transition-shadow"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-1 focus:ring-black transition-shadow"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-1 focus:ring-black transition-shadow"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-1 focus:ring-black transition-shadow"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="button"
            className="w-full bg-black text-white py-3 px-4 rounded border border-black font-medium hover:bg-white hover:text-black transition-colors duration-200 mt-4"
          >
            Register
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="text-sm font-medium underline hover:no-underline transition-all"
          >
            Already have an account?
            <span className="text-red-600 underline">Login</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
