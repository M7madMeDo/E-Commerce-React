import { FiTruck } from "react-icons/fi";
import { BiStore } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";

export default function SingleProductCard(props) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start max-w-7xl mx-auto px-4 py-6">
      <div className="bg-gray-50/80 border border-gray-100 p-6 md:p-12 flex items-center justify-center rounded-2xl w-full aspect-square max-h-125 shadow-sm">
        <img
          src={props.img}
          alt={props.title}
          loading="eager"
          className="max-h-full max-w-full object-contain mix-blend-multiply hover:scale-102 transition-transform duration-500 ease-out"
        />
      </div>

      <div className="flex flex-col gap-5 md:gap-6 pt-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
          {props.title}
        </h1>

        <div className="flex items-center gap-3">
          <p className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            ${props.finalprice}
          </p>
          <p className="text-base md:text-lg text-gray-400 line-through font-medium">
            ${props.price}
          </p>
        </div>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-xl">
          {props.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3.5 pt-4 w-full">
          <button
            onClick={() => props.addToCart(props)}
            className="w-full sm:w-1/2 bg-gray-950 hover:bg-blue-600 text-white px-6 py-3.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md active:scale-[0.99] transition-all cursor-pointer order-1 sm:order-2"
          >
            Add To Cart
          </button>

          <button
            onClick={() => props.toggleWishlist(props)}
            className={`w-full sm:w-1/2 border px-6 py-3.5 text-sm font-semibold transition rounded-xl active:scale-[0.99] cursor-pointer order-2 sm:order-1 ${
              props.isWishlisted
                ? "bg-red-50 text-red-600 border-red-100 hover:bg-red-100"
                : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-black"
            }`}
          >
            {props.isWishlisted ? "Remove From Wishlist" : "Add To Wishlist"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-4 border-t border-gray-100">
          <div className="flex items-center gap-3 bg-gray-50/60 border border-gray-100 p-3.5 rounded-xl">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-100 shrink-0 text-gray-800 shadow-sm">
              <FiTruck className="text-lg" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-gray-400">
                Free Delivery
              </span>
              <span className="text-xs font-bold text-gray-900 truncate">
                {props.shippingInformation}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50/60 border border-gray-100 p-3.5 rounded-xl">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-100 shrink-0 text-gray-800 shadow-sm">
              <BiStore className="text-lg" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-gray-400 truncate">
                {props.availabilityStatus}
              </span>
              <span className="text-xs font-bold text-gray-900">
                {props.stock} Items left
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50/60 border border-gray-100 p-3.5 rounded-xl">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-100 shrink-0 text-gray-800 shadow-sm">
              <BsShieldCheck className="text-lg" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-gray-400">
                Warranty
              </span>
              <span className="text-xs font-bold text-gray-900 truncate">
                {props.warrantyInformation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
