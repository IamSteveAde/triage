"use client";

import { motion } from "framer-motion";
import History from "../components/home/history";
import Types from "../components/home/types";
import CTA from "../components/home/testimonial";

export default function ServicesHero({ children }: { children?: React.ReactNode }) {
  return (
    <>
   <section className="relative min-h-[100svh] w-full overflow-hidden text-white flex items-center py-20">

      {/* 🌌 FIXED BACKGROUND */}
    <div className="absolute inset-0 -z-10">

        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000"
          alt="Healthcare at home"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* BRAND GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021C1A]/80 via-[#0B3C5D]/60 to-transparent" />

        {/* LIGHT GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,200,0.15),transparent_60%)]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center">

        <div className="max-w-7xl mx-auto px-6  py-12 w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >

            {/* SMALL LABEL */}
            <p className="text-teal-300 uppercase tracking-widest text-sm mb-4">
              Our Services
            </p>

            {/* HEADLINE */}
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">

              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                Healthcare, delivered
              </span>

              <br />

              <span className="text-white">
                to your home
              </span>

            </h1>

            {/* SUBTEXT */}
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              From everyday wellness to urgent care, we bring trusted professionals directly to you — quickly, safely, and reliably.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">

              {/* PRIMARY */}
              <button className="group relative px-8 py-4 rounded-full overflow-hidden">

                <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-600 transition duration-500 group-hover:scale-110" />

                <span className="relative z-10 text-black font-medium flex items-center gap-2">
                  Get Care Now
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </button>

              {/* SECONDARY */}
              <button className="group relative px-8 py-4 rounded-full border border-white/20 backdrop-blur-xl bg-white/5 overflow-hidden">

                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10" />

                <span className="relative z-10 text-white/90 font-medium flex items-center gap-2">
                  Speak to Concierge
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>

              </button>

            </div>

          </motion.div>

          {/* RIGHT SIDE (SLOT FOR <core /> OR ANY COMPONENT) */}
          <motion.div
  initial={{ opacity: 0, scale: 0.95, y: 40 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 order-2 lg:order-none"
>
  <div className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[280px] rounded-3xl p-3 sm:p-4 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

    {/* GLOW */}
    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,200,0.15),transparent_70%)] opacity-40 pointer-events-none" />

    {/* IMAGE */}
    <div className="relative z-10">
      <img
        src="/images/hero/appi.png"
        alt="Triage App Preview"
        className="w-full h-auto rounded-2xl object-contain"
      />
    </div>

  </div>
</motion.div>
        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">

        <span className="text-xs tracking-widest uppercase">
          Scroll
        </span>

        <div className="w-[2px] h-10 bg-gradient-to-b from-white to-transparent animate-pulse" />

      </div>

    </section>
    
    <History />
     <Types />
      <CTA />
    </>
  );
}