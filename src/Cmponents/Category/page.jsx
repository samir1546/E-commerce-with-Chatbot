import React from "react";

const categories = [
    { name: "Men", img: "https://www.iiad.edu.in/wp-content/uploads/2025/08/image7.webp" },
    { name: "Women", img: "https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg" },
    { name: "Shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { name: "Watches", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80" },
    { name: "Bags", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80" },
];

const Categories = () => {
    return (
        <section className="bg-black py-14 gradient-top-border">
            {/* TITLE */}
            <h2 className="text-center text-5xl font-extrabold text-yellow-400 mb-10 mt-10">
                Shop by Category
            </h2>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-52 gap-y-6 p-28">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center cursor-pointer"
                    >
                        <div className="relative w-60 h-60  rounded-full overflow-hidden  border-2 border-yellow-400/60 border-dashed  shadow-[0_0_20px_rgba(250,204,21,0.35)]  transition-all duration-500  group-hover:scale-105  group-hover:rotate-2">
                            <img
                                src={cat.img}
                                alt={cat.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition" />
                        </div>
                        <p className="mt-3 text-lg font-bold tracking-widest text-white group-hover:text-yellow-400 transition">
                            {cat.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
