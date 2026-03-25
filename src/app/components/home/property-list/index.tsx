"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, MapPin, UserCheck } from "lucide-react";

const features = [
  {
    title: "Verified Professionals",
    desc: "Every provider is carefully vetted, trained, and certified for quality care.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response",
    desc: "Get matched with a healthcare professional in minutes.",
    icon: Clock,
  },
  {
    title: "Safe & Reliable",
    desc: "Consistent, secure care you can depend on every time.",
    icon: UserCheck,
  },
  {
    title: "Real-Time Matching",
    desc: "We connect you with the closest available provider instantly.",
    icon: MapPin,
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden text-gray-900">

      {/* 🌤️ BRIGHT BACKGROUND */}
      <div className="absolute inset-0 z-0">

        {/* Base light gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9]" />

        {/* Soft ambient brand glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(20,184,166,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.08),transparent_50%)]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Care you can trust, every time
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Verified professionals. Reliable response. Peace of mind.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-black/5 shadow-sm hover:shadow-xl transition-all"
              >

                {/* Subtle gradient hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-teal-500/5 via-cyan-400/5 to-transparent" />

                {/* CONTENT */}
                <div className="relative z-10 flex gap-5">

                  {/* ICON */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-400/10 text-teal-600">
                    <Icon size={22} />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg text-black/70 font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                </div>

                {/* Border glow */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-teal-200 transition duration-500" />

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}