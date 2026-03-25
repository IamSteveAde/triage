"use client";

import { motion } from "framer-motion";

const offers = [
  {
    title: "Standard Care",
    desc: "Book a qualified nurse instantly through our app. Get reliable, professional care at home, with transparent pricing and seamless management.",
    cta: "Join the waitlist",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200",
    glow: "from-teal-400/20 to-cyan-400/10",
  },
  {
    title: "TriageConcierge",
    desc: "Your personal health expert manages everything. Enjoy discreet, priority care with dedicated coordination wherever you are.",
    cta: "Join the waitlist",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200",
    glow: "from-purple-400/20 to-pink-400/10",
  },
  {
    title: "Partnerships",
    desc: "We support hospitals with on-demand clinical staff and help organizations deliver better healthcare experiences to their people.",
    cta: "Join the waitlist",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200",
    glow: "from-blue-400/20 to-cyan-400/10",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="relative py-36 px-6 overflow-hidden text-white">

      {/* 🌌 DEEP PREMIUM BACKGROUND */}
      <div className="absolute inset-0">

        {/* base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021C1A] via-[#052E2B] to-[#020617]" />

        {/* ambient glow */}
        <div className="absolute w-[600px] h-[600px] bg-teal-500/20 blur-[140px] rounded-full -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full bottom-[-120px] right-[-80px]" />

        {/* center radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,200,0.08),transparent_70%)]" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(0deg,white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-5xl text-white font-semibold">
            What We Offer
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Designed to meet you wherever you are — from everyday care to elite support.
          </p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-40">

          {offers.map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={i}
                className="relative grid md:grid-cols-2 gap-16 items-center"
              >

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`${isLeft ? "order-1" : "order-2"} relative`}
                >

                  {/* glow plate */}
                  <div className={`absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br ${item.glow} blur-2xl`} />

                  <div className="relative rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)]">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[420px] object-cover"
                    />

                  </div>

                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`${isLeft ? "order-2" : "order-1"} relative`}
                >

                  {/* luxury card */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

                    {/* accent line */}
                    <div className="w-14 h-[2px] bg-gradient-to-r from-teal-400 to-cyan-400 mb-6" />

                    <h3 className="text-3xl md:text-4xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-white/75 text-lg leading-relaxed">
                      {item.desc}
                    </p>

                    {/* CTA */}
                    <div className="mt-8 inline-flex items-center gap-2 font-medium text-teal-300 cursor-pointer group">

                      <span>{item.cta}</span>

                      <span className="relative w-5 h-5 overflow-hidden">
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-6">
                          →
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center -translate-x-6 transition-transform duration-300 group-hover:translate-x-0">
                          →
                        </span>
                      </span>

                    </div>

                  </div>

                </motion.div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}