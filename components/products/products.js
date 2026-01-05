"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiCloudSnow,
  FiThermometer,
  FiActivity,
  FiDatabase,
  FiDroplet,
  FiZap,
  FiMapPin,
} from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductDeepDive() {
  return (
    <section
      className="relative py-14 md:py-20 lg:py-24 text-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/mountain&river2.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-20 md:space-y-28">

        {/* ===================== AIR SECTION ===================== */}
        <section id="air">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mb-12"
          >
            <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-5 flex items-center gap-3 tracking-tight">
              <FiCloudSnow className="text-sky-600 shrink-0" />
              Automated Ice Reservoir (AIR)
            </h2>

            <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
              A managed ice-storage system that transforms excess winter water into
              predictable irrigation supply, enabling high-altitude agriculture to thrive sustainably.
            </p>
          </motion.div>

          {/* About Section */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold flex items-center gap-2 mb-3">
                <FiActivity className="text-sky-600" /> What is AIR?
              </h3>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                AIR upgrades traditional ice stupas by integrating automation, sensors,
                and controlled discharge—ensuring predictable performance and measurable outcomes.
              </p>
            </div>

            <div className="order-1 md:order-2 relative rounded-3xl overflow-hidden h-64 sm:h-80 lg:h-[420px] shadow-2xl">
              <Image
                src="/hardware/aims2.jpg"
                alt="Automated Ice Reservoir"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* HOW AIR WORKS */}
          <div className="mb-24">
            <h3 className="text-lg sm:text-xl lg:text-3xl font-semibold mb-10 text-center md:text-left">
              How AIR Works (System Flow)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
              {[
                { icon: <FiDroplet />, label: "Winter water diverted" },
                { icon: <FiZap />, label: "Solar valves regulate flow" },
                { icon: <FiThermometer />, label: "Sensors track freezing" },
                { icon: <FiCloudSnow />, label: "Controlled ice growth" },
                { icon: <FiDatabase />, label: "Live dashboard monitoring" },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative cursor-pointer rounded-2xl border border-sky-100 bg-white/50 backdrop-blur-sm p-6 hover:bg-sky-50 transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div className="text-sky-600 text-3xl lg:text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>

                  <p className="font-bold text-sky-800 text-xs lg:text-sm uppercase tracking-widest mb-2">
                    Step {i + 1}
                  </p>

                  <p className="text-gray-700 text-sm lg:text-base font-medium leading-tight">
                    {step.label}
                  </p>

                  {i !== 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-sky-200" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="pt-10 border-t border-gray-200">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-8">
              Outcomes & Evidence
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                ["18.4M L", "Water stored"],
                ["₹0.28/L", "Cost efficiency"],
                ["↓ Labour", "Reduced maintenance"],
                ["↑ Ice", "Year-on-year growth"],
              ].map(([value, label], i) => (
                <div
                  key={i}
                  className="rounded-3xl border bg-white/60 backdrop-blur-md p-6 lg:p-8 text-center shadow-sm"
                >
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-sky-600 mb-1">
                    {value}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm lg:text-base font-medium uppercase tracking-wide">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== AMIS SECTION ===================== */}
        <section id="amis" className="pb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-5 flex items-center gap-3 tracking-tight">
              <FiMapPin className="text-emerald-600 shrink-0" />
              AMIS
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
              Precision irrigation powered by smart sensors, automation, and real-time data analytics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-3xl font-semibold flex items-center gap-2 mb-3">
                <FiDroplet className="text-emerald-600" /> What is AMIS?
              </h3>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                AMIS delivers water exactly when and where crops need it—minimizing waste,
                reducing labor, and enhancing crop yields in water-scarce regions.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 lg:h-[420px] shadow-2xl shadow-emerald-100">
              <Image
                src="/hardware/arms.jpg"
                alt="AMIS"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
