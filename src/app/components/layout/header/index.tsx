"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "TriageApp", href: "/triage-app" },
  { name: "TriageConcierge", href: "/triage-concierge" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Contact", href: "/contact" },
  
];

export default function PremiumNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
  <Image
    src="/images/logo/triage.png"
    alt="TriageHome Logo"
    width={140}
    height={40}
    priority
    className={`transition-all duration-500 ${
      scrolled
        ? "filter-none opacity-100"
        : "brightness-0 invert opacity-90"
    }`}
  />
</Link>

          {/* NAV ITEMS */}
          <div className="hidden md:flex items-center gap-8">

            {navItems.map((item, i) => (
             <Link key={i} href={item.href} className="relative group cursor-pointer">

                <div
                  className={`flex items-center gap-2 text-sm font-medium transition ${
                    scrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                 {item.name}

                  {/* ARROW → rotates ↑ */}
                  <motion.span
                    className="text-xs"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: -90 }}
                    transition={{ duration: 0.25 }}
                  >
                    →
                  </motion.span>
                </div>

                {/* CENTER EXPAND LINE */}
                <span className="absolute left-1/2 bottom-[-6px] h-[2px] w-0 bg-teal-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                   </Link>
            
            ))}

            {/* CTA BUTTON */}
            <button className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-medium shadow-md hover:shadow-lg transition">
              Get Started
            </button>

          </div>

          {/* MOBILE MENU BUTTON */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="flex flex-col gap-1">
              <span className={`w-6 h-[2px] ${scrolled ? "bg-black" : "bg-white"}`} />
              <span className={`w-6 h-[2px] ${scrolled ? "bg-black" : "bg-white"}`} />
            </div>
          </div>

        </div>

        {/* 🔥 ANIMATED GRADIENT LINE */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden">
          <div className="w-[200%] h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 animate-gradientMove" />
        </div>

      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.05 }}
  >
    <Link
      href={item.href}
      onClick={() => setMobileOpen(false)} // 👈 CLOSE MENU AFTER CLICK
      className="text-2xl font-semibold text-gray-900"
    >
      {item.name}
    </Link>
  </motion.div>
))}
            <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
              Get Started
            </button>

            <div
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-2xl"
            >
              ✕
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔁 GRADIENT ANIMATION STYLE */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-gradientMove {
          animation: gradientMove 4s linear infinite;
        }
      `}</style>
    </>
  );
}