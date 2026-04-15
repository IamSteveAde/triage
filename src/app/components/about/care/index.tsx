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
    color: "bg-triage-teal",
    border: "border-triage-teal/30",
  },
  {
    title: "TriageConcierge",
    desc: "A dedicated expert managing your care end-to-end.",
    icon: UserCheck,
    color: "bg-triage-purple",
    border: "border-triage-purple/30",
  },
  {
    title: "TriagePods",
    desc: "Extending care to underserved and last-mile communities.",
    icon: MapPin,
    color: "bg-triage-orange",
    border: "border-triage-orange/30",
  },
  {
    title: "TriageLiving",
    desc: "Wellness-focused assisted living with clinical care.",
    icon: Home,
    color: "bg-triage-navy",
    border: "border-triage-navy/30",
  },
];

export default function EcosystemSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden text-white">

      {/* 🔷 BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-triage-navy" />

        {/* subtle radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,210,0,0.05),transparent_70%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center flex flex-col items-center justify-center mb-20">

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-center">

            <span className="block text-white">
              One system.
            </span>

            <span className="block text-triage-lime">
              Multiple ways to care.
            </span>

          </h2>

          <p className="mt-6 text-white/70 max-w-2xl text-lg text-center">
            We’ve built an integrated ecosystem designed to deliver care seamlessly across different needs and environments.
          </p>

        </div>

        {/* CARDS */}
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
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} text-white mb-4`}
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

                {/* HOVER BORDER */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition border ${item.border}`} />

              </motion.div>
            );
          })}

        </div>

        {/* FOOTNOTE */}
        <p className="mt-16 text-center text-white/50 max-w-xl mx-auto">
          Every part of TriageHome works together, so your care is never fragmented.
        </p>

      </div>

    </section>
  );
}