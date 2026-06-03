import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";

const fetchUserProfile = async () => {
  const token = Cookies.get("Token");
  if (!token) return;
  const res = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};
export default function Profile() {
  const {
    data: User,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <span className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin"></span>
      </div>
    );
  }

  if (isError || !User) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-red-500 tracking-tight">
          Login Required
        </h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="bg-white shadow-xl shadow-gray-100 border border-gray-100 rounded-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 p-8 flex flex-col items-center justify-center bg-white border-b md:border-b-0 md:border-r border-gray-100">
          <div className="p-1 border-2 border-gray-50 rounded-full mb-6 shadow-sm">
            <img
              src={User.image}
              alt={User.firstName}
              className="w-36 h-36 object-cover rounded-full"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
            {User.firstName} {User.lastName}
          </h2>
          <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest font-medium">
            User Profile
          </p>
        </div>

        <div className="w-full md:w-3/5 bg-white p-6 md:p-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 border-b border-gray-100 pb-3 mb-5">
                Personal Information
              </h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                <div>
                  <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    First Name
                  </dt>
                  <dd className="text-sm font-medium text-gray-800">
                    {User.firstName}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Last Name
                  </dt>
                  <dd className="text-sm font-medium text-gray-800">
                    {User.lastName}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Maiden Name
                  </dt>
                  <dd className="text-sm font-medium text-gray-800">
                    {User.maidenName || "—"}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Age
                  </dt>
                  <dd className="text-sm font-medium text-gray-800">
                    {User.age}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Gender
                  </dt>
                  <dd className="text-sm font-medium text-gray-800 capitalize">
                    {User.gender}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    Email
                  </dt>
                  <dd className="text-sm font-medium text-gray-800">
                    {User.email}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
