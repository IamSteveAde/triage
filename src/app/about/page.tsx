"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden text-white">

      {/* ===================================================== */}
      {/* 🟢 HERO */}
      {/* ===================================================== */}

      <section className="relative h-screen flex items-center justify-center text-center px-6">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-blue-500/20 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl text-white md:text-6xl font-semibold leading-tight">
            Redefining how care
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300 bg-clip-text text-white/70">
              reaches you
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/70">
            At TriageHome, we believe healthcare should come to you — simple,
            fast, and built around your life.
          </p>
        </motion.div>

      </section>

      {/* ===================================================== */}
      {/* 🌀 ORBIT SECTION (SIGNATURE) */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6 bg-[#020617] overflow-hidden">

        <div className="max-w-6xl mx-auto text-center relative">

          <h2 className="text-4xl text-white md:text-5xl font-semibold mb-16">
            Care, designed around you
          </h2>

          {/* ORBIT CONTAINER */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">

            {/* CENTER */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-black font-semibold">
                Triage
              </div>
            </div>

            {/* ORBIT RING */}
            <div className="absolute inset-0 border border-white/10 rounded-full" />

            {/* ORBIT ITEMS */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10 + i * 2,
                  ease: "linear",
                }}
                className="absolute inset-0"
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
                />
              </motion.div>
            ))}

          </div>

          <p className="mt-16 text-white/70 max-w-2xl mx-auto text-lg">
            We combine technology, people, and care to create a seamless
            healthcare experience — one that moves with you, adapts to you, and
            supports you at every stage.
          </p>

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🔵 MISSION / VISION */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6 bg-gradient-to-br from-[#F0FDFA] via-[#ECFEFF] to-[#F9FFFE] text-gray-900">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-3xl text-black/70 font-semibold">
              Our Mission
            </h3>

            <p className="mt-6 text-black/70 text-lg text-gray-600">
              To make quality healthcare accessible at home — removing barriers,
              reducing delays, and improving lives through faster, smarter care.
            </p>

          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-3xl text-black/70 font-semibold">
              Our Vision
            </h3>

            <p className="mt-6 text-lg text-black/70 text-gray-600">
              A world where healthcare is not a place you go, but a service that
              comes to you — seamlessly integrated into everyday life.
            </p>

          </motion.div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🔴 FINAL CTA */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6 text-center text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-[#021C1A] via-[#0B3C5D] to-[#020617]" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <h2 className="text-4xl text-white md:text-5xl font-semibold">
            Join us in redefining healthcare
          </h2>

          <p className="mt-6 text-white/70 text-lg">
            Whether you're seeking care or looking to partner, we’re building
            something meaningful — and you can be part of it.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-medium">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20">
              Partner With Us
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}