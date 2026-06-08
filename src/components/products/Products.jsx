import { useEffect, useState } from "react";
import { useCart } from "../../hooks/cartSettings/CartSettings";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import Pagination from "../pagination/Pagination";
import {
  FaRegEye,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingCart,
} from "react-icons/fa";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
export default function Products({ activeCategories }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [token, setToken] = useState("");
  const { addToCart } = useCart();

  const getProductsdata = async () => {
    if (activeCategories && activeCategories.length > 0) {
      const res = activeCategories.map((cat) =>
        fetch(`https://dummyjson.com/products/category/${cat}`).then((res) =>
          res.json(),
        ),
      );
      const results = await Promise.all(res);
      return results.flatMap((data) => data.products);
    } else {
      const res = await fetch("https://dummyjson.com/products?limit=60");
      const data = await res.json();
      return data.products;
    }
  };

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", activeCategories],
    queryFn: getProductsdata,
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategories]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const savedToken = Cookies.get("Token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  function handleAddtoCart(pro) {
    if (!token) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You need to Login First",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else {
      addToCart(pro);
    }
  }

  const renderStars = (rating) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span key={star}>
        {rating >= star ? (
          <FaStar />
        ) : rating >= star - 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    ));
  };

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-gray-600 text-lg">
          Available Products:
          <span className="font-bold text-black ml-1">{products.length}</span>
        </span>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loader border-4 border-gray-200 border-t-black rounded-full w-12 h-12 animate-spin"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentPosts.map((pro) => (
            <div
              key={pro.id}
              className="group flex flex-col transition-all duration-300 border border-transparent hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-gray-100 rounded-2xl pb-4"
            >
              <div className="relative aspect-square w-full bg-[#f9f9f9] rounded-2xl flex justify-center items-center p-6 mb-4 overflow-hidden">
                <img
                  src={pro.thumbnail}
                  alt={pro.title}
                  className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out mix-blend-multiply"
                />

                <div className="absolute top-4 right-4 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <Link
                    to={`/singleProduct/${pro.id}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_2px_10px_rgb(0,0,0,0.1)] text-gray-500 hover:text-black hover:scale-105 transition-all"
                  >
                    <FaRegEye size={18} />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col flex-1 px-2">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="flex text-[#FFC107] text-[14px]">
                    {renderStars(pro.rating || 0)}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    {pro.rating.toFixed(1)}
                  </span>
                </div>

                <h3 className="text-base font-medium text-gray-900 line-clamp-2 leading-snug mb-5 min-h-11">
                  {pro.title}
                </h3>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ${pro.price}
                  </span>

                  <button
                    onClick={() => handleAddtoCart(pro)}
                    className="flex items-center justify-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 active:scale-95 transition-all"
                  >
                    <FaShoppingCart size={14} />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {products.length > postsPerPage && (
        <div className="mt-16 flex justify-center border-t border-gray-300 pt-8">
          <Pagination
            totalPosts={products.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </main>
  );
}
