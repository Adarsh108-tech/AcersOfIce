"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CloudSnow,
  Droplets,
  Cpu,
  MountainSnow,
} from "lucide-react";

/* ---------------- VARIANTS ---------------- */

const descriptionVariants = {
  hidden: {
    opacity: 0,
    maxHeight: 0,
  },
  visible: {
    opacity: 1,
    maxHeight: 140,
  },
};

/* ---------------- COMPONENT ---------------- */

export default function AboutGlaciers() {
  return (
    <section className="w-full bg-white text-black">

      {/* ================= SECTION 1 ================= */}
      <div className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="uppercase  text-3xl  font-bold text-[#24A9FC]">
              Why It Matters
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Himalayan Glaciers
              <br />
              <span className="text-[#4CAF50]">
                A Lifeline Under Threat
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Hindu Kush-Himalayan region acts as Asia&#39;s water reserve,
                supporting over a billion people downstream.
              </p>

              <p>
                Rapid warming, shrinking snow cover, and erratic snowfall are
                disrupting meltwater cycles, particularly in Ladakh.
              </p>

              <p>
                Communities now face delayed water access during critical
                farming periods while groundwater extraction accelerates.
              </p>
            </div>

            <div className="mt-8 border-l-4 border-[#FFC653] pl-5">
              <p className="text-gray-900 font-medium">
                Acres of Ice reimagines meltwater storage without disrupting
                indigenous wisdom.
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-lg">
              <Image src="/exploring.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="absolute -bottom-12 -left-8 w-40 h-40 rounded-2xl overflow-hidden shadow-md hidden md:block">
              <Image src="/exploring.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="absolute top-16 -right-10 w-48 h-60 rounded-2xl overflow-hidden shadow-md hidden md:block">
              <Image src="/exploring.jpg" alt="" fill className="object-cover" />
            </div>
          </motion.div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Climate Pressure */}
          <motion.div
            initial="hidden"
            whileHover="visible"
            whileTap="visible"
            className="bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-2xl p-6 cursor-pointer"
          >
            <CloudSnow size={32} className="text-[#4CAF50]" />

            <h4 className="mt-3 font-semibold text-lg text-[#4CAF50]">
              Climate Pressure
            </h4>

            <motion.p
              variants={descriptionVariants}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="mt-3 text-sm text-gray-700 overflow-hidden"
            >
              Rising temperatures and unpredictable snowfall reduce dependable
              meltwater availability during early growing seasons.
            </motion.p>
          </motion.div>

          {/* Water Scarcity */}
          <motion.div
            initial="hidden"
            whileHover="visible"
            whileTap="visible"
            className="bg-[#24A9FC]/10 border border-[#24A9FC]/30 rounded-2xl p-6 cursor-pointer"
          >
            <Droplets size={32} className="text-[#24A9FC]" />

            <h4 className="mt-3 font-semibold text-lg text-[#24A9FC]">
              Water Scarcity
            </h4>

            <motion.p
              variants={descriptionVariants}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="mt-3 text-sm text-gray-700 overflow-hidden"
            >
              Seasonal shortages push communities toward unsustainable
              groundwater extraction.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileHover="visible"
            whileTap="visible"
            className="bg-gradient-to-br from-[#FFC653]/30 to-[#FFC653]/10 border border-[#FFC653]/40 rounded-2xl p-8 cursor-pointer"
          >
            <Cpu size={32} />

            <h4 className="mt-3 text-xl font-semibold text-gray-900">
              Our Intervention
            </h4>

            <motion.p
              variants={descriptionVariants}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="mt-4 text-gray-700 overflow-hidden"
            >
              Automated Ice Reservoirs store winter water as ice and release it
              during early spring using sensor-driven systems.
            </motion.p>
          </motion.div>

          {/* Technology + Tradition */}
          <motion.div
            initial="hidden"
            whileHover="visible"
            whileTap="visible"
            className="bg-white border rounded-2xl p-8 cursor-pointer"
          >
            <MountainSnow size={32} />

            <h4 className="mt-3 text-lg font-semibold text-gray-900">
              Technology + Tradition
            </h4>

            <motion.p
              variants={descriptionVariants}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="mt-4 text-gray-700 overflow-hidden"
            >
              Indigenous knowledge combined with automation reduces labor,
              prevents failures, and strengthens long-term resilience.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
