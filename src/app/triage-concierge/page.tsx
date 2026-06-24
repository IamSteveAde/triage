"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ─── Constants ────────────────────────────────────────────────────────────────

const WHATSAPP =
  "https://wa.me/2349134664547?text=Hello%20TriageConcierge%2C%20I%20would%20like%20to%20learn%20more%20about%20a%20Concierge%20Plan.";

const INCLUDED = [
  {
    icon: "/Icons/medical-professional.png",
    title: "Dedicated Peace of Mind Representative",
    desc: "One trusted contact coordinating your care, appointments, providers, and wellness needs.",
  },
  {
    icon: "/Icons/nurse.png",
    title: "Clinical Support Network",
    desc: "Access to nurses, doctors, physiotherapists, pharmacists, and health assistants when needed.",
  },
  {
    icon: "/Icons/first.png",
    title: "Hospital & Specialist Navigation",
    desc: "Priority coordination, appointment support, hospital accompaniment, and follow-up management.",
  },
  {
    icon: "/Icons/shield.png",
    title: "Preventive Health Monitoring",
    desc: "Regular wellness checks, medication management, risk monitoring, and proactive health oversight.",
  },
  {
    icon: "/Icons/old.png",
    title: "Digital Health Snapshot",
    desc: "A living record of appointments, recommendations, wellness trends, and care activities.",
  },
  {
    icon: "/Icons/care.png",
    title: "Travel & Mobility Support",
    desc: "Health planning before travel, support during recovery, and continuity of care across locations.",
  },
  {
    icon: "/Icons/calendar.png",
    title: "Wellness & Lifestyle Services",
    desc: "Nutrition guidance, fitness support, companionship services, and healthy living coaching.",
  },
  {
    icon: "/Icons/document.png",
    title: "Family & Stakeholder Updates",
    desc: "Secure reporting and visibility for approved family members, employers, or designated representatives.",
  },
  {
    icon: "/Icons/emergency.png",
    title: "Emergency Coordination",
    desc: "Rapid escalation and coordination support when urgent situations arise.",
  },
  {
    icon: "/Icons/payment.png",
    title: "HMO & Insurance Liaison",
    desc: "Seamless claims processing, pre-authorisation support, and direct communication with your HMO.",
  },
];

const WHY = [
  { reason: "Elite Clinical Network", benefit: "Vetted providers with professional indemnity" },
  { reason: "Single Point of Contact", benefit: "No more chasing multiple doctors or hospitals" },
  { reason: "Proactive, Not Reactive", benefit: "Preventive approach that catches issues early" },
  { reason: "Global Best Practices", benefit: "Modelled on successful international homecare systems" },
  { reason: "Complete Privacy", benefit: "Discreet, confidential service for high-net-worth individuals" },
  { reason: "HMO Integration", benefit: "Seamless coordination with your health insurance" },
  { reason: "24/7 Support", benefit: "Always available when you need us" },
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
    color: "#00b99d",
  },
  {
    name: "TriagePassport",
    tag: "Remote Care",
    desc: "Ongoing health oversight, coordination, and visibility for busy professionals and those managing care remotely.",
    color: "#aa7130",
  },
  {
    name: "TriageComfort+",
    tag: "Premium Wellness",
    desc: "A curated concierge experience combining preventive health, care coordination, wellness support, and lifestyle services.",
    color: "#b745d8",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Concierge Consultation",
    desc: "We begin with a private, deep-dive assessment of your lifestyle, medical history, and daily schedule to map out your unique health baseline.",
  },
  {
    number: "02",
    title: "Your Coordinator Match",
    desc: "We assign your dedicated PM Rep and match you with a tailored team from our clinical support network based on your specific health profile.",
  },
  {
    number: "03",
    title: "Activation",
    desc: "Your secure, NDPR-compliant digital health dashboard is activated. Your PM Rep begins orchestrating your schedule, dispatching trained providers, and logging your digital health trends seamlessly.",
  },
];

// ─── Fade-up animation helper ─────────────────────────────────────────────────

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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ConciergePage() {
  return (
    <main className="relative overflow-hidden text-white font-nunito">

      {/* ================================================================ */}
      {/* HERO */}
      {/* ================================================================ */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">

        {/* Background */}
        <div className="absolute inset-0 bg-[#02385a]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/pattern.png')]" />

        {/* Glows */}
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#b745d8]/20 via-[#00b99d]/15 to-[#a6d200]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#aa7130]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#aa7130]/20 border border-[#aa7130]/40 rounded-full px-4 py-1.5 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#aa7130]" />
            <span className="font-raleway font-bold text-[11px] tracking-[0.12em] uppercase text-amber-300">
              TriageConcierge
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-raleway font-extrabold text-white text-[clamp(36px,6vw,64px)] leading-[1.1] mb-6"
          >
            Healthcare.{" "}
            <span className="text-[#00b99d]">Coordinated.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-4"
          >
            For people who value their time, their wellbeing, and the
            confidence that everything is taken care of.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-white/45 text-base italic mb-10"
          >
            Personal. Proactive. Always available.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#aa7130] hover:bg-[#8c5c22] px-8 py-4 font-raleway font-bold text-sm text-white transition-colors"
            >
              Let's Talk Today
            </a>
            <a
              href="#plans"
              className="rounded-2xl border border-white/20 hover:border-[#aa7130] px-8 py-4 font-raleway font-bold text-sm text-white transition-colors"
            >
              View Access Plans
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-sm text-white/40"
          >
            Available 24/7 · Instant response · Human support
          </motion.p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT IS TRIAGEHOME CONCIERGE */}
      {/* ================================================================ */}

      <section className="relative px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.15em] uppercase mb-4">
              What is TriageConcierge?
            </p>
            <h2 className="font-raleway font-extrabold text-[#02385a] text-[clamp(26px,4vw,40px)] leading-snug mb-6 max-w-2xl">
              A smarter, more personal way to access care.
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="space-y-5 text-slate-600 text-[16px] leading-[1.85] max-w-3xl">
              <p>
                Modern life is complex. Appointments, medications, hospital
                visits, wellness goals, specialist referrals, travel, recovery,
                and ongoing health needs often require far more coordination than
                most people have time for.
              </p>
              <p>
                TriageConcierge was designed to simplify that experience.
                Whether you're a busy executive, frequent traveller, diplomat,
                professional athlete, public figure, corporate client, or
                managing care from abroad — we provide a trusted layer of health
                oversight that keeps everything on track.
              </p>
              <p>
                At the center of every Concierge Plan is a dedicated{" "}
                <span className="font-bold text-[#02385a]">
                  Peace of Mind Representative (PM Rep)
                </span>{" "}
                — your personal health coordinator and trusted point of contact.
                Think of them as the person ensuring that every detail of your
                wellbeing is organised, monitored, and managed.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT DOES A PM REP DO */}
      {/* ================================================================ */}

      <section className="relative px-6 py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.15em] uppercase mb-4">
              Your PM Rep
            </p>
            <h2 className="font-raleway font-extrabold text-[#02385a] text-[clamp(26px,4vw,40px)] leading-snug mb-6 max-w-2xl">
              What does a PM Rep do?
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <p className="text-slate-600 text-[16px] leading-[1.85] mb-6">
                Your PM Rep coordinates the moving parts of your health and
                wellness journey. From scheduling appointments to coordinating
                providers, tracking wellness goals, arranging follow-up care,
                and keeping approved stakeholders informed — they help ensure
                nothing gets missed.
              </p>
              <p className="font-raleway font-bold text-[#02385a] text-base">
                Because healthcare works best when someone is connecting the
                dots.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT'S INCLUDED */}
      {/* ================================================================ */}

      <section className="relative px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.15em] uppercase mb-4">
              What's Included
            </p>
            <h2 className="font-raleway font-extrabold text-[#02385a] text-[clamp(26px,4vw,40px)] leading-snug mb-3 max-w-xl">
              Everything covered. Nothing missed.
            </h2>
            <p className="text-slate-500 text-[16px] leading-relaxed mb-14 max-w-lg">
              Every TriageConcierge plan is built around comprehensive,
              end-to-end health coordination.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INCLUDED.map((item, i) => (
              <FadeUp key={i} delay={i * 0.04}>
                <div className="group bg-white rounded-2xl border border-slate-200 hover:border-[#aa7130] hover:shadow-lg transition-all duration-300 p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#aa7130]/10 flex items-center justify-center mb-4">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-5 h-5 object-contain"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(45%) sepia(28%) saturate(881%) hue-rotate(352deg) brightness(92%) contrast(89%)",
                      }}
                    />
                  </div>
                  <h3 className="font-raleway font-bold text-[#02385a] text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHY CHOOSE */}
      {/* ================================================================ */}

      <section className="relative px-6 py-24 bg-[#02385a] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/pattern.png')]" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#00b99d]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeUp>
            <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.15em] uppercase mb-4">
              Why TriageConcierge
            </p>
            <h2 className="font-raleway font-extrabold text-white text-[clamp(26px,4vw,40px)] leading-snug mb-14 max-w-xl">
              The difference is in the detail.
            </h2>
          </FadeUp>

          <div className="flex flex-col gap-3">
            {WHY.map((item, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#aa7130] flex-shrink-0" />
                    <span className="font-raleway font-bold text-white text-sm">
                      {item.reason}
                    </span>
                  </div>
                  <span className="text-white/60 text-sm font-nunito sm:text-right max-w-xs">
                    {item.benefit}
                  </span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* DESIGNED FOR MODERN LIVING */}
      {/* ================================================================ */}

      <section className="relative px-6 py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.15em] uppercase mb-4">
              Designed for Modern Living
            </p>
            <h2 className="font-raleway font-extrabold text-[#02385a] text-[clamp(26px,4vw,40px)] leading-snug mb-6 max-w-2xl">
              Across Africa and around the world.
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-slate-600 text-[16px] leading-[1.85] max-w-3xl mb-12">
              People are increasingly managing demanding careers, frequent travel
              schedules, and responsibilities that span multiple cities and
              countries. TriageConcierge bridges the gap between healthcare,
              lifestyle management, and peace of mind.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVES.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-3.5"
                >
                  <svg
                    className="w-4 h-4 text-[#00b99d] flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-nunito text-sm text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Powered by people */}
          <FadeUp delay={0.2}>
            <div className="mt-10 bg-gradient-to-r from-[#02385a] to-[#024a78] rounded-2xl p-8">
              <p className="font-raleway font-bold text-[#aa7130] text-[11px] tracking-[0.15em] uppercase mb-3">
                Powered by People. Enhanced by Tech.
              </p>
              <p className="text-white/80 text-[15px] leading-[1.8]">
                Through our secure digital platform, your PM Rep monitors early
                health risks, manages your digital Health Snapshot, and streams
                real-time updates directly to you. The result is a deeply
                connected, responsive healthcare experience.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CONCIERGE ACCESS PLANS */}
      {/* ================================================================ */}

      <section id="plans" className="relative px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.15em] uppercase mb-4">
              Concierge Access Plans
            </p>
            <h2 className="font-raleway font-extrabold text-[#02385a] text-[clamp(26px,4vw,40px)] leading-snug mb-3 max-w-xl">
              Find the plan that fits your life.
            </h2>
            <p className="text-slate-500 text-[16px] leading-relaxed mb-14 max-w-lg">
              Plans start from{" "}
              <span className="font-bold text-[#02385a]">
                ₦450,000 per month.
              </span>
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-[#aa7130] hover:shadow-xl transition-all duration-300 p-7 h-full flex flex-col">
                  <div className="mb-5">
                    <span
                      className="inline-block text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full font-raleway mb-3"
                      style={{
                        background: `${plan.color}18`,
                        color: plan.color,
                      }}
                    >
                      {plan.tag}
                    </span>
                    <h3 className="font-raleway font-extrabold text-[#02385a] text-xl mb-3">
                      {plan.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">
                      {plan.desc}
                    </p>
                  </div>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 font-raleway font-bold text-sm text-[#aa7130] hover:text-[#8c5c22] transition-colors"
                  >
                    Learn more
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* HOW IT WORKS */}
      {/* ================================================================ */}

      <section className="relative px-6 py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <p className="text-[#aa7130] font-raleway font-bold text-[11px] tracking-[0.15em] uppercase mb-4">
              How It Works
            </p>
            <h2 className="font-raleway font-extrabold text-[#02385a] text-[clamp(26px,4vw,40px)] leading-snug mb-14 max-w-xl">
              3 steps to peace of mind.
            </h2>
          </FadeUp>

          <div className="flex flex-col gap-6">
            {STEPS.map((step, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex items-start gap-6 bg-white border border-slate-200 rounded-2xl p-7">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#02385a] flex items-center justify-center">
                    <span className="font-raleway font-extrabold text-white text-lg">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-raleway font-bold text-[#02385a] text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-[15px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FINAL CTA */}
      {/* ================================================================ */}

      <section className="relative px-6 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[#02385a]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/pattern.png')]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-b from-[#b745d8]/15 via-[#00b99d]/10 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-[#aa7130]/20 border border-[#aa7130]/40 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#aa7130]" />
              <span className="font-raleway font-bold text-[11px] tracking-[0.12em] uppercase text-amber-300">
                More Than Healthcare
              </span>
            </div>

            <h2 className="font-raleway font-extrabold text-white text-[clamp(28px,5vw,48px)] leading-[1.15] mb-6">
              Peace of mind.
            </h2>

            <p className="text-white/70 text-[17px] leading-[1.8] mb-4 max-w-2xl mx-auto">
              TriageConcierge isn't about waiting until you are ill. It is about
              having an elite team standing right behind you. You focus on your
              work, your travel, and your life — knowing that your personal Care
              Coordinator is managing every detail that matters.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#aa7130] hover:bg-[#8c5c22] px-9 py-4 font-raleway font-bold text-sm text-white transition-colors"
              >
                Request Concierge Access
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/20 hover:border-[#aa7130] px-9 py-4 font-raleway font-bold text-sm text-white transition-colors"
              >
                Speak to a Specialist
              </a>
            </div>

            <p className="mt-8 text-sm text-white/40">
              #HomeHealth, Powered by People
            </p>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}