"use client";
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8 md:gap-7">
        {/* 🎼 Column 1: About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white text-xl font-bold mb-4">🎵 About Music</h3>
          <p className="text-gray-400 leading-relaxed text-sm ">
            At <span className="text-teal-400 text-sm font-semibold">Music School</span>, we
            believe music is the language of the soul. Join our community of artists
            and learn, play, and perform with confidence.
          </p>
        </motion.div>

        {/* 🎹 Column 2: Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-white text-sm font-bold mb-4 lg:pl-7">Quick Links</h3>
          <ul className="space-y-3 text-sm lg:pl-7">
            {["Home", "Courses", "Instructors", "Events", "Contact"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-teal-400 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* 🎧 Column 3: Contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-white text-sm font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400 text-sm ">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-teal-400 shrink-0" /> info@harmoniqmusic.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-teal-400 shrink-0" /> +92 300 1234567
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-teal-400 shrink-0" /> Karachi, Pakistan
            </li>
          </ul>

          {/* 🌸 Social Icons */}
          <div className="flex flex-wrap gap-5 mt-6 text-sm">
            {[
              { icon: <FaInstagram />, color: "pink" },
              { icon: <FaFacebookF />, color: "blue" },
              { icon: <FaTwitter />, color: "sky" },
              { icon: <FaYoutube />, color: "red" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`text-gray-400 hover:text-${item.color}-400 text-sm transition-all duration-300`}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 💌 Column 4: Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-white text-sm font-bold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4 text-sm">
            Subscribe to get updates on new courses, events & music tips!
          </p>
          <form className="flex flex-col sm:flex-row ">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-1  bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 flex-1"
            />
            <button
              type="submit"
              className="px-2  bg-teal-500 hover:bg-teal-400 text-white font-medium  transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* 🌙 Bottom bar */}
      <div className="mt-10 text-center border-t border-gray-700 pt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Music School. All rights reserved.
      </div>
    </footer>
  );
}
