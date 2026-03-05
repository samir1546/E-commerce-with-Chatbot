import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
          alt="contact"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl font-extrabold text-yellow-400 mb-6">
            Contact LuxeStore
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed">
            We’re here to help. Reach out to us for queries, support,
            or premium service assistance anytime.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center gradient-top-border ">

        {/* LEFT : FORM */}
        <div className="bg-black/60 border border-yellow-400/30 rounded-[5px] p-10 shadow-2xl">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-400 mb-8">
            Fill out the form below and our team will get back to you
            within 24 hours.
          </p>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-12 px-5 bg-black/50 border border-yellow-400/30 rounded-[5px] text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-12 px-5 bg-black/50 border border-yellow-400/30 rounded-[5px] text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full h-12 px-5 bg-black/50 border border-yellow-400/30 rounded-[5px] text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-5 py-4 bg-black/50 border border-yellow-400/30 rounded-[5px] text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
            ></textarea>

            <button
              type="submit"
              className="relative w-full overflow-hidden px-6 py-3 rounded-full  border-2 border-yellow-400/40 font-bold text-[18px]  group shadow-lg flex items-center justify-center gap-3" >
              <span className="absolute inset-0 bg-yellow-500 translate-y-full  group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
              <span className="relative z-10 flex items-center gap-3  text-white group-hover:text-black transition-colors duration-300">
                <Send size={18} />
                Send Message
              </span>
            </button>

          </form>
        </div>

        {/* RIGHT : INFO + IMAGE */}
        <div className="space-y-10">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt="office"
            className="rounded-[5px] shadow-2xl"
          />

          <div className="bg-black/60 border border-yellow-400/30 rounded-[5px] p-8 space-y-6 ">
            <h3 className="text-2xl font-bold text-yellow-400">
              Contact Information
            </h3>

            <div className="flex items-center gap-4 text-gray-300">
              <Mail className="text-yellow-400" />
              support@luxestore.com
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <Phone className="text-yellow-400" />
              +91 98765 43210
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <MapPin className="text-yellow-400" />
              Gurugram, Haryana, India
            </div>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-black via-yellow-400/10 to-black gradient-top-border ">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build a Premium Experience Together
        </h2>
        <p className="text-gray-400 mb-10 max-w-3xl mx-auto">
          Whether you have a question or need support, LuxeStore is
          always ready to assist you with excellence.
        </p>
        <button className="px-14 py-4 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition">
          Contact Now
        </button>
      </section>

    </div>
  );
};

export default ContactUs;
