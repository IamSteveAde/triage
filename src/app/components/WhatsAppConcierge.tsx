"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Need a nurse at home right now?",
  "Book trusted care in minutes.",
  "Speak to a care concierge instantly.",
  "Get help for a loved one today.",
];

export default function WhatsAppConcierge() {
  const [open, setOpen] = useState(true);
  const [index, setIndex] = useState(0);

  // rotate messages
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">

      {/* 💬 MESSAGE BUBBLE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-[260px] bg-white shadow-xl rounded-2xl px-5 py-4 text-sm text-gray-800 border border-black/5"
          >

            {/* animated text */}
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="leading-relaxed"
              >
                {messages[index]}
              </motion.p>
            </AnimatePresence>

            {/* close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-xs text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

          </motion.div>
        )}
      </AnimatePresence>

      {/* 🟢 WHATSAPP BUTTON */}
      <motion.a
        href="https://wa.me/2349134664547" // 👈 PUT YOUR NUMBER HERE
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
      >

        {/* gradient glow */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 blur-md opacity-70 animate-pulse" />

        {/* button */}
        <span className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white text-2xl shadow-md">

          {/* WhatsApp SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.82.93 5.43 2.49 7.56L3 29l5.64-2.46C10.69 27.64 13.26 28.5 16 28.5c7.18 0 13-5.82 13-13S23.18 3 16.001 3zm0 23.5c-2.45 0-4.74-.73-6.66-1.99l-.48-.29-3.35 1.46 1.5-3.26-.31-.5C5.41 20.66 4.5 18.42 4.5 16c0-6.35 5.15-11.5 11.5-11.5S27.5 9.65 27.5 16 22.35 27.5 16.001 27.5zm6.32-8.63c-.34-.17-2.01-.99-2.32-1.1-.31-.12-.53-.17-.75.17s-.86 1.1-1.06 1.33c-.19.23-.39.26-.73.09-.34-.17-1.44-.53-2.75-1.68-1.02-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.59.17-.2.23-.34.34-.56.11-.23.06-.42-.03-.59-.09-.17-.75-1.8-1.02-2.47-.27-.65-.54-.56-.75-.57l-.64-.01c-.23 0-.59.09-.9.42-.31.34-1.19 1.17-1.19 2.86s1.22 3.33 1.39 3.56c.17.23 2.4 3.66 5.82 5.13.81.35 1.44.56 1.93.72.81.26 1.55.22 2.13.13.65-.1 2.01-.82 2.29-1.61.28-.79.28-1.47.2-1.61-.08-.14-.31-.23-.65-.4z" />
          </svg>

        </span>

      </motion.a>

      {/* 🔁 REOPEN BUTTON (if closed) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="text-xs text-white/70 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md"
        >
          Need help?
        </button>
      )}

    </div>
  );
}