"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HeartPulse, Sparkles, Hotel, ArrowRight } from "lucide-react";
import WaitlistModal from "../components/waitlist"; // adjust path if needed

export default function TriageLivingPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-triage-navy text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[130vh]">

        <div className="sticky top-0 h-screen">

          <img
            src="images/blog/8.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-triage-navy/90" />

          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >

              <h1 className="text-4xl md:text-6xl font-semibold text-triage-teal">
                Care, reimagined as living
              </h1>

              <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto">
                TriageLiving blends clinical excellence with wellness and hospitality.
              </p>

              {/* ONLY CTA */}
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setOpen(true)}
                  className="px-8 py-4 rounded-full bg-triage-orange text-white flex items-center gap-2 hover:opacity-90 transition"
                >
                  Join Waitlist <ArrowRight size={18} />
                </button>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative -mt-32 pt-40 pb-24 px-6 bg-white">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-triage-teal/10 blur-3xl" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="images/blog/5.jpg"
            className="rounded-3xl shadow-xl border border-gray-200"
          />

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>

            <h2 className="text-4xl font-semibold text-triage-navy">
              Not a facility. A lifestyle.
            </h2>

            <p className="mt-4 text-triage-gray-600">
              Designed for comfort, dignity, and healing, TriageLiving merges healthcare with hospitality.
            </p>

          </motion.div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 px-6 bg-triage-navy">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-4xl font-semibold mb-16 text-triage-teal">
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
                desc: "Mindfulness, balance, and wellbeing.",
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
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-triage-orange/40 transition"
              >
                <item.icon className="text-triage-lime mb-4" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= IMAGE ================= */}
      <section className="py-24 px-6 bg-triage-navy">

        <div className="max-w-6xl mx-auto">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            src="images/blog/11.jpg"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />
        </div>

      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 px-6 text-center bg-white text-triage-navy">

        <motion.div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-semibold">
            This is not assisted living.
          </h2>

          <p className="mt-4 text-triage-gray-600 text-lg">
            This is living, with care, dignity, and peace of mind.
          </p>

        </motion.div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6 bg-triage-navy text-center">

        <motion.div>

          <h2 className="text-4xl font-semibold text-triage-teal">
            Experience the future of living
          </h2>

          <p className="mt-4 text-white/70">
            TriageLiving is launching soon.
          </p>

          {/* ONLY CTA */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setOpen(true)}
              className="px-8 py-4 rounded-full bg-triage-orange text-white flex items-center gap-2 hover:opacity-90 transition"
            >
              Join Waitlist <ArrowRight size={18} />
            </button>
          </div>

        </motion.div>

      </section>

      {/* MODAL */}
      <WaitlistModal isOpen={open} onClose={() => setOpen(false)} />

    </main>
  );
}