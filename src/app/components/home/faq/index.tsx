"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How quickly can I get a clinical provider to my home?",
    answer:
      "Our response depends on your service level. For Standard Care, a qualified provider can typically arrive within a few hours depending on availability. TriageConcierge members receive priority, rapid response for immediate support.",
  },
  {
    question: "Are all your nurses qualified and vetted?",
    answer:
      "Yes. Every clinical provider is carefully vetted, licensed, and verified. We ensure they meet strict professional standards before being approved to deliver care through TriageHome.",
  },
  {
    question: "What happens if I need help outside of business hours?",
    answer:
      "TriageHome is designed for flexibility. Depending on your service plan, support is available beyond standard hours, with priority members receiving round-the-clock assistance.",
  },
  {
    question: "How does payment work?",
    answer:
      "Payments are handled securely through our platform with full transparency. You’ll always see pricing upfront before confirming any service.",
  },
  {
    question:
      "Can you help with long-term care for an elderly family member?",
    answer:
      "Absolutely. We provide ongoing care plans tailored to long-term needs, ensuring consistent monitoring, companionship, and medical support at home.",
  },
  {
    question:
      "How does TriageHome ensure patient and provider safety?",
    answer:
      "We maintain strict safety protocols, identity verification, and continuous monitoring to ensure a safe and trusted environment for both patients and providers.",
  },
  {
    question:
      "What partnerships are available for hospitals and corporate wellness?",
    answer:
      "We partner with hospitals and organizations to provide on-demand clinical staff and structured healthcare support for teams and patients.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  const toggle = (i: number) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9FFFE] via-[#F0FDFA] to-[#ECFEFF]" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(0deg,#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE (INTRO) */}
          <div>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-gray-600 text-lg max-w-md leading-relaxed">
              Confused about how TriageHome works or need clarity on something?  
              Here are answers to the most common questions.
            </p>

            {/* subtle accent */}
            <div className="mt-8 w-20 h-[2px] bg-gradient-to-r from-teal-500 to-cyan-500" />

          </div>

          {/* RIGHT SIDE (FAQ LIST) */}
          <div className="space-y-4">

            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-md border border-black/5 rounded-2xl overflow-hidden shadow-sm"
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >

                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>

                  {/* ICON */}
                  <motion.span
                    animate={{ rotate: active === i ? 45 : 0 }}
                    className="text-2xl text-teal-600"
                  >
                    +
                  </motion.span>

                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}