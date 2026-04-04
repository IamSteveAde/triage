"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeartPulse, Sparkles, Hotel, ArrowRight } from "lucide-react";

export default function TriageLivingPage() {
  return (
    <main className="bg-[#020617] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[130vh]">

        <div className="sticky top-0 h-screen">

          {/* Background */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Soft wellness overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#021C1A]/80 via-[#0B3C5D]/70 to-[#020617]/90" />

          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Care, reimagined as living
              </h1>

              <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto">
                TriageLiving blends clinical excellence with wellness,
                hospitality, and Eastern healing — creating a new standard
                for assisted living.
              </p>

              <div className="mt-10 flex justify-center gap-4 flex-wrap">

                <Link href="/contact">
                  <button className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-medium hover:scale-105 transition flex items-center gap-2">
                    Reserve early access <ArrowRight size={18} />
                  </button>
                </Link>

                <Link href="/about">
                  <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white hover:text-black transition">
                    Explore the concept
                  </button>
                </Link>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative -mt-32 pt-40 pb-24 px-6 bg-[#020617]">

        {/* glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-blue-500/20 blur-3xl" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2000"
            className="rounded-3xl shadow-2xl border border-white/10"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-semibold bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Not a facility. A lifestyle.
            </h2>

            <p className="mt-4 text-white/70">
              Designed for comfort, dignity, and healing — TriageLiving merges
              healthcare with hospitality, creating spaces people actually
              want to live in.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#021C1A] via-[#020617] to-[#0B3C5D]">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-4xl font-semibold mb-16 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            A new category of care
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: HeartPulse,
                title: "Clinical + Wellness",
                desc: "Medical care integrated with holistic healing.",
              },
              {
                icon: Sparkles,
                title: "Eastern Healing",
                desc: "Mindfulness, balance, and long-term wellbeing.",
              },
              {
                icon: Hotel,
                title: "Hospitality Living",
                desc: "Comfort, design, and experience come first.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-teal-400/40 transition"
              >
                <item.icon className="text-teal-300 mb-4" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= IMAGE BREAK ================= */}
      <section className="py-24 px-6 bg-[#020617]">

        <div className="max-w-6xl mx-auto">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />
        </div>

      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-semibold">
            This is not assisted living.
          </h2>

          <p className="mt-4 text-white/90 text-lg">
            This is living — with care, dignity, and peace of mind.
          </p>
        </motion.div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6 bg-[#020617] text-center relative">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Experience the future of living
          </h2>

          <p className="mt-4 text-white/70">
            TriageLiving is launching soon.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">

            <Link href="/contact">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition flex items-center gap-2">
                Join the waitlist <ArrowRight size={18} />
              </button>
            </Link>

            <Link href="/about">
              <button className="px-6 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
                Learn more
              </button>
            </Link>

          </div>
        </motion.div>

      </section>

    </main>
  );
}