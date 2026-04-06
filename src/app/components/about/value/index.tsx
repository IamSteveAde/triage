"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";

const values = [
  {
    title: "Intelligence in Care",
    desc: "We use data and technology to make care smarter, faster, and more effective.",
    icon: Brain,
  },
  {
    title: "Human-Centered Approach",
    desc: "We design every experience around real people, real needs, and real lives.",
    icon: Heart,
  },
  {
    title: "Trust & Accountability",
    desc: "We hold ourselves to the highest standards, ensuring every interaction is safe and reliable.",
    icon: ShieldCheck,
  },
  {
    title: "Speed & Responsiveness",
    desc: "We understand that time matters in healthcare, and we are built to respond quickly.",
    icon: Zap,
  },
  {
    title: "Accessibility",
    desc: "We are committed to expanding access to quality healthcare, regardless of location.",
    icon: Globe,
  },
];

export default function MissionVisionValues() {
  return (
    <section className="relative py-32 px-6 overflow-hidden text-gray-900">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F0FDFA] to-[#ECFEFF]" />

      {/* subtle lines */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(0deg,black_1px,transparent_1px),linear-gradient(90deg,black_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ============================ */}
        {/* 🟢 MISSION & VISION */}
        {/* ============================ */}

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >

            {/* vertical line */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-teal-400 to-transparent" />

            <div className="pl-6">

              <p className="text-sm uppercase tracking-widest text-teal-500 mb-4">
                Our Mission
              </p>

              <h3 className="text-3xl md:text-4xl text-black/70 font-semibold leading-tight">
                Making healthcare
                <span className="block bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  accessible at home
                </span>
              </h3>

              <p className="mt-6 text-gray-600 text-lg text-black/70 leading-relaxed">
                To make quality healthcare accessible at home, removing barriers, reducing delays, and improving lives through faster, smarter care.
              </p>

            </div>

          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >

            {/* vertical line */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 to-transparent" />

            <div className="pl-6">

              <p className="text-sm uppercase text-black/70 tracking-widest text-cyan-500 mb-4">
                Our Vision
              </p>

              <h3 className="text-3xl md:text-4xl text-black/70 font-semibold leading-tight">
                A world where care
                <span className="block bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-teal-500 ">
                  comes to you
                </span>
              </h3>

              <p className="mt-6 text-gray-600 text-lg text-black/70 leading-relaxed">
                A world where healthcare is not a place you go, but a service that comes to you, seamlessly integrated into everyday life.
              </p>

            </div>

          </motion.div>

        </div>

        {/* ============================ */}
        {/* 💎 VALUES */}
        {/* ============================ */}

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-semibold">
            What drives us
          </h2>

          <div className="mt-4 w-20 h-[2px] mx-auto bg-gradient-to-r from-teal-400 to-cyan-400" />

        </div>

        {/* VALUES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl bg-white shadow-sm border border-black/5 hover:shadow-xl transition"
              >

                {/* top line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 opacity-40" />

                {/* icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400 text-white mb-4">
                  <Icon size={20} />
                </div>

                <h3 className="text-lg text-teal-500 font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-black text-sm leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}