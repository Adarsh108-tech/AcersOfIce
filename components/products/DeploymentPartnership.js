"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SupportOffered from "./supportOffered";

/* ✅ React Icons */
import {
  FiHome,
  FiUsers,
  FiBookOpen,
  FiGlobe,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function DeploymentPartnershipCTA() {
  return (
    <section className="relative bg-gradient-to-b from-sky-50 to-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-wide text-sky-600 font-semibold mb-3">
            Deployment & Partnerships
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Pilot to Scale — Together
          </h2>
          <p className="text-lg text-gray-600">
            Acres of Ice works with institutions and communities to deploy
            climate-resilient water systems across challenging geographies—
            backed by long-term technical and research support.
          </p>
        </motion.div>

        {/* ================= WHERE + WHO ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* WHERE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Where Our Products Are Deployed
            </h3>
            <p className="text-gray-600 mb-6">
              Our systems are designed for cold, high-altitude, water-stressed,
              and climate-vulnerable regions—where conventional infrastructure
              often fails.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li>• High-altitude Himalayan villages</li>
              <li>• Cold desert & glacial regions</li>
              <li>• Water-scarce agricultural landscapes</li>
              <li>• Remote and infrastructure-limited communities</li>
            </ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src="/hardware/hardware.jpg"
              alt="Deployment regions"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex items-end">
              <p className="text-white text-sm">
                Designed for replication across similar geographies globally
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= WHO CAN DEPLOY ================= */}
        <div>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-gray-900 mb-14"
          >
            Who Can Deploy Our Systems
          </motion.h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { title: "Governments", icon: FiHome },
              { title: "NGOs", icon: FiUsers },
              { title: "Research Institutions", icon: FiBookOpen },
              { title: "Community Groups", icon: FiGlobe },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="
                    relative pt-14 pb-8 px-6
                    rounded-3xl
                    bg-sky-100/70
                    text-center
                    shadow-sm hover:shadow-xl
                    transition-all duration-300
                  "
                >
                  {/* Floating Icon */}
                  <div
                    className="
                      absolute -top-8 left-1/2 -translate-x-1/2
                      h-16 w-16
                      rounded-full
                      bg-white
                      flex items-center justify-center
                      shadow-md
                      text-sky-600
                    "
                  >
                    <Icon size={28} />
                  </div>

                  {/* Text */}
                  <p className="text-xs uppercase tracking-wide text-sky-600 mb-2">
                    Eligible Partner
                  </p>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-600 mt-2">
                    Deployment & operations supported
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <SupportOffered />

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Deploy Climate-Resilient Water Systems?
          </h3>
          <p className="text-gray-600 mb-10">
            Whether you are planning a pilot, scaling a regional program, or
            conducting applied research, we&#39;d love to collaborate.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/partner"
              className="rounded-xl bg-sky-600 px-6 py-3 text-white font-semibold hover:bg-sky-700 transition"
            >
              Partner with Us
            </Link>

            <Link
              href="/deployment-request"
              className="rounded-xl border border-sky-600 px-6 py-3 text-sky-600 font-semibold hover:bg-sky-50 transition"
            >
              Request Deployment
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 font-semibold hover:bg-gray-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-40 -left-40 h-96 w-96 bg-sky-300/30 blur-3xl rounded-full" />
    </section>
  );
}
