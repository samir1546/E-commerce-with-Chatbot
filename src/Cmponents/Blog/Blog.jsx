import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-[75vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="blog"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center max-w-5xl px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 mb-8">
            LuxeStore Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
            Insights, trends, and stories from the world of premium shopping,
            fashion, technology, and lifestyle.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Stay updated with expert tips, industry news, and inspiration
            curated specially for modern luxury lovers.
          </p>
        </div>
      </section>

      {/* FEATURED BLOG */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="featured"
          className="rounded-[5px] shadow-2xl"
        />

        <div>
          <span className="text-yellow-400 font-semibold tracking-widest">
            FEATURED POST
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            How Premium Products Are Changing Online Shopping
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Premium products are redefining customer expectations.
            From superior quality to exceptional service, learn how
            luxury brands are transforming the e-commerce experience.
          </p>

          <div className="flex items-center gap-6 text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <User size={18} /> Admin
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} /> Jan 2026
            </div>
          </div>

          <button className="flex items-center gap-2 text-yellow-400 font-semibold hover:gap-4 transition-all">
            Read Full Article <ArrowRight />
          </button>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
              title: "Top 10 Luxury Trends in 2026",
              desc: "Discover the latest trends shaping the luxury market this year."
            },
            {
              img: "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              title: "Why Quality Matters More Than Price",
              desc: "Learn why premium quality delivers long-term value."
            },
            {
              img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
              title: "Building Trust in Online Shopping",
              desc: "How brands can earn customer trust in the digital age."
            }
          ].map((blog, index) => (
            <div
              key={index}
              className="bg-black/60 border border-yellow-400/30 rounded-[10px] overflow-hidden hover:border-yellow-400 transition"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                  {blog.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {blog.desc}
                </p>

                <button className="flex items-center gap-2 text-yellow-400 hover:gap-4 transition-all">
                  Read More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG CATEGORIES */}
      <section className="bg-black/80 py-20 border-t border-yellow-400/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12">
            Explore by Category
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Fashion",
              "Lifestyle",
              "Technology",
              "E-Commerce",
              "Luxury Brands",
              "Shopping Tips"
            ].map((cat, index) => (
              <button
                className="relative overflow-hidden  flex-1 py-3 rounded-full border border-2 border-yellow-400/40 font-bold text-[18px] group shadow-lg">
                <span className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
                <span key={index} className="relative z-10 group-hover:text-black  transition-colors duration-300">
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-gradient-to-r from-black via-yellow-400/10 to-black">
        <h2 className="text-4xl font-bold mb-6">
          Stay Inspired with LuxeStore
        </h2>
        <p className="text-gray-400 mb-10 max-w-3xl mx-auto">
          Subscribe to our blog and never miss updates on premium trends,
          exclusive insights, and expert shopping advice.
        </p>

        <button
          className="relative overflow-hidden px-6 flex-1 py-3 rounded-full border border-2 border-yellow-400/40 font-bold text-[18px] group shadow-lg">
          <span className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
          <span className="relative z-10 group-hover:text-black  transition-colors duration-300">
            Subscribe Now
          </span>
        </button>
      </section>

    </div>
  );
};

export default Blog;
