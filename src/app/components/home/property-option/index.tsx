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
    desc: "A qualified provider arrives at your doorstep, fast, safe, and reliable.",
    icon: Truck,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32 px-5 md:px-6 overflow-hidden text-white">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041F1E] via-[#063F3B] to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(20,184,166,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
              Care, in three simple steps
            </span>
          </h2>

          <p className="mt-4 text-gray-300 text-base md:text-lg">
            From request to care, seamless, reliable, and fast.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* MOBILE LINE */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-teal-500/40 via-cyan-400/30 to-transparent md:hidden" />

          {/* DESKTOP LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-teal-500/40 via-cyan-400/30 to-transparent" />

          <div className="space-y-12 md:space-y-20">

            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              const Icon = step.icon;

              return (
                <div key={i} className="relative">

                  {/* MOBILE VERSION */}
                  <div className="md:hidden flex gap-6 items-start">

                    {/* DOT */}
                    <div className="relative z-10 mt-2">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 shadow-[0_0_15px_rgba(0,255,200,0.6)]" />
                    </div>

                    {/* CARD */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="flex-1 group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                    >

                      <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400">

                        <Icon className="w-5 h-5 text-[#022c22]" />

                      </div>

                      <h3 className="text-xl font-semibold">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-gray-300 text-sm">
                        {step.desc}
                      </p>

                    </motion.div>

                  </div>

                  {/* DESKTOP VERSION */}
                  <div className="hidden md:flex items-center justify-between">

                    {/* LEFT */}
                    <div className="w-[45%]">
                      {isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: -60 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                        >

                          <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400">

                            <Icon className="w-6 h-6 text-[#022c22]" />

                          </div>

                          <h3 className="text-2xl font-semibold">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-gray-300">
                            {step.desc}
                          </p>

                        </motion.div>
                      )}
                    </div>

                    {/* CENTER DOT */}
                    <div className="relative z-10 flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 shadow-[0_0_20px_rgba(0,255,200,0.6)]" />
                    </div>

                    {/* RIGHT */}
                    <div className="w-[45%]">
                      {!isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: 60 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
                        >

                          <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400">

                            <Icon className="w-6 h-6 text-[#022c22]" />

                          </div>

                          <h3 className="text-2xl font-semibold">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-gray-300">
                            {step.desc}
                          </p>

                        </motion.div>
                      )}
                    </div>

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