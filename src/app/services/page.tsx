"use client";

import { motion } from "framer-motion";
import History from "../components/home/history";
import Types from "../components/home/types";
import CTA from "../components/home/testimonial";

export default function ServicesHero({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <section className="relative min-h-[100svh] w-full overflow-hidden text-white flex items-center py-20">

        {/* 🔷 BACKGROUND */}
        <div className="absolute inset-0 -z-10">

          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000"
            alt="Healthcare at home"
            className="w-full h-full object-cover"
          />

          {/* NAVY OVERLAY */}
          <div className="absolute inset-0 bg-triage-navy/85" />

          {/* subtle lime glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(166,210,0,0.08),transparent_60%)]" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex h-full items-center">

          <div className="max-w-7xl mx-auto px-6 py-12 w-full grid lg:grid-cols-2 gap-12 items-center">

            {/* TEXT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >

              {/* LABEL */}
              <p className="text-triage-lime uppercase tracking-widest text-sm mb-4">
                Our Services
              </p>

              {/* HEADLINE */}
              <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight">

                <span className="text-triage-teal">
                  Healthcare, delivered
                </span>

                <br />

                <span className="text-white">
                  to your home
                </span>

              </h1>

              {/* SUBTEXT */}
              <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
                From everyday wellness to urgent care, we bring trusted professionals directly to you, quickly, safely, and reliably.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">

                {/* PRIMARY CTA */}
                <button className="px-8 py-4 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-medium flex items-center gap-2 transition">
                  Get Care Now →
                </button>

                {/* SECONDARY CTA */}
                <button className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white/90 hover:border-triage-orange transition flex items-center gap-2">
                  Speak to Concierge →
                </button>

              </div>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 order-2 lg:order-none"
            >
              <div className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[280px] rounded-3xl p-3 sm:p-4 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

                {/* subtle glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(166,210,0,0.08),transparent_70%)] pointer-events-none" />

                <div className="relative z-10">
                  <img
                    src="/images/hero/appi.webp"
                    alt="Triage App Preview"
                    className="w-full h-auto rounded-2xl object-contain"
                  />
                </div>

              </div>
            </motion.div>

          </div>

        </div>

        {/* SCROLL */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">

          <span className="text-xs tracking-widest uppercase">
            Scroll
          </span>

          <div className="w-[2px] h-10 bg-white/40 animate-pulse" />

        </div>

      </section>

      <History />
      <Types />
      <CTA />
    </>
  );
}