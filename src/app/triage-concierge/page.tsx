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
    desc: "We stay with you, from first request to long-term care and follow-ups.",
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

        {/* NAVY BACKGROUND */}
        <div className="absolute inset-0 bg-triage-navy" />

        {/* subtle lime glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(166,210,0,0.08),transparent_60%)]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl text-white font-semibold"
          >
            <span className="text-triage-teal">
              Healthcare,
            </span>
            <br />
            handled for you.
          </motion.h1>

          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            A dedicated healthcare concierge that manages your needs end-to-end, from booking care to ongoing support.
          </p>

          <p className="mt-4 text-white/50 italic">
            Personal. Proactive. Always available.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <a
              href={whatsappLink}
              target="_blank"
              className="px-8 py-4 rounded-full bg-triage-orange text-white font-medium"
            >
              Speak on WhatsApp
            </a>

            <button className="px-8 py-4 rounded-full border border-white/20 hover:border-triage-orange transition">
              Get Started
            </button>

          </div>

          <p className="mt-6 text-sm text-white/50">
            Available 24/7 on WhatsApp • Instant response • Human support
          </p>

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🔵 TIMELINE */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6">

  {/* LIGHT BACKGROUND */}
  <div className="absolute inset-0 bg-triage-gray-50" />

  <div className="relative z-10 max-w-6xl mx-auto text-triage-navy">

    {/* HEADER */}
    <h2 className="text-4xl md:text-5xl font-semibold text-center mb-24">
      A smarter, more personal way to access care
    </h2>

    <div className="relative">

      {/* CENTER LINE */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-triage-orange/30" />

      <div className="space-y-24">

        {steps.map((step, i) => {
          const Icon = step.icon;
          const isLeft = i % 2 === 0;

          return (
            <div key={i} className="relative grid md:grid-cols-2 items-center">

              {/* LEFT SIDE */}
              <div className={`${isLeft ? "md:pr-12 text-right" : "md:order-2 md:pl-12 text-left"}`}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-triage-gray-200 inline-block"
                >
                  <h3 className="text-xl text-black font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-triage-gray-600">
                    {step.desc}
                  </p>
                </motion.div>
              </div>

              {/* ICON CENTER */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">

                <div className="w-14 h-14 rounded-full bg-triage-orange flex items-center justify-center shadow-md border-4 border-white">
                  <Icon className="text-white" size={22} />
                </div>

              </div>

              {/* RIGHT SIDE (EMPTY SPACE FOR BALANCE) */}
              <div />

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

        {/* NAVY BACKGROUND */}
        <div className="absolute inset-0 bg-triage-navy" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <h2 className="text-4xl md:text-5xl text-white font-semibold">
            Let us take care of everything
          </h2>

          <p className="mt-6 text-white/80 text-lg">
            With Triage Concierge, healthcare becomes effortless, giving you more time, clarity, and confidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href={whatsappLink}
              target="_blank"
              className="px-8 py-4 rounded-full bg-triage-orange text-white font-medium"
            >
              Request Concierge Access
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-triage-orange transition"
            >
              Speak to a Specialist
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}