import OrderSummary from "../../components/orderSummary/OrderSummary";
import { useCart } from "../../hooks/cartSettings/CartSettings";
export default function ShopingCart() {
  const { cartItems, deleteFromTheCart, Updatequantity } = useCart();
  return (
    <section className="min-h-screen bg-[#F8F8F8] py-8 px-4 sm:px-6 lg:px-8 font-sans text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white rounded-xl border border-[#E5E5E5] p-6 shadow-sm">
            <h1 className="text-2xl font-bold border-b border-[#E5E5E5] pb-4 mb-2">
              Shopping Cart ({cartItems.length})
            </h1>

            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
              </div>
            ) : (
              <div className="flex flex-col">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row gap-4 py-6 border-b border-[#E5E5E5] last:border-0"
                  >
                    <div className="w-24 h-24 bg-[#F8F8F8] rounded-xl shrink-0 border border-[#E5E5E5] overflow-hidden p-2">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-lg line-clamp-1">
                            {item.title}
                          </h3>

                          <button
                            onClick={() => deleteFromTheCart(item.id)}
                            className="text-gray-400 hover:text-red-500 p-1 cursor-pointer transition-colors"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-1 capitalize">
                          {item.category}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          ID: {item.id}
                        </p>
                      </div>

                      <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center border border-[#E5E5E5] rounded-lg px-2 py-1 w-fit bg-white">
                          <button
                            onClick={() => Updatequantity(item.id, -1)}
                            className="text-gray-500 hover:text-black px-2 py-1 cursor-pointer"
                          >
                            -
                          </button>

                          <span className="text-sm font-medium px-4">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => Updatequantity(item.id, 1)}
                            className="text-gray-500 hover:text-black px-2 py-1 cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-bold text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-4 bg-white rounded-xl border border-[#E5E5E5] p-6 shadow-sm">
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
