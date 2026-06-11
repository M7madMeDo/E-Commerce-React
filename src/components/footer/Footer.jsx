import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="flex flex-col gap-6 max-w-sm">
          <h4 className="text-3xl font-black tracking-tight uppercase">
            AETHER.
          </h4>
          <p className="text-sm text-gray-400 font-medium leading-relaxed">
            A curated collection of everyday essentials designed with absolute
            simplicity, premium textures, and functional aesthetics.
          </p>

          <div className="flex gap-5 mt-2 text-xl text-gray-400">
            <FiTwitter className="cursor-pointer hover:text-white hover:-translate-y-1 transition-all duration-300" />
            <FiFacebook className="cursor-pointer hover:text-white hover:-translate-y-1 transition-all duration-300" />
            <FiInstagram className="cursor-pointer hover:text-white hover:-translate-y-1 transition-all duration-300" />
            <FiLinkedin className="cursor-pointer hover:text-white hover:-translate-y-1 transition-all duration-300" />
          </div>
        </div>

        <div className="flex flex-wrap gap-16 md:gap-24">
          <div className="flex flex-col gap-5">
            <span className="font-bold text-base tracking-wide uppercase text-gray-100">
              Services
            </span>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">
                Bonus program
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Gift cards
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Credit and payment
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Service contracts
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Non-cash account
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Payment
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-bold text-base tracking-wide uppercase text-gray-100">
              Assistance
            </span>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">
                Find an order
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Terms of delivery
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Exchange and return
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Guarantee
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                FAQ
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Terms of use
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-900 text-center text-xs text-gray-500 font-medium tracking-wide">
        &copy; {new Date().getFullYear()} Mohamed. All rights.
      </div>
    </footer>
  );
}
