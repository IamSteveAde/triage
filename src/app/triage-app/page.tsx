"use client";

import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  HeartPulse,
  Layers,
} from "lucide-react";
import { useState } from "react";
import WaitlistModal from "../components/waitlist"; // ✅ adjust path if needed

export default function TriageAppPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative overflow-hidden text-white">

      {/* ===================================================== */}
      {/* 🟢 HERO */}
      {/* ===================================================== */}

      <section className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-triage-navy" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(166,210,0,0.08),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(0deg,white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}>

            <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
              <span className="text-triage-teal">
                Healthcare,
              </span>
              <br />
              on your terms.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
              Get trusted medical care at home in minutes, book, track, and receive care seamlessly with the TriageHome App.
            </p>

            <p className="mt-4 text-white/50 italic">
              No hospitals. No waiting. Just care, where you are.
            </p>

            {/* ✅ CTA */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button
                onClick={() => setOpen(true)}
                className="px-8 py-4 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white flex items-center gap-2 transition"
              >
                Join the waitlist <ArrowRight size={18} />
              </button>

            </div>

            <p className="mt-6 text-sm text-white/50">
              Licensed professionals • Real-time tracking • Available on demand
            </p>

          </motion.div>

          {/* APP MOCK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[260px] rounded-3xl p-4 bg-white/5 backdrop-blur border border-white/10 shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(166,210,0,0.08),transparent_70%)]" />
              <img src="/images/hero/appi.webp" className="rounded-2xl relative z-10" />
            </div>
          </motion.div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🔵 SECTION 2 */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6">
        <div className="absolute inset-0 bg-triage-gray-50" />

        <div className="relative z-10 max-w-7xl mx-auto text-triage-navy">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Why people choose TriageHome
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              { icon: Clock, title: "Fast, On-Demand Care", desc: "Request a visit in seconds and get matched instantly.", color:"bg-triage-orange"},
              { icon: MapPin, title: "Real-Time Tracking", desc: "Know exactly when your provider will arrive.", color:"bg-triage-teal"},
              { icon: ShieldCheck, title: "Trusted Professionals", desc: "Every provider is verified and experienced.", color:"bg-triage-navy"},
              { icon: HeartPulse, title: "Comfort & Convenience", desc: "Skip hospital queues and stay at home.", color:"bg-triage-lime"},
              { icon: Layers, title: "All-in-One Experience", desc: "Everything is managed seamlessly in one app.", color:"bg-triage-purple"},
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div key={i} whileHover={{ y: -6 }} className="p-8 rounded-2xl bg-white border border-triage-gray-200 shadow-sm hover:shadow-xl">

                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.color} text-white mb-5`}>
                    <Icon size={20} />
                  </div>

                  <h3 className="text-xl text-black font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-triage-gray-600">
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* ===================================================== */}
      {/* 🟣 FINAL CTA */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-triage-navy" />

        <div className="relative z-10 max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-5xl text-white font-semibold">
            Care is just a tap away
          </h2>

          <p className="mt-6 text-white/80 text-lg">
            Download the TriageHome App and experience a faster, smarter, and more human way to access healthcare.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">

  {/* 🍎 APP STORE */}
  <div className="relative w-[260px]">

    <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10" />

    <button
      disabled
      className="relative w-full px-6 py-4 rounded-2xl flex items-center gap-4 text-left opacity-90 cursor-not-allowed"
    >
      {/* ICON */}
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
        <Download size={18} className="text-white" />
      </div>

      {/* TEXT */}
      <div className="flex flex-col leading-tight">
        <span className="text-xs text-white/60">Coming soon on</span>
        <span className="text-base font-semibold text-white">
          App Store
        </span>
      </div>

      {/* STATUS DOT */}
      <div className="ml-auto w-2.5 h-2.5 rounded-full bg-triage-orange animate-pulse" />
    </button>

  </div>

  {/* 🤖 GOOGLE PLAY */}
  <div className="relative w-[260px]">

    <div className="absolute inset-0 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10" />

    <button
      disabled
      className="relative w-full px-6 py-4 rounded-2xl flex items-center gap-4 text-left opacity-90 cursor-not-allowed"
    >
      {/* ICON */}
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
        <Download size={18} className="text-white" />
      </div>

      {/* TEXT */}
      <div className="flex flex-col leading-tight">
        <span className="text-xs text-white/60">Coming soon on</span>
        <span className="text-base font-semibold text-white">
          Google Play
        </span>
      </div>

      {/* STATUS DOT */}
      <div className="ml-auto w-2.5 h-2.5 rounded-full bg-triage-teal animate-pulse" />
    </button>

  </div>

</div>

        </div>
      </section>

      {/* ✅ MODAL (GLOBAL) */}
      <WaitlistModal isOpen={open} onClose={() => setOpen(false)} />

    </main>
  );
}