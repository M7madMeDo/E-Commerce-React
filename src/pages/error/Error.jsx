import { Link } from "react-router";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-6 text-center selection:bg-white selection:text-black">
      <div className="flex flex-col items-center transition-all duration-700 hover:-translate-y-2">
        <h1 className="text-7xl sm:text-9xl font-black text-white tracking-widest">
          404
        </h1>
        <div className="h-1 w-16 bg-white my-6 rounded-full"></div>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Oops! Page not found
      </h2>

      <p className="text-gray-400 max-w-md text-sm sm:text-base mb-10">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="px-8 py-3 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      >
        Go Back Home
      </Link>
    </div>
  );
}
