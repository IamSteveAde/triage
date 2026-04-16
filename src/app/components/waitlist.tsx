"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby4VAjAePMscfuD59k84Mt2kiGm8QDP7MT9ow-err5Yby9Hsx3xoOYzGt-hznPDXqg/exec";

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = async () => {
    if (!email || !accountType || !service) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      // ✅ FormData (CORRECT METHOD)
      const formData = new FormData();
      formData.append("email", email);
      formData.append("accountType", accountType);
      formData.append("service", service);

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      // ✅ WhatsApp message
      const message = `New Waitlist Signup:
Email: ${email}
Account Type: ${accountType}
Service: ${service}`;

      window.open(
        `https://wa.me/2349134664547?text=${encodeURIComponent(message)}`,
        "_blank"
      );

      // RESET
      setEmail("");
      setAccountType("");
      setService("");

      alert("You're on the waitlist 🚀");

      onClose();
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-white rounded-3xl p-8 relative shadow-xl"
            >
              {/* CLOSE */}
              <button onClick={onClose} className="absolute top-4 text-[red] right-4">
                <X />
              </button>

              <h2 className="text-2xl font-semibold text-triage-navy">
                Secure Your Spot
              </h2>

              <p className="mt-2 text-black">
                Get exclusive access and be the first to know when we launch.
              </p>

              <div className="mt-6 space-y-4">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl"
                />

                <select
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl"
                >
                  <option value="">Select account type</option>
                  <option>Individual</option>
                  <option>Family</option>
                  <option>Corporate</option>
                </select>

                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl"
                >
                  <option value="">Select services</option>
                  <option>Standard Care</option>
                  <option>TriageConcierge</option>
                  <option>Partnerships</option>
                  <option>TriageApp</option>
                  <option>TriageLiving</option>
                  <option>TriagePods</option>
                </select>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-3 bg-triage-orange text-white rounded-xl"
                >
                  {loading ? "Submitting..." : "Join Now"}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}