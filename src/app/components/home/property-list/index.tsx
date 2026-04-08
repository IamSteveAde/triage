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
    <section className="relative py-28 px-6 overflow-hidden text-triage-navy">

      {/* 🌤️ BACKGROUND */}
      <div className="absolute inset-0 z-0">

        {/* clean light background */}
        <div className="absolute inset-0 bg-triage-gray-50" />

        {/* subtle radial accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(166,210,0,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,185,157,0.05),transparent_50%)]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-triage-navy">
            Care you can trust, every time
          </h2>

          <p className="mt-4 text-triage-gray-600 text-lg">
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
                className="group relative p-8 rounded-2xl bg-white border border-triage-gray-200 shadow-sm hover:shadow-xl transition-all"
              >

                {/* subtle hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-triage-orange/5" />

                {/* CONTENT */}
                <div className="relative z-10 flex gap-5">

                  {/* ICON */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-triage-orange/10 text-triage-orange">
                    <Icon size={22} />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg text-triage-navy font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-triage-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                </div>

                {/* border hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-triage-orange/30 transition duration-500" />

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}