"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Healthcare, at your doorstep",
    desc: "Experience intelligent, on-demand care delivered to your home.",
    cta: "Get Care Now",
    link: "https://wa.me/2349134664547?text=Hi%20Triage%2C%20I%20need%20care%20immediately.",
  },
  {
    title: "Care for the people you love",
    desc: "Trusted professionals for your family, whenever it matters most.",
    cta: "Book Care",
    link: "https://wa.me/2349134664547?text=Hello%20Triage%2C%20I%E2%80%99m%20looking%20for%20care.",
  },
  {
    title: "Smarter healthcare for businesses",
    desc: "Elevate employee wellbeing with seamless medical access.",
    cta: "Partner With Us",
    link: "https://wa.me/2349134664547?text=Hi%2C%20I%E2%80%99d%20like%20to%20discuss%20solutions.",
  },
];

const AUTO_DELAY = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);

  // ✅ Delay slider start (important for LCP)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, AUTO_DELAY);

      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">

      {/* 🔥 SINGLE BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/bg1.webp" // ✅ ONLY ONE IMAGE
          alt="Triage Healthcare"
          fill
          priority
          quality={50}
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-triage-navy/80" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">

          <div className="max-w-2xl transition-opacity duration-500">

            <h1 className="text-4xl md:text-7xl text-white font-semibold leading-tight">
              {slides[index].title}
            </h1>

            <p className="mt-4 md:mt-6 text-base md:text-xl text-white/80">
              {slides[index].desc}
            </p>

            <div className="mt-8 md:mt-10 flex gap-4 flex-wrap">

              <a
                href={slides[index].link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-triage-orange hover:bg-[#8c5c27] text-white font-medium transition"
              >
                {slides[index].cta}
              </a>

              <a
                href="/about"
                className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/20 hover:border-triage-orange transition"
              >
                Learn More →
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* OPTIONAL INDICATORS */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[4px] rounded-full ${
              i === index ? "w-14 bg-triage-orange" : "w-6 bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}