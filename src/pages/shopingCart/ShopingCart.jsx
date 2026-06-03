import OrderSummary from "../../components/orderSummary/OrderSummary";
import { useCart } from "../../hooks/cartSettings/CartSettings";
import { FiPlus, FiMinus, FiTrash2, FiShoppingCart } from "react-icons/fi";

export default function ShopingCart() {
  const { cartItems, deleteFromTheCart, Updatequantity } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F8F8F8] flex flex-col items-center justify-center px-4">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-[#E5E5E5] flex flex-col items-center text-center max-w-md w-full transition-all hover:shadow-md">
          <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
            <FiShoppingCart className="w-10 h-10 text-gray-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <a
            href="/"
            className="bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200 w-full "
          >
            Start Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#F8F8F8] py-8 px-4 sm:px-6 lg:px-8 font-sans text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white rounded-xl border border-[#E5E5E5] p-6 shadow-sm">
            <h1 className="text-2xl font-bold border-b border-[#E5E5E5] pb-4 mb-2">
              Shopping Cart ({cartItems.length})
            </h1>

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
                          className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                        >
                          <FiTrash2 size={18} />
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
                      <div className="flex items-center border border-[#E5E5E5] rounded-lg p-1 w-fit bg-white">
                        <button
                          onClick={() => Updatequantity(item.id, -1)}
                          className="text-gray-500 hover:text-black hover:bg-gray-100 p-1.5 rounded-md  transition-colors flex items-center justify-center"
                        >
                          <FiMinus size={16} />
                        </button>

                        <span className="text-sm font-medium w-10 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => Updatequantity(item.id, 1)}
                          className="text-gray-500 hover:text-black hover:bg-gray-100 p-1.5 rounded-md  transition-colors flex items-center justify-center"
                        >
                          <FiPlus size={16} />
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
          </div>

          <div className="lg:col-span-4 bg-white rounded-xl border border-[#E5E5E5] p-6 shadow-sm">
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
