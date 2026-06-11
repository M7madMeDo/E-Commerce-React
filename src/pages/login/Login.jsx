import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";

export default function Login() {
  const [username, setUsername] = useState("oliviaw");
  const [password, setPassword] = useState("oliviawpass");
  const navigate = useNavigate();

  const loginRequest = async (credentials) => {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      throw new Error("Invalid username or password");
    }
    return res.json();
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      Cookies.set("Token", data.accessToken);
      navigate("/");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    mutate({ username, password });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white p-4 selection:bg-black selection:text-white">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-4xl shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-gray-100 text-black">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-black uppercase tracking-widest text-gray-900 mb-2">
            AETHER
          </h1>
          <h2 className="text-sm font-bold tracking-wide text-gray-400">
            Welcome back to your account
          </h2>
        </div>

        {isError && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 border border-red-100 rounded-xl text-center text-sm font-semibold">
            {error.message || "Something went wrong!"}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-5 py-3.5 bg-gray-50/80 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all placeholder:text-gray-300"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3.5 bg-gray-50/80 border border-gray-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition-all placeholder:text-gray-300"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className={`w-full py-4 px-4 rounded-xl font-bold text-sm transition-all duration-300 mt-2 flex justify-center items-center ${
              isPending
                ? "bg-gray-50 text-gray-400 cursor-not-allowed border border-gray-100"
                : "bg-gray-950 text-white hover:bg-black hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] active:scale-[0.98]"
            }`}
          >
            {isPending ? (
              <span className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <span className="text-sm text-gray-500 font-medium">
            Don't have an account?
            <Link
              to="/register"
              className="text-gray-950 font-extrabold hover:text-gray-500 transition-colors"
            >
              Register
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
