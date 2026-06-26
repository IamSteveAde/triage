"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

// ─── Constants ────────────────────────────────────────────────────────────────

const WHATSAPP =
  "https://wa.me/2349134664547?text=Hello%20TriageConcierge%2C%20I%20would%20like%20to%20learn%20more%20about%20a%20Concierge%20Plan.";

const INCLUDED = [
  { icon: "🏥", title: "Dedicated PM Representative", desc: "One trusted contact coordinating your care, appointments, providers, and wellness needs end-to-end.", color: "#02385a", light: "#e8f0f7" },
  { icon: "👨‍⚕️", title: "Clinical Support Network", desc: "Access to nurses, doctors, physiotherapists, pharmacists, and health assistants when needed.", color: "#00b99d", light: "#e6f9f7" },
  { icon: "🏨", title: "Hospital & Specialist Navigation", desc: "Priority coordination, appointment support, hospital accompaniment, and follow-up management.", color: "#aa7130", light: "#fdf3e8" },
  { icon: "🛡️", title: "Preventive Health Monitoring", desc: "Regular wellness checks, medication management, risk monitoring, and proactive health oversight.", color: "#b745d8", light: "#f7eafd" },
  { icon: "📊", title: "Digital Health Snapshot", desc: "A living record of appointments, recommendations, wellness trends, and care activities.", color: "#a6d200", light: "#f4fadf" },
  { icon: "✈️", title: "Travel & Mobility Support", desc: "Health planning before travel, support during recovery, and continuity of care across locations.", color: "#02385a", light: "#e8f0f7" },
  { icon: "🌿", title: "Wellness & Lifestyle Services", desc: "Nutrition guidance, fitness support, companionship services, and healthy living coaching.", color: "#00b99d", light: "#e6f9f7" },
  { icon: "👨‍👩‍👧", title: "Family & Stakeholder Updates", desc: "Secure reporting and visibility for approved family members, employers, or designated representatives.", color: "#aa7130", light: "#fdf3e8" },
  { icon: "🚨", title: "Emergency Coordination", desc: "Rapid escalation and coordination support when urgent situations arise.", color: "#b745d8", light: "#f7eafd" },
  { icon: "💳", title: "HMO & Insurance Liaison", desc: "Seamless claims processing, pre-authorisation support, and direct communication with your HMO.", color: "#a6d200", light: "#f4fadf" },
];

const WHY = [
  { reason: "Elite Clinical Network", benefit: "Vetted providers with professional indemnity", icon: "⭐" },
  { reason: "Single Point of Contact", benefit: "No more chasing multiple doctors or hospitals", icon: "🎯" },
  { reason: "Proactive, Not Reactive", benefit: "Preventive approach that catches issues early", icon: "🔍" },
  { reason: "Global Best Practices", benefit: "Modelled on successful international homecare systems", icon: "🌍" },
  { reason: "Complete Privacy", benefit: "Discreet, confidential service for high-net-worth individuals", icon: "🔒" },
  { reason: "HMO Integration", benefit: "Seamless coordination with your health insurance", icon: "🤝" },
  { reason: "24/7 Support", benefit: "Always available when you need us", icon: "⏰" },
];

const SERVES = [
  "Executives and business leaders",
  "Diplomats and international professionals",
  "Corporate and HMO members",
  "Public figures and faith leaders",
  "Individuals recovering from surgery",
  "Frequent travellers",
  "Diaspora professionals coordinating care remotely",
  "Anyone seeking a more personalised healthcare experience",
];

const PLANS = [
  {
    name: "TriagePostOp",
    tag: "Recovery",
    desc: "Structured support for recovery after surgery, procedures, or hospitalisation.",
    accent: "#00b99d",
    features: ["Post-surgery home nursing", "Wound care management", "Medication monitoring", "Recovery milestone tracking"],
    image: "/images/blog/8.webp",
  },
  {
    name: "TriagePassport",
    tag: "Remote Care",
    desc: "Ongoing health oversight, coordination, and visibility for busy professionals managing care remotely.",
    accent: "#aa7130",
    features: ["Cross-border health coordination", "Family health reporting", "Remote provider management", "Digital health records"],
    image: "/images/blog/11.webp",
    featured: true,
  },
  {
    name: "TriageComfort+",
    tag: "Premium Wellness",
    desc: "A curated concierge experience combining preventive health, care coordination, wellness support, and lifestyle services.",
    accent: "#b745d8",
    features: ["Dedicated PM Representative", "Lifestyle health coaching", "Priority specialist access", "Comprehensive wellness plan"],
    image: "/images/blog/3.webp",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Concierge Consultation",
    desc: "A private, deep-dive assessment of your lifestyle, medical history, and daily schedule to map out your unique health baseline.",
    image: "/images/blog/2.webp",
    tag: "Day 1",
  },
  {
    number: "02",
    title: "Your Coordinator Match",
    desc: "We assign your dedicated PM Rep and match you with a tailored team from our clinical support network based on your specific health profile.",
    image: "/images/blog/4.webp",
    tag: "Within 24hrs",
  },
  {
    number: "03",
    title: "Activation",
    desc: "Your secure, NDPR-compliant digital health dashboard is activated. Your PM Rep begins orchestrating your schedule, dispatching trained providers, and logging your health trends seamlessly.",
    image: "/images/blog/5.webp",
    tag: "Ongoing",
  },
];

const SNAPSHOT_FEATURES = [
  { icon: "⚡", title: "Instant delivery", desc: "Results sent to your WhatsApp the moment your provider submits." },
  { icon: "📊", title: "Full vital tracking", desc: "Temperature, BP, pulse, blood sugar, SpO₂, BMI and more — all in one place." },
  { icon: "🔒", title: "Private & secure", desc: "NDPR-compliant. Only you and your PM Rep can access your records." },
  { icon: "📄", title: "PDF Health Passport", desc: "Download a clean, professional summary of every session." },
  { icon: "👨‍⚕️", title: "Provider notes", desc: "Clinical observations and recommendations logged directly by your provider." },
  { icon: "📈", title: "Health trends", desc: "Track how your vitals change over time and catch early warning signs." },
];

// ─── Animation helpers ────────────────────────────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ConciergePage() {
  const [activeWhy, setActiveWhy] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="relative overflow-hidden font-nunito">

      {/* ================================================================ */}
      {/* HERO */}
      {/* ================================================================ */}

      <section
        ref={heroRef}
        className="relative flex min-h-screen items-end overflow-hidden pb-24 px-6"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image
            src="/images/hero/bg1.png"
            alt="TriageConcierge premium healthcare"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02385a] via-[#02385a]/85 to-[#02385a]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02385a]/60 via-transparent to-transparent" />
        </motion.div>

        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#b745d8]/25 via-[#00b99d]/15 to-transparent blur-3xl pointer-events-none z-10" />
        <div className="absolute bottom-40 right-40 w-64 h-64 rounded-full bg-[#aa7130]/20 blur-3xl pointer-events-none z-10" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 mx-auto max-w-6xl w-full"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#aa7130]/25 border border-[#aa7130]/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#aa7130] animate-pulse" />
              <span className="font-raleway font-bold text-[11px] tracking-[0.14em] uppercase text-amber-300">
                TriageConcierge · Premium Care Coordination
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-raleway font-extrabold text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(44px, 7vw, 80px)" }}
            >
              Healthcare.
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #00b99d, #a6d200)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Coordinated.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/75 text-xl leading-relaxed max-w-xl mb-3"
            >
              For people who value their time, their wellbeing, and the
              confidence that everything is taken care of.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/45 text-base italic mb-12"
            >
              Personal. Proactive. Always available.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-[#aa7130] hover:bg-[#8c5c22] px-8 py-4 font-raleway font-bold text-sm text-white transition-all duration-200 shadow-lg shadow-[#aa7130]/30"
              >
                Let's Talk Today
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#plans"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/25 hover:border-[#00b99d] backdrop-blur-sm px-8 py-4 font-raleway font-bold text-sm text-white transition-all duration-200"
              >
                View Access Plans
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { value: "24/7", label: "Support available" },
                { value: "3", label: "Concierge plans" },
                { value: "₦450K", label: "Starting from / month" },
                { value: "100%", label: "Confidential service" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-raleway font-extrabold text-white text-2xl leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="text-white/45 text-[12px] font-semibold">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2"
        >
          <span
            className="text-white/30 text-[10px] tracking-widest uppercase font-raleway font-bold"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* ================================================================ */}
      {/* WHAT IS TRIAGEHOME CONCIERGE */}
      {/* ================================================================ */}

      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[600px]">
          <FadeIn className="relative min-h-[400px] lg:min-h-full">
            <Image
              src="/images/blog/3.webp"
              alt="TriageConcierge care coordination"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-[#aa7130] rounded-2xl px-5 py-4 shadow-2xl max-w-xs">
              <p className="font-raleway font-extrabold text-white text-2xl leading-none mb-1">
                PM Rep
              </p>
              <p className="text-white/80 text-sm font-nunito">
                Your dedicated Peace of Mind Representative — one person, all your care.
              </p>
            </div>
          </FadeIn>

          <div className="px-10 py-20 lg:px-16 flex flex-col justify-center">
            <FadeUp>
              <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.18em] uppercase mb-4">
                What is TriageConcierge?
              </p>
              <h2
                className="font-raleway font-extrabold text-[#02385a] leading-[1.15] mb-6"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                A smarter, more personal way to access care.
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="space-y-4 text-slate-600 text-[15px] leading-[1.9] mb-10">
                <p>
                  Modern life is complex. Appointments, medications, hospital visits,
                  wellness goals, specialist referrals, travel, recovery — often require
                  far more coordination than most people have time for.
                </p>
                <p>
                  TriageConcierge was designed to simplify that experience. Whether
                  you're a busy executive, diplomat, professional athlete, corporate
                  client, or managing care from abroad, we provide a trusted layer of
                  health oversight that keeps everything on track.
                </p>
                <p>
                  At the center of every plan is a dedicated{" "}
                  <span className="font-bold text-[#02385a]">
                    Peace of Mind Representative (PM Rep)
                  </span>{" "}
                  — your personal health coordinator ensuring every detail of your
                  wellbeing is organised, monitored, and managed.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.18em] uppercase mb-3">
                  What your PM Rep does
                </p>
                <p className="text-slate-600 text-[15px] leading-[1.85]">
                  From scheduling appointments to coordinating providers, tracking
                  wellness goals, arranging follow-up care, and keeping approved
                  stakeholders informed — they ensure nothing gets missed.
                </p>
                <p className="font-raleway font-bold text-[#02385a] text-base mt-4">
                  Healthcare works best when someone is connecting the dots.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT'S INCLUDED */}
      {/* ================================================================ */}

      <section
        className="relative px-6 py-28 overflow-hidden"
        style={{ background: "#f8fbfd" }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#02385a]/[0.03] blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.18em] uppercase mb-4">
              What's Included
            </p>
            <h2
              className="font-raleway font-extrabold text-[#02385a] leading-[1.15] mb-4 mx-auto"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", maxWidth: 600 }}
            >
              Everything covered.
              <br />
              Nothing missed.
            </h2>
            <p className="text-slate-500 text-[16px] leading-relaxed max-w-lg mx-auto">
              Every TriageConcierge plan is built around comprehensive, end-to-end
              health coordination.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INCLUDED.map((item, i) => {
              const isWide = i === 0 || i === 9;
              return (
                <FadeUp
                  key={i}
                  delay={i * 0.035}
                  className={isWide ? "lg:col-span-2" : "lg:col-span-1"}
                >
                  <div
                    className="group relative rounded-2xl p-6 h-full flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default"
                    style={{ background: item.light, borderColor: `${item.color}20` }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 flex-shrink-0"
                      style={{ background: `${item.color}15` }}
                    >
                      {item.icon}
                    </div>
                    <h3
                      className="font-raleway font-bold text-base mb-2"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">
                      {item.desc}
                    </p>
                    <div
                      className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: item.color }}
                    />
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHY CHOOSE */}
      {/* ================================================================ */}

      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0 min-h-[700px]">
          <div className="px-10 py-24 lg:px-16 flex flex-col justify-center">
            <FadeUp>
              <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.18em] uppercase mb-4">
                Why TriageConcierge
              </p>
              <h2
                className="font-raleway font-extrabold text-[#02385a] leading-[1.15] mb-12"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
              >
                The difference is
                <br />
                in the detail.
              </h2>
            </FadeUp>

            <div className="flex flex-col gap-2">
              {WHY.map((item, i) => (
                <FadeUp key={i} delay={i * 0.06}>
                  <button
                    type="button"
                    onClick={() => setActiveWhy(activeWhy === i ? null : i)}
                    className="w-full text-left flex items-center justify-between gap-4 rounded-xl border px-5 py-4 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#aa7130]"
                    style={{
                      background: activeWhy === i ? "#f0f7ff" : "#fafbfc",
                      borderColor: activeWhy === i ? "#02385a" : "#e4ebf0",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <span className="font-raleway font-bold text-[#02385a] text-sm block">
                          {item.reason}
                        </span>
                        <span
                          className="text-slate-500 text-sm font-nunito block overflow-hidden transition-all duration-300"
                          style={{
                            maxHeight: activeWhy === i ? "60px" : "0px",
                            opacity: activeWhy === i ? 1 : 0,
                            marginTop: activeWhy === i ? 4 : 0,
                          }}
                        >
                          {item.benefit}
                        </span>
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200"
                      style={{ transform: activeWhy === i ? "rotate(180deg)" : "rotate(0deg)" }}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeIn className="relative min-h-[400px] lg:min-h-full">
            <Image
              src="/images/blog/4.webp"
              alt="TriageConcierge excellence"
              fill
              className="object-cover"
            />
            <div className="absolute top-8 right-8 bg-[#02385a]/90 backdrop-blur-md border border-white/20 rounded-2xl p-5">
              <p className="font-raleway font-extrabold text-white text-3xl leading-none mb-1">
                7+
              </p>
              <p className="text-white/60 text-xs font-semibold">
                Reasons clients choose us
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================================================================ */}
      {/* DESIGNED FOR MODERN LIVING */}
      {/* ================================================================ */}

      <section className="relative px-6 py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="mb-16">
            <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.18em] uppercase mb-4">
              Designed for Modern Living
            </p>
            <h2
              className="font-raleway font-extrabold text-[#02385a] leading-[1.15] mb-4 max-w-2xl"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Across Africa and around the world.
            </h2>
            <p className="text-slate-500 text-[16px] leading-relaxed max-w-xl">
              People managing demanding careers, frequent travel, and responsibilities
              across multiple cities and countries. TriageConcierge bridges the gap
              between healthcare, lifestyle management, and peace of mind.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FadeIn className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden min-h-[400px]">
              <Image
                src="/images/blog/8.webp"
                alt="TriageConcierge modern living"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02385a]/90 via-[#02385a]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-raleway font-bold text-[#00b99d] text-[11px] tracking-[0.18em] uppercase mb-2">
                  Powered by People. Enhanced by Tech.
                </p>
                <p className="text-white text-[15px] leading-[1.8] max-w-lg">
                  Through our secure digital platform, your PM Rep monitors early health
                  risks, manages your digital Health Snapshot, and streams real-time
                  updates directly to you.
                </p>
              </div>
            </FadeIn>

            <FadeUp delay={0.05} className="bg-[#02385a] rounded-3xl p-7 flex flex-col">
              <p className="font-raleway font-bold text-[#aa7130] text-[11px] tracking-[0.18em] uppercase mb-5">
                Our ecosystem serves
              </p>
              <div className="flex flex-col gap-2.5 flex-1">
                {SERVES.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00b99d] flex-shrink-0" />
                    <span className="text-white/75 text-sm font-nunito">{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp
              delay={0.1}
              className="bg-gradient-to-br from-[#aa7130] to-[#8c5c22] rounded-3xl p-7 flex flex-col justify-between"
            >
              <p className="font-raleway font-bold text-white/70 text-[11px] tracking-[0.18em] uppercase mb-6">
                NDPR Compliant
              </p>
              <div>
                <p className="font-raleway font-extrabold text-white text-5xl leading-none mb-2">
                  100%
                </p>
                <p className="text-white/75 text-sm leading-relaxed">
                  Discreet, confidential service. Your data is always protected.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* ACCESS PLANS */}
      {/* ================================================================ */}

      <section
        id="plans"
        className="relative px-6 py-28 overflow-hidden"
        style={{ background: "#f8fbfd" }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.18em] uppercase mb-4">
              Concierge Access Plans
            </p>
            <h2
              className="font-raleway font-extrabold text-[#02385a] leading-[1.15] mb-4 mx-auto"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Find the plan that fits your life.
            </h2>
            <p className="text-slate-500 text-[16px] max-w-lg mx-auto">
              Plans start from{" "}
              <span className="font-bold text-[#02385a]">₦450,000 per month.</span>
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="group relative rounded-3xl overflow-hidden flex flex-col h-full"
                  style={{
                    border: plan.featured
                      ? `2px solid ${plan.accent}`
                      : "2px solid #e4ebf0",
                    boxShadow: plan.featured
                      ? `0 20px 60px ${plan.accent}25`
                      : "0 2px 20px rgba(2,56,90,0.06)",
                  }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={plan.image}
                      alt={plan.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                    <div
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-raleway font-bold tracking-widest uppercase"
                      style={{
                        background: `${plan.accent}20`,
                        color: plan.accent,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {plan.tag}
                    </div>
                    {plan.featured && (
                      <div className="absolute top-4 right-4 bg-[#aa7130] px-3 py-1.5 rounded-full text-[10px] font-raleway font-bold tracking-widest uppercase text-white">
                        Most Popular
                      </div>
                    )}
                  </div>

                  <div className="bg-white flex-1 flex flex-col p-7">
                    <h3 className="font-raleway font-extrabold text-[#02385a] text-2xl mb-3">
                      {plan.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {plan.desc}
                    </p>
                    <div className="flex flex-col gap-2 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-center gap-3">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: `${plan.accent}15` }}
                          >
                            <svg
                              className="w-3 h-3"
                              viewBox="0 0 24 24"
                              fill="none"
                              style={{ color: plan.accent }}
                            >
                              <path
                                d="M5 13l4 4L19 7"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="text-slate-600 text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center py-3.5 rounded-xl font-raleway font-bold text-sm transition-all duration-200"
                      style={{
                        background: plan.featured ? plan.accent : `${plan.accent}12`,
                        color: plan.featured ? "white" : plan.accent,
                      }}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW IT WORKS */}
      {/* ================================================================ */}

      <section className="relative px-6 py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="mb-16">
            <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.18em] uppercase mb-4">
              How It Works
            </p>
            <h2
              className="font-raleway font-extrabold text-[#02385a] leading-[1.15] max-w-xl"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              3 steps to peace of mind.
            </h2>
          </FadeUp>

          <div className="flex flex-col gap-6">
            {STEPS.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden min-h-[320px] border border-slate-200">
                    <div
                      className={`relative min-h-[280px] lg:min-h-full ${
                        !isEven ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-6 left-6 bg-[#02385a]/80 backdrop-blur-sm rounded-2xl px-4 py-3">
                        <span className="font-raleway font-extrabold text-white text-3xl leading-none">
                          {step.number}
                        </span>
                      </div>
                      <div className="absolute bottom-6 left-6 bg-[#aa7130] rounded-full px-4 py-1.5">
                        <span className="font-raleway font-bold text-white text-[11px] tracking-widest uppercase">
                          {step.tag}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`bg-white flex flex-col justify-center px-10 py-12 ${
                        !isEven ? "lg:order-1" : ""
                      }`}
                    >
                      <h3 className="font-raleway font-extrabold text-[#02385a] text-2xl mb-4">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-[16px] leading-[1.9] max-w-md">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* TRIAGESNAPSHOT TEASER */}
      {/* ================================================================ */}

      <section className="relative bg-[#02385a] overflow-hidden px-6 py-28">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/pattern.png')]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#00b99d]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#b745d8]/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#aa7130]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Section header */}
          <FadeUp className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#00b99d]/20 border border-[#00b99d]/30 rounded-full px-4 py-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00b99d] animate-pulse" />
              <span className="font-raleway font-bold text-[11px] tracking-[0.14em] uppercase text-[#00b99d]">
                Coming Soon · TriageSnapshot
              </span>
            </div>
            <h2
              className="font-raleway font-extrabold text-white leading-[1.1] mb-5 mx-auto"
              style={{ fontSize: "clamp(30px, 5vw, 56px)", maxWidth: 700 }}
            >
              Your health results.
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #00b99d, #a6d200)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                In real time.
              </span>
            </h2>
            <p className="text-white/65 text-[17px] leading-[1.85] max-w-2xl mx-auto">
              After every home visit, your clinical provider logs your vitals directly
              into the TriageSnapshot system. Your results are instantly compiled into
              a personal Health Passport and delivered to you in seconds — wherever
              you are in the world.
            </p>
          </FadeUp>

          {/* Feature grid + mock passport side by side */}
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — feature list */}
            <div className="flex flex-col gap-4">
              {SNAPSHOT_FEATURES.map((f, i) => (
                <FadeUp key={i} delay={i * 0.07}>
                  <div className="flex items-start gap-5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 rounded-2xl px-6 py-5 transition-colors duration-200">
                    <div className="w-11 h-11 rounded-xl bg-[#aa7130]/20 flex items-center justify-center text-xl flex-shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-raleway font-bold text-white text-sm mb-1">
                        {f.title}
                      </p>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Right — mock Health Passport card */}
            <FadeIn delay={0.2}>
              <div
                className="relative mx-auto"
                style={{ maxWidth: 480 }}
              >
                {/* Glow behind card */}
                <div className="absolute inset-0 scale-105 rounded-3xl bg-gradient-to-br from-[#aa7130]/30 via-[#00b99d]/20 to-[#b745d8]/20 blur-2xl" />

                {/* Card */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {/* Passport header */}
                  <div
                    className="px-6 py-5 flex items-center justify-between"
                    style={{ background: "#b45309" }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Mini logo */}
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg viewBox="0 0 60 60" width="20" height="20">
                          <path
                            fill="white"
                            d="M5 22 C5 18 7 16 10 16 L18 16 L18 10 C18 7 20 5 23 5 L37 5 C40 5 42 7 42 10 L42 16 L18 16 L18 22 L42 22 L42 16 L48 16 C51 16 53 18 53 22 L53 38 C53 41 51 43 48 43 L42 43 L42 55 C28 47 15 38 5 38 Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm leading-none">TriageHome</p>
                        <p className="text-white/70 text-[10px] mt-0.5">Health Passport</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-[10px]">{new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</p>
                      <p className="text-white text-[10px] font-semibold mt-0.5">www.triage-home.com</p>
                    </div>
                  </div>

                  {/* Passport body */}
                  <div className="px-6 py-5 flex flex-col gap-4">

                    {/* Patient row */}
                    <div className="bg-white/5 rounded-xl px-4 py-3 flex items-center justify-between">
                      <div>
                        <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-0.5">Client</p>
                        <p className="text-white font-raleway font-bold text-base">Adebayo Tunde</p>
                        <p className="text-white/50 text-[11px]">Male · 42 yrs</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#aa7130]/30 flex items-center justify-center text-lg">
                        👤
                      </div>
                    </div>

                    {/* Vitals grid */}
                    <div>
                      <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-2 px-1">
                        ❤️ Vital Signs
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { label: "Temperature", value: "36.8°C", status: "normal" },
                          { label: "Blood Pressure", value: "118/76", status: "normal" },
                          { label: "Pulse Rate", value: "82 bpm", status: "normal" },
                          { label: "Blood Sugar", value: "105 mg/dL", status: "warning" },
                          { label: "SpO₂", value: "98%", status: "normal" },
                          { label: "BMI", value: "23.4", status: "normal" },
                        ].map((v) => (
                          <div
                            key={v.label}
                            className="rounded-xl px-3 py-2.5 flex items-center justify-between gap-2"
                            style={{ background: "rgba(255,255,255,0.05)" }}
                          >
                            <div>
                              <p className="text-white/40 text-[9px] font-semibold mb-0.5">
                                {v.label}
                              </p>
                              <p className="text-white font-raleway font-bold text-sm leading-none">
                                {v.value}
                              </p>
                            </div>
                            <div
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{
                                background: v.status === "normal" ? "#00b99d" : "#aa7130",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BMI result */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white/5 rounded-xl px-4 py-3 text-center">
                        <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-1">BMI</p>
                        <p className="font-raleway font-extrabold text-white text-2xl leading-none">23.4</p>
                        <p className="text-white/40 text-[10px] mt-0.5">kg/m²</p>
                      </div>
                      <div className="rounded-xl px-4 py-3 text-center" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.25)" }}>
                        <p className="text-white/50 text-[10px] font-semibold uppercase tracking-wider mb-1">Category</p>
                        <p className="font-raleway font-extrabold text-[#10b981] text-xl leading-none">Normal</p>
                      </div>
                    </div>

                    {/* Provider note */}
                    <div className="rounded-xl px-4 py-3" style={{ background: "rgba(170,113,48,0.12)", border: "1px solid rgba(170,113,48,0.25)" }}>
                      <p className="text-[#aa7130] text-[10px] font-bold tracking-wider uppercase mb-1">📝 Provider Note</p>
                      <p className="text-white/60 text-[12px] leading-relaxed">
                        Blood sugar slightly elevated. Recommend dietary review and follow-up in 2 weeks. All other vitals within healthy range.
                      </p>
                      <p className="text-white/35 text-[10px] mt-2">
                        — Kemisola I., RN · TriageHome
                      </p>
                    </div>

                    {/* CTA strip */}
                    <div className="rounded-xl px-4 py-3 text-center" style={{ background: "#fefce8", border: "2px solid #ca8a04" }}>
                      <p className="font-bold text-[#854d0e] text-[12px] mb-0.5">
                        READY FOR PROFESSIONAL CARE AT HOME?
                      </p>
                      <p className="text-[#713f12] text-[11px]">
                        Book a certified nurse visit
                      </p>
                    </div>
                  </div>

                  {/* Passport footer */}
                  <div
                    className="px-6 py-3 text-center"
                    style={{ background: "#1e2937" }}
                  >
                    <p className="text-slate-400 text-[10px]">
                      For informational purposes only. Consult a licensed professional for medical advice.
                    </p>
                  </div>
                </div>

                {/* Floating delivered badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2.5"
                  style={{ border: "1px solid #e4ebf0" }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#00b99d]/15 flex items-center justify-center text-base flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <p className="font-raleway font-bold text-[#02385a] text-[11px] leading-tight">
                      Sent to WhatsApp
                    </p>
                    <p className="text-slate-400 text-[10px]">Instant delivery</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2.5"
                  style={{ border: "1px solid #e4ebf0" }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#aa7130]/15 flex items-center justify-center text-base flex-shrink-0">
                    📄
                  </div>
                  <div>
                    <p className="font-raleway font-bold text-[#02385a] text-[11px] leading-tight">
                      PDF ready to download
                    </p>
                    <p className="text-slate-400 text-[10px]">Health Passport</p>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          {/* Bottom CTA */}
          <FadeUp delay={0.2} className="text-center mt-20">
            <p className="text-white/50 text-sm font-nunito mb-6">
              TriageSnapshot is included in all TriageConcierge plans.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#aa7130] hover:bg-[#8c5c22] text-white font-raleway font-bold text-sm px-8 py-4 rounded-2xl transition-colors"
            >
              Get access with your Concierge Plan
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FINAL CTA */}
      {/* ================================================================ */}

      <section className="relative min-h-[600px] flex items-center justify-center px-6 py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog/5.webp"
            alt="TriageConcierge peace of mind"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#02385a]/95 via-[#02385a]/85 to-[#024a78]/90" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-b from-[#b745d8]/20 via-[#00b99d]/15 to-transparent blur-3xl pointer-events-none z-10" />

        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-[#aa7130]/25 border border-[#aa7130]/50 rounded-full px-4 py-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#aa7130] animate-pulse" />
              <span className="font-raleway font-bold text-[11px] tracking-[0.14em] uppercase text-amber-300">
                More Than Healthcare
              </span>
            </div>

            <h2
              className="font-raleway font-extrabold text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(34px, 5.5vw, 64px)" }}
            >
              Peace of mind.
            </h2>

            <p className="text-white/70 text-lg leading-[1.85] max-w-2xl mx-auto mb-12">
              TriageConcierge isn't about waiting until you are ill. It is about
              having an elite team standing right behind you. You focus on your work,
              your travel, and your life — knowing that your personal Care Coordinator
              is managing every detail that matters.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-2xl bg-[#aa7130] hover:bg-[#8c5c22] px-10 py-5 font-raleway font-bold text-base text-white transition-all duration-200 shadow-xl shadow-[#aa7130]/30"
              >
                Request Concierge Access
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/25 hover:border-white/50 backdrop-blur-sm px-10 py-5 font-raleway font-bold text-base text-white transition-all duration-200"
              >
                Speak to a Specialist
              </a>
            </div>
            <p className="text-white/35 text-sm font-raleway font-semibold tracking-wider">
              #HomeHealth, Powered by People
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}