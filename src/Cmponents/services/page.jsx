import React from "react";
import { Star, Truck, ShieldCheck, Headphones, CreditCard, Package } from "lucide-react";

const Services = () => {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center">
  <img
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    alt="services"
    className="absolute inset-0 w-full h-full object-cover opacity-30"
  />

  <div className="relative z-10 text-center max-w-5xl px-6">
    <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 mb-8 tracking-wide">
      Our Premium Services
    </h1>

    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
      We don’t just sell products — we craft experiences. At LuxeStore,
      every service is designed with precision, trust, and elegance
      to deliver a truly luxury shopping journey.
    </p>

    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
      From carefully curated premium collections to fast, secure delivery
      and 24/7 customer support, we go beyond expectations to ensure
      quality, reliability, and complete customer satisfaction at every step.
    </p>
  </div>
</section>


      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center gradient-top-border">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          What We Offer
        </h2>
        <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
          LuxeStore provides end-to-end premium services designed to make your
          shopping experience seamless, secure, and satisfying. From product
          selection to doorstep delivery, every step is optimized for excellence.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Package size={34} />,
              title: "Premium Products",
              desc: "Carefully curated high-quality products that meet luxury standards."
            },
            {
              icon: <Truck size={34} />,
              title: "Fast & Safe Delivery",
              desc: "Reliable shipping with secure packaging and real-time tracking."
            },
            {
              icon: <ShieldCheck size={34} />,
              title: "100% Secure Payments",
              desc: "Protected payment gateways ensuring complete transaction safety."
            },
            {
              icon: <Headphones size={34} />,
              title: "24/7 Customer Support",
              desc: "Our support team is always available to assist you anytime."
            },
            {
              icon: <CreditCard size={34} />,
              title: "Easy Returns",
              desc: "Hassle-free returns and refunds with customer-first policies."
            },
            {
              icon: <Star size={34} />,
              title: "Trusted by Thousands",
              desc: "High customer satisfaction backed by positive reviews and ratings."
            }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-black/60 border border-yellow-400/30 rounded-2xl p-8 hover:border-yellow-400 transition"
            >
              <div className="text-yellow-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-black/80 py-20 border-t border-yellow-400/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">
            Our Service Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { step: "01", title: "Choose Product", desc: "Browse premium products curated for you." },
              { step: "02", title: "Secure Payment", desc: "Pay safely using trusted gateways." },
              { step: "03", title: "Fast Shipping", desc: "We pack and ship with utmost care." },
              { step: "04", title: "Enjoy Quality", desc: "Receive premium quality at your doorstep." }
            ].map((step, index) => (
              <div key={index}>
                <h3 className="text-4xl font-bold text-yellow-400 mb-3">
                  {step.step}
                </h3>
                <h4 className="text-lg font-semibold mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER TRUST */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Trusted & Loved by Customers
        </h2>

        <div className="flex justify-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        <p className="text-gray-300 italic leading-relaxed text-lg">
          “Exceptional service, premium quality, and fast delivery.
          LuxeStore truly sets the standard for modern e-commerce.”
        </p>

        <p className="mt-4 text-gray-500">— Happy Customer</p>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-black via-yellow-400/10 to-black gradient-top-border">
        <h2 className="text-3xl font-bold mb-4">
          Experience Our Premium Services
        </h2>
        <p className="text-gray-400 mb-8">
          Start shopping smarter with LuxeStore today.
        </p>
        <button className="px-12 py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition">
          Start Shopping
        </button>
      </section>

    </div>
  );
};

export default Services;
