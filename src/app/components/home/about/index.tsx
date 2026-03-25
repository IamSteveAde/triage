"use client";

import { motion } from "framer-motion";

const routes = [
  {
    title: "Get Care Now",
    desc: "A healthcare professional at your doorstep within minutes.",
    cta: "Book Now",
    gradient: "from-[#0F9D8A] to-[#14B8A6]",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200",
  },
  {
    title: "Care for a Loved One",
    desc: "Reliable ongoing care for your family members.",
    cta: "Start Care",
    gradient: "from-[#7C3AED] to-[#A855F7]",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200",
  },
  {
    title: "For My Company",
    desc: "Give your team access to seamless healthcare support.",
    cta: "Partner With Us",
    gradient: "from-[#2563EB] to-[#06B6D4]",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200",
  },
  {
    title: "Join as a Provider",
    desc: "Work with Triage and reach more patients.",
    cta: "Apply Now",
    gradient: "from-[#F97316] to-[#EF4444]",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200",
  },
];

export default function RoutingSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
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
                width: `${50 + i * 8}px`,
                height: `${50 + i * 8}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: "translate(-50%, -50%) rotate(20deg)",
                opacity: 0.08,
              }}
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            How can we help you today?
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Choose what you need — we’ll take care of the rest.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {routes.map((route, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 15 }}
              className="group rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >

              {/* IMAGE (NORMAL — NO EFFECTS) */}
              <div className="h-44 overflow-hidden">
                <img
                  src={route.image}
                  alt={route.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* COLORED CONTENT SECTION */}
              <div className={`bg-gradient-to-br ${route.gradient} p-6 text-white`}>

                <h3 className="text-xl font-semibold">
                  {route.title}
                </h3>

                <p className="mt-2 text-white/85 text-sm leading-relaxed">
                  {route.desc}
                </p>

                {/* CTA */}
                <div className="mt-5 flex items-center gap-2 font-medium">

                  <span>{route.cta}</span>

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
          ))}

        </div>

      </div>

    </section>
  );
}