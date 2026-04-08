"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function TriageVideoSection() {
  const [play, setPlay] = useState(false);

  return (
    <section className="py-28 px-6 bg-triage-gray-50">

      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-triage-navy">
            See how Triage works
          </h2>

          <p className="mt-4 text-triage-gray-600 text-lg">
            Experience a smarter, faster, and more human way to access care.
          </p>
        </motion.div>

        {/* VIDEO CONTAINER */}
        <div className="mt-16">

          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

            {/* ▶️ THUMBNAIL */}
            {!play && (
              <div
                className="relative cursor-pointer group"
                onClick={() => setPlay(true)}
              >

                {/* Thumbnail image */}
                <img
                  src="/images/hero/bg1.png"
                  alt="Triage Video"
                  className="w-full h-[500px] object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-triage-navy/60 group-hover:bg-triage-navy/50 transition" />

                {/* play button */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="w-20 h-20 rounded-full bg-triage-orange flex items-center justify-center shadow-xl group-hover:scale-110 transition">

                    <Play size={28} className="text-white ml-1" />

                  </div>

                </div>

              </div>
            )}

            {/* 🎬 VIDEO PLAYER */}
            {play && (
              <video
                src="/images/hero/triage-video.mp4"
                controls
                autoPlay
                className="w-full h-[500px] object-cover"
              />
            )}

          </div>

        </div>

      </div>

    </section>
  );
}