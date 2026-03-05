import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/slice/productSlice.js";

const ProductSection = () => {

    const dispatch = useDispatch();
    const { products, loading, error, page } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts(page));
    }, []);

    if (loading) return <p className="text-white text-center">Loading...</p>
    if (error) return <p className="text-red-500 text-center">{error}</p>


    return (
        <section className="relative py-28 bg-black overflow-hidden gradient-top-border">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-yellow-400/30 blur-[160px]" />

            <div className="relative z-10 container mx-auto px-4 lg:px-8">

                <div className="text-center mb-16 text-white">
                    <span className="inline-block px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-medium mb-4">
                        Featured Products
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Trending <span className="text-yellow-400">This Week</span>
                    </h2>

                    <p className="text-white/60 max-w-2xl mx-auto">
                        Discover premium products with luxury design and quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="flex justify-center mt-14">
                    <button
                        onClick={() => dispatch(fetchProducts(page))}
                        className="px-10 py-3 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                    >
                        Show More
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ProductSection;
