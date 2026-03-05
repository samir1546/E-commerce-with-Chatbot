import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "Fashion Blogger",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
        rating: 5,
        text: "LUXESTORE has completely transformed my wardrobe. The quality is exceptional, and the customer service is outstanding. I've been a loyal customer for over 2 years now.",
    },
    {
        id: 2,
        name: "James Anderson",
        role: "Business Executive",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
        rating: 5,
        text: "The attention to detail in every piece is remarkable. From packaging to product quality, everything screams luxury. Highly recommended for anyone seeking premium fashion.",
    },
    {
        id: 3,
        name: "Emily Chen",
        role: "Creative Director",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
        rating: 5,
        text: "I've shopped at many luxury stores, but LUXESTORE stands out. The curation is impeccable, and I always find unique pieces that elevate my style.",
    },
    {
        id: 4,
        name: "Michael Torres",
        role: "Entrepreneur",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        rating: 5,
        text: "Fast shipping, beautiful packaging, and premium quality products. LUXESTORE is my go-to for all fashion needs. The experience is truly first-class.",
    },
];

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const prev = () =>
        setActiveIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );

    const next = () =>
        setActiveIndex((prev) => (prev + 1) % testimonials.length);

    return (
        <section className="relative py-28 bg-black overflow-hidden gradient-top-border">
            {/* 🔥 TOP GOLDEN LIGHT */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-yellow-400/30 blur-[160px]" />

            <div className="relative z-10 container mx-auto px-4">
                {/* TITLE */}
                <div className="text-center mb-16 text-white">
                    <span className="inline-block px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-medium mb-4">
                        Testimonials
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        What Our <span className="text-yellow-400">Customers</span> Say
                    </h2>

                    <p className="text-white/60 max-w-2xl mx-auto">
                        Trusted by thousands of premium customers worldwide.
                    </p>
                </div>

                {/* SWIPER CARD */}
                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-12 text-white relative">
                        <Quote className="absolute top-6 right-6 w-12 h-12 text-yellow-400/20" />

                        <div className="flex flex-col md:flex-row gap-8 items-center transition-all duration-500">
                            {/* AVATAR */}
                            <div className="flex-shrink-0">
                                <img
                                    src={testimonials[activeIndex].avatar}
                                    alt={testimonials[activeIndex].name}
                                    className="w-24 h-24 rounded-2xl object-cover border-2 border-yellow-400/40"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="flex-1 text-center md:text-left">
                                {/* STARS */}
                                <div className="flex gap-1 justify-center md:justify-start mb-4">
                                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                        />
                                    ))}
                                </div>

                                <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                                    “{testimonials[activeIndex].text}”
                                </p>

                                <h4 className="font-semibold text-lg">
                                    {testimonials[activeIndex].name}
                                </h4>
                                <p className="text-white/50">
                                    {testimonials[activeIndex].role}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* NAVIGATION */}
                    <div className="flex items-center justify-center gap-6 mt-10">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full bg-black/60 border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                        >
                            <ChevronLeft className="mx-auto" />
                        </button>

                        {/* DOTS */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`h-3 rounded-full transition-all ${i === activeIndex
                                        ? "w-8 bg-yellow-400"
                                        : "w-3 bg-white/30"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full bg-black/60 border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                        >
                            <ChevronRight className="mx-auto" />
                        </button>
                    </div>
                </div>
            </div>


            
        </section>
    );
};

export default TestimonialsSection;
