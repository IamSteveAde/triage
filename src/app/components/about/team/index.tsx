"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Ifunanya Nwokedi",
    title: "Founder & Chief Executive Officer (CEO)",
    degree: "Ph.D.",
    image: "images/blog/ifunanya.webp",
    linkedin: "https://www.linkedin.com/in/ifunanya-nwokedi-ph-d-b30a3815?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    gradient: "from-teal-400/20 via-cyan-400/10 to-transparent",
    accent: "text-teal-600",
  },
  {
    name: "Femi Akinpelu",
    title: "Legal Advisor",
    degree: "LL.B, LL.M",
    image: "images/blog/femi.webp",
    linkedin: "https://linkedin.com/in/femi-akinpelu-5a4024a5",
    gradient: "from-purple-400/20 via-indigo-400/10 to-transparent",
    accent: "text-purple-600",
  },
  {
    name: "Babatunde Oduola-Owoo",
    title: "Medical Advisor",
    degree: "M.D.",
   image: "images/blog/tunde.webp",
    linkedin: "https://www.linkedin.com/in/babatunde-oduola-owoo-m-d-104a64147?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    gradient: "from-blue-400/20 via-cyan-400/10 to-transparent",
    accent: "text-blue-600",
  },
];

export default function ExecutiveTeam() {
  return (
    <section className="relative py-32 px-6 overflow-hidden text-gray-900">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F0FDFA] to-[#ECFEFF]" />

      {/* subtle glow */}
      <div className="absolute w-[400px] h-[400px] bg-teal-400/10 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-semibold">
            Leadership
          </h2>

          <p className="mt-6 text-black max-w-2xl mx-auto text-lg">
            Meet the people shaping the future of home healthcare through innovation, expertise, and vision.
          </p>

        </div>

        {/* TEAM */}
        <div className="grid md:grid-cols-3 gap-10">

          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group relative rounded-3xl overflow-hidden border border-black/5 bg-white shadow-md"
            >

              {/* GRADIENT BACKDROP */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${member.gradient}`}
              />

              {/* IMAGE */}
              <div className="relative h-[360px] overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-6">

                {/* DEGREE */}
                <p className={`text-sm text-black font-medium ${member.accent}`}>
                  {member.degree}
                </p>

                {/* NAME */}
                <h3 className="text-xl text-black font-semibold mt-1">
                  {member.name}
                </h3>

                {/* TITLE */}
                <p className="text-sm text-black mt-1">
                  {member.title}
                </p>

                {/* LINKEDIN */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-black hover:text-black transition"
                >
                  <Linkedin size={16} />
                  View Profile
                </a>

              </div>

              {/* BORDER GLOW */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/40 transition duration-500" />

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}