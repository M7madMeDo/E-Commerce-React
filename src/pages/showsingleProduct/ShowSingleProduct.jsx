import { Link, useParams } from "react-router";
import SingleProductCard from "../../components/singleproductCard/SingleProductCard";
import { FaEye } from "react-icons/fa";
import { useCart } from "../../hooks/cartSettings/CartSettings";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";

const singleProducts = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to get product");
  return res.json();
};

const relatedProducts = async (category) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  );
  if (!res.ok) throw new Error("Failed to get related products");
  return res.json();
};

export default function ShowSingleProduct() {
  const { id } = useParams();
  const { addToCart, wishlist, toggleWishlist } = useCart();

  const { data: singleProduct, isLoading: isLoadingProduct } = useQuery({
    queryKey: ["product", id],
    queryFn: () => singleProducts(id),
  });

  const { data: relatedData, isLoading: isLoadingRelated } = useQuery({
    queryKey: ["relatedProducts", singleProduct?.category],
    queryFn: () => relatedProducts(singleProduct.category),
    enabled: !!singleProduct?.category,
  });

  const relatedProduct = relatedData?.products || [];

  const finalPrice = singleProduct?.price
    ? (
        singleProduct.price -
        singleProduct.price * (singleProduct.discountPercentage / 100)
      ).toFixed(2)
    : "0.00";

  function scrollToTop() {
    if (window.scrollY === 0) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleAddtoCart(pro) {
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
    addToCart(pro);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white min-h-screen">
      {isLoadingProduct ? (
        <div className="flex justify-center items-center h-[60vh] z-10">
          <span className="border-4 border-gray-200 border-t-black rounded-full w-12 h-12 animate-spin"></span>
        </div>
      ) : (
        singleProduct && (
          <SingleProductCard
            id={singleProduct.id}
            title={singleProduct.title}
            price={singleProduct.price}
            finalprice={finalPrice}
            img={singleProduct.thumbnail}
            stock={singleProduct.stock}
            warrantyInformation={singleProduct.warrantyInformation}
            availabilityStatus={singleProduct.availabilityStatus}
            shippingInformation={singleProduct.shippingInformation}
            description={singleProduct.description}
            addToCart={handleAddtoCart}
            toggleWishlist={toggleWishlist}
            isWishlisted={wishlist.some((item) => item.id === singleProduct.id)}
          />
        )
      )}

      <div className="mt-20 pt-12 border-t border-gray-100">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Related Products
          </h2>
        </div>

        {isLoadingRelated ? (
          <div className="flex justify-center items-center h-48">
            <span className="border-4 border-gray-200 border-t-black rounded-full w-10 h-10 animate-spin"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
            {relatedProduct.map((pro) => (
              <div
                key={pro.id}
                className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 pb-5"
              >
                <div className="relative aspect-square w-full bg-gray-50/60 rounded-2xl flex justify-center items-center p-6 overflow-hidden group-hover:bg-gray-100/40 transition-colors duration-300">
                  <img
                    loading="lazy"
                    src={pro.thumbnail}
                    alt={pro.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out mix-blend-multiply"
                  />

                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      onClick={() => scrollToTop()}
                      to={`/singleProduct/${pro.id}`}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-gray-700 hover:text-white hover:bg-black shadow-lg scale-90 group-hover:scale-100 transition-all duration-300"
                    >
                      <FaEye size={18} />
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col flex-1 px-5 pt-4 text-left">
                  <h3 className="text-base font-semibold text-gray-800 line-clamp-2 leading-snug mb-4 min-h-11 hover:text-blue-600 transition-colors">
                    <Link
                      onClick={() => scrollToTop()}
                      to={`/singleProduct/${pro.id}`}
                    >
                      {pro.title}
                    </Link>
                  </h3>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-xl font-extrabold text-gray-900 tracking-tight">
                      ${pro.price}
                    </span>
                    <button
                      onClick={() => handleAddtoCart(pro)}
                      className="bg-gray-950 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-semibold shadow-sm active:scale-95 transition-all cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
