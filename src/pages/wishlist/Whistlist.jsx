import { Link } from "react-router";
import { FaTrash, FaShoppingCart, FaHeart, FaCheck } from "react-icons/fa";
import { useCart } from "../../hooks/cartSettings/CartSettings";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export default function Wishlist() {
  const { addToCart, cartItems, wishlist, setwishlist } = useCart();

  const delFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setwishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    Swal.fire({
      toast: true,
      position: "center",
      icon: "success",
      title: "Removed from wishlist",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAddToCart = (product) => {
    const token = Cookies.get("Token");
    if (!token) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You need to Login First",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    addToCart(product);
  };

  if (wishlist.length === 0) {
    return (
      <section className="container mx-auto px-4 py-20 text-center bg-white flex flex-col items-center justify-center min-h-[70vh]">
        <div className="w-20 h-20 bg-[#F8F9FA] rounded-full flex items-center justify-center text-gray-400 mb-6 border border-[#EBEBEB]">
          <FaHeart className="text-3xl" />
        </div>
        <h2 className="text-2xl font-semibold text-black mb-2">
          Your Wishlist is Empty
        </h2>
        <p className="text-[#7C7C7C] max-w-sm mb-8 text-sm sm:text-base">
          Tap the heart icon on products you love, and they'll show up here.
        </p>
        <Link
          to="/"
          className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95"
        >
          Explore Products
        </Link>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-10 bg-white min-h-[80vh]">
      <div className="flex items-center gap-3 mb-10 border-b border-[#F2F2F2] pb-5">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-black">
          My Wishlist
        </h1>
        <span className="bg-black text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {wishlist.length} Items
        </span>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {wishlist.map((item) => {
          const isInCart = cartItems?.some(
            (cartItem) => cartItem.id === item.id,
          );

          return (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300 group relative"
            >
              <button
                onClick={() => delFromWishlist(item.id)}
                className="absolute top-3 right-3 p-2 bg-white hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full shadow-md z-10 transition-colors cursor-pointer"
                title="Remove"
              >
                <FaTrash className="text-sm" />
              </button>

              <div className="w-full h-56 flex justify-center items-center bg-[#F8F9FA] rounded-xl p-4 mb-4 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              <div className="flex flex-col flex-1 text-center">
                <h3 className="font-semibold text-gray-800 leading-snug mb-2 line-clamp-2 min-h-12">
                  {item.title}
                </h3>
                <p className="text-xl font-bold text-black mb-5">
                  ${item.price}
                </p>

                <div className="flex justify-center items-center gap-2 mt-auto">
                  {isInCart ? (
                    <button
                      disabled
                      className="w-full bg-emerald-600 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 text-sm opacity-90 cursor-not-allowed"
                    >
                      <FaCheck /> Added To Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer active:scale-95 text-sm"
                    >
                      <FaShoppingCart /> Add To Cart
                    </button>
                  )}

                  <Link
                    to={`/singleProduct/${item.id}`}
                    className="p-3 bg-gray-100 hover:bg-gray-200 text-black font-semibold rounded-xl transition-colors text-sm flex items-center justify-center"
                    title="View Product"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
