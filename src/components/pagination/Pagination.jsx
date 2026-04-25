import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
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
    <div className="flex justify-center items-center gap-4 mt-25 transition-all ">
      <button
        className={
          currentPage == 1
            ? ""
            : "p-3 cursor-pointer hover:bg-gray-400 rounded-4xl"
        }
        onClick={() => handlePrev()}
      >
        {currentPage == 1 ? " " : <FaArrowLeft />}
      </button>
      {pages.map((page, i) => (
        <button
          key={i}
          className={
            page == currentPage
              ? "active w-8 h-8 flex items-center justify-center bg-black text-white rounded cursor-pointer"
              : "cursor-pointer"
          }
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={
          totalPages == currentPage
            ? ""
            : "p-3 cursor-pointer hover:bg-gray-400 rounded-4xl"
        }
        onClick={() => handleNext()}
      >
        {totalPages == currentPage ? "" : <FaArrowRight />}{" "}
      </button>
    </div>
  );
}
