"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  UserCheck,
  MapPin,
  Home,
} from "lucide-react";

const items = [
  {
    title: "TriageApp",
    desc: "Book, track, and manage care seamlessly in one place.",
    icon: Smartphone,
    color: "from-emerald-400 to-teal-400",
  },
  {
    title: "TriageConcierge",
    desc: "A dedicated expert managing your care end-to-end.",
    icon: UserCheck,
    color: "from-purple-400 to-indigo-400",
  },
  {
    title: "TriagePods",
    desc: "Extending care to underserved and last-mile communities.",
    icon: MapPin,
    color: "from-yellow-400 to-orange-400",
  },
  {
    title: "TriageLiving",
    desc: "Wellness-focused assisted living with clinical care.",
    icon: Home,
    color: "from-blue-400 to-cyan-400",
  },
];

export default function EcosystemSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden text-white">

      {/* 🌌 DARK BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0B3C5D] to-[#021C1A]" />

        {/* glow */}
        <div className="absolute w-[500px] h-[500px] bg-teal-500/20 blur-[120px] rounded-full -top-40 -left-40" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full bottom-[-120px] right-[-80px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center flex flex-col items-center justify-center mb-20">

  <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-center">

    <span className="block text-white">
      One system.
    </span>

    <span className="block bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300 bg-clip-text text-white/70">
      Multiple ways to care.
    </span>

  </h2>

  <p className="mt-6 text-white/70 max-w-2xl text-lg text-center">
    We’ve built an integrated ecosystem designed to deliver care seamlessly across different needs and environments.
  </p>

</div>
        {/* 🔥 HORIZONTAL CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all"
              >

                {/* ICON */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color} text-black mb-4`}
                >
                  <Icon size={20} />
                </div>

                {/* TEXT */}
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition border border-teal-300/30" />

              </motion.div>
            );
          })}

        </div>

        {/* FOOTNOTE */}
        <p className="mt-16 text-center text-white/50 max-w-xl mx-auto">
          Every part of Triage works together, so your care is never fragmented.
        </p>

      </div>

    </section>
  );
}