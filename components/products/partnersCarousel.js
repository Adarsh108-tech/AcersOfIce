"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Company A", logo: "/partners/ADB.png" },
  { name: "Company B", logo: "/partners/Alsisar.png" },
  { name: "Company C", logo: "/partners/coverProject.png" },
  { name: "Company D", logo: "/partners/KingsCollege.png" },
  { name: "Company E", logo: "/partners/Ladakh_Autonomous.png" },
  { name: "Company E", logo: "/partners/liveToLove.png" },
  { name: "Company E", logo: "/partners/milkywire.png" },
  { name: "Company E", logo: "/partners/Universitat_Freiburg.png" },
  { name: "Company E", logo: "/partners/yolk.jpeg" },
];

export default function PartnersCarousel() {
  return (
    <section className="py-16 bg-[#F9FBF8] overflow-hidden mt-5 -mb-5 rounded-b-lg">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-slate-800 mb-10">
        Our Trusted Partners
      </h2>

      {/* Carousel */}
      <div className="relative w-full">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {/* Duplicate logos for seamless loop */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[160px]"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
