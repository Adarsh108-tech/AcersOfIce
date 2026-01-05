"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    title: "About Us",
    links: [
      { name: "Our Story", href: "/about/story" },
      { name: "Team", href: "/about/team" },
      { name: "Careers", href: "/about/careers" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "Web Development", href: "/services/web" },
      { name: "App Development", href: "/services/app" },
      { name: "AI Solutions", href: "/services/ai" },
    ],
  },
  {
    title: "Media",
    links: [
      { name: "Blogs", href: "/media/blogs" },
      { name: "News", href: "/media/news" },
      { name: "Gallery", href: "/media/gallery" },
    ],
  },
  {
    title: "Case Study",
    links: [
      { name: "Startups", href: "/case-study/startups" },
      { name: "Enterprise", href: "/case-study/enterprise" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { name: "General", href: "/faq/general" },
      { name: "Pricing", href: "/faq/pricing" },
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full px-10 py-4 z-50
        flex items-center justify-between
        transition-all duration-300
        ${scrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg"
          : "bg-transparent"
        }
      `}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/comapnyDarkLogo.png"
          alt="Company Logo"
          width={50}
          height={40}
          className="object-contain"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-8 relative">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {/* Main Nav Item */}
            <motion.div
              className={`cursor-pointer relative font-medium transition-colors duration-300
                ${scrolled ? "text-gray-900" : "text-white"}`}
              whileHover="hover"
            >
              {item.title}

              {/* Underline */}
              <motion.span
                className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left transition-colors duration-300
                  ${scrolled ? "bg-gray-900" : "bg-white"}`}
                variants={{
                  initial: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                initial="initial"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Dropdown */}
            <AnimatePresence>
              {activeMenu === index && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`absolute top-10 ${
                    index === navItems.length - 1 ? "right-0" : "left-0"
                  } bg-white/80 backdrop-blur-xl shadow-xl rounded-xl p-4 min-w-[220px]`}
                >
                  {item.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.nav>
  );
}
