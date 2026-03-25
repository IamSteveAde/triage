"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Healthcare, at your doorstep",
    desc: "Experience intelligent, on-demand care delivered to your home.",
    cta: "Get Care Now",
    image: "/images/hero/slde1.png",
  },
  {
    title: "Care for the people you love",
    desc: "Trusted professionals for your family, whenever it matters most.",
    cta: "Book Care",
    image: "/images/hero/slde2.png",
  },
  {
    title: "Smarter healthcare for businesses",
    desc: "Elevate employee wellbeing with seamless medical access.",
    cta: "Partner With Us",
    image: "/images/hero/slde4.png",
  },
];

const AUTO_DELAY = 6500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    let start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = (elapsed / AUTO_DELAY) * 100;

      if (percent >= 100) {
        setIndex((prev) => (prev + 1) % slides.length);
        start = Date.now();
        setProgress(0);
      } else {
        setProgress(percent);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">

      {/* ✅ TRUE FIXED BACKGROUND (WORKS ON MOBILE + DESKTOP) */}
      <div className="fixed inset-0 z-0">

        {slides.map((slide, i) => (
          <motion.div
            key={slide.image}
            initial={false}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1 : 1.05,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* overlays */}
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/30 via-transparent to-cyan-400/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,200,0.15),transparent_60%)]" />
          </motion.div>
        ))}

      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >

            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
              <span className="bg-[linear-gradient(120deg,#5EEAD4,#2DD4BF,#22D3EE,#67E8F9)] bg-clip-text text-transparent">
                {slides[index].title}
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              {slides[index].desc}
            </p>

            <div className="mt-10 flex gap-5 flex-wrap">

              {/* PRIMARY */}
              <button className="group relative px-8 py-4 rounded-full overflow-hidden flex items-center gap-3">

                <span className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-600 transition-all duration-500 group-hover:scale-110" />

                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle,rgba(255,255,255,0.4),transparent_70%)]" />

                <span className="relative z-10 flex items-center gap-2 text-black font-medium">
                  {slides[index].cta}

                  <span className="relative w-5 h-5 overflow-hidden">
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-6">
                      →
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center -translate-x-6 transition-transform duration-300 group-hover:translate-x-0">
                      →
                    </span>
                  </span>
                </span>
              </button>

              {/* SECONDARY */}
              <button className="group relative px-8 py-4 rounded-full border border-white/20 backdrop-blur-xl bg-white/5 flex items-center gap-3 overflow-hidden">

                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/10 to-white/5" />

                <span className="relative z-10 flex items-center gap-2 font-medium">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Learn More
                  </span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

            </div>

          </motion.div>

        </div>
      </div>

      {/* ARROWS */}
      <div className="absolute inset-y-0 flex justify-between items-center w-full px-6 z-20 pointer-events-none">

        <button
          onClick={prevSlide}
          className="group pointer-events-auto w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all hover:scale-110 hover:bg-white/20"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
        </button>

        <button
          onClick={nextSlide}
          className="group pointer-events-auto w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transition-all hover:scale-110 hover:bg-white/20"
        >
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[4px] rounded-full transition-all duration-300 ${
              i === index
                ? "w-16 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500"
                : "w-6 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* PROGRESS */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-500"
          style={{ width: `${progress}%` }}
        />
      </div>

    </section>
  );
}