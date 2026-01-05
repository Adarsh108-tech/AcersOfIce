"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiUsers, FiGlobe, FiTool } from 'react-icons/fi';

const DeploymentModels = () => {
  const models = [
    {
      icon: <FiUsers />,
      title: "Standalone Purchase",
      desc: "Independent kits with full documentation.",
      img: "/hardware/aims.jpg",
      offset: "0px" // Top step
    },
    {
      icon: <FiGlobe />,
      title: "Partner / Government",
      desc: "NGOs & government-led deployments.",
      img: "/hardware/aims.jpg",
      offset: "40px" // Middle step
    },
    {
      icon: <FiTool />,
      title: "Full Acres of Ice Support",
      desc: "End-to-end implementation & monitoring.",
      img: "/hardware/aims.jpg",
      offset: "80px" // Bottom step
    },
  ];

  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-[#0B3D91] mb-4">
            Deployment Models
          </h3>
          <p className="text-slate-500 max-w-xl mx-auto">
            Flexible implementation strategies tailored to global scaling needs.
          </p>
        </motion.div>

        {/* Staircase Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {models.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              // This creates the staircase offset on desktop
              style={{ marginTop: typeof window !== 'undefined' && window.innerWidth > 768 ? item.offset : '0' }}
              className="group relative cursor-pointer"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: -5,
                  z: 50 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="
                  relative z-10 p-8 rounded-[2rem] bg-white border border-slate-100
                  shadow-[0_10px_40px_-15px_rgba(11,61,145,0.1)]
                  hover:shadow-[0_20px_60px_-10px_rgba(11,61,145,0.2)]
                  transition-shadow duration-500 overflow-hidden
                "
              >
                {/* Background Image Reveal */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                  <Image 
                    src={item.img} 
                    alt="" 
                    fill 
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white" />
                </div>

                <div className="relative z-10">
                  {/* Animated Icon Container */}
                  <div className="
                    w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B3D91] to-[#1e5bbd]
                    flex items-center justify-center text-white text-2xl mb-6
                    shadow-lg shadow-blue-200 group-hover:rotate-[10deg] transition-transform duration-300
                  ">
                    {item.icon}
                  </div>

                  <h4 className="text-xl font-bold text-[#0B3D91] mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Aesthetic "Step" Number */}
                  <span className="absolute top-8 right-8 text-6xl font-black text-blue-500 opacity-0 group-hover:opacity-100 transition-all">
                    0{i + 1}
                  </span>
                  
                  <div className="w-12 h-1 bg-[#0B3D91]/10 rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>

              {/* Decorative Shadow for the "Step" Look */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-dashed border-[#0B3D91]/10 rounded-[2rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DeploymentModels;