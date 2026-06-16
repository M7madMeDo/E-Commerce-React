import { FiX, FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import { useCart } from "../../hooks/cartSettings/CartSettings";
import Swal from "sweetalert2";
import { useMemo } from "react";
import { Link } from "react-router";

export default function MiniAsideCart({ isOpen, onClose }) {
  const { cartItems, deleteFromTheCart, Updatequantity, clearCart } = useCart();
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-neutral-dark/20 z-40 transition-opacity backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-neutral-bg shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-5 border-b border-neutral-light/50">
          <h2 className="text-xl font-bold text-neutral-dark">Your Cart</h2>
          <button
            onClick={onClose}
            className="p-2 text-neutral-dark/40 hover:text-neutral-dark hover:bg-neutral-light rounded-full transition-colors cursor-pointer"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 scrollbar-hide">
          {cartItems?.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-neutral-dark/40">
              <p className="text-sm font-medium">
                Your cart is currently empty.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems?.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-20 h-20 bg-neutral-light/30 rounded-xl border border-neutral-light flex items-center justify-center p-2 shrink-0 group-hover:border-neutral-light/80 transition-colors">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain mix-blend-multiply"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-dark line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-sm font-bold text-primary-700 mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-neutral-light rounded-lg bg-neutral-bg">
                        <button
                          onClick={() => Updatequantity(item.id, -1)}
                          className="px-2.5 py-1 text-neutral-dark/60 hover:text-neutral-dark hover:bg-neutral-light rounded-l-lg transition-colors cursor-pointer"
                        >
                          <FiMinus className="text-xs" />
                        </button>

                        <span className="px-3 py-1 text-xs font-bold text-neutral-dark border-x border-neutral-light">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => Updatequantity(item.id, 1)}
                          className="px-2.5 py-1 text-neutral-dark/60 hover:text-neutral-dark hover:bg-neutral-light rounded-r-lg transition-colors cursor-pointer"
                        >
                          <FiPlus className="text-xs" />
                        </button>
                      </div>

                      <button
                        onClick={() => deleteFromTheCart(item.id)}
                        className="p-1.5 text-neutral-dark/40 hover:text-error hover:bg-error/10 rounded-lg transition-colors cursor-pointer"
                      >
                        <FiTrash2 className="text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems?.length > 0 && (
          <div className="p-5 border-t border-neutral-light/50 bg-neutral-light/20">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-neutral-dark/60">
                Subtotal
              </span>
              <span className="font-black text-lg text-neutral-dark">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-[11px] text-neutral-dark/50 mb-5 uppercase tracking-wide">
              Shipping and taxes calculated at checkout.
            </p>
            <Link
              to="/shopCart"
              onClick={onClose}
              className="block text-center w-full py-3.5 bg-primary-500 text-white text-sm font-bold rounded-xl hover:bg-primary-600 transition-all active:scale-[0.98] shadow-lg shadow-primary-500/10 cursor-pointer"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
