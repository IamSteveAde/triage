// app/post-surgery-care/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import PeaceOfMindSection from "../../components/peace";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.triage-home.com"),

  title:
    "Post-Surgery Care Services in Lagos & Nigeria | Recovery Care | TriageHome",

  description:
    "TriageHome provides trusted post-surgery care services in Lagos and across Nigeria. Get professional home nursing, wound care, medication support, wellness monitoring, mobility assistance, and recovery care delivered directly to your home.",

  keywords: [
    "post surgery care Lagos",
    "post surgery care Nigeria",
    "home recovery care Nigeria",
    "post operative care Lagos",
    "home nursing after surgery",
    "wound care at home",
    "recovery support Nigeria",
    "professional providers Lagos",
    "in-home recovery services",
    "surgery recovery at home",
    "private nursing Lagos",
    "medical recovery care",
    "mobility assistance after surgery",
    "post hospital care Nigeria",
    "wellness monitoring Lagos",
    "home healthcare Nigeria",
    "professional home nursing",
    "recovery nurse at home",
    "elderly post surgery care",
    "trusted healthcare providers Nigeria",
  ],

  openGraph: {
    title:
      "Professional Post-Surgery Care Services | TriageHome",

    description:
      "Recover comfortably at home with professional post-surgery care, wound management, medication support, and home nursing services from TriageHome.",

    url: "https://www.triage-home.com/access-plans/post-surgery-care",

    siteName: "TriageHome",

    locale: "en_NG",

    type: "website",

    images: [
      {
        url: "https://www.triage-home.com/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "TriageHome Post-Surgery Care Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Post-Surgery Recovery Care At Home | TriageHome",

    description:
      "Professional post-operative care, home nursing, and recovery support delivered directly to your home.",

    images: ["https://www.triage-home.com/images/banner.jpg"],
  },

  alternates: {
    canonical: "https://www.triage-home.com/access-plans/post-surgery-care",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    icon: "/Icons/medical-professional.png",
    title: "Recovery Monitoring",
    desc: "Professional monitoring of recovery progress and overall wellness after surgery.",
  },
  {
    icon: "/Icons/first.png",
    title: "Wound Care",
    desc: "Safe and hygienic wound dressing and post-operative care support at home.",
  },
  {
    icon: "/Icons/nurse.png",
    title: "Medication Support",
    desc: "Helping clients stay consistent with prescriptions and recovery routines.",
  },
  {
    icon: "/Icons/old.png",
    title: "Mobility Assistance",
    desc: "Helping clients regain strength, movement, and confidence safely.",
  },
];
const benefits = [
  "Professional home nursing",
  "Safe recovery environment",
  "Personalized recovery plans",
  "Reduced hospital stress",
  "Compassionate care support",
  "Convenient home-based recovery",
];

export const dynamic = "force-static";

export default function PostSurgeryCarePage() {
  return (
    <main className="bg-white overflow-hidden text-[#02385a]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#02385a] text-white">

        {/* PATTERN */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/pattern.png')]" />

        {/* GLOW */}
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#b745d8] via-[#00b99d] to-[#a6d200] blur-3xl opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 backdrop-blur-sm">
              <img
  src="/Icons/shield.png"
  alt="Shield"
  className="w-4 h-4 object-contain"
  style={{
    filter:
      "brightness(0) saturate(100%) invert(45%) sepia(28%) saturate(881%) hue-rotate(352deg) brightness(92%) contrast(89%)",
  }}
/>
              Trusted Post-Surgery Recovery Care
            </div>

            <h1 className="mt-8 text-white text-5xl lg:text-7xl font-semibold leading-tight tracking-tight font-raleway">

              Recover
              <span className="block text-[#aa7130]">
                Comfortably
              </span>

              At Home

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 font-nunito">

              Professional post-surgery care and recovery support
              designed to help clients heal safely, comfortably,
              and confidently from home.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="rounded-2xl bg-[#aa7130] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Book Recovery Care
              </Link>

              <Link
                href="/services"
                className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-white/70">

              <div className="flex items-center gap-2">
             
                Home Nursing Support
              </div>

              <div className="flex items-center gap-2">
              
                Wound Care Assistance
              </div>

              <div className="flex items-center gap-2">
            
                Recovery Monitoring
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[#b745d8]/20 via-[#00b99d]/20 to-[#a6d200]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-2xl">

              <img
                src="/images/blog/8.webp"
                alt="Professional post surgery care services"
                className=""
              />

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <p className="text-[#aa7130] font-semibold uppercase tracking-[0.2em] text-sm">
              Recovery Care Services
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight font-raleway text-[#02385a]">
              Professional Post-Surgery Support At Home
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed font-nunito">
              Recover safely and comfortably with professional
              healthcare support tailored to your recovery needs.
            </p>

          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {services.map((service, i) => {
         

              return (
                <div
                  key={i}
                  className="rounded-[28px] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-2xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#aa7130]/10 text-[#aa7130]">
                 <img
  src={service.icon}
  alt={service.title}
  className="w-7 h-7 object-contain"
  style={{
    filter:
      "brightness(0) saturate(100%) invert(45%) sepia(28%) saturate(881%) hue-rotate(352deg) brightness(92%) contrast(89%)",
  }}
/>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[#02385a] font-raleway">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-600 font-nunito">
                    {service.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* WHY TRIAGEHOME */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div>

            <img
              src="/images/blog/11.webp"
              alt="Trusted recovery care services"
              className="rounded-[36px] object-cover w-full h-[620px] shadow-xl"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="text-[#aa7130] font-semibold uppercase tracking-[0.2em] text-sm">
              Why TriageHome
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-[#02385a] font-raleway">

              Recovery Care Designed Around Comfort & Healing

            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 font-nunito">

              TriageHome combines professional healthcare support
              with compassionate recovery care to help clients
              regain strength and confidence safely at home.

            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">

              {benefits.map((benefit, i) => (

                <div
                  key={i}
                  className="flex items-start gap-3 rounded-2xl bg-white p-5 border border-slate-200"
                >

                

                  <p className="text-slate-700 leading-relaxed font-nunito">
                    {benefit}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* SEO CONTENT */}
      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-[40px] border border-slate-200 bg-white p-10 lg:p-16 shadow-sm">

            <h2 className="text-4xl font-semibold tracking-tight text-[#02385a] font-raleway">

              Post-Surgery Care Services In Lagos & Nigeria

            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 font-nunito">

              <p>
                TriageHome provides professional post-surgery care services
                in Lagos and across Nigeria, helping clients recover safely
                and comfortably from home.
              </p>

              <p>
                Our recovery care services include home nursing,
                wound care, wellness monitoring, medication support,
                mobility assistance, and personalized recovery plans
                designed around each client's needs.
              </p>

              <p>
                Whether recovering from surgery, hospitalization,
                or medical procedures, TriageHome helps clients
                access compassionate healthcare support without
                the stress of repeated hospital visits.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="relative overflow-hidden rounded-[40px] bg-[#02385a] px-8 py-16 lg:px-16 text-white">

            <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/pattern.png')]" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

              <div className="max-w-2xl">

                <p className="text-[#aa7130] uppercase tracking-[0.2em] text-sm font-semibold">
                  Professional Recovery Support
                </p>

                <h2 className="mt-4 text-white text-4xl lg:text-5xl font-semibold tracking-tight leading-tight font-raleway">

                  Heal Safely With Professional Care At Home

                </h2>

                <p className="mt-6 text-lg text-white/70 leading-relaxed font-nunito">

                  Book trusted post-surgery care and home recovery
                  support with TriageHome today.

                </p>

              </div>

              <div className="flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#aa7130] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
                >
               
                  Book A Consultation
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
              
                  Back To Home
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>
      <PeaceOfMindSection/>

    </main>
  );
}