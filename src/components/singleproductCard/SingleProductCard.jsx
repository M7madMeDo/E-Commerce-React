import { FiTruck } from "react-icons/fi";
import { BiStore } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";

export default function SingleProductCard(props) {
  return (
    <section
      key={props.id}
      className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 md:gap-10 items-start"
    >
      <div className="bg-[#F8F8F8] border border-[#EBEBEB] p-4 md:p-8 flex items-center justify-center rounded-xl w-full">
        <img
          src={props.img}
          alt={props.title}
          className="max-w-full h-auto max-h-[40vh] lg:max-h-full object-contain"
        />
      </div>

      <div className="flex flex-col gap-4 md:gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          {props.title}
        </h1>

        <div className="flex items-baseline gap-2">
          <p className="text-3xl md:text-4xl font-bold">${props.finalprice}</p>
          <p className="text-lg md:text-xl text-[#9A9A9A] line-through">
            ${props.price}
          </p>
        </div>

        <p className="text-[#7C7C7C] leading-relaxed text-sm sm:text-base">
          {props.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 w-full">
          <button
            onClick={() => props.toggleWishlist(props)}
            className={`w-full sm:w-1/2 border px-6 py-3 font-medium transition rounded-md ${
              props.isWishlisted
                ? "bg-red-500 text-white border-red-500 hover:bg-red-600"
                : "border-black bg-white text-black hover:bg-black hover:text-white"
            }`}
          >
            {props.isWishlisted ? "Remove From Wishlist" : "Add To Wishlist"}
          </button>

          <button
            onClick={() => props.addToCart(props)}
            className="w-full sm:w-1/2 bg-black text-white px-6 py-3 font-medium hover:bg-white hover:text-black border hover:border-black transition rounded-md"
          >
            Add To Cart
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-[#F2F2F2]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F5F5F5] rounded-xl flex items-center justify-center border border-[#EBEBEB] shrink-0 text-black">
              <FiTruck className="text-xl md:text-2xl" />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-[#7C7C7C] text-sm md:text-base">
                Free Delivery
              </p>
              <p className="text-xs md:text-base font-semibold text-black">
                {props.shippingInformation}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F5F5F5] rounded-xl flex items-center justify-center border border-[#EBEBEB] shrink-0 text-black">
              <BiStore className="text-xl md:text-2xl" />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-[#7C7C7C] text-sm md:text-base">
                {props.availabilityStatus}
              </p>
              <p className="text-sm md:text-base font-semibold text-black">
                {props.stock}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F5F5F5] rounded-xl flex items-center justify-center border border-[#EBEBEB] shrink-0 text-black">
              <BsShieldCheck className="text-xl md:text-2xl" />
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-[#7C7C7C] text-sm md:text-base">
                Guaranteed
              </p>
              <p className="text-sm md:text-base font-semibold text-black">
                {props.warrantyInformation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
