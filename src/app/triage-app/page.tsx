"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, ShieldCheck, Clock, MapPin, HeartPulse, Layers } from "lucide-react";

export default function TriageAppPage() {
  return (
    <main className="relative overflow-hidden text-white">

      {/* ===================================================== */}
      {/* 🟢 SECTION 1 — HERO */}
      {/* ===================================================== */}

      <section className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">

          <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0B3C5D] to-[#022C22]" />

          {/* Glow layers */}
          <div className="absolute w-[600px] h-[600px] bg-blue-500/30 blur-[140px] rounded-full -top-40 -left-40" />
          <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 blur-[140px] rounded-full bottom-[-120px] right-[-80px]" />

          {/* subtle grid */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(0deg,white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:60px_60px]" />

        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-4xl md:text-6xl text-white font-semibold leading-tight">
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Healthcare,
              </span>
              <br />
              on your terms.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              Get trusted medical care at home in minutes — book, track, and receive care seamlessly with the Triage App.
            </p>

            <p className="mt-4 text-white/50 italic">
              No hospitals. No waiting. Just care, where you are.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium flex items-center gap-2 hover:scale-[1.03] transition">
                Download the App <ArrowRight size={18} />
              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 backdrop-blur-xl hover:bg-white/10 transition">
                Join the Waitlist
              </button>

            </div>

            {/* TRUST LINE */}
            <p className="mt-6 text-sm text-white/50">
              Licensed professionals • Real-time tracking • Available on demand
            </p>

          </motion.div>

          {/* MOCK APP UI */}
          <motion.div
  initial={{ opacity: 0, scale: 0.95, y: 40 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="relative flex justify-center lg:justify-end mt-12 lg:mt-0"
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

      </section>

      {/* ===================================================== */}
      {/* 🔵 SECTION 2 — WHY TRIAGE */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6">

        {/* LIGHT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9FFFE] via-[#F0FDFA] to-[#ECFEFF]" />

        <div className="relative z-10 max-w-7xl mx-auto text-gray-900">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Why people choose Triage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                icon: Clock,
                title: "Fast, On-Demand Care",
                desc: "Request a visit in seconds and get matched instantly with a qualified provider near you.",
              },
              {
                icon: MapPin,
                title: "Real-Time Tracking",
                desc: "Know exactly when your provider will arrive — just like tracking a ride.",
              },
              {
                icon: ShieldCheck,
                title: "Trusted Professionals",
                desc: "Every provider is verified, experienced, and committed to quality care.",
              },
              {
                icon: HeartPulse,
                title: "Comfort & Convenience",
                desc: "Skip hospital queues and receive care in the comfort of your home.",
              },
              {
                icon: Layers,
                title: "All-in-One Experience",
                desc: "From booking to history, everything is managed seamlessly in one app.",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-white shadow-sm border border-black/5 hover:shadow-xl transition"
                >

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400 text-white mb-5">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-xl text-black/70 font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-black/70">
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🟣 SECTION 3 — FINAL CTA */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6 text-center overflow-hidden">

        {/* DARK BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021C1A] via-[#0B3C5D] to-[#020617]" />

        <div className="relative z-10 max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-5xl text-white font-semibold">
            Care is just a tap away
          </h2>

          <p className="mt-6 text-white/70 text-lg">
            Download the Triage App and experience a faster, smarter, and more human way to access healthcare.
          </p>

          <p className="mt-4 text-sm text-white/50">
            Be among the first to experience the future of home healthcare.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white flex items-center gap-2">
              <Download size={18} />
              Download on iOS
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 backdrop-blur-xl hover:bg-white/10 transition">
              Get it on Android
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}