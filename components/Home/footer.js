"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Intro */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Image src="/comapnyDarkLogo.png" alt="Acres of Ice Logo" width={50} height={50} />
            <span className="text-xl font-bold">Acres of Ice</span>
          </div>
          <p>Explore our projects and join us in making a difference in the community.</p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">YouTube</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">X</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p>Acres of Ice, Shey Village, Leh</p>
          <p>contact@acresofice.com</p>
        </div>

        {/* Navigation */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Explore</h3>
          <ul className="space-y-1">
            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/projects" className="hover:text-blue-400">Acres of Ice</a></li>
            <li><a href="/applications" className="hover:text-blue-400">Applications</a></li>
            <li><a href="/case-study" className="hover:text-blue-400">Case Study</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
            <li><a href="/news" className="hover:text-blue-400">News & Updates</a></li>
            <li><a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Subscribe to Newsletter</h3>
          <p>Get the latest updates directly in your inbox.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 rounded-md text-black focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Acres of Ice. All rights reserved.
      </div>
    </footer>
  );
}
