import { Heart, Eye, Star, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
import { addToCart } from "../../Redux/slice/productSlice.js";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {

    const discountedPrice = (product.price / 2).toFixed(2);
    const navigateToProduct = useNavigate();

    const dispatch = useDispatch();


    return (
        <div
            onClick={() => navigateToProduct(`/product/${product.id}`)}
            className=" group relative bg-black rounded-2xl overflow-hidden cursor-pointer border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/60 hover:shadow-[0_0_60px_rgba(255,215,0,0.15)]">
            <div className="relative aspect-square overflow-hidden">
                <img
                    src={product.images?.[0] || product.image || "/placeholder.jpg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className=" absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white shadow-lg">
                    50% OFF
                </span>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(addToCart(product));
                        }}
                        className=" w-full px-6 py-3 rounded-xl flex items-center justify-center gap-2 bg-white/10 backdrop-blur-xl text-white font-semibold border border-yellow-400/40 hover:bg-yellow-400/80 hover:text-black transition">
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                    </button>
                </div>

                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {[Heart, Eye].map((Icon, i) => (
                        <button
                            key={i}
                            className=" w-10 h-10 rounded-full bg-black/60 backdrop-blur text-white flex items-center justify-center opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all hover:bg-yellow-400 hover:text-black">
                            <Icon className="w-5 h-5" />
                        </button>
                    ))}
                </div>
            </div>

            {/* INFO */}
            <div className="p-5 text-white">
                <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{product.rating}</span>
                    <span className="text-sm text-white/50">
                        ({product.reviews})
                    </span>
                </div>

                <h3 className="font-semibold text-lg mb-3 group-hover:text-yellow-400 transition">
                    {product.name}
                </h3>

                {/* PRICE */}
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-xl font-bold text-yellow-400">
                            ${discountedPrice}
                        </span>
                        <span className="text-sm line-through text-white/40 ml-2">
                            ${product.price}
                        </span>
                    </div>

                    <button className="relative overflow-hidden px-5 py-2 rounded-lg bg-white text-black font-semibold group transition transform hover:scale-105">
                        <span className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
                        <span className="relative z-10">Buy Now</span>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default ProductCard;
