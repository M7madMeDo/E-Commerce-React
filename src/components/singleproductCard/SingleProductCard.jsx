import { FiTruck, FiPackage, FiShield } from "react-icons/fi";

export default function SingleProductCard(props) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start max-w-7xl mx-auto px-4 py-6">
      <div className="bg-neutral-light/30 border border-neutral-light p-6 md:p-12 flex items-center justify-center rounded-2xl w-full aspect-square max-h-125 shadow-sm">
        <img
          src={props.img}
          alt={props.title}
          loading="eager"
          className="max-h-full max-w-full object-contain mix-blend-multiply hover:scale-102 transition-transform duration-500 ease-out"
        />
      </div>

      <div className="flex flex-col gap-5 md:gap-6 pt-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-dark leading-tight">
          {props.title}
        </h1>

        <div className="flex items-center gap-3">
          <p className="text-3xl md:text-4xl font-extrabold text-neutral-dark tracking-tight">
            ${props.finalprice}
          </p>
          {props.price && props.price !== "0.00" && (
            <p className="text-base md:text-lg text-neutral-dark/40 line-through font-medium">
              ${props.price}
            </p>
          )}
        </div>

        <p className="text-neutral-dark/70 leading-relaxed text-sm sm:text-base max-w-xl">
          {props.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3.5 pt-4 w-full">
          <button
            onClick={() => props.addToCart(props)}
            className="w-full sm:w-1/2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] active:scale-[0.99] transition-all cursor-pointer order-1 sm:order-2"
          >
            Add To Cart
          </button>

          <button
            onClick={() => props.toggleWishlist(props)}
            className={`w-full sm:w-1/2 border px-6 py-3.5 text-sm font-semibold transition rounded-xl active:scale-[0.99] cursor-pointer order-2 sm:order-1 ${
              props.isWishlisted
                ? "bg-error/10 text-error border-error/20 hover:bg-error/20"
                : "border-neutral-light bg-neutral-bg text-neutral-dark/70 hover:bg-neutral-light hover:text-primary-500"
            }`}
          >
            {props.isWishlisted ? "Remove From Wishlist" : "Add To Wishlist"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-4 border-t border-neutral-light/50">
          <div className="flex items-center gap-3 bg-neutral-light/30 border border-neutral-light p-3.5 rounded-xl">
            <div className="w-10 h-10 bg-neutral-bg rounded-lg flex items-center justify-center border border-neutral-light shrink-0 text-neutral-dark/80 shadow-sm">
              <FiTruck className="text-lg" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-neutral-dark/40">
                Free Delivery
              </span>
              <span className="text-xs font-bold text-neutral-dark truncate">
                {props.shippingInformation}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-neutral-light/30 border border-neutral-light p-3.5 rounded-xl">
            <div className="w-10 h-10 bg-neutral-bg rounded-lg flex items-center justify-center border border-neutral-light shrink-0 text-neutral-dark/80 shadow-sm">
              <FiPackage className="text-lg" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-neutral-dark/40 truncate">
                {props.availabilityStatus}
              </span>
              <span className="text-xs font-bold text-neutral-dark">
                {props.stock} Items left
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-neutral-light/30 border border-neutral-light p-3.5 rounded-xl">
            <div className="w-10 h-10 bg-neutral-bg rounded-lg flex items-center justify-center border border-neutral-light shrink-0 text-neutral-dark/80 shadow-sm">
              <FiShield className="text-lg" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-neutral-dark/40">
                Warranty
              </span>
              <span className="text-xs font-bold text-neutral-dark truncate">
                {props.warrantyInformation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
