import { Link, useParams } from "react-router";
import SingleProductCard from "../../components/singleproductCard/SingleProductCard";
import { FaEye } from "react-icons/fa";
import { useCart } from "../../hooks/cartSettings/CartSettings";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";

const singleProducts = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

const relatedProducts = async (category) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  );
  if (!res.ok) throw new Error("Failed to fetch related products");
  return res.json();
};

export default function ShowSingleProduct() {
  const { id } = useParams();
  const { addToCart } = useCart();

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
    <section className="container mx-auto px-4 py-6 md:p-10 bg-white">
      {isLoadingProduct ? (
        <div className="flex justify-center items-center h-64 z-10">
          <span className="loader border-4 border-gray-200 border-t-black rounded-full w-12 h-12 animate-spin"></span>
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
          />
        )
      )}

      <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-[#F2F2F2]">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Related Products
        </h2>

        {isLoadingRelated ? (
          <div className="flex justify-center items-center h-32">
            <span className="loader border-4 border-gray-200 border-t-black rounded-full w-8 h-8 animate-spin"></span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-10 gap-3 ">
            {relatedProduct.map((pro) => (
              <div
                key={pro.id}
                className="bg-white border border-gray-100 rounded-2xl p-4 flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-full h-56 flex justify-center items-center bg-[#F8F9FA] rounded-xl p-4 mb-4 overflow-hidden">
                  <img
                    src={pro.thumbnail}
                    alt={pro.title}
                    className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>

                <div className="flex flex-col flex-1 text-center">
                  <h3 className="font-semibold text-gray-800 leading-snug mb-2 line-clamp-2 min-h-12">
                    {pro.title}
                  </h3>
                  <p className="text-xl font-bold text-black font-primary mb-4">
                    $ {pro.price}
                  </p>
                  <div className="flex justify-center items-center gap-1.5">
                    <button
                      onClick={() => handleAddtoCart(pro)}
                      className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 rounded-xl mt-auto transition-colors duration-200 cursor-pointer active:scale-95"
                    >
                      Add To Cart
                    </button>
                    <Link
                      onClick={() => scrollToTop()}
                      to={`/singleProduct/${pro.id}`}
                      className="p-2 bg-gray-950 text-amber-50 text-2xl rounded-4xl hover:bg-gray-700"
                    >
                      <FaEye />
                    </Link>
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
