"use client";

import { motion } from "framer-motion";
import { ClipboardList, UserCheck, Truck } from "lucide-react";

const steps = [
  {
    title: "Request Care",
    desc: "Tell us what you need and where you are. It takes less than a minute.",
    icon: ClipboardList,
  },
  {
    title: "Get Matched",
    desc: "We instantly connect you with a verified healthcare professional near you.",
    icon: UserCheck,
  },
  {
    title: "Receive Care",
    desc: "A qualified provider arrives at your doorstep — fast, safe, and reliable.",
    icon: Truck,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-32 px-6 overflow-hidden text-white">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041F1E] via-[#063F3B] to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(20,184,166,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.15),transparent_50%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
              Care, in three simple steps
            </span>
          </h2>

          <p className="mt-4 text-gray-300 text-lg">
            From request to care — seamless, reliable, and fast.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-teal-500/40 via-cyan-400/30 to-transparent" />

          <div className="space-y-20">

            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              const Icon = step.icon;

              return (
                <div
                  key={i}
                  className="relative flex items-center justify-between"
                >

                  {/* LEFT */}
                  <div className={`w-[45%] ${isLeft ? "block" : "invisible"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                    >

                      {/* ICON */}
                      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400 shadow-[0_0_25px_rgba(0,255,200,0.35)]">

                        <Icon className="w-6 h-6 text-[#022c22]" />

                      </div>

                      {/* Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)]" />

                      <h3 className="text-2xl font-semibold">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-gray-300">
                        {step.desc}
                      </p>

                    </motion.div>
                  </div>

                  {/* CENTER NODE */}
                  <div className="relative z-10 flex items-center justify-center">

                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 shadow-[0_0_20px_rgba(0,255,200,0.6)]" />

                  </div>

                  {/* RIGHT */}
                  <div className={`w-[45%] ${!isLeft ? "block" : "invisible"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                    >

                      {/* ICON */}
                      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400 shadow-[0_0_25px_rgba(0,255,200,0.35)]">

                        <Icon className="w-6 h-6 text-[#022c22]" />

                      </div>

                      {/* Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)]" />

                      <h3 className="text-2xl font-semibold">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-gray-300">
                        {step.desc}
                      </p>

                    </motion.div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}