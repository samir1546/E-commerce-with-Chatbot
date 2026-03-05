import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Heart, Share2, Star, Truck, ShieldCheck, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { addToCart } from "../../Redux/slice/productSlice.js";

const SingleProduct = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!products || products.length === 0) {
    return <div className="text-white p-20 text-center">Loading...</div>;
  }

  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return <div className="text-white p-20 text-center">Product Not Found</div>;
  }

  const images = product.images || [];
  const [activeImg, setActiveImg] = useState(images[0]);
  const [activeSize, setActiveSize] = useState("M");

  const discountedPrice = (product.price / 2).toFixed(2);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-[75vw] mx-auto">

        {/* LEFT IMAGE SECTION */}
        <div className="flex gap-6">

          {/* LEFT THUMBNAILS */}
          <div className="flex flex-col gap-4 ">
            {images.slice(0, 4).map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImg(img)}
                className={`w-24 h-24 object-cover rounded-[5px] p-2 cursor-pointer border 
                  ${activeImg === img
                    ? "border-yellow-400/70 border-dashed scale-105"
                    : "border-white/20 hover:border-yellow-400 border-dashed"}
                `}
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="relative flex-1">
            <div className="absolute -top-10 -left-10 w-56 h-56 bg-yellow-400/20 blur-3xl rounded-full"></div>

            <div className="relative rounded-[7px] overflow-hidden border-2 border-dashed border-yellow-400/30 shadow-2xl">
              <img
                src={activeImg}
                alt={product.name}
                className="w-full h-[700px] object-cover p-2 "
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h1 className="text-5xl font-extrabold mb-6">
            {product.name}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-2 mb-6">
            <Star className="fill-yellow-400 text-yellow-400" />
            <span className="text-lg">{product.rating || 4.8}</span>
            <span className="text-white/50">(1,248 reviews)</span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-5 mb-8">
            <span className="text-4xl font-bold text-yellow-400">
              ${discountedPrice}
            </span>
            <span className="line-through text-white/40 text-xl">
              ${product.price}
            </span>
            <span className="px-4 py-1 bg-red-500 rounded-full text-sm font-semibold">
              50% OFF
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-white/70 leading-relaxed text-lg mb-8">
            Experience premium craftsmanship with this modern fashion product.
            Designed for everyday comfort, long durability, and a luxury finish.
            Perfect for casual outings, parties, and special occasions.
          </p>

          {/* EXTRA INFO */}
          <ul className="space-y-4 mb-10 text-white/80">
            <li className="flex items-center gap-3">
              <Truck className="text-yellow-400" /> Free delivery within 3–5 days
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck className="text-yellow-400" /> 1 year quality warranty
            </li>
            <li className="flex items-center gap-3">
              <RefreshCcw className="text-yellow-400" /> 7 days easy return
            </li>
          </ul>

          {/* SIZE */}
          <div className="mb-12">
            <h3 className="font-semibold text-xl mb-4">Select Size</h3>
            <div className="flex gap-4">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`px-6  py-3 rounded-[5px] font-semibold border transition-all
                    ${activeSize === size
                      ? "bg-yellow-400/80 text-black border-yellow-400 scale-105"
                      : "border-white/20 hover:border-yellow-400/40 hover:text-yellow-400"}
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-6 items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart(product));
              }}
              className="relative overflow-hidden flex-1 py-3 rounded-[5px] bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-bold text-xl group shadow-lg">
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Add to Cart
              </span>
            </button>

            <button
              onClick={() => { navigate("/payment") }}
              className="relative overflow-hidden flex-1 py-3 rounded-[5px] bg-white text-black font-bold text-xl group shadow-lg">
              <span className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Buy Now
              </span>
            </button>

            <button className="relative overflow-hidden p-3 rounded-[5px] bg-white/10 text-white group transition">
              {/* Animated background */}
              <span className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
              {/* Icon */}
              <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center justify-center">
                <Heart />
              </span>
            </button>

            {/* Share Button */}
            <button className="relative overflow-hidden p-3 rounded-[5px] bg-white/10 text-white group transition">
              {/* Animated background */}
              <span className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
              {/* Icon */}
              <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center justify-center">
                <Share2 />
              </span>
            </button>
          </div>
        </div>



      </div>
    </div>
  );
};

export default SingleProduct;
