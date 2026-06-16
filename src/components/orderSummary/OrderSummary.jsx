import Swal from "sweetalert2";
import { useCart } from "../../hooks/cartSettings/CartSettings";
import { FiTag, FiCreditCard, FiLock } from "react-icons/fi";
import { useMemo } from "react";
import { useNavigate } from "react-router";

export default function OrderSummary({ cartItems = [] }) {
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  const tax = cartItems.length ? 0.14 : 0;
  const estimatedTax = subtotal * tax;
  const finalPricee = subtotal + estimatedTax;

  function handleCheckout() {
    if (cartItems.length === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Empty Cart",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Payment Done",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        clearCart();
        navigate("/");
      });
    }
  }

  const isEmpty = cartItems.length === 0;

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-extrabold text-neutral-dark mb-6 tracking-tight">
        Order Summary
      </h2>

      <div className="mb-5">
        <label className="block text-xs font-bold text-neutral-dark/50 uppercase tracking-wider mb-2.5">
          Promo Code
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <FiTag className="text-neutral-dark/40" />
          </div>
          <input
            type="text"
            placeholder="Enter code"
            className="w-full border border-neutral-light rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 bg-neutral-light/30 focus:bg-neutral-bg transition-all text-neutral-dark font-medium placeholder-neutral-dark/40"
            disabled={isEmpty}
          />
        </div>
      </div>

      <div className="mb-6 pb-6 border-b border-neutral-light/50">
        <label className="block text-xs font-bold text-neutral-dark/50 uppercase tracking-wider mb-2.5">
          Bonus Card
        </label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <FiCreditCard className="text-neutral-dark/40" />
            </div>
            <input
              type="text"
              placeholder="Card number"
              className="w-full border border-neutral-light rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 bg-neutral-light/30 focus:bg-neutral-bg transition-all text-neutral-dark font-medium placeholder-neutral-dark/40"
              disabled={isEmpty}
            />
          </div>
          <button
            disabled={isEmpty}
            className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all shadow-sm shrink-0 ${
              isEmpty
                ? "bg-neutral-light text-neutral-dark/40 cursor-not-allowed"
                : "bg-primary-500 text-white hover:bg-primary-600 active:scale-95 cursor-pointer"
            }`}
          >
            Apply
          </button>
        </div>
      </div>

      <div className="space-y-4 text-sm mb-6 border-b border-neutral-light/50 pb-6">
        <div className="flex justify-between items-center text-neutral-dark/60">
          <span>Subtotal</span>
          <span className="text-neutral-dark font-semibold">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center text-neutral-dark/60">
          <span>Estimated Tax (14%)</span>
          <span className="text-neutral-dark font-semibold">
            ${estimatedTax.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center text-neutral-dark/60">
          <span>Shipping</span>
          <span className="text-success font-bold uppercase tracking-wider text-xs bg-success/10 px-2 py-1 rounded-md">
            Free
          </span>
        </div>
      </div>

      <div className="flex justify-between items-end mb-8 mt-auto">
        <span className="font-bold text-neutral-dark text-lg">Total</span>
        <span className="font-extrabold text-3xl text-neutral-dark tracking-tight">
          ${finalPricee.toFixed(2)}
        </span>
      </div>

      <button
        onClick={() => handleCheckout()}
        disabled={isEmpty}
        className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
          isEmpty
            ? "bg-neutral-light text-neutral-dark/40 cursor-not-allowed"
            : "bg-primary-500 text-white hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/10 active:scale-[0.98] cursor-pointer"
        }`}
      >
        <FiLock size={16} />
        Secure Checkout
      </button>
    </div>
  );
}
