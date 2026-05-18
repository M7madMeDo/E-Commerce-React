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
    <section className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-gray-200 text-black">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-tight">
          Login
        </h2>

        {isError && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-center text-sm">
            {error.message || "Something went wrong!"}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:ring-1 focus:ring-black transition-shadow"
              placeholder="Enter your Username"
              required
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
              required
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className={`w-full py-3 px-4 rounded border border-black font-medium transition-colors duration-200 mt-2 flex justify-center items-center ${
              isPending
                ? "bg-gray-400 text-white cursor-not-allowed border-gray-400"
                : "bg-black text-white hover:bg-white hover:text-black"
            }`}
          >
            {isPending ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link
            to="/register"
            className="text-sm font-medium underline hover:no-underline transition-all"
          >
            Don't have an account?{" "}
            <span className="text-red-600 underline">Register</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
