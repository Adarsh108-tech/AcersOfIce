"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiLayers, FiUsers, FiGlobe, FiTool, FiDroplet, FiBarChart2 } from "react-icons/fi";
import Image from "next/image";
import PartnersCarousel from "./partnersCarousel";
import DeploymentModels from "./DeploymentModels";

/* ---------------- Animated Counter ---------------- */
function Counter({ value, suffix = "", duration = 2500 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-bold text-lg md:text-xl text-[#0B3D91]">
      {count}
      {suffix}
    </span>
  );
}

/* ---------------- Slideshow ---------------- */
const images = [
  "/mountain&river1.jpg",
  "/mountain1.jpg",
  "/mountain&river2.jpg",
  "/mountain1.jpg",
];

function ProductSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Product preview"
            fill
            className="object-cover rounded-3xl scale-100 transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------------- Kit Card ---------------- */
function KitCard({ img, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="group relative overflow-hidden rounded-2xl p-6 flex flex-col items-center text-center
                 bg-gradient-to-tr from-blue-50 to-green-50 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
    >
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110 opacity-40 rounded-2xl"
      />
      <div className="absolute inset-0 bg-white/80 backdrop-blur- rounded-2xl" />
      <div className="relative z-10">
        <h4 className="text-[#0B3D91] font-bold text-xl mb-2">{title}</h4>
        <p className="text-[#222222] text-base opacity-90">{desc}</p>
      </div>
    </motion.div>
  );
}

/* ---------------- Main Component ---------------- */
export default function ProductPhilosophy() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-[#99F49C] pt-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-16 text-center md:text-left"
        >
          <p className="text-xl md:text-2xl uppercase tracking-wide font-semibold text-[#0B3D91] mb-2">
            Product Philosophy
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B3D91] mb-4">
            Built to Scale. <span className="text-[#27AE60]">Designed to Endure.</span>
          </h2>
          <p className="text-[#222222] text-base md:text-lg leading-relaxed">
            Modular, climate-resilient systems built for high-altitude and water-stressed regions — engineered for reliability and scale.
          </p>
        </motion.div>

        {/* Philosophy + Slideshow */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <FiLayers className="text-[#27AE60] text-2xl" />
              <h3 className="text-xl md:text-2xl font-semibold text-[#0B3D91]">Modular & Replicable</h3>
            </div>
            <p className="text-[#222222] mb-4 md:text-lg">
              Each product is a standardized yet adaptable kit enabling rapid replication with predictable performance across geographies.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#DFF6DD] p-4 flex flex-col items-center">
                <p className="text-[#27AE60] font-bold text-2xl md:text-3xl">
                  <Counter value={14000} suffix="+" />
                </p>
                <p className="text-[#222222] text-sm md:text-base mt-1">High-altitude villages</p>
              </div>
              <div className="rounded-xl bg-[#D0E6FF] p-4 flex flex-col items-center">
                <p className="text-[#0B3D91] font-bold text-2xl md:text-3xl">
                  <Counter value={14000000} suffix="+" />
                </p>
                <p className="text-[#222222] text-sm md:text-base mt-1">People supported</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <ProductSlideshow />
          </motion.div>
        </div>

        {/* Kit Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0B3D91] mb-10 text-center">
            What Each Product Kit Includes
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <KitCard img="/hardware.png" title="Modular Hardware" desc="Components designed for easy assembly and replication." />
            <KitCard img="/sensors.png" title="Sensor & Control" desc="Automated systems for monitoring and regulation." />
            <KitCard img="/documentation.png" title="Documentation" desc="Installation manuals and operational guides." />
            <KitCard img="/training.png" title="Training" desc="Community & operator education for seamless adoption." />
            <KitCard img="/dashboard.png" title="Dashboard / App" desc="Live performance monitoring & analytics." />
          </div>
        </motion.div>

        {/* Deployment Models */}
        <DeploymentModels/>



        {/* Evidence Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-2xl bg-gradient-to-tr from-blue-50 to-green-50 p-6 shadow-md"
          >
            <h4 className="text-xl font-semibold text-[#0B3D91] mb-3">Automated Ice Reservoir (AIR)</h4>
            <p className="text-[#222222] mb-3">Sensor-driven ice reservoirs delivering predictable seasonal meltwater.</p>
            <div className="flex justify-around mt-4 text-[#222222] gap-6">
              <div className="flex gap-2 items-center">
                <FiDroplet className="text-[#27AE60]" />
                <span><Counter value={18400000} suffix=" L" /></span>
              </div>
              <div className="flex gap-2 items-center">
                <FiBarChart2 className="text-[#F2C94C]" />
                <span>₹0.28/L</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="rounded-2xl bg-gradient-to-tr from-blue-50 to-green-50 p-6 shadow-md"
          >
            <h4 className="text-xl font-semibold text-[#0B3D91] mb-3">Automated Micro-Irrigation System (AMIS)</h4>
            <ul className="space-y-2 text-[#222222] text-base">
              <li><strong className="text-[#27AE60]">60–70%</strong> water savings</li>
              <li><strong className="text-[#27AE60]">70–80%</strong> labour reduction</li>
            </ul>
          </motion.div>
        </div>

      </div>
      
        <PartnersCarousel/>
    </section>
  );
}
