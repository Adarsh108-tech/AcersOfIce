"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Glacier Projects",
    description: "Innovative glacier conservation initiatives.",
    image: "/mountain&river1.jpg",
    href: "/projects/glacier",
  },
  {
    title: "Community Impact",
    description: "Empowering local communities with water tech.",
    image: "/mountain&river1.jpg",
    href: "/projects/community",
  },
  {
    title: "Water Technology",
    description: "Smart solutions for water sustainability.",
    image: "/mountain&river1.jpg",
    href: "/projects/technology",
  },
  {
    title: "Climate Research",
    description: "Data-driven climate resilience initiatives.",
    image: "/Drone.jpg",
    href: "/projects/climate",
  },
  {
    title: "Policy & Advocacy",
    description: "Shaping sustainable water policies.",
    image: "/mountain1.jpg",
    href: "/projects/policy",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center px-5 sm:px-8 md:px-16">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              ENABLING water
              <br />
              <span className="text-blue-400">CONSERVATION</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0">
              Harnessing water, technology, and communities to transform
              meltwater into long-term resilience.
            </p>

            <div className="mt-8">
              <Link
                href="/projects"
                className="inline-block px-7 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-md font-medium"
              >
                Explore Projects
              </Link>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="relative w-full">

            {/* 🔹 MOBILE & TABLET VIEW */}
            <div className="flex gap-5 overflow-x-auto pb-4 lg:hidden">
              {cards.map((card, index) => (
                <Link
                  key={index}
                  href={card.href}
                  className="min-w-[240px] bg-white rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="relative w-full h-[150px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {card.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* 🔹 DESKTOP OVERLAPPING STACK */}
            <div className="hidden lg:flex relative h-[380px] justify-end">
              {cards.map((card, index) => {
                const xOffset = -index * 45;
                const rotate = -index * 3;

                return (
                  <motion.div
                    key={index}
                    initial={{ x: xOffset, rotate }}
                    whileHover={{
                      y: -22,
                      rotate: 0,
                      scale: 1.06,
                      zIndex: 50,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 22,
                    }}
                    className="absolute top-0 cursor-pointer"
                    style={{
                      width: 260,
                      zIndex: cards.length - index,
                    }}
                  >
                    <Link href={card.href}>
                      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                        <div className="relative w-full h-[160px]">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>

                        <div className="p-4">
                          <h3 className="text-base font-semibold text-gray-800">
                            {card.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
