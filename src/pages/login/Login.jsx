import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Cookies from "js-cookie";
export default function Login() {
  const [username, setUsername] = useState("oliviaw");
  const [password, setPassword] = useState("oliviawpass");
  const getLoginToken = async (e) => {
    e.preventDefault();
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await res.json();
    Cookies.set("Token", data.accessToken);

    window.location.href = "/";
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-200 text-black">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-tight">
          Login
        </h2>

        <form onSubmit={getLoginToken} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-1 focus:ring-black transition-shadow"
              placeholder="Enter your Username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-1 focus:ring-black transition-shadow"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-4 rounded border border-black font-medium hover:bg-white hover:text-black transition-colors duration-200 mt-2"
          >
            Login
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link
            to="/register"
            className="text-sm font-medium underline hover:no-underline transition-all"
          >
            Don't have an account?
            <span className="text-red-600 underline">Register</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
