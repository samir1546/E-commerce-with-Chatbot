import React, { useEffect, useState } from "react";

const NotFound = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white ">

      {/* ===== BACKGROUND IMAGE ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-slowFloat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504457047772-27faf1c00561)",
        }}
      />

      {/* ===== DARK OVERLAY WITH SPOTLIGHT ===== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            150px at ${pos.x}px ${pos.y}px,
            transparent 0%,
            rgba(0,0,0,0.85) 60%,
            rgba(0,0,0,0.95) 100%
          )`,
        }}
      />

      {/* ===== CENTER TEXT ===== */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-[120px] font-extrabold tracking-widest text-yellow-400 drop-shadow-[0_0_40px_rgba(255,215,0,0.6)]">
          404
        </h1>
        <p className="text-3xl md:text-4xl font-bold mt-4">
          Page Not Found
        </p>
        <p className="text-gray-400 mt-3 max-w-xl">
          You have entered a place that does not exist anymore.
        </p>

        <button
          onClick={() => window.history.back()}
          className="relative mt-10 overflow-hidden px-10 py-3 rounded-full  bg-white border-2 border-white/40 font-bold text-[18px]  group shadow-[0_20px_60px_rgba(255,215,0,0.6)] transition-all duration-300 hover:-translate-y-1">
          <span className="absolute inset-0 bg-yellow-500 translate-y-full  group-hover:translate-y-0 transition-transform duration-300 z-0" ></span>
          <span className="relative z-10 text-black group-hover:text-black  transition-colors duration-300">
            Go Back
          </span>
        </button>

      </div>
    </div>
  );
};

export default NotFound;
