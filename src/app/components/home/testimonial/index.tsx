"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import type { FormEvent } from "react";

export default function BookingSection() {
  const [service, setService] = useState("Home Care");
  const [time, setTime] = useState("Now");

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 const form = e.currentTarget;
    const location = (form.elements.namedItem("Location") as HTMLInputElement).value;
  const name = (form.elements.namedItem("Name") as HTMLInputElement).value;
  const phone = (form.elements.namedItem("Phone") as HTMLInputElement).value;

    // Optional validation
    if (!service || !time) {
      alert("Please select service and time");
      return;
    }

    const message = `
Hello, I’d like to request care service.

*New Booking Request*

*Service:* ${service}
*Time:* ${time}
*Location:* ${location}

*Name:* ${name}
*Phone:* ${phone}
    `;

    const url = `https://wa.me/2349134664547?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden text-white">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0B3C5D] to-[#022C22]" />
        <div className="absolute w-[600px] h-[600px] bg-blue-500/30 blur-[140px] rounded-full -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-400/25 blur-[140px] rounded-full top-[40%] right-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-teal-400/25 blur-[140px] rounded-full bottom-[-120px] left-[30%]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(0deg,white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Get care in minutes
            </span>
          </h2>

          <p className="mt-4 text-white/70 text-lg">
            Tell us what you need, we’ll handle the rest.
          </p>
        </div>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
        >

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* SERVICE */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                What do you need?
              </label>

              <div className="flex flex-wrap gap-3">
                {["Home Care", "Elderly Care", "Emergency Support"].map(
                  (item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setService(item)}
                      className={`px-4 py-2 rounded-full border transition ${
                        service === item
                          ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white border-transparent"
                          : "border-white/20 text-white/70 hover:border-cyan-400"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>

              <input type="hidden" name="Service" value={service} />
            </div>

            {/* LOCATION */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                Your location
              </label>

              <input
                type="text"
                name="Location"
                required
                placeholder="Enter your address"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* TIME */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                When do you need care?
              </label>

              <div className="flex gap-3">
                {["Now", "Schedule"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setTime(item)}
                    className={`px-4 py-2 rounded-full border transition ${
                      time === item
                        ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-transparent"
                        : "border-white/20 text-white/70 hover:border-cyan-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <input type="hidden" name="Time" value={time} />
            </div>

            {/* NAME */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                Your name
              </label>

              <input
                type="text"
                name="Name"
                required
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                Phone number
              </label>

              <input
                type="tel"
                name="Phone"
                required
                placeholder="080..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="w-full group relative py-4 rounded-xl overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 group-hover:scale-105 transition duration-500" />

              <span className="relative z-10 text-white font-semibold flex items-center justify-center gap-2">
                Find a Provider
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  );
}