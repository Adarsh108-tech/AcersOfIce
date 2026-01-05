"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/* ---------------- DATA ---------------- */

const newsData = [
  {
    title: "Climate-Resilient Water Systems Expand in Ladakh",
    description:
      "New automated ice reservoirs improve early-season irrigation for remote communities.",
    image: "/mountain&river2.jpg",
    href: "#",
  },
  {
    title: "Automation Redefines High-Altitude Water Storage",
    description:
      "Technology-driven ice reservoirs reduce labor and improve seasonal water access.",
    image: "/mountain&river2.jpg",
    href: "#",
  },
  {
    title: "Community-Led Innovation Strengthens Water Security",
    description:
      "Local partnerships enable sustainable adoption of automated ice reservoirs.",
    image: "/mountain&river2.jpg",
    href: "#",
  },
  {
    title: "Research-Backed Solutions Address Glacier Retreat",
    description:
      "Data-driven design supports scalable water infrastructure in mountains.",
    image: "/mountain&river2.jpg",
    href: "#",
  },
  {
    title: "Next-Gen Irrigation Systems Reduce Water Stress",
    description:
      "Micro-irrigation improves efficiency during critical growing periods.",
    image: "/mountain&river2.jpg",
    href: "#",
  },
  {
    title: "Policy Collaboration Accelerates Water Innovation",
    description:
      "Public-sector engagement enables faster deployment of water technologies.",
    image: "/mountain&river2.jpg",
    href: "#",
  },
];

const duplicatedNews = [...newsData, ...newsData];

const truncateWords = (text, limit = 10) =>
  text.split(" ").slice(0, limit).join(" ") + "...";

/* ---------------- COMPONENT ---------------- */

export default function LatestNews() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const x = useRef(0);
  const resumeTimeout = useRef(null);

  const baseSpeed = 0.35;
  const [isPaused, setIsPaused] = useState(false);

  /* -------- Auto scroll -------- */
  useAnimationFrame(() => {
    if (!containerRef.current || isPaused) return;

    x.current -= baseSpeed;

    const width = containerRef.current.scrollWidth / 2;
    if (Math.abs(x.current) >= width) x.current = 0;

    containerRef.current.style.transform = `translateX(${x.current}px)`;
  });

  /* -------- Wheel handling (PREVENT PAGE SCROLL) -------- */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onWheel = (e) => {
      e.preventDefault(); // 🔑 stop page scroll

      setIsPaused(true);
      x.current -= e.deltaY * 0.6;

      containerRef.current.style.transform = `translateX(${x.current}px)`;

      clearTimeout(resumeTimeout.current);
      resumeTimeout.current = setTimeout(() => {
        setIsPaused(false);
      }, 400);
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      wrapper.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Latest News & Insights
        </h2>

        {/* Carousel */}
        <div
          ref={wrapperRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={containerRef}
            className="flex gap-6 will-change-transform"
          >
            {duplicatedNews.map((news, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="min-w-[260px] max-w-[260px] flex-shrink-0"
              >
                <Link href={news.href}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full border cursor-pointer">

                    <Image
                      src={news.image}
                      alt={news.title}
                      width={260}
                      height={150}
                      className="object-cover w-full h-[150px]"
                    />

                    <div className="p-4 flex flex-col justify-between h-[170px]">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                          {news.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                          {truncateWords(news.description, 10)}
                        </p>
                      </div>

                      <span className="mt-3 text-sm font-medium text-blue-600 hover:underline">
                        Know more →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
