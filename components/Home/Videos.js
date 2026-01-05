"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const videoLinks = [
  "https://www.youtube.com/embed/OvnrQJnVkUs",
  "https://www.youtube.com/embed/HqLYnptAKfc",
  "https://www.youtube.com/embed/lmYgq8UY3H0",
  "https://www.youtube.com/embed/HPExh0UvxOo",
];

export default function YoutubeVideos() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  /* Keyboard Scroll */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") scroll("left");
      if (e.key === "ArrowRight") scroll("right");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* Mouse Wheel Scroll */
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e) => {
      e.preventDefault();
      carousel.scrollBy({ left: e.deltaY, behavior: "smooth" });
    };

    carousel.addEventListener("wheel", handleWheel, { passive: false });
    return () => carousel.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section
      className="
        relative w-full py-28 overflow-hidden
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: "url('/videoBack.png')",
        backgroundAttachment: "fixed", // 🔥 CSS PARALLAX
      }}
    >
      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Our YouTube Videos
        </h2>

        <div className="relative">

          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20
                       w-12 h-12 rounded-full bg-black text-white shadow-lg"
          >
            ←
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20
                       w-12 h-12 rounded-full bg-black text-white shadow-lg"
          >
            →
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide px-6 custom-scrollbar"
          >
            {videoLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="min-w-[340px]"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
                  <iframe
                    src={link}
                    className="w-full h-[220px]"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
