import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  let pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-16 selection:bg-black selection:text-white">
      <button
        disabled={currentPage === 1}
        onClick={handlePrev}
        className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-700 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed enabled:hover:bg-gray-50 enabled:hover:border-gray-300 enabled:cursor-pointer"
      >
        <FaArrowLeft size={12} />
      </button>

      <div className="flex items-center gap-1.5">
        {pages.map((page, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 flex items-center justify-center text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer ${
              page === currentPage
                ? "bg-gray-950 text-white shadow-sm"
                : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50 hover:border-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        disabled={currentPage === totalPages}
        onClick={handleNext}
        className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-100 bg-white text-gray-700 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed enabled:hover:bg-gray-50 enabled:hover:border-gray-300 enabled:cursor-pointer"
      >
        <FaArrowRight size={12} />
      </button>
    </div>
  );
}
