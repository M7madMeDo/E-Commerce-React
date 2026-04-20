import Swal from "sweetalert2";
import { useCart } from "../../hooks/cartSettings/CartSettings";
export default function OrderSummary({ cartItems = [] }) {
  const { clearCart } = useCart();
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const tax = cartItems.length ? 0.14 : "";
  const estimatedTax = subtotal * tax;
  const finalPricee = subtotal + estimatedTax;
  function fakeHadnleCheckout() {
    if (cartItems.length == 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Empty Cart",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Payment Done",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    clearCart();
  }
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Promo Code
        </label>
        <input
          type="text"
          placeholder="Enter code"
          className="w-full border border-[#E5E5E5] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black bg-[#F8F8F8]"
        />
      </div>

      <div className="mb-6 pb-6 border-b border-[#E5E5E5]">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bonus Card Number
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Card number"
            className="flex-1 border border-[#E5E5E5] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black bg-[#F8F8F8]"
          />
          <button className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer">
            Apply
          </button>
        </div>
      </div>

      <div className="space-y-4 text-sm text-gray-600 mb-6 border-b border-[#E5E5E5] pb-6">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-black font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Tax </span>
          <span className="text-black font-medium">
            ${estimatedTax.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-black font-medium">Free</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <span className="font-bold text-lg text-black">Total</span>
        <span className="font-bold text-2xl text-black">
          ${finalPricee.toFixed(2)}
        </span>
      </div>

      <button
        onClick={() => fakeHadnleCheckout()}
        className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors cursor-pointer"
      >
        Checkout
      </button>
    </div>
  );
}
