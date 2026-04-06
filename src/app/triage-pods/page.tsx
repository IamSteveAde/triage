"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Zap, Layers, ArrowRight, Activity } from "lucide-react";

export default function TriagePodsPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[130vh]">

        {/* STICKY HERO */}
        <div className="sticky top-0 h-screen">

          {/* Background Image */}
          <img
            src="images/blog/13.webp"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#021C1A]/95 via-[#0B3C5D]/90 to-[#020617]/95" />

          {/* GRID */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Healthcare, deployed anywhere
              </h1>

              <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto">
                TriagePods bring hospitals closer to people, unlocking access,
                speed, and scale across Africa.
              </p>

              <div className="mt-10 flex justify-center gap-4 flex-wrap">
                <Link href="/contact">
                  <button className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-medium hover:scale-105 transition flex items-center gap-2">
                    Get early access <ArrowRight size={18} />
                  </button>
                </Link>

                <Link href="/about">
                  <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white hover:text-black transition">
                    See how it works
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= TRANSITION SECTION (NO GAP) ================= */}
      <section className="relative -mt-32 pt-40 pb-24 px-6 bg-gradient-to-b from-[#020617] to-[#020617]">

        {/* glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-blue-500/20 blur-3xl" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="images/blog/13.webp"
            className="rounded-3xl shadow-2xl border border-white/10"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-semibold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              A hospital, without the hospital
            </h2>

            <p className="mt-4 text-white/70">
              Modular, mobile, and fully equipped, delivering consultations,
              diagnostics, and care anywhere.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative py-24 px-6 bg-[#020617]">

        {/* grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">

          <h2 className="text-center text-4xl font-semibold mb-16 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Built for real-world healthcare
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { icon: Globe, title: "Reach Anywhere", desc: "Deploy instantly." },
              { icon: Zap, title: "Deploy Fast", desc: "Launch in days." },
              { icon: Layers, title: "Scale Seamlessly", desc: "Grow endlessly." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-teal-400/40 transition"
              >
                <item.icon className="text-teal-400 mb-4" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 px-6 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Activity className="mx-auto mb-6" size={40} />

          <h2 className="text-4xl font-semibold">
            This is how healthcare scales
          </h2>

          <p className="mt-4 text-white/90">
            Not by building more hospitals, but by bringing care closer.
          </p>
        </motion.div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6 bg-[#020617] text-center relative">

        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            The future of care is here
          </h2>

          <p className="mt-4 text-white/70">
            TriagePods are launching soon.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">

            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition flex items-center gap-2">
                Join the waitlist <ArrowRight size={18} />
              </button>
            </Link>

            <Link href="/about">
              <button className="px-6 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
                Explore Triage
              </button>
            </Link>

          </div>
        </motion.div>

      </section>

    </main>
  );
}