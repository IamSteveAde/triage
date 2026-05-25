"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const plans = [
  {
    title: "Assure Plan",
    price: "₦120,000",
    duration: "/month",
    description:
      "Premium in-home wellness support designed to provide peace of mind, proactive monitoring, and compassionate care.",
    tag: "Most Popular",
    image: "/images/hero/assureplan.JPG",
    features: [
      "Routine wellness checks",
      "Medication reminders",
      "Home caregiver support",
      "Priority health coordination",
      "Monthly care monitoring",
    ],
  },
  {
    title: "TriagePostOp",
    price: "Tailored",
    duration: "Pricing",
    description:
      "Post-surgical recovery support built around safe healing, professional monitoring, and personalized assistance.",
    tag: "Recovery Care",
    image: "/images/hero/postopp.jpg",
    features: [
      "Post-operative monitoring",
      "Medication assistance",
      "Wound care support",
      "Recovery wellness tracking",
      "Personalized care coordination",
    ],
  },
  {
    title: "TriagePassport",
    price: "₦450,000",
    duration: "/month",
    description:
      "A premium concierge-style healthcare access plan delivering elevated support, coordination, and comfort.",
    tag: "Premium Access",
    image: "/images/hero/triagepassport.jpg",
    features: [
      "Priority care coordination",
      "Premium home visits",
      "Dedicated care support",
      "Fast response healthcare access",
      "Wellness and monitoring assistance",
    ],
  },
];

export default function AccessPlansSection() {
  const whatsappNumber = "2349134664547";

  const handleWhatsapp = (plan: string) => {
    const text = `Hello, I got this from the website and I want access to the ${plan} plan.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden py-32 bg-[#F9FFFE]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9FFFE] via-[#F5FAF9] to-[#EDF7F6]" />

        <div className="absolute top-0 left-[-120px] w-[420px] h-[420px] bg-[#02385A]/10 blur-[130px] rounded-full" />

        <div className="absolute bottom-[-100px] right-[-60px] w-[380px] h-[380px] bg-[#AA7130]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* HEADER */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center rounded-full border border-[#02385A]/10 bg-white/70 backdrop-blur-md px-4 py-2 mb-6">
              <span className="text-sm font-medium text-[#02385A]">
                Premium Healthcare Access
              </span>
            </div>

            <h2 className="text-[42px] md:text-6xl leading-[1.05] tracking-tight font-semibold text-[#02385A] max-w-4xl">
              Healthcare plans designed around care, comfort, and peace of
              mind.
            </h2>

            <p className="mt-6 text-[#49606B] text-lg leading-relaxed max-w-2xl">
              Choose a care experience tailored to your needs — from proactive
              wellness support to premium recovery and concierge healthcare
              access.
            </p>
          </motion.div>
        </div>

        {/* MOBILE SCROLL / DESKTOP GRID */}
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex lg:grid lg:grid-cols-3 gap-8 px-6 md:px-10 lg:max-w-7xl lg:mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="min-w-[340px] lg:min-w-0"
              >
                <div className="group relative h-full overflow-hidden rounded-[34px] border border-white/50 bg-white/75 backdrop-blur-2xl shadow-[0_30px_80px_rgba(2,56,90,0.08)] transition-all duration-700 hover:shadow-[0_40px_90px_rgba(2,56,90,0.12)]">
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#02385A]/[0.03] via-transparent to-[#AA7130]/[0.05]" />

                  {/* IMAGE */}
                  
                  <div className="relative overflow-hidden rounded-t-[34px] bg-[#F6FAF9]">
  <img
    src={plan.image}
    alt={plan.title}
    className="w-full h-auto object-contain transition duration-[1400ms] group-hover:scale-[1.02]"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-[#001623]/50 via-transparent to-transparent" />

  <div className="absolute top-5 right-5">
    <div className="rounded-full bg-white/90 backdrop-blur-xl px-4 py-2 text-xs font-semibold text-[#02385A] shadow-md">
      {plan.tag}
    </div>
  </div>
</div>
                  {/* CONTENT */}
                  <div className="relative p-7">
                    <div className="mb-5">
                      <h3 className="text-[30px] leading-tight font-semibold text-[#02385A]">
                        {plan.title}
                      </h3>

                      <p className="mt-3 text-[#5B717A] leading-relaxed text-[15px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* PRICE */}
                    <div className="mb-7 flex items-end gap-2">
                      <span className="text-[42px] font-semibold tracking-tight text-[#02385A]">
                        {plan.price}
                      </span>

                      <span className="text-[#738992] mb-[9px]">
                        {plan.duration}
                      </span>
                    </div>

                    {/* FEATURES */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-[#AA7130] mt-[2px] shrink-0"
                          />

                          <span className="text-[#4D646E] text-[15px] leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleWhatsapp(plan.title)}
                      className="group/button relative overflow-hidden w-full rounded-[22px] bg-[#02385A] px-6 py-5 text-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(2,56,90,0.28)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#02385A] to-[#0A4A70]" />

                      <div className="relative flex items-center justify-between">
                        <div className="text-left">
                          <p className="font-semibold text-[16px]">
                            Get Access
                          </p>

                          <p className="text-white/70 text-sm">
                            Speak with TriageHome
                          </p>
                        </div>

                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 transition duration-500 group-hover/button:translate-x-1">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}