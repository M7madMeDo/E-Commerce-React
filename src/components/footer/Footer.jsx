import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6 max-w-[384px]">
          <h4 className="text-3xl font-bold lowercase tracking-tight">cyber</h4>
          <p className="text-[14px] text-[#CFCFCF] font-medium leading-[1.71]">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>

          <div className="flex gap-6 mt-4 text-2xl">
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaTiktok className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        <div className="flex gap-20 md:gap-32">
          <div className="flex flex-col gap-4">
            <span className="font-semibold text-lg">Services</span>
            <ul className="flex flex-col gap-2 text-[#CFCFCF] text-[14px] font-medium">
              <li className="hover:text-white cursor-pointer">Bonus program</li>
              <li className="hover:text-white cursor-pointer">Gift cards</li>
              <li className="hover:text-white cursor-pointer">
                Credit and payment
              </li>
              <li className="hover:text-white cursor-pointer">
                Service contracts
              </li>
              <li className="hover:text-white cursor-pointer">
                Non-cash account
              </li>
              <li className="hover:text-white cursor-pointer">Payment</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-semibold text-lg">
              Assistance to the buyer
            </span>
            <ul className="flex flex-col gap-2 text-[#CFCFCF] text-[14px] font-medium">
              <li className="hover:text-white cursor-pointer">Find an order</li>
              <li className="hover:text-white cursor-pointer">
                Terms of delivery
              </li>
              <li className="hover:text-white cursor-pointer">
                Exchange and return of goods
              </li>
              <li className="hover:text-white cursor-pointer">Guarantee</li>
              <li className="hover:text-white cursor-pointer">
                Frequently asked questions
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms of use of the site
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
