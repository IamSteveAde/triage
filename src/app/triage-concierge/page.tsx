"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  Clock,
  ShieldCheck,
  HeartHandshake,
  Layers,
} from "lucide-react";

const whatsappLink =
  "https://wa.me/2348000000000?text=Hello%20Triage%20Concierge%2C%20I%20would%20like%20assistance%20with%20healthcare%20services.";

const steps = [
  {
    icon: UserCheck,
    title: "Dedicated Care Coordination",
    desc: "A single point of contact who understands your needs and handles everything for you.",
  },
  {
    icon: Clock,
    title: "Priority Access",
    desc: "Skip the waiting. Get immediate access to trusted professionals when it matters most.",
  },
  {
    icon: Layers,
    title: "Personalized Care Plans",
    desc: "Every decision is tailored to your lifestyle, your needs, and your preferences.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    desc: "We stay with you — from first request to long-term care and follow-ups.",
  },
  {
    icon: ShieldCheck,
    title: "Peace of Mind",
    desc: "Every detail is handled by experienced professionals you can trust.",
  },
];

export default function ConciergePage() {
  return (
    <main className="relative overflow-hidden text-white">

      {/* ===================================================== */}
      {/* 🟢 HERO */}
      {/* ===================================================== */}

      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0B3C5D] to-[#021C1A]" />

        {/* glow */}
        <div className="absolute w-[700px] h-[700px] bg-cyan-400/20 blur-[140px] rounded-full -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] bg-teal-400/20 blur-[140px] rounded-full bottom-[-120px] right-[-80px]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl text-white md:text-6xl font-semibold"
          >
           <span className="bg-gradient-to-r from-cyan-200 via-teal-300 to-blue-200 bg-clip-text text-white drop-shadow-[0_0_20px_rgba(0,255,200,0.35)]">
  Healthcare,
</span>
            <br />
            handled for you.
          </motion.h1>

          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            A dedicated healthcare concierge that manages your needs end-to-end — from booking care to ongoing support.
          </p>

          <p className="mt-4 text-white/50 italic">
            Personal. Proactive. Always available.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <a
              href={whatsappLink}
              target="_blank"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-medium"
            >
              Speak on WhatsApp
            </a>

            <button className="px-8 py-4 rounded-full border border-white/20">
              Get Started
            </button>

          </div>

          <p className="mt-6 text-sm text-white/50">
            Available 24/7 on WhatsApp • Instant response • Human support
          </p>

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🔵 TIMELINE EXPERIENCE */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6">

        <div className="absolute inset-0 bg-gradient-to-br from-[#F9FFFE] via-[#F0FDFA] to-[#ECFEFF]" />

        <div className="relative z-10 max-w-5xl mx-auto text-gray-900">

          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-24">
            A smarter, more personal way to access care
          </h2>

          <div className="relative">

            {/* vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-teal-400 via-cyan-400 to-transparent" />

            <div className="space-y-24">

              {steps.map((step, i) => {
                const Icon = step.icon;
                const isLeft = i % 2 === 0;

                return (
                  <div
                    key={i}
                    className="relative flex flex-col md:flex-row items-center"
                  >

                    {/* LEFT */}
                    <div className={`md:w-1/2 ${isLeft ? "md:pr-12 text-right" : "md:order-2 md:pl-12 text-left"}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border border-black/5"
                      >
                        <h3 className="text-xl text-black font-semibold">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-black/70">
                          {step.desc}
                        </p>
                      </motion.div>
                    </div>

                    {/* CENTER DOT */}
                    <div className="relative z-10 flex items-center justify-center">

                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,200,0.5)]">

                        <Icon className="text-white" size={20} />

                      </div>

                    </div>

                    {/* RIGHT SPACER */}
                    <div className="md:w-1/2" />

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🟣 FINAL CTA */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6 text-center">

        <div className="absolute inset-0 bg-gradient-to-br from-[#021C1A] via-[#0B3C5D] to-[#020617]" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <h2 className="text-4xl text-white md:text-5xl font-semibold">
            Let us take care of everything
          </h2>

          <p className="mt-6 text-white/70 text-lg">
            With Triage Concierge, healthcare becomes effortless — giving you more time, clarity, and confidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href={whatsappLink}
              target="_blank"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-medium"
            >
              Request Concierge Access
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              className="px-8 py-4 rounded-full border border-white/20"
            >
              Speak to a Specialist
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}