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
  const CARD_WIDTH = 260;
  const SPREAD = 60; // horizontal spacing between cards

  return (
    <section className="w-full h-screen overflow-hidden relative">
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
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-16">
        <div className="flex items-center justify-between w-full max-w-7xl gap-16">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold leading-tight text-center md:text-left">
              ENABLING water
              <br />
              <span className="text-blue-400">CONSERVATION</span>
            </h1>

            <p className="mt-6 text-lg text-gray-200 text-center md:text-left">
              Harnessing water, tech, and community to transform meltwater into resilience
            </p>

            <div className="mt-8 text-center md:text-left">
              <Link
                href="/projects"
                className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-md font-medium"
              >
                Explore Projects
              </Link>
            </div>
          </div>

          {/* RIGHT CARD STACK */}
          <div className="relative w-[320px] h-[380px] flex-shrink-0">
            {cards.map((card, index) => {
              const xOffset = -index * SPREAD;
              const rotate = -index * 3;

              return (
                <motion.div
                  key={index}
                  initial={{ x: xOffset, rotate }}
                  whileHover={{
                    y: -24,
                    rotate: 0,
                    scale: 1.06,
                    zIndex: 100,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 20,
                  }}
                  className="absolute top-0 cursor-pointer"
                  style={{
                    right: 0,
                    width: CARD_WIDTH,
                    zIndex: cards.length - index,
                  }}
                >
                  <Link href={card.href}>
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                      {/* IMAGE */}
                      <div className="relative w-full h-[160px] overflow-hidden">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>

                      {/* CONTENT */}
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
    </section>
  );
}
