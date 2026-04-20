import { useEffect, useState } from "react";
import Cookies from "js-cookie";
export default function Profile() {
  const [token, setToken] = useState("");
  const [User, setUser] = useState({});
  useEffect(() => {
    const savedToken = Cookies.get("Token");
    if (savedToken) {
      setToken(savedToken);
      fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${savedToken} `,
        },
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-8 font-sans">
      {token ? (
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg w-full max-w-5xl overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-500 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-black tracking-tight">
                Profile
              </h2>
              <p className="text-xs text-gray-950 mt-1  tracking-wider">
                User Profile
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 p-6 flex flex-col items-center justify-center bg-white">
              <div className="p-1 border border-gray-300 rounded-md">
                <img
                  src={User.image}
                  alt={`user Avatar ${User.maidenName}`}
                  className="w-32 h-32 object-cover rounded-sm grayscale"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 bg-white">
              <dl className="divide-y divide-gray-200">
                <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 hover:bg-gray-50 transition-colors">
                  <dt className="text-sm font-medium text-gray-500">
                    First Name
                  </dt>
                  <dd className="text-sm font-mono text-black sm:col-span-2">
                    {User.firstName}
                  </dd>
                </div>

                <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 hover:bg-gray-50 transition-colors">
                  <dt className="text-sm font-medium text-gray-500">
                    Last Name
                  </dt>
                  <dd className="text-sm font-mono text-black sm:col-span-2">
                    {User.lastName}
                  </dd>
                </div>

                <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 hover:bg-gray-50 transition-colors">
                  <dt className="text-sm font-medium text-gray-500">
                    Maiden Name
                  </dt>
                  <dd className="text-sm font-mono text-black sm:col-span-2">
                    {User.maidenName ? User.maidenName : "-----"}
                  </dd>
                </div>

                <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 hover:bg-gray-50 transition-colors">
                  <dt className="text-sm font-medium text-gray-500">Age</dt>
                  <dd className="text-sm font-mono text-black sm:col-span-2">
                    {User.age}
                  </dd>
                </div>

                <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 hover:bg-gray-50 transition-colors">
                  <dt className="text-sm font-medium text-gray-500">Gender</dt>
                  <dd className="text-sm font-mono text-black sm:col-span-2">
                    {User.gender}
                  </dd>
                </div>

                <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 hover:bg-gray-50 transition-colors">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="text-sm font-mono text-black sm:col-span-2">
                    {User.email}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h1 className="text-6xl font-bold text-amber-300 ">Error</h1>
        </div>
      )}
    </section>
  );
}
