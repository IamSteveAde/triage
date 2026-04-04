"use client";

import { motion } from "framer-motion";
import Who from "../components/about/who";
import Care from "../components/about/care";
import Value from "../components/about/value";
import Team from "../components/about/team";
import Cta from "../components/home/testimonial";

export default function AboutHero({ children }: { children?: React.ReactNode }) {
  return (
    <>
    <section className="relative w-full min-h-screen overflow-hidden text-white">

      {/* 🌌 FIXED BACKGROUND */}
      <div className="fixed inset-0 -z-10">

        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000"
          alt="Healthcare"
          className="w-full h-full object-cover"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#021C1A]/80 via-[#0B3C5D]/60 to-transparent" />

        {/* soft glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,200,0.15),transparent_60%)]" />

      </div>

      {/* 🌊 FLOATING ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute w-72 h-72 bg-teal-400/10 blur-[120px] rounded-full top-20 left-10"
        />

        <motion.div
          animate={{ y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute w-96 h-96 bg-cyan-400/10 blur-[140px] rounded-full bottom-10 right-10"
        />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >

          {/* SMALL LABEL */}
          <p className="text-teal-300 uppercase tracking-widest text-sm mb-6">
            About TriageHome
          </p>

          {/* HEADLINE */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">

            <span className="text-white">
              Redefining how care
            </span>

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,200,0.35)]">
              reaches you
            </span>

          </h1>

          {/* SUBTEXT */}
          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            At TriageHome, we’re building a smarter, more human way to experience healthcare — one that comes to you, adapts to you, and works around your life.
          </p>

          {/* MICROCOPY */}
          <p className="mt-4 text-white/50 italic">
            No waiting rooms. No uncertainty. Just care, where you are.
          </p>

        </motion.div>

        {/* ⬇️ SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-white/60"
        >

          <span className="text-xs tracking-widest uppercase">
            Scroll
          </span>

          <div className="w-[2px] h-10 bg-gradient-to-b from-white to-transparent" />

        </motion.div>

      </div>

      {/* 🧩 NEXT SECTIONS SLOT */}
      <div className="relative z-10">
       
        
      </div>

    </section>

     <Who />
        <Care />
        <Value />
        <Team />
         <Cta />
         </>
  );
}