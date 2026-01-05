"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductHero() {
  return (
    <section className="relative  pt-40 w-screen overflow-hidden -mt-20 min-h-[700px] bg-white rounded-b-3xl flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Modular Water Solutions Built for
            <span className="text-brand-blue-200"> Extreme Climates</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-200 mb-6">
            Our products are modular, replicable, and climate-resilient systems
            designed to deliver predictable water access in cold, high-altitude
            regions.
          </p>

          <p className="text-gray-300 mb-10">
            Each solution is available as a complete kit—combining hardware,
            control systems, training resources, and live monitoring—allowing
            governments, partners, and communities to deploy at scale while
            maintaining performance standards.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="/products"
              className="
                rounded-xl 
                bg-brand-blue-500 
                px-6 py-3 
                text-white 
                font-semibold 
                hover:bg-brand-blue-700 
                transition
              "
            >
              Explore Products
            </Link>

            <Link
              href="https://docs.google.com/document/d/17skvFKy8eqXeV8m91rQiq4Npua0-L_gYoJoASnT2Mxg/edit"
              target="_blank"
              className="
                rounded-xl 
                border border-brand-yellow-300 
                bg-white/10 
                px-6 py-3 
                text-brand-yellow-200 
                font-semibold 
                hover:bg-white/20 
                transition
              "
            >
              View Catalogue
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
