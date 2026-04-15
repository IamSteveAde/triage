"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Users, Handshake } from "lucide-react";

export default function PartnershipPage() {
  return (
    <main className="relative overflow-hidden">

      {/* ===================================================== */}
      {/* 🟢 HERO */}
      {/* ===================================================== */}

      <section className="relative h-screen w-full flex items-center justify-center text-white">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">

          <img
            src="images/blog/11.jpg"
            className="w-full h-full object-cover"
          />

          {/* NAVY OVERLAY */}
          <div className="absolute inset-0 bg-triage-navy/85" />

          {/* subtle lime glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(166,210,0,0.08),transparent_60%)]" />

        </div>

        {/* CONTENT */}
        <div className="text-center max-w-4xl px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold leading-tight"
          >
            <span className="text-white">
              Partnerships that
            </span>
            <br />
            <span className="text-triage-teal">
              extend care beyond boundaries
            </span>
          </motion.h1>

          <p className="mt-6 text-lg text-white/80">
            We collaborate with hospitals, organizations, and institutions to deliver seamless, high-quality healthcare wherever it’s needed.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

           <a
  href="https://api.whatsapp.com/send/?phone=2349134664547&text=Hi%2C+I%E2%80%99d+like+to+explore+healthcare+solutions+for+my+company.+Can+we+discuss+partnership+options%3F&type=phone_number&app_absent=0"
  target="_blank"
  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-triage-orange text-white font-medium hover:opacity-90 transition"
>
  Start a partnership conversation
  <ArrowRight size={18} />
</a>

            

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🔵 VALUE SECTION */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6 bg-triage-gray-50">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          {[
            {
              icon: Building2,
              title: "For Hospitals",
              desc: "Extend your reach beyond your facility and provide home-based care without increasing operational complexity.",
              color: "bg-triage-navy",
            },
            {
              icon: Users,
              title: "For Organizations",
              desc: "Support employee wellbeing with reliable, on-demand healthcare services.",
              color: "bg-triage-teal",
            },
            {
              icon: Handshake,
              title: "Strategic Partners",
              desc: "Collaborate with us to build innovative healthcare solutions.",
              color: "bg-triage-orange",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-8 rounded-2xl bg-white shadow-sm border border-triage-gray-200"
              >
                <div className={`w-14 h-14 mx-auto flex items-center justify-center rounded-xl ${item.color} text-white mb-5`}>
                  <Icon />
                </div>

                <h3 className="text-xl font-semibold text-triage-navy">
                  {item.title}
                </h3>

                <p className="mt-3 text-triage-gray-600">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🟣 STORY SECTION */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6 bg-white">

        <div className="max-w-7xl mx-auto space-y-32">

          {[
            {
              title: "Expand your care beyond the hospital",
              desc: "Enable your patients to continue receiving professional care at home.",
              image: "images/blog/14.webp",
            },
            {
              title: "Empower your workforce",
              desc: "Give employees direct access to healthcare services.",
              image: "images/blog/10.jpg",
            },
            {
              title: "Scale without operational strain",
              desc: "Grow your reach without additional infrastructure.",
              image: "images/blog/12.webp",
            },
          ].map((item, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div key={i} className="grid md:grid-cols-2 gap-16 items-center">

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`${isLeft ? "" : "md:order-2"}`}
                >
                  <div className="overflow-hidden rounded-3xl shadow-xl">
                    <img
                      src={item.image}
                      className="w-full h-[420px] object-cover hover:scale-105 transition duration-700"
                    />
                  </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <h3 className="text-3xl md:text-4xl font-semibold text-triage-navy">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-triage-gray-600 text-lg">
                    {item.desc}
                  </p>

                  <div className="mt-6 w-16 h-[2px] bg-triage-orange" />

                </motion.div>

              </div>
            );
          })}

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🔴 FINAL CTA */}
      {/* ===================================================== */}

      <section className="relative py-32 px-6 text-center text-white">

        <div className="absolute inset-0 bg-triage-navy" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <h2 className="text-4xl md:text-5xl text-white font-semibold">
            Let’s build the future of healthcare together
          </h2>

          <p className="mt-6 text-white/80 text-lg">
            Partner with TriageHome to expand access and improve healthcare outcomes.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

           <a
  href="https://api.whatsapp.com/send/?phone=2349134664547&text=Hi%2C+I%E2%80%99d+like+to+explore+healthcare+solutions+for+my+company.+Can+we+discuss+partnership+options%3F&type=phone_number&app_absent=0"
  target="_blank"
  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-triage-orange text-white font-medium hover:opacity-90 transition"
>
  Start a partnership conversation
  <ArrowRight size={18} />
</a>

          </div>

        </div>

      </section>

    </main>
  );
}