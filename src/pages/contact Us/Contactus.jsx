import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from "react-icons/fi";

export default function Contactus() {
  return (
    <section className="bg-neutral-bg min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-dark tracking-tight mb-4">
            Contact Our Support Team
          </h1>
          <p className="text-neutral-dark/60 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Have a question about an order, shipping, or returns? We're here to
            help you 24/7.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-neutral-light/20 border border-neutral-light/50 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-neutral-dark tracking-tight mb-3">
                  Store Information
                </h2>
                <p className="text-neutral-dark/60 text-sm sm:text-base leading-relaxed">
                  Reach out to us directly or fill out the form, and we will get
                  back to your email within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-neutral-bg border border-neutral-light text-neutral-dark/80 rounded-xl flex items-center justify-center text-lg shadow-sm">
                    <FiMail />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-neutral-dark/40 mb-0.5">
                      Customer Support
                    </h3>
                    <a
                      href="mailto:support@store.com"
                      className="text-sm sm:text-base font-bold text-neutral-dark hover:text-primary-500 transition-colors"
                    >
                      MeDo@store.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-neutral-bg border border-neutral-light text-neutral-dark/80 rounded-xl flex items-center justify-center text-lg shadow-sm">
                    <FiPhone />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-neutral-dark/40 mb-0.5">
                      Phone
                    </h3>
                    <a
                      href="tel:+201000000000"
                      className="text-sm sm:text-base font-bold text-neutral-dark hover:text-primary-500 transition-colors"
                    >
                      +20 100 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-neutral-bg border border-neutral-light text-neutral-dark/80 rounded-xl flex items-center justify-center text-lg shadow-sm">
                    <FiMapPin />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-neutral-dark/40 mb-0.5">
                      Headquarters
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-neutral-dark">
                      Giza, Egypt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-neutral-bg border border-neutral-light rounded-2xl flex items-center gap-4 shadow-sm">
              <FiClock className="text-2xl text-neutral-dark/40 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-neutral-dark">
                  Operating Hours
                </h4>
                <p className="text-xs text-neutral-dark/50 font-medium mt-0.5">
                  Mon - Sun: 9:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-neutral-bg border border-neutral-light/80 p-6 sm:p-8 rounded-2xl shadow-sm">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-extrabold uppercase tracking-wider text-neutral-dark/40"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-neutral-light/30 border border-neutral-light rounded-xl text-sm font-medium text-neutral-dark placeholder-neutral-dark/40 focus:outline-none focus:border-primary-500 focus:bg-neutral-bg transition-all duration-200"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-extrabold uppercase tracking-wider text-neutral-dark/40"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 bg-neutral-light/30 border border-neutral-light rounded-xl text-sm font-medium text-neutral-dark placeholder-neutral-dark/40 focus:outline-none focus:border-primary-500 focus:bg-neutral-bg transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-extrabold uppercase tracking-wider text-neutral-dark/40"
                >
                  Inquiry Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  placeholder="General Question"
                  className="w-full px-4 py-3 bg-neutral-light/30 border border-neutral-light rounded-xl text-sm font-medium text-neutral-dark placeholder-neutral-dark/40 focus:outline-none focus:border-primary-500 focus:bg-neutral-bg transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-extrabold uppercase tracking-wider text-neutral-dark/40"
                >
                  Message / Order Details
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  placeholder="Please describe your issue"
                  className="w-full px-4 py-3 bg-neutral-light/30 border border-neutral-light rounded-xl text-sm font-medium text-neutral-dark placeholder-neutral-dark/40 focus:outline-none focus:border-primary-500 focus:bg-neutral-bg transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-primary-500 text-white rounded-xl text-sm font-bold hover:bg-primary-600 hover:shadow-md hover:shadow-primary-500/10 transition-all active:scale-95 cursor-pointer"
              >
                <FiSend className="text-xs" />
                Submit Ticket
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
