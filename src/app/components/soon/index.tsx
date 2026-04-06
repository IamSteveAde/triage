"use client";

import { motion } from "framer-motion";

export default function JoinTriageSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* 🌍 OUTER BACKGROUND */}
      <div className="absolute inset-0 bg-[#F8FAFC]" />

      {/* 🧊 CONTENT WRAPPER (NOT FULL WIDTH) */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

          {/* 🎨 DEEP BRAND BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#052E2B] via-[#064E4A] to-[#021C1A]" />

          {/* 🌕 SOFT CIRCLE ELEMENTS */}
          <div className="absolute inset-0">

            {/* big glow */}
            <div className="absolute w-[500px] h-[500px] bg-teal-400/20 blur-[120px] rounded-full -top-40 -left-40" />

            {/* second circle */}
            <div className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full bottom-[-100px] right-[-80px]" />

            {/* subtle center glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,200,0.08),transparent_70%)]" />

          </div>

          {/* ✨ CONTENT */}
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center p-10 md:p-16 text-white">

            {/* 📝 TEXT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >

              {/* small label */}
              <p className="text-teal-300 text-sm uppercase tracking-widest mb-4">
                Triage Home Care
              </p>

              <h2 className="text-4xl text-white md:text-5xl font-semibold leading-tight">
                Join TriageHome
              </h2>

              <p className="mt-6 text-white/80 text-lg max-w-md leading-relaxed">
                Experience a smarter, more connected way to access home healthcare.  
                Built for comfort, speed, and peace of mind, right where you are.
              </p>

              {/* 📱 STORE BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">

                {/* GOOGLE PLAY */}
                <div className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <p className="text-xs text-white/60">Coming soon on</p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>

                {/* APP STORE */}
                <div className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <p className="text-xs text-white/60">Coming soon on</p>
                  <p className="text-lg font-semibold">App Store</p>
                </div>

              </div>

            </motion.div>

            {/* 🖼️ IMAGE SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative"
            >

              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

                <img
                  src="images/blog/11.jpg"
                  alt="Triage Home Care"
                  className="w-full h-[360px] md:h-[420px] object-cover"
                />

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}