import { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useCart } from "../../hooks/cartSettings/CartSettings";
export default function Products({ activeCategories }) {
  const [products, setproducts] = useState([]);
  const [loading, setloding] = useState(true);
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
      const combined = results.flatMap((data) => data.products);
      setproducts(combined);
    } else {
      const res = await fetch("https://dummyjson.com/products?limit=60");
      const data = await res.json();
      setproducts(data.products);
    }
    setloding(false);
  };

  useEffect(() => {
    getProductsdata();
    setCurrentPage(1);
    setloding(true);
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
  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-gray-600 text-lg">
          Available Products:
          <span className="font-bold text-black">{products.length}</span>
        </span>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loader border-4 border-gray-200 border-t-black rounded-full w-12 h-12 animate-spin"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentPosts.map((pro) => (
            <div
              key={pro.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-full h-48 flex justify-center items-center bg-[#F8F9FA] rounded-xl p-4 mb-4 overflow-hidden">
                <img
                  src={pro.thumbnail}
                  alt={pro.title}
                  className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="font-bold text-gray-800 text-lg leading-tight mb-2 line-clamp-2 h-12">
                  {pro.title}
                </h3>
                <p className="text-2xl font-black text-black mb-4">
                  ${pro.price}
                </p>

                <div className="flex items-center gap-2 mt-auto">
                  <button
                    onClick={() => handleAddtoCart(pro)}
                    className="flex-1 bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap text-sm px-2"
                  >
                    Add To Cart
                  </button>
                  <Link
                    to={`/singleProduct/${pro.id}`}
                    className="p-3 bg-gray-100 text-gray-900 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center"
                  >
                    <FaEye size={20} />
                  </Link>
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
