"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Layers, ArrowRight, Activity } from "lucide-react";
import { useState } from "react";
import WaitlistModal from "../components/waitlist"; // adjust path

export default function TriagePodsPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="bg-triage-navy text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[130vh]">

        <div className="sticky top-0 h-screen">

          <img
            src="images/blog/13.webp"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-triage-navy/90" />

          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-semibold text-triage-teal">
                Healthcare, deployed anywhere
              </h1>

              <p className="mt-6 text-white/80 text-lg max-w-2xl mx-auto">
                TriagePods bring care closer to people, unlocking access,
                speed, and scale across Africa.
              </p>

              {/* ✅ SINGLE CTA */}
              <div className="mt-10 flex justify-center">

                <button
                  onClick={() => setOpen(true)}
                  className="px-8 py-4 rounded-full bg-triage-orange text-white font-semibold flex items-center gap-2 hover:bg-[#8c5c27] transition"
                >
                  Join the waitlist <ArrowRight size={18} />
                </button>

              </div>

              {/* MICRO TRUST */}
              <p className="mt-6 text-white/50 text-sm">
                Launching soon • Be among the first to access
              </p>

            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= WHITE TRANSITION ================= */}
      <section className="relative -mt-32 pt-40 pb-24 px-6 bg-white">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-triage-teal/10 blur-3xl" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="images/blog/13.webp"
            className="rounded-3xl shadow-xl border border-gray-200"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-semibold text-triage-navy">
              Bringing care closer, everywhere
            </h2>

            <p className="mt-4 text-triage-gray-600">
              Modular, mobile, and fully equipped, delivering consultations,
              diagnostics, and care anywhere.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative py-24 px-6 bg-triage-navy">

        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="max-w-6xl mx-auto relative z-10">

          <h2 className="text-center text-4xl font-semibold mb-16 text-triage-teal">
            Built for real-world healthcare
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              { icon: Globe, title: "Reach Anywhere", desc: "Deploy instantly." },
              { icon: Zap, title: "Deploy Fast", desc: "Launch in days." },
              { icon: Layers, title: "Scale Seamlessly", desc: "Grow endlessly." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-triage-orange/40 transition"
              >
                <item.icon className="text-triage-lime mb-4" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-24 px-6 bg-triage-navy text-center">

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>

          <Activity className="mx-auto mb-6 text-triage-lime" size={40} />

          <h2 className="text-4xl text-white font-semibold">
            This is how healthcare scales
          </h2>

          <p className="mt-4 text-white/80">
            By bringing care closer, not farther.
          </p>

        </motion.div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6 bg-triage-navy text-center">

        <motion.div>

          <h2 className="text-4xl font-semibold text-triage-teal">
            Be part of the future of care
          </h2>

          <p className="mt-4 text-white/70">
            TriagePods are launching soon.
          </p>

          <div className="mt-10">

            <button
              onClick={() => setOpen(true)}
              className="px-10 py-5 rounded-full bg-triage-orange text-white font-semibold text-lg hover:bg-[#8c5c27] transition"
            >
              Join the waitlist
            </button>

          </div>

        </motion.div>

      </section>

      {/* ✅ MODAL */}
      <WaitlistModal isOpen={open} onClose={() => setOpen(false)} />

    </main>
  );
}