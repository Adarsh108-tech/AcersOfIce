import Image from "next/image";
import { motion } from "framer-motion";

const supportData = [
  {
    title: "Installation",
    img: "/products/installation.png",
  },
  {
    title: "Maintenance",
    img: "/support/maintenance.png",
  },
  {
    title: "Monitoring",
    img: "/support/monitoring.png",
  },
  {
    title: "Research Collaboration",
    img: "/support/research.png",
  },
];

export default function SupportOffered() {
  return (
    <div className="bg-sky-50 rounded-3xl p-12">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-gray-900 mb-12 text-center"
      >
        Support Offered by Acres of Ice
      </motion.h3>

      <div className="grid md:grid-cols-4 gap-8">
        {supportData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl p-6 text-center border border-sky-100 shadow-sm hover:shadow-lg transition-all"
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={120}
                height={120}
                className="mx-auto"
              />
            </motion.div>

            {/* Text */}
            <p className="font-semibold text-sky-600 mb-2">
              {item.title}
            </p>
            <p className="text-sm text-gray-600">
              End-to-end technical and operational support
            </p>

            {/* Hover underline */}
            <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-sky-400 mx-auto transition-all duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
