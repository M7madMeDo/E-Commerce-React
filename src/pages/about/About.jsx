import { Link } from "react-router";
import {
  MdOutlineLocalShipping,
  MdOutlineVerifiedUser,
  MdOutlineSupportAgent,
  MdOutlineShoppingBag,
} from "react-icons/md";

export default function About() {
  return (
    <section className="bg-neutral-light/30 text-neutral-dark min-h-screen">
      <div className="bg-neutral-bg border-b border-neutral-light/50">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-dark sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-dark/60">
            Redefining the digital shopping experience by delivering exceptional
            quality and seamless service.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-neutral-dark mb-6">
              Our Story & Vision
            </h2>
            <p className="text-neutral-dark/70 leading-relaxed mb-4">
              We started with a simple vision: to make high-quality products
              accessible to everyone, everywhere. We believe that e-commerce is
              not just about buying things, but about the experience, trust, and
              convenience we build with our customers at every single step.
            </p>
            <p className="text-neutral-dark/70 leading-relaxed mb-6">
              Our team works continuously to source and curate the best
              products, ensuring a unique shopping experience that meets and
              exceeds your expectations while maintaining the highest security
              and fastest delivery standards.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl text-white bg-primary-500 hover:bg-primary-600 transition-colors shadow-sm active:scale-98"
            >
              Explore Our Products
            </Link>
          </div>
          <div className="bg-neutral-light/50 h-96 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center p-2 border border-neutral-light">
            <img
              src="/assets/pics/network-connection.webp"
              alt="Store Show Case"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="bg-neutral-bg border-t border-b border-neutral-light/50">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-dark">
              Why Choose Us?
            </h2>
            <p className="mt-4 text-neutral-dark/60">
              The core values we commit to for providing the best shopping
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-neutral-light/30 border border-neutral-light/10 rounded-xl text-center hover:shadow-md transition-all duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-primary-500/10 rounded-lg text-primary-500 mb-4">
                <MdOutlineShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                Original Products
              </h3>
              <p className="text-sm text-neutral-dark/50">
                We guarantee 100% authenticity and premium quality for all
                products in our catalog.
              </p>
            </div>

            <div className="p-6 bg-neutral-light/30 border border-neutral-light/10 rounded-xl text-center hover:shadow-md transition-all duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-success/10 rounded-lg text-success mb-4">
                <MdOutlineLocalShipping className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                Fast & Safe Shipping
              </h3>
              <p className="text-sm text-neutral-dark/50">
                We partner with top-tier courier services to ensure your orders
                arrive quickly and safely.
              </p>
            </div>

            <div className="p-6 bg-neutral-light/30 border border-neutral-light/10 rounded-xl text-center hover:shadow-md transition-all duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-secondary-500/10 rounded-lg text-secondary-500 mb-4">
                <MdOutlineVerifiedUser className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                Secure Payments
              </h3>
              <p className="text-sm text-neutral-dark/50">
                Multiple encrypted checkout methods to guarantee your financial
                data stays completely protected.
              </p>
            </div>

            <div className="p-6 bg-neutral-light/30 border border-neutral-light/10 rounded-xl text-center hover:shadow-md transition-all duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-lg text-warning mb-4">
                <MdOutlineSupportAgent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                24/7 Support
              </h3>
              <p className="text-sm text-neutral-dark/50">
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
            <div className="text-4xl font-extrabold text-primary-500">+99K</div>
            <div className="text-sm font-medium text-neutral-dark/50 mt-2">
              Happy Customers
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary-500">+5K</div>
            <div className="text-sm font-medium text-neutral-dark/50 mt-2">
              Products Available
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary-500">+50</div>
            <div className="text-sm font-medium text-neutral-dark/50 mt-2">
              Official Brands
            </div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary-500">99%</div>
            <div className="text-sm font-medium text-neutral-dark/50 mt-2">
              Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
