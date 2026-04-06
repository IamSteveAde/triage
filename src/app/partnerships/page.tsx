"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, Handshake } from "lucide-react";

export default function PartnershipPage() {
  return (
    <main className="relative overflow-hidden">

      {/* ===================================================== */}
      {/* 🟢 HERO (FULL IMAGE) */}
      {/* ===================================================== */}

      <section className="relative h-screen w-full flex items-center justify-center text-white">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 -z-10">

          <img
            src="images/blog/11.jpg"
            className="w-full h-full object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-blue-500/20 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="text-center max-w-4xl px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold text-white leading-tight"
          >
            <span className="text-white">
              Partnerships that
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300 bg-clip-text text-white">
              extend care beyond boundaries
            </span>
          </motion.h1>

          <p className="mt-6 text-lg text-white/70">
            We collaborate with hospitals, organizations, and institutions to deliver seamless, high-quality healthcare wherever it’s needed.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-medium flex items-center gap-2">
              Partner With Us <ArrowRight size={18} />
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20">
              Speak to Our Team
            </button>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🔵 SECTION 2 VALUE */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6 bg-gradient-to-br from-[#F0FDFA] via-[#ECFEFF] to-[#F9FFFE]">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          {[
            {
              icon: Building2,
              title: "For Hospitals",
              desc: "Extend your reach beyond your facility and provide home-based care without increasing operational complexity.",
            },
            {
              icon: Users,
              title: "For Organizations",
              desc: "Support employee wellbeing with reliable, on-demand healthcare services that improve productivity and peace of mind.",
            },
            {
              icon: Handshake,
              title: "Strategic Partners",
              desc: "Collaborate with us to build innovative healthcare solutions and expand access to quality care.",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 rounded-2xl bg-white shadow-lg border border-black/5"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400 text-white mb-5">
                  <Icon />
                </div>

                <h3 className="text-xl  font-semibold text-black/70">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🟣 SECTION 3  ALTERNATING STORY */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6 bg-white">

        <div className="max-w-7xl mx-auto space-y-32">

          {[
            {
              title: "Expand your care beyond the hospital",
              desc: "Enable your patients to continue receiving professional care at home, improving outcomes and satisfaction.",
              image:
                "images/blog/14.webp",
            },
            {
              title: "Empower your workforce with healthcare access",
              desc: "Give your employees direct access to medical care, reducing downtime and increasing productivity.",
              image:
             "images/blog/10.jpg",
            },
            {
              title: "Scale without operational strain",
              desc: "Leverage our network and technology to grow your healthcare reach without additional infrastructure.",
              image:
               "images/blog/12.webp",
            },
          ].map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-16 items-center"
              >

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`${isLeft ? "" : "md:order-2"}`}
                >
                  <div className="overflow-hidden rounded-3xl shadow-xl">
                    <img
                      src={item.image}
                      className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
                    />
                  </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <h3 className="text-3xl text-black/70 md:text-4xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-gray-600 text-lg">
                    {item.desc}
                  </p>

                  <div className="mt-6 w-16 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400" />

                </motion.div>

              </div>
            );
          })}

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🔴 FINAL CTA */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6 text-center text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#021C1A] via-[#0B3C5D] to-[#020617]" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <h2 className="text-4xl md:text-5xl text-white/70 font-semibold">
            Let’s build the future of healthcare together
          </h2>

          <p className="mt-6 text-white/70 text-lg">
            Partner with Triage to expand access, improve outcomes, and deliver exceptional healthcare experiences.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-medium">
              Start a Partnership
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20">
              Contact Us
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}