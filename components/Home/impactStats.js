"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 14000, suffix: "", title: "villages globally identified as requiring urgent water intervention" },
  { value: 12, suffix: " Villages", title: "currently operating Automated Ice Reservoir (AIR) systems" },
  { value: 18, suffix: "+", title: "million litres of water generated during the last implementation cycle" },
];

function CountUp({ target, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const increment = target / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function ImpactStats() {
  return (
    <section className="relative w-full py-16 px-6 md:px-16 overflow-hidden bg-gradient-to-b from-[#eef7ee] to-white">

      {/* 🌲 Forest Background */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Far trees */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-0 w-full h-40 bg-repeat-x"
          style={{
            backgroundImage: "url('/tree/tree1.svg')",
            backgroundSize: "120px auto",
          }}
        />

        {/* Mid trees */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.22 }}
          transition={{ duration: 1.8 }}
          className="absolute bottom-0 w-full h-56 bg-repeat-x"
          style={{
            backgroundImage: "url('/tree/tree2.svg')",
            backgroundSize: "160px auto",
          }}
        />

        {/* Dense mid trees */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.28 }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 w-full h-64 bg-repeat-x"
          style={{
            backgroundImage: "url('/tree/tree1.svg')",
            backgroundSize: "180px auto",
          }}
        />

        {/* Front trees */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 2.2 }}
          className="absolute bottom-0 w-full h-72 bg-repeat-x"
          style={{
            backgroundImage: "url('/tree/tree2.svg')",
            backgroundSize: "220px auto",
          }}
        />
      </div>

      {/* 🌿 Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white/70 backdrop-blur-md rounded-2xl p-7 shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-green-700 text-2xl mb-2"
            >
              ▲
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.25 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-gray-900"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
            </motion.h3>

            <p className="mt-4 text-gray-700 max-w-sm mx-auto leading-relaxed">
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
