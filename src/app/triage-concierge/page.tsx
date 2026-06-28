"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

// ─── Config ───────────────────────────────────────────────────────────────────

const WHATSAPP =
  "https://wa.me/2349134664547?text=Hello%20TriageConcierge%2C%20I%20would%20like%20to%20learn%20more.";

// ─── Premium SVG Icons (no emoji, Apple/Stripe style) ─────────────────────────

const Icons = {
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Pulse: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" />
    </svg>
  ),
  Bell: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  UserShield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Home: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ChevronDown: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const SEGMENTS = [
  {
    tag: "Diaspora Families",
    headline: "Trusted oversight for the ones you left behind.",
    body: "You live abroad. Your parents are in Lagos. You need more than a phone call, you need a verified team, regular health updates, and someone who escalates when it matters.",
    services: ["Regular health snapshots", "Emergency escalation", "Verified provider visits", "Family reporting dashboard", "Care coordination from anywhere"],
    // Replace with: mum-twins-nyc-highrise.jpg, African woman on a video call in NYC high-rise apartment
    image: "/images/hero/ss.png",
    imageFallback: "bg-gradient-to-br from-[#02385a] to-[#024a78]",
  },
  {
    tag: "Executives & VIP Professionals",
    headline: "Healthcare that works around your schedule.",
    body: "Your diary is full. Your health shouldn't suffer for it. A dedicated coordinator arranges everything, diagnostics, specialist referrals, travel health, post-op recovery, without interrupting your day.",
    services: ["Personal healthcare coordinator", "Home diagnostics", "Priority specialist referrals", "Travel health support", "Medication management"],
    // Replace with: executive-leaving-meeting.jpg, Executive leaving a meeting, provider managing logistics behind the scenes
    image: "/images/hero/man.png",
    imageFallback: "bg-gradient-to-br from-[#1a0a00] to-[#3d1f00]",
  },
  {
    tag: "Family Offices & HNIs",
    headline: "A trusted healthcare partner for your entire household.",
    body: "Your family's health is too important to leave to chance. One partner. One coordinator. Complete oversight for every member of your household, from annual wellness planning to live-in care.",
    services: ["Multi-member access plans", "Elder care oversight", "Household health records", "Annual wellness planning", "Live-in caregiver coordination"],
    // Replace with: multigenerational-luxury-home.jpg, Multigenerational family in luxury home, discreet provider in background
    image: "/images/hero/fam.png",
    imageFallback: "bg-gradient-to-br from-[#0a1a0a] to-[#1a3a1a]",
  },
];

const PM_REP_DUTIES = [
  { icon: Icons.Calendar, text: "Arranges appointments and manages your calendar" },
  { icon: Icons.UserShield, text: "Coordinates nurses, doctors, and specialists" },
  { icon: Icons.Pulse, text: "Tracks health updates and vital records" },
  { icon: Icons.Bell, text: "Escalates emergencies immediately" },
  { icon: Icons.Globe, text: "Provides regular reports to your family" },
  { icon: Icons.Shield, text: "Ensures care plans are followed precisely" },
];

const JOURNEY_STEPS = [
  { number: "01", title: "Consultation", desc: "A private assessment of your lifestyle, medical history, and care needs." },
  { number: "02", title: "Care Assessment", desc: "We evaluate your health baseline and identify priorities." },
  { number: "03", title: "Personalised Plan", desc: "A care plan built around your schedule, location, and preferences." },
  { number: "04", title: "Provider Matching", desc: "Your PM Rep and clinical team are carefully selected for you." },
  { number: "05", title: "Ongoing Monitoring", desc: "Regular check-ins, health snapshots, and proactive oversight." },
  { number: "06", title: "Family Reporting", desc: "Regular updates to approved family members, wherever they are." },
];

const CITIES = [
  { name: "Lagos", x: 46, y: 52, primary: true },
  { name: "Abuja", x: 48, y: 48 },
  { name: "London", x: 47, y: 22 },
  { name: "Houston", x: 20, y: 38 },
  { name: "Atlanta", x: 23, y: 37 },
  { name: "Toronto", x: 25, y: 30 },
  { name: "Doha", x: 60, y: 40 },
  { name: "Dubai", x: 62, y: 42 },
  { name: "New Delhi", x: 66, y: 38 },
  { name: "Johannesburg", x: 52, y: 67 },
];

const PLANS = [
  {
    name: "Assure",
    price: "₦120,000",
    period: "/month",
    tag: "Essentials",
    tagline: "Monthly oversight for peace of mind.",
    features: [
      "Monthly wellness oversight",
      "Care coordinator support",
      "Scheduled nurse check-ins",
      "Health reporting",
    ],
    accent: "#00b99d",
    cta: "Get Started",
  },
  {
    name: "Passport",
    price: "₦450,000",
    period: "/month",
    tag: "Premium",
    tagline: "Full concierge. Complete coordination.",
    features: [
      "Everything in Assure",
      "Priority provider access",
      "Specialist coordination",
      "Family reporting dashboard",
      "Concierge healthcare support",
    ],
    accent: "#aa7130",
    cta: "Get Started",
    featured: true,
  },
  {
    name: "PostOp",
    price: "Custom",
    period: "",
    tag: "Recovery",
    tagline: "Structured support after surgery.",
    features: [
      "Post-surgery home nursing",
      "Wound care management",
      "Medication monitoring",
      "Recovery milestone tracking",
      "PM Rep throughout recovery",
    ],
    accent: "#02385a",
    cta: "Request Quote",
  },
];

const WHY_ICONS = [
  { Icon: Icons.Shield, title: "Elite Clinical Network", desc: "Vetted providers with professional indemnity." },
  { Icon: Icons.Bell, title: "Single Point of Contact", desc: "Your PM Rep handles every moving part." },
  { Icon: Icons.Pulse, title: "Proactive, Not Reactive", desc: "Preventive oversight catches issues early." },
  { Icon: Icons.Globe, title: "Global Access", desc: "Coordinate care from anywhere in the world." },
  { Icon: Icons.UserShield, title: "Complete Privacy", desc: "Discreet, confidential for HNIs." },
  { Icon: Icons.Home, title: "Care at Home", desc: "Clinical expertise delivered to your door." },
  { Icon: Icons.Phone, title: "Digital Reporting", desc: "Real-time updates via your TriageSnapshot." },
  { Icon: Icons.Calendar, title: "HMO Integration", desc: "Seamless coordination with your insurer." },
];

const SNAPSHOT_POINTS = [
  "Vital signs captured at every visit",
  "Medications and dosage history",
  "Clinical assessments and provider notes",
  "Visit records and care timeline",
  "Shareable with family or specialists",
];

// ─── Animation helpers ────────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Placeholder image (used while real photos are dropped in) ────────────────

function PlaceholderImage({
  label,
  gradient,
  className = "",
}: {
  label: string;
  gradient: string;
  className?: string;
}) {
  return (
    <div className={`${gradient} ${className} flex items-end justify-start`}>
      <div className="m-5 bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1.5">
        <p className="text-white/60 text-[10px] font-mono font-semibold tracking-wider uppercase">
          📸 {label}
        </p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ConciergePage() {
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeWhy, setActiveWhy] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="relative overflow-x-hidden font-nunito bg-white text-[#0f172a]">

      {/* ================================================================
          HERO, Full bleed. Elegant African executive on a video call.
          Replace /images/concierge/hero.jpg with:
          "Elegant African executive in London on a video call, checking
           on elderly parents in Lagos. TriageConcierge dashboard visible
           on tablet. Feeling: reassurance, trust, oversight."
      ================================================================ */}

      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          {/* REPLACE THIS DIV with:
              <Image src="/images/concierge/hero.jpg" alt="TriageConcierge" fill className="object-cover object-center" priority />
          */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#02385a] to-[#061428]" />
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-[600px] h-[600px] rounded-full border border-white/20" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10" />
          </div>
          {/* Caption for placeholder */}
          <div className="absolute bottom-32 right-8 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5 z-10">
            <p className="text-white/50 text-[10px] font-mono uppercase tracking-wider">
              📸 Replace: African executive in London on video call, parents in Lagos visible on screen
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/95 via-[#0a0f1e]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/80 via-transparent to-transparent" />
        </motion.div>

        {/* Subtle gold grid lines */}
         {/* Background Image */}
<Image
  src="/images/hero/peace.png"
  alt="TriageConcierge"
  fill
  className="object-cover object-center"
  priority
/>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/60 z-[1]" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-24">
          <div className="max-w-2xl">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-[1px] bg-[#aa7130]" />
              <span className="font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase text-[#aa7130]">
                TriageConcierge
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-raleway font-extrabold text-white leading-[1.04] tracking-tight mb-7"
              style={{ fontSize: "clamp(42px, 6.5vw, 78px)" }}
            >
              Healthcare
              <br />
              <span style={{
                background: "linear-gradient(135deg, #aa7130 0%, #d4a050 50%, #aa7130 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                coordinated.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-white/60 text-lg leading-[1.85] max-w-lg mb-10 font-light"
            >
              A dedicated coordinator. Verified providers. Real-time health updates.
              For individuals, executives, and families who need trusted oversight,
              whether across town or across the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-[#aa7130] hover:bg-[#8c5c22] text-white font-raleway font-semibold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-200"
              >
                Request a Consultation
                <Icons.ArrowRight />
              </a>
              <a
                href="#plans"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#aa7130]/60 text-white/80 hover:text-white font-raleway font-semibold text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-200"
              >
                View Access Plans
              </a>
            </motion.div>

            {/* 4 stats in a row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-10"
            >
              {[
                { v: "24/7", l: "Support" },
                { v: "₦120K", l: "From / month" },
                { v: "3", l: "Access plans" },
                { v: "10+", l: "Global cities" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-raleway font-extrabold text-white text-xl leading-none mb-1">{s.v}</p>
                  <p className="text-white/35 text-xs font-semibold tracking-wide uppercase">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================================================================
          WHO WE SERVE, 3 client segments, tab-switched
      ================================================================ */}

      <section className="bg-[#fafafa] border-y border-slate-100 py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="mb-14">
            <p className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4">
              Who We Serve
            </p>
            <h2
              className="font-raleway font-extrabold text-[#0f172a] leading-[1.12] max-w-xl"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              Supporting executives, families and professionals across continents.
            </h2>
          </FadeUp>

          {/* Tab selectors */}
          <div className="flex flex-wrap gap-3 mb-10">
            {SEGMENTS.map((seg, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveSegment(i)}
                className="font-raleway font-semibold text-[13px] tracking-wide px-5 py-2.5 rounded-full border transition-all duration-200 focus:outline-none"
                style={{
                  background: activeSegment === i ? "#02385a" : "transparent",
                  color: activeSegment === i ? "#fff" : "#64748b",
                  borderColor: activeSegment === i ? "#02385a" : "#e2e8f0",
                }}
              >
                {seg.tag}
              </button>
            ))}
          </div>

          {/* Segment content */}
          {SEGMENTS.map((seg, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{ opacity: activeSegment === i ? 1 : 0, y: activeSegment === i ? 0 : 8 }}
              transition={{ duration: 0.4 }}
              className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-200 ${activeSegment === i ? "flex" : "hidden"} flex-col lg:flex-row`}
              style={{ display: activeSegment === i ? undefined : "none" }}
            >
              {/* Image */}
              <div className="relative min-h-[340px] lg:min-h-[500px]">
                {/* REPLACE with real image based on seg.image path */}
                <Image
  src={seg.image}
  alt={seg.tag}
  fill
  className="object-cover object-center"
/>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5 lg:bg-gradient-to-r lg:from-transparent lg:to-white" />
              </div>

              {/* Content */}
              <div className="bg-white px-10 py-12 lg:px-14 flex flex-col justify-center">
                <p className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4">
                  {seg.tag}
                </p>
                <h3
                  className="font-raleway font-extrabold text-[#0f172a] leading-[1.15] mb-5"
                  style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
                >
                  {seg.headline}
                </h3>
                <p className="text-slate-500 text-[15px] leading-[1.85] mb-8">
                  {seg.body}
                </p>
                <div className="flex flex-col gap-3 mb-10">
                  {seg.services.map((s) => (
                    <div key={s} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[#aa7130]"
                        style={{ background: "rgba(170,113,48,0.1)" }}>
                        <Icons.Check />
                      </div>
                      <span className="text-slate-600 text-sm">{s}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-raleway font-semibold text-sm text-[#aa7130] hover:text-[#8c5c22] transition-colors"
                >
                  Talk to a coordinator <Icons.ArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================================================================
          PM REP, Define who this is. Two-column split.
          Replace /images/concierge/pm-rep.jpg with:
          "Provider with an iPad briefing an executive in a modern office"
      ================================================================ */}

      <section className="bg-[#02385a] overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-[620px]">

          {/* Left, content */}
          <div className="px-10 py-20 lg:px-16 flex flex-col justify-center">
            <FadeUp>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-[#aa7130]" />
                <span className="font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase text-[#aa7130]">
                  Your PM Rep
                </span>
              </div>
              <h2
                className="font-raleway font-extrabold text-white leading-[1.1] mb-6"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
              >
                Think of them as your
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #aa7130, #d4a050)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  healthcare project manager.
                </span>
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.85] mb-10 max-w-md">
                Every TriageConcierge client is assigned a dedicated Care Coordinator,
                your single point of contact for everything health-related. They know
                your history, your preferences, and your family.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PM_REP_DUTIES.map(({ icon: Icon, text }, i) => (
                <FadeUp key={i} delay={i * 0.06}>
                  <div className="flex items-start gap-3 bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3.5">
                    <div className="w-4 h-4 text-[#aa7130] flex-shrink-0 mt-0.5">
                      <Icon />
                    </div>
                    <span className="text-white/70 text-[13px] leading-snug">{text}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right, image */}
          <FadeIn className="relative min-h-[400px] lg:min-h-full">
            {/* REPLACE with:
                <Image src="/images/hero/ml.png" alt="PM Rep briefing an executive" fill className="object-cover" />
                Image brief: Provider with an iPad briefing an executive in a modern office
            */}
           <Image src="/images/hero/pmx.png" alt="PM Rep briefing an executive" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#02385a] via-transparent to-transparent lg:block hidden" />
            {/* Floating card */}
            <div className="absolute bottom-8 left-8 right-8 lg:left-auto lg:right-8 lg:max-w-[240px] bg-white rounded-2xl p-5 shadow-2xl">
              <p className="font-raleway font-bold text-[#02385a] text-sm mb-1">Your PM Rep</p>
              <p className="text-slate-400 text-[12px] leading-relaxed">
                One person. Every appointment, update, and emergency, coordinated.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00b99d] animate-pulse" />
                <span className="text-[11px] font-semibold text-[#00b99d]">Available 24 / 7</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================================================================
          PEACE OF MIND JOURNEY, Visual pathway, modern line icons
      ================================================================ */}

      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-20">
            <p className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4">
              The Peace of Mind Journey
            </p>
            <h2
              className="font-raleway font-extrabold text-[#0f172a] leading-[1.12] mx-auto"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", maxWidth: 520 }}
            >
              From first call to ongoing care.
            </h2>
          </FadeUp>

          {/* Horizontal journey on desktop, vertical on mobile */}
          <div className="relative">
            {/* Connecting line, desktop */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" style={{ top: "28px" }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
              {JOURNEY_STEPS.map((step, i) => (
                <FadeUp key={i} delay={i * 0.07}>
                  <div className="flex flex-col items-center text-center lg:items-center">
                    {/* Node */}
                    <div className="relative mb-5">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center font-raleway font-extrabold text-sm border-2 relative z-10"
                        style={{
                          background: i === 0 ? "#02385a" : "white",
                          borderColor: i === 0 ? "#02385a" : "#e2e8f0",
                          color: i === 0 ? "white" : "#94a3b8",
                        }}
                      >
                        {step.number}
                      </div>
                    </div>
                    <p className="font-raleway font-bold text-[#0f172a] text-sm mb-2 leading-tight">
                      {step.title}
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          GLOBAL REACH, World map with gold lines
      ================================================================ */}

      <section className="bg-[#0a0f1e] py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4">
              Global Reach
            </p>
            <h2
              className="font-raleway font-extrabold text-white leading-[1.12] mx-auto mb-5"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", maxWidth: 600 }}
            >
              Supporting clients across continents.
            </h2>
            <p className="text-white/50 text-[16px] max-w-xl mx-auto">
              Many of our clients live abroad while caring for loved ones in Nigeria.
              TriageConcierge bridges that distance.
            </p>
          </FadeUp>

          {/* Simple SVG world map with glowing dots */}
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="relative w-full" style={{ paddingBottom: "50%" }}>
                <svg
                  viewBox="0 0 100 50"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Subtle grid */}
                  {[10, 20, 30, 40].map(y => (
                    <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.2" />
                  ))}
                  {[10, 20, 30, 40, 50, 60, 70, 80, 90].map(x => (
                    <line key={x} x1={x} y1="0" x2={x} y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="0.2" />
                  ))}

                  {/* Gold connection lines from Lagos */}
                  {CITIES.filter(c => !c.primary).map((city, i) => {
                    const lagos = CITIES.find(c => c.primary)!;
                    return (
                      <motion.line
                        key={city.name}
                        x1={lagos.x} y1={lagos.y}
                        x2={city.x} y2={city.y}
                        stroke="#aa7130"
                        strokeWidth="0.3"
                        strokeDasharray="1 1.5"
                        opacity="0.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                      />
                    );
                  })}

                  {/* City dots */}
                  {CITIES.map((city, i) => (
                    <g key={city.name}>
                      {city.primary && (
                        <motion.circle
                          cx={city.x} cy={city.y} r="1.5"
                          fill="rgba(170,113,48,0.2)"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: [1, 1.5, 1] }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
                        />
                      )}
                      <motion.circle
                        cx={city.x} cy={city.y} r={city.primary ? "1" : "0.6"}
                        fill={city.primary ? "#aa7130" : "#ffffff"}
                        opacity={city.primary ? 1 : 0.5}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                      />
                      <motion.text
                        x={city.x + 1.5} y={city.y + 0.5}
                        fontSize="1.8"
                        fill={city.primary ? "#aa7130" : "rgba(255,255,255,0.5)"}
                        fontFamily="system-ui"
                        fontWeight={city.primary ? "600" : "400"}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.08 }}
                      >
                        {city.name}
                      </motion.text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* City list below */}
              <div className="flex flex-wrap gap-3 justify-center px-8 pb-8">
                {CITIES.map((city) => (
                  <div
                    key={city.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{
                      background: city.primary ? "rgba(170,113,48,0.15)" : "rgba(255,255,255,0.04)",
                      border: city.primary ? "1px solid rgba(170,113,48,0.35)" : "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: city.primary ? "#aa7130" : "rgba(255,255,255,0.4)" }}
                    />
                    <span
                      className="text-[12px] font-semibold font-raleway"
                      style={{ color: city.primary ? "#d4a050" : "rgba(255,255,255,0.5)" }}
                    >
                      {city.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================================================================
          WHY TRIAGEHOME CONCIERGE, Premium icon grid
      ================================================================ */}

      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="mb-16">
            <p className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4">
              Why TriageConcierge
            </p>
            <h2
              className="font-raleway font-extrabold text-[#0f172a] leading-[1.12] max-w-xl"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              The difference is in the detail.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_ICONS.map(({ Icon, title, desc }, i) => (
              <FadeUp key={i} delay={i * 0.04}>
                <div
                  className="group p-6 rounded-2xl border border-slate-100 hover:border-[#02385a]/20 hover:shadow-lg transition-all duration-300 cursor-default"
                  style={{ background: "#fafafa" }}
                >
                  <div
                    className="w-10 h-10 text-[#02385a] mb-5 group-hover:text-[#aa7130] transition-colors duration-200"
                  >
                    <Icon />
                  </div>
                  <p className="font-raleway font-bold text-[#0f172a] text-sm mb-2">{title}</p>
                  <p className="text-slate-400 text-[13px] leading-relaxed">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          ACCESS PLANS, Luxury plan cards
      ================================================================ */}

      <section id="plans" className="bg-[#fafafa] border-y border-slate-100 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <p className="text-[#aa7130] font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase mb-4">
              Access Plans
            </p>
            <h2
              className="font-raleway font-extrabold text-[#0f172a] leading-[1.12] mx-auto mb-4"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
            >
              Find the plan that fits your life.
            </h2>
            <p className="text-slate-400 text-[16px] max-w-lg mx-auto">
              Every plan includes a dedicated PM Rep, verified providers, and
              access to the TriageSnapshot health summary.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div
                  className="relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: plan.featured ? "#02385a" : "white",
                    border: plan.featured ? "none" : "1px solid #e2e8f0",
                    boxShadow: plan.featured
                      ? "0 32px 64px rgba(2,56,90,0.25)"
                      : "0 2px 16px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Gold top bar */}
                  <div
                    className="h-[3px] w-full"
                    style={{
                      background: plan.featured
                        ? "linear-gradient(90deg, #aa7130, #d4a050)"
                        : `${plan.accent}50`,
                    }}
                  />

                  <div className="p-8 flex flex-col flex-1">
                    {/* Tag + name */}
                    <div className="mb-6">
                      <span
                        className="inline-block text-[10px] font-raleway font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-3"
                        style={{
                          background: plan.featured ? "rgba(170,113,48,0.2)" : `${plan.accent}12`,
                          color: plan.featured ? "#d4a050" : plan.accent,
                        }}
                      >
                        {plan.tag}
                      </span>
                      <h3
                        className="font-raleway font-extrabold text-2xl mb-1"
                        style={{ color: plan.featured ? "white" : "#0f172a" }}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: plan.featured ? "rgba(255,255,255,0.5)" : "#94a3b8" }}
                      >
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-8 pb-8 border-b"
                      style={{ borderColor: plan.featured ? "rgba(255,255,255,0.1)" : "#f1f5f9" }}>
                      <span
                        className="font-raleway font-extrabold"
                        style={{ fontSize: "2.25rem", color: plan.featured ? "white" : "#0f172a", lineHeight: 1 }}
                      >
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span
                          className="text-sm ml-1"
                          style={{ color: plan.featured ? "rgba(255,255,255,0.4)" : "#94a3b8" }}
                        >
                          {plan.period}
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <div className="flex flex-col gap-3 flex-1 mb-8">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-center gap-3">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{
                              background: plan.featured ? "rgba(170,113,48,0.25)" : `${plan.accent}15`,
                              color: plan.featured ? "#d4a050" : plan.accent,
                            }}
                          >
                            <Icons.Check />
                          </div>
                          <span
                            className="text-[13px]"
                            style={{ color: plan.featured ? "rgba(255,255,255,0.7)" : "#475569" }}
                          >
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-raleway font-semibold text-sm tracking-wide transition-all duration-200"
                      style={{
                        background: plan.featured
                          ? "linear-gradient(135deg, #aa7130, #8c5c22)"
                          : `${plan.accent}12`,
                        color: plan.featured ? "white" : plan.accent,
                      }}
                    >
                      {plan.cta}
                      <Icons.ArrowRight />
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          TRIAGESNAPSHOT TEASER
          Replace /images/concierge/snapshot.jpg with:
          "Professional PM Rep on a video call with family abroad"
      ================================================================ */}

      <section className="bg-[#0a0f1e] py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-[#00b99d]" />
                <span className="font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase text-[#00b99d]">
                  TriageSnapshot
                </span>
              </div>
              <h2
                className="font-raleway font-extrabold text-white leading-[1.1] mb-5"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
              >
                Your health story in
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #00b99d, #a6d200)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  one secure view.
                </span>
              </h2>
              <p className="text-white/55 text-[16px] leading-[1.85] mb-10 max-w-md">
                A digital health summary that captures vital signs, medications,
                care history, assessments and visit records in one shareable format.
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-3 mb-10">
                {SNAPSHOT_POINTS.map((p, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[#00b99d]"
                      style={{ background: "rgba(0,185,157,0.1)" }}>
                      <Icons.Check />
                    </div>
                    <span className="text-white/60 text-sm">{p}</span>
                  </div>
                ))}
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#aa7130] hover:bg-[#8c5c22] text-white font-raleway font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
              >
                Included in all plans <Icons.ArrowRight />
              </a>
            </FadeUp>
          </div>

          {/* Right, Passport mock card */}
          <FadeIn delay={0.15}>
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 scale-110 rounded-3xl bg-gradient-to-br from-[#aa7130]/20 via-[#00b99d]/15 to-[#b745d8]/10 blur-3xl pointer-events-none" />

              {/* Mock passport */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Header */}
                <div className="px-6 py-4 flex items-center justify-between" style={{ background: "#b45309" }}>
                  <div>
                    <p className="font-raleway font-bold text-white text-sm leading-none">TriageHome</p>
                    <p className="text-white/60 text-[10px] mt-0.5">Health Passport · TriageSnapshot</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-[10px]">{new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</p>
                    <p className="text-white/40 text-[10px]">www.triage-home.com</p>
                  </div>
                </div>

                <div className="px-6 py-5 flex flex-col gap-4">
                  {/* Client */}
                  <div className="flex items-center justify-between bg-white/[0.04] rounded-xl px-4 py-3">
                    <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">Client</p>
                      <p className="text-white font-raleway font-bold">Adebayo Tunde</p>
                      <p className="text-white/40 text-[11px]">Male · 42 yrs</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#aa7130]/20 flex items-center justify-center">
                      <div className="w-5 h-5 text-[#aa7130]"><Icons.UserShield /></div>
                    </div>
                  </div>

                  {/* Vitals */}
                  <div>
                    <p className="text-white/30 text-[10px] uppercase tracking-wider mb-2 font-semibold">Vital Signs</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { l: "Temp", v: "36.8°C", ok: true },
                        { l: "BP", v: "118/76", ok: true },
                        { l: "Pulse", v: "82 bpm", ok: true },
                        { l: "Sugar", v: "105", ok: false },
                        { l: "SpO₂", v: "98%", ok: true },
                        { l: "BMI", v: "23.4", ok: true },
                      ].map((v) => (
                        <div key={v.l} className="bg-white/[0.04] rounded-lg px-2.5 py-2">
                          <p className="text-white/30 text-[9px] mb-0.5">{v.l}</p>
                          <p className="text-white font-raleway font-bold text-xs leading-none">{v.v}</p>
                          <div className="w-1.5 h-1.5 rounded-full mt-1" style={{ background: v.ok ? "#00b99d" : "#aa7130" }} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Note */}
                  <div className="rounded-xl px-4 py-3" style={{ background: "rgba(170,113,48,0.1)", border: "1px solid rgba(170,113,48,0.2)" }}>
                    <p className="text-[#aa7130] text-[10px] font-bold uppercase tracking-wider mb-1">Provider Note</p>
                    <p className="text-white/50 text-[11px] leading-relaxed">Blood sugar slightly elevated. Dietary review recommended. All other vitals normal.</p>
                    <p className="text-white/25 text-[10px] mt-1.5">— Kemisola I., RN · TriageHome</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 text-center" style={{ background: "#1e2937" }}>
                  <p className="text-slate-500 text-[10px]">For informational purposes only. Consult a licensed professional.</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5"
                style={{ border: "1px solid #e4ebf0" }}
              >
                <div className="w-5 h-5 text-[#00b99d]"><Icons.Phone /></div>
                <div>
                  <p className="font-raleway font-bold text-[#02385a] text-[11px]">Sent to WhatsApp</p>
                  <p className="text-slate-400 text-[10px]">Instant delivery</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5"
                style={{ border: "1px solid #e4ebf0" }}
              >
                <div className="w-5 h-5 text-[#aa7130]"><Icons.Shield /></div>
                <div>
                  <p className="font-raleway font-bold text-[#02385a] text-[11px]">PDF Health Passport</p>
                  <p className="text-slate-400 text-[10px]">Ready to download</p>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================================================================
          FINAL CTA
          Replace /images/concierge/cta.jpg with:
          "Split screen, PM Rep on video call with family abroad /
           dashboard showing care summary"
      ================================================================ */}

      <section className="relative min-h-[580px] flex items-center justify-center px-6 py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          {/* REPLACE with:
              <Image src="/images/concierge/cta.jpg" fill className="object-cover" />
              Brief: PM Rep on video call with family abroad / dashboard showing care summary
          */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0c14] via-[#02385a] to-[#061428]" />
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(#aa7130 1px, transparent 1px), linear-gradient(90deg, #aa7130 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Placeholder label */}
          <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5">
            <p className="text-white/40 text-[10px] font-mono uppercase tracking-wider">
              📸 Replace: PM Rep on video call, care dashboard visible
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c14]/90 via-transparent to-[#0a0c14]/60" />
        </div>

        {/* Gold orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#aa7130]/10 blur-3xl pointer-events-none z-0" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#aa7130]" />
              <span className="font-raleway font-semibold text-[11px] tracking-[0.22em] uppercase text-[#aa7130]">
                More Than Healthcare
              </span>
              <div className="w-8 h-[1px] bg-[#aa7130]" />
            </div>

            <h2
              className="font-raleway font-extrabold text-white leading-[1.08] mb-6 tracking-tight"
              style={{ fontSize: "clamp(34px, 5.5vw, 64px)" }}
            >
              Peace of mind.
            </h2>
            <p className="text-white/55 text-lg leading-[1.85] max-w-xl mx-auto mb-12">
              TriageConcierge isn't about waiting until you are ill. It is about
              having an elite team standing behind you, while you focus on your
              work, your family, and your life.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full px-10 py-4 font-raleway font-semibold text-sm text-white transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #aa7130, #8c5c22)",
                  boxShadow: "0 20px 40px rgba(170,113,48,0.3)",
                }}
              >
                Request Concierge Access
                <Icons.ArrowRight />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-[#aa7130]/60 px-10 py-4 font-raleway font-semibold text-sm text-white/80 hover:text-white transition-all duration-200"
              >
                Speak to a Specialist
              </a>
            </div>
            <p className="text-white/25 text-xs font-raleway font-semibold tracking-[0.2em] uppercase">
              #HomeHealth, Powered by People
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}