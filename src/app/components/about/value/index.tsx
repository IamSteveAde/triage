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
    color: "bg-triage-purple",
  },
  {
    title: "Human-Centered Approach",
    desc: "We design every experience around real people, real needs, and real lives.",
    icon: Heart,
    color: "bg-triage-orange",
  },
  {
    title: "Trust & Accountability",
    desc: "We hold ourselves to the highest standards, ensuring every interaction is safe and reliable.",
    icon: ShieldCheck,
    color: "bg-triage-navy",
  },
  {
    title: "Speed & Responsiveness",
    desc: "We understand that time matters in healthcare, and we are built to respond quickly.",
    icon: Zap,
    color: "bg-triage-teal",
  },
  {
    title: "Accessibility",
    desc: "We are committed to expanding access to quality healthcare, regardless of location.",
    icon: Globe,
    color: "bg-triage-lime",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="relative py-32 px-6 overflow-hidden text-triage-navy">

      {/* 🔷 BACKGROUND */}
      <div className="absolute inset-0 bg-triage-gray-50" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(0deg,black_1px,transparent_1px),linear-gradient(90deg,black_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ============================ */}
        {/* 🔷 MISSION & VISION */}
        {/* ============================ */}

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >

            {/* vertical line */}
            <div className="absolute left-0 top-0 h-full w-[2px] bg-triage-orange" />

            <div className="pl-6">

              <p className="text-sm uppercase tracking-widest text-triage-orange mb-4">
                Our Mission
              </p>

              <h3 className="text-3xl md:text-4xl font-semibold leading-tight text-triage-navy">
                Making healthcare
                <span className="block text-triage-teal">
                  accessible at home
                </span>
              </h3>

              <p className="mt-6 text-triage-gray-600 text-lg leading-relaxed">
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
            <div className="absolute left-0 top-0 h-full w-[2px] bg-triage-teal" />

            <div className="pl-6">

              <p className="text-sm uppercase tracking-widest text-triage-teal mb-4">
                Our Vision
              </p>

              <h3 className="text-3xl md:text-4xl font-semibold leading-tight text-triage-navy">
                A world where care
                <span className="block text-triage-lime">
                  comes to you
                </span>
              </h3>

              <p className="mt-6 text-triage-gray-600 text-lg leading-relaxed">
                A world where healthcare is not a place you go, but a service that comes to you, seamlessly integrated into everyday life.
              </p>

            </div>

          </motion.div>

        </div>

        {/* ============================ */}
        {/* 💎 VALUES */}
        {/* ============================ */}

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-semibold text-triage-navy">
            What drives us
          </h2>

          <div className="mt-4 w-20 h-[2px] mx-auto bg-triage-orange" />

        </div>

        {/* VALUES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-2xl bg-white shadow-sm border border-triage-gray-200 hover:shadow-xl transition"
              >

                {/* top line */}
                <div className={`absolute top-0 left-0 w-full h-[2px] ${item.color}`} />

                {/* icon */}
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.color} text-white mb-4`}>
                  <Icon size={20} />
                </div>

                <h3 className="text-lg font-semibold text-triage-navy">
                  {item.title}
                </h3>

                <p className="mt-3 text-triage-gray-600 text-sm leading-relaxed">
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