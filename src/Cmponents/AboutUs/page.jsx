import React from "react";
import { Star } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="about"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-6">
            About LuxeStore
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            LuxeStore is not just an e-commerce brand — it’s a premium shopping
            experience built for people who love quality, trust, and modern design.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center gradient-top-border">
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Founded with a vision to redefine online shopping, LuxeStore delivers
            handpicked premium products with unmatched quality and customer satisfaction.
            We focus on modern trends, trusted brands, and a seamless user experience.
          </p>
          <p className="text-gray-400 leading-relaxed">
            From fashion to lifestyle essentials, our goal is to provide customers
            with products that reflect class, durability, and style — all at one place.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
          alt="team"
          className="rounded-[5px] shadow-2xl"
        />
      </section>

      {/* STATS */}
      <section className="bg-black/80 border-t border-yellow-400/30 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-yellow-400">10K+</h3>
            <p className="text-gray-400 mt-2">Happy Customers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-400">500+</h3>
            <p className="text-gray-400 mt-2">Premium Products</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-400">4.8</h3>
            <p className="text-gray-400 mt-2">Average Rating</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-yellow-400">24/7</h3>
            <p className="text-gray-400 mt-2">Customer Support</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-20 gradient-top-border">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">
          Why Choose LuxeStore?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Quality",
              desc: "Every product is quality-checked to ensure durability and style."
            },
            {
              title: "Fast Delivery",
              desc: "Quick and safe delivery with real-time tracking support."
            },
            {
              title: "Secure Payments",
              desc: "100% secure payment methods with trusted gateways."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black/60 border border-yellow-400/30 rounded-2xl p-8 hover:border-yellow-400 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMER REVIEW */}
      <section className="bg-black/80 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            What Our Customers Say
          </h2>

          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>

          <p className="text-gray-300 italic text-lg leading-relaxed">
            “LuxeStore has completely changed my online shopping experience.
            The quality, packaging, and delivery speed are simply outstanding.
            Highly recommended!”
          </p>

          <p className="mt-4 text-gray-500">— Verified Customer</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center gradient-top-border">
        <h2 className="text-3xl font-bold mb-4">
          Experience Premium Shopping Today
        </h2>
        <p className="text-gray-400 mb-8">
          Join thousands of happy customers who trust LuxeStore.
        </p>
        <button
          className="relative overflow-hidden px-6 flex-1 py-3 rounded-full bg-white text-black font-bold text-xl group shadow-lg">
          <span className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
          <span className="relative z-10 group-hover:text-black  transition-colors duration-300">
            Explore Products
          </span>
        </button>
      </section>

    </div>
  );
};

export default AboutUs;
