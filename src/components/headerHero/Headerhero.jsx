import { FiArrowRight, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router";

export default function Headerhero() {
  return (
    <section className="relative min-h-[75vh] bg-[#fafafa] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 selection:bg-black selection:text-white">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 text-center lg:text-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 block">
            New Summer Drop 2026
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-tight">
            Less object, <br />
            more intention.
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
            A curated collection of everyday essentials designed to bring
            absolute simplicity, premium textures, and functional aesthetics
            into your life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#proudcts"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-black transition-all active:scale-98 cursor-pointer shadow-sm"
            >
              <FiShoppingBag />
              Shop Collection
            </a>

            <Link
              to="/Blog"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-900 border border-gray-200 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-gray-50 hover:border-gray-300 transition-colors active:scale-98"
            >
              Lookbook
              <FiArrowRight className="text-gray-400" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-105 aspect-4/5 overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white p-2">
            <img
              src="/assets/pics/photo-1523275335684-37898b6baf30.webp"
              alt="Product"
              loading="eager"
              width="400"
              height="500"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
