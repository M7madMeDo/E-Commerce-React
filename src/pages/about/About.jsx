import { Link } from "react-router";
import {
  MdOutlineLocalShipping,
  MdOutlineVerifiedUser,
  MdOutlineSupportAgent,
  MdOutlineShoppingBag,
} from "react-icons/md";
export default function About() {
  return (
    <section className="bg-gray-50 text-slate-800 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Redefining the digital shopping experience by delivering exceptional
            quality and seamless service.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story & Vision
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We started with a simple vision: to make high-quality products
              accessible to everyone, everywhere. We believe that e-commerce is
              not just about buying things, but about the experience, trust, and
              convenience we build with our customers at every single step.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our team works continuously to source and curate the best
              products, ensuring a unique shopping experience that meets and
              exceeds your expectations while maintaining the highest security
              and fastest delivery standards.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Explore Our Products
            </Link>
          </div>
          <div className="bg-gray-200 h-96 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center">
            <img
              src="/assets/pics/network-connection.webp"
              alt="Store Show Case"
            />
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="mt-4 text-gray-500">
              The core values we commit to for providing the best shopping
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg text-blue-600 mb-4">
                <MdOutlineShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Original Products
              </h3>
              <p className="text-sm text-gray-500">
                We guarantee 100% authenticity and premium quality for all
                products in our catalog.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-lg text-green-600 mb-4">
                <MdOutlineLocalShipping className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fast & Safe Shipping
              </h3>
              <p className="text-sm text-gray-500">
                We partner with top-tier courier services to ensure your orders
                arrive quickly and safely.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-lg text-purple-600 mb-4">
                <MdOutlineVerifiedUser className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Secure Payments
              </h3>
              <p className="text-sm text-gray-500">
                Multiple encrypted checkout methods to guarantee your financial
                data stays completely protected.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-lg text-orange-600 mb-4">
                <MdOutlineSupportAgent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-sm text-gray-500">
                Our dedicated customer happiness team is always ready to assist
                you whenever you need help.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-extrabold text-blue-600">+99K</div>
            <div className="text-sm font-medium text-gray-500 mt-2">
              Happy Customers
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-blue-600">+5K</div>
            <div className="text-sm font-medium text-gray-500 mt-2">
              Products Available
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-blue-600">+50</div>
            <div className="text-sm font-medium text-gray-500 mt-2">
              Official Brands
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-blue-600">50%</div>
            <div className="text-sm font-medium text-gray-500 mt-2">
              Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
