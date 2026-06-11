import { useEffect, useState } from "react";
import { useCart } from "../../hooks/cartSettings/CartSettings";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import Pagination from "../pagination/Pagination";
import { FiEye, FiShoppingCart } from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export default function Products({ activeCategories }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
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
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategories]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  function handleAddtoCart(pro) {
    const savedToken = Cookies.get("Token");
    if (!savedToken) {
      Swal.fire({
        toast: true,
        position: "top-end",
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
          <FaStar size={13} />
        ) : rating >= star - 0.5 ? (
          <FaStarHalfAlt size={13} />
        ) : (
          <FaRegStar size={13} className="text-gray-300" />
        )}
      </span>
    ));
  };

  return (
    <main
      className="flex-1 w-full max-w-7xl mx-auto px-4 py-4 selection:bg-black selection:text-white"
      id="products"
    >
      <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-4">
        <span className="text-sm font-medium text-gray-500 tracking-wide">
          Available Products:
          <span className="font-bold text-black ml-1.5 bg-gray-100 px-2.5 py-1 rounded-md text-xs">
            {products.length} Items
          </span>
        </span>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <span className="border-2 border-transparent border-t-black rounded-full w-8 h-8 animate-spin"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
          {currentPosts.map((pro) => (
            <div
              key={pro.id}
              className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 pb-5"
            >
              <div className="relative aspect-square w-full bg-gray-50/60 rounded-2xl flex justify-center items-center p-8 overflow-hidden group-hover:bg-gray-100/40 transition-colors duration-300">
                <img
                  loading="lazy"
                  decoding="async"
                  src={pro.thumbnail}
                  alt={pro.title}
                  width="195"
                  height="195"
                  className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-600 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider border border-gray-100 shadow-sm">
                  {pro.category}
                </span>

                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to={`/singleProduct/${pro.id}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-gray-700 hover:text-white hover:bg-black shadow-sm border border-gray-100 scale-90 group-hover:scale-100 transition-all duration-300"
                  >
                    <FiEye size={18} />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col flex-1 px-5 pt-3">
                <div className="flex items-center gap-1.5 mb-2 bg-amber-50/50 w-fit px-2 py-0.5 rounded-md border border-amber-100/50">
                  <div className="flex text-[#FFC107] text-[11px] gap-0.5">
                    {renderStars(pro.rating || 0)}
                  </div>
                  <span className="text-[11px] text-amber-700 font-bold">
                    {pro.rating.toFixed(1)}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-gray-800 line-clamp-2 leading-snug mb-5 min-h-11 hover:text-gray-500 transition-colors">
                  <Link to={`/singleProduct/${pro.id}`}>{pro.title}</Link>
                </h3>

                <div className="mt-auto flex items-center justify-between pt-3.5 border-t border-gray-50">
                  <div className="flex flex-col">
                    {pro.discountPercentage > 0 && (
                      <span className="text-[11px] font-bold text-gray-400 line-through decoration-gray-300 mb-0.5">
                        $
                        {(
                          pro.price /
                          (1 - pro.discountPercentage / 100)
                        ).toFixed(2)}
                      </span>
                    )}
                    <span className="text-xl font-extrabold text-gray-900 tracking-tight leading-none">
                      ${pro.price.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddtoCart(pro)}
                    className="flex items-center justify-center gap-2 bg-gray-950 hover:bg-black text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] active:scale-95 transition-all cursor-pointer group/btn"
                  >
                    <FiShoppingCart
                      size={14}
                      className="group-hover/btn:translate-x-0.5 transition-transform duration-200"
                    />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {products.length > postsPerPage && (
        <div className="mt-20 flex justify-center border-t border-gray-100 pt-10">
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
