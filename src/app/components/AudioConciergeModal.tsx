"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioConciergeModal() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // show once (localStorage)
  useEffect(() => {
    const seen = localStorage.getItem("audio_concierge_seen");
    if (!seen) {
      setTimeout(() => setOpen(true), 1200); // slight delay feels premium
      localStorage.setItem("audio_concierge_seen", "true");
    }
  }, []);

  const handlePlay = () => {
    setPlaying(true);
    setOpen(false);

    // play audio
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* AUDIO ELEMENT */}
      <audio ref={audioRef} src="/audio/wlc.wav" preload="auto" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center px-6"
          >

            {/* BACKDROP */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

            {/* MODAL */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-w-lg w-full rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
            >

              {/* 🌌 BACKGROUND */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0B3C5D] to-[#022C22]" />

              {/* glow */}
              <div className="absolute w-[300px] h-[300px] bg-blue-500/30 blur-[120px] rounded-full -top-20 -left-20" />
              <div className="absolute w-[250px] h-[250px] bg-teal-400/30 blur-[120px] rounded-full bottom-[-60px] right-[-40px]" />

              {/* CONTENT */}
              <div className="relative z-10 p-8 text-white">

                {/* TITLE */}
                <h3 className="text-2xl font-semibold leading-tight">
                  Welcome to TriageHome
                </h3>

                {/* MESSAGE */}
                <p className="mt-4 text-white/80 leading-relaxed">
                  Would you like a quick guided introduction to how we deliver
                  trusted care at home, and how you can get started in minutes?
                </p>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">

                  {/* YES */}
                  <button
                    onClick={handlePlay}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 font-medium text-white shadow-md hover:scale-[1.02] transition"
                  >
                    Yes, walk me through it
                  </button>

                  {/* NO */}
                  <button
                    onClick={handleClose}
                    className="flex-1 py-3 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 transition"
                  >
                    I’ll explore myself
                  </button>

                </div>

                {/* SMALL TEXT */}
                <p className="mt-4 text-xs text-white/50">
                  Takes less than 30 seconds
                </p>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}