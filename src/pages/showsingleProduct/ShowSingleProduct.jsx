import { data, Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import SingleProductCard from "../../components/singleproductCard/SingleProductCard";
import { FaEye } from "react-icons/fa";
import { useCart } from "../../hooks/cartSettings/CartSettings";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
export default function ShowSingleProduct() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setloding] = useState(true);
  const [relatedProduct, setrelatedProduct] = useState([]);
  const [token, setToken] = useState("");
  const { addToCart } = useCart();
  useEffect(() => {
    const savedToken = Cookies.get("Token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);
  useEffect(() => {
    const getSingleProduct = async () => {
      setloding(true);
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setSingleProduct(data);
      setloding(false);
    };
    getSingleProduct();
  }, [id]);

  const finalPrice = singleProduct.price
    ? (
        singleProduct.price -
        singleProduct.price * (singleProduct.discountPercentage / 100)
      ).toFixed(2)
    : "0.00";
  //Fetch relatedProduct
  useEffect(() => {
    if (!singleProduct.category) return;
    const getRelatedProducts = async () => {
      setloding(true);

      const res = await fetch(
        `https://dummyjson.com/products/category/${singleProduct.category}`,
      );
      const data = await res.json();
      setrelatedProduct(data.products);
      setloding(false);
    };
    getRelatedProducts();
  }, [singleProduct.category, singleProduct.id]);
  function scrollToTop() {
    if (window.scrollY === 0) {
      return;
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function handleAddtoCart(pro) {
    if (!token) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "You need to Login First",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else {
      addToCart(pro);
    }
  }
  return (
    <section className="container mx-auto px-4 py-6 md:p-10 bg-white">
      {loading ? (
        <div className="flex justify-center items-center h-64 z-10">
          <span className="loader border-4 border-gray-200 border-t-black rounded-full w-12 h-12 animate-spin"></span>
        </div>
      ) : (
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
      )}
      <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-[#F2F2F2]">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Related Products
        </h2>
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
                <h3 className="font-semibold text-gray-800 leading-snug mb-2 line-clamp-2 min-h-12]">
                  {pro.title}
                </h3>
                <p className="text-xl font-bold text-black font-primary mb-4">
                  $ {pro.price}
                </p>
                <div className="flex  justify-center items-center gap-1.5">
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
      </div>
    </section>
  );
}
