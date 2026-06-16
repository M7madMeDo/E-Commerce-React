import OrderSummary from "../../components/orderSummary/OrderSummary";
import { useCart } from "../../hooks/cartSettings/CartSettings";
import { FiPlus, FiMinus, FiTrash2, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";

export default function ShopingCart() {
  const { cartItems, deleteFromTheCart, Updatequantity } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[80vh] bg-neutral-light/20 flex flex-col items-center justify-center px-4">
        <div className="bg-neutral-bg p-12 rounded-3xl shadow-sm border border-neutral-light flex flex-col items-center text-center max-w-md w-full hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
          <div className="w-28 h-28 bg-neutral-light/30 rounded-full flex items-center justify-center mb-6 shadow-inner border border-neutral-light">
            <FiShoppingCart className="w-12 h-12 text-neutral-dark/30" />
          </div>
          <h2 className="text-2xl font-extrabold text-neutral-dark mb-3 tracking-tight">
            Your Cart is Empty
          </h2>
          <p className="text-neutral-dark/50 mb-8 leading-relaxed text-sm">
            Looks like you haven't added anything to your cart yet. Discover our
            latest products and find something you love.
          </p>
          <Link
            to="/"
            className="bg-primary-500 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 w-full shadow-sm active:scale-[0.98] cursor-pointer block"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-neutral-light/10 py-10 px-4 sm:px-6 lg:px-8 font-sans text-neutral-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-neutral-bg rounded-3xl border border-neutral-light p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-neutral-light/50 pb-6 mb-2">
              <h1 className="text-2xl font-extrabold tracking-tight">
                Shopping Cart
              </h1>
              <span className="bg-neutral-light text-neutral-dark/70 text-sm font-bold px-3 py-1 rounded-lg">
                {cartItems.length} Items
              </span>
            </div>

            <div className="flex flex-col">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col sm:flex-row gap-6 py-6 border-b border-neutral-light/20 last:border-0 last:pb-0"
                >
                  <div className="w-28 h-28 sm:w-32 sm:h-32 bg-neutral-light/30 rounded-2xl shrink-0 border border-neutral-light overflow-hidden p-4 flex items-center justify-center group-hover:bg-neutral-light/40 transition-colors duration-300">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between pt-1">
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-bold text-lg text-neutral-dark line-clamp-2 leading-snug group-hover:text-primary-500 transition-colors">
                          <Link to={`/singleProduct/${item.id}`}>
                            {item.title}
                          </Link>
                        </h3>

                        <button
                          onClick={() => deleteFromTheCart(item.id)}
                          className="text-neutral-dark/40 hover:text-error hover:bg-error/10 p-2.5 rounded-xl transition-all duration-300 shrink-0"
                          title="Remove item"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-xs font-semibold text-primary-500 bg-primary-500/10 px-2 py-0.5 rounded-md uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="text-xs text-neutral-dark/40">
                          ID: {item.id}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-end mt-6">
                      <div className="flex items-center bg-neutral-light/30 border border-neutral-light rounded-xl p-1">
                        <button
                          onClick={() => Updatequantity(item.id, -1)}
                          className="text-neutral-dark/60 hover:text-neutral-dark hover:bg-neutral-bg hover:shadow-sm w-8 h-8 rounded-lg transition-all flex items-center justify-center active:scale-95"
                        >
                          <FiMinus size={14} />
                        </button>

                        <span className="text-sm font-bold w-10 text-center text-neutral-dark">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => Updatequantity(item.id, 1)}
                          className="text-neutral-dark/60 hover:text-neutral-dark hover:bg-neutral-bg hover:shadow-sm w-8 h-8 rounded-lg transition-all flex items-center justify-center active:scale-95"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="font-extrabold text-xl tracking-tight text-neutral-dark">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        {item.quantity > 1 && (
                          <span className="text-xs text-neutral-dark/40 font-medium mt-0.5">
                            ${item.price.toFixed(2)} each
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-neutral-bg rounded-3xl border border-neutral-light p-6 sm:p-8 shadow-sm sticky top-8">
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
