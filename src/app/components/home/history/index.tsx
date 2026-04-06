"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Elderly Care",
    desc: "Compassionate, dignified support for elderly or physically challenged patients, from daily assistance and companionship to medication management and regular health monitoring, helping them live independently at home.",
    image: "/images/blog/1.jpg",
    gradient: "from-[#0F9D8A] via-[#14B8A6] to-[#0EA5E9]",
  },
  {
    title: "Post-Surgery Care",
    desc: "Professional recovery support with vital signs monitoring, surgical site care, medication reminders, and early detection of complications, ensuring a smooth and safe healing process.",
   image: "/images/blog/8.jpg",
    gradient: "from-[#7C3AED] via-[#A855F7] to-[#EC4899]",
  },
  {
    title: "Chronic Disease Management",
    desc: "Ongoing support for conditions like diabetes and hypertension, including regular monitoring, medication guidance, and patient education to help maintain stability and improve quality of life.",
    image: "/images/blog/3.jpg",
    gradient: "from-[#2563EB] via-[#3B82F6] to-[#06B6D4]",
  },
  {
    title: "IV Therapy",
    desc: "Safe administration of prescribed IV fluids, vitamins, and medications in the comfort of your home, delivered by trained healthcare professionals.",
    image: "/images/blog/7.jpg",
    gradient: "from-[#F97316] via-[#FB923C] to-[#EF4444]",
  },
  {
    title: "Wellness Check",
    desc: "A complete health review including vital signs check, risk assessment, and lifestyle consultation, helping you stay proactive about your health.",
    image: "/images/hero/slde1.png",
    gradient: "from-[#16A34A] via-[#22C55E] to-[#4ADE80]",
  },
  {
    title: "Health Screening",
    desc: "Quick and reliable on-the-spot tests including malaria, typhoid, HIV, blood pressure, glucose, and BMI, giving you clarity and peace of mind instantly.",
   image: "/images/blog/2.jpg",
    gradient: "from-[#DB2777] via-[#EC4899] to-[#F472B6]",
  },
  {
    title: "Wound Care",
    desc: "Expert wound assessment, cleaning, dressing, and infection monitoring, ensuring proper healing and reducing the risk of complications.",
    image: "/images/blog/6.jpg",
    gradient: "from-[#6366F1] via-[#818CF8] to-[#A5B4FC]",
  },
];

export default function WhatWeDoTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* 🌍 BACKGROUND */}
      <div className="absolute inset-0 bg-[#F8FAFC]" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(0deg,#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* floating boxes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white shadow-xl rounded-xl"
            style={{
              width: `${50 + i * 10}px`,
              height: `${50 + i * 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: "translate(-50%, -50%) rotate(20deg)",
              opacity: 0.06,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            What We Do
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Personalized healthcare services designed around your needs.
          </p>

        </div>

        {/* 🧠 TABS (FULLY RESPONSIVE) */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">

          {services.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 border
              ${
                active === i
                  ? "text-white shadow-lg"
                  : "text-gray-600 bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <span
                className={`${
                  active === i
                    ? `bg-gradient-to-r ${tab.gradient} bg-clip-text text-transparent`
                    : ""
                }`}
              >
                {tab.title}
              </span>
            </button>
          ))}

        </div>

        {/* 🎬 CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-3xl p-8 md:p-12 bg-gradient-to-br ${services[active].gradient} text-white shadow-xl`}
          >

            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* TEXT */}
              <div>

                <h3 className="text-3xl md:text-4xl font-semibold">
                  {services[active].title}
                </h3>

                <p className="mt-5 text-white/90 text-lg leading-relaxed">
                  {services[active].desc}
                </p>

                <div className="mt-6 w-16 h-[2px] bg-white/70" />

              </div>

              {/* IMAGE */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={services[active].image}
                  alt={services[active].title}
                  className="w-full h-[320px] md:h-[380px] object-cover"
                />
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>

    </section>
  );
}