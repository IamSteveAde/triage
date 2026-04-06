"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Call Us",
    desc: "+234 800 000 0000",
  },
  {
    icon: Mail,
    title: "Email",
    desc: "support@triagehome.com",
  },
  {
    icon: MapPin,
    title: "Visit",
    desc: "Victoria Island, Lagos",
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-white px-6">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000"
            alt="Healthcare background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#021C1A]/80 via-[#0B3C5D]/60 to-transparent" />
        </div>

        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl text-white font-semibold leading-tight">
            <span>Let’s talk about your care</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-blue-300 bg-clip-text text-white/700">
              We’re here to help
            </span>
          </h1>

          <p className="mt-6 text-white/70 text-lg">
            Whether you need immediate care, ongoing support, or have a question, our team is ready to assist you.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="https://wa.me/2348000000000?text=Hello%20Triage%2C%20I%20need%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-medium flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

            <a
              href="#form"
              className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              Send a Message
            </a>

          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {contactItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl border border-black/5 shadow-sm text-center"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400 text-white mb-4">
                  <Icon size={20} />
                </div>

                <h3 className="font-semibold text-black/70 text-lg">{item.title}</h3>

                <p className="mt-2 text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FORM */}
      <section
        id="form"
        className="py-32 px-6 bg-gradient-to-br from-[#F0FDFA] via-[#ECFEFF] to-white"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Send us a message
            </h2>

            <p className="mt-4 text-gray-600">
              Fill out the form and our team will get back to you shortly.
            </p>
          </div>

          <form
            className="bg-white p-8 rounded-2xl shadow-lg border border-black/5 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
            }}
          >
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-4 rounded-lg border border-gray-200 outline-none focus:border-teal-400"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-lg border border-gray-200 outline-none focus:border-teal-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              className="w-full p-4 rounded-lg border border-gray-200 outline-none focus:border-teal-400"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-400 text-white font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 px-6 text-center text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-[#021C1A] via-[#0B3C5D] to-[#020617]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl text-white md:text-4xl font-semibold">
            Need care urgently?
          </h2>

          <p className="mt-4 text-white/70">
            Our concierge is available 24/7 on WhatsApp.
          </p>

          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-4 rounded-full bg-green-500 text-black font-medium hover:opacity-90 transition"
          >
            Talk to Concierge
          </a>
        </div>
      </section>

    </main>
  );
}