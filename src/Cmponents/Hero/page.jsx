import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../../assets/Main.png";
import img2 from "../../assets/Hero2.png";
import img4 from "../../assets/Hero4.png";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            loop
            className="h-[75vh]"
        >
            <SwiperSlide>
                <div
                    className="h-full bg-cover"
                    style={{
                        backgroundImage: `url(${img1})`,
                        backgroundPosition: "center 10%",
                    }}
                >
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 h-full flex flex-col justify-center items-start px-32 text-white text-left left-20 ">
                        <h1 className="text-7xl md:text-8xl font-extrabold leading-tight">
                            Big Sale <span className="text-yellow-400">50%</span> OFF <br /> This Week Only!
                        </h1>
                        <p className="mt-6 max-w-lg text-2xl text-gray-200">
                            Discover the latest trends and hottest deals in fashion. Shop now and upgrade your wardrobe instantly!
                        </p>
                        <button className="mt-8 w-fit bg-yellow-400 text-black px-10 py-4 rounded-full font-bold hover:bg-yellow-300 text-lg">
                            Shop Now
                        </button>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div
                    className="h-full bg-cover bg-center relative "
                    style={{
                        backgroundImage: `url(${img2})`,
                        backgroundPosition: "center 20%",
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 h-full flex flex-col justify-center items-center px-12 text-white text-center" style={{ transform: "translateX(25%)" }}>
                        <h1 className="text-8xl font-extrabold">
                            Fresh Arrivals <br />
                            For This Season
                        </h1>
                        <p className="mt-6 max-w-lg text-2xl text-gray-200">
                            Explore the latest trends in fashion and accessories.
                            Upgrade your style with our exclusive collection!
                        </p>
                        <button className="mt-8 w-fit bg-yellow-400 text-black px-10 py-4 rounded-full font-bold hover:bg-yellow-300 text-lg">
                            Shop Now
                        </button>
                    </div>


                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div
                    className="h-full bg-cover bg-center relative"
                    style={{
                        backgroundImage: `url(${img4})`,
                        backgroundPosition: "center 10%",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10  w-[50%] flex flex-col justify-center items-center px-12 text-white text-center  top-32">
                        <h1 className="text-7xl md:text-8xl font-bold leading-tight ">
                            Fast & <br /> Reliable Delivery
                        </h1>
                        <p className="mt-6 max-w-lg text-2xl text-gray-200">
                            Get your products delivered right to your doorstep Safe, Quick, and Hassle-Free!
                        </p>
                        <button className="mt-8 w-fit bg-yellow-400 text-black px-10 py-4 rounded-full font-bold hover:bg-yellow-300 text-lg">
                            Order Now
                        </button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Hero;
