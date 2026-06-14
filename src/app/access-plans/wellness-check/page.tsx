// app/wellness-check/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import PeaceOfMindSection from "../../components/peace";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.triage-home.com"),

  title:
    "Wellness Check Services in Lagos & Nigeria | Home Health Assessment | TriageHome",

  description:
    "TriageHome provides professional wellness check services in Lagos and across Nigeria. Get home health assessments, vital checks, wellness monitoring, preventive healthcare support, and professional in-home health evaluations delivered directly to your home.",

  keywords: [
    "wellness check Lagos",
    "wellness check Nigeria",
    "home health assessment Nigeria",
    "health screenings Lagos",
    "preventive healthcare Nigeria",
    "vital signs monitoring Lagos",
    "health check at home",
    "home healthcare Nigeria",
    "professional health assessment",
    "wellness monitoring Nigeria",
    "mobile health check Lagos",
    "blood pressure check at home",
    "routine health assessment Nigeria",
    "healthcare at home Nigeria",
    "wellness support Lagos",
    "home nursing services Nigeria",
    "health evaluation at home",
    "professional healthcare Nigeria",
    "trusted healthcare providers Lagos",
    "health monitoring services Nigeria",
  ],

  openGraph: {
    title:
      "Professional Wellness Check Services | TriageHome",

    description:
      "Professional wellness checks, health assessments, vital monitoring, and preventive healthcare support delivered directly to your home.",

    url: "https://www.triage-home.com/access-plans/wellness-check",

    siteName: "TriageHome",

    locale: "en_NG",

    type: "website",

    images: [
      {
        url: "https://www.triage-home.com/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "TriageHome Wellness Check Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Professional Wellness Checks At Home | TriageHome",

    description:
      "Professional wellness checks, health monitoring, and preventive healthcare support delivered to your home.",

    images: ["https://www.triage-home.com/images/banner.jpg"],
  },

  alternates: {
    canonical: "https://www.triage-home.com/access-plans/wellness-check",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    icon: "/Icons/heart.png",
    title: "Vital Signs Monitoring",
    desc: "Professional monitoring of blood pressure, pulse, temperature, and wellness indicators.",
  },
  {
    icon: "/Icons/clipboard.png",
    title: "Health Assessments",
    desc: "Comprehensive wellness checks and personalized health evaluations from home.",
  },
  {
    icon: "/Icons/medical-professional.png",
    title: "Preventive Care Support",
    desc: "Early wellness monitoring designed to support healthier lifestyles and routines.",
  },
  {
    icon: "/Icons/health-care.png",
    title: "Professional Healthcare Support",
    desc: "Wellness services delivered safely and professionally by trained healthcare providers.",
  },
];
const benefits = [
  "Professional in-home wellness checks",
  "Convenient health monitoring",
  "Preventive healthcare support",
  "Comfortable home-based care",
  "Experienced healthcare professionals",
  "Personalized wellness guidance",
];

export const dynamic = "force-static";

export default function WellnessCheckPage() {
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
              Professional Wellness Check Services
            </div>

            <h1 className="mt-8 text-white text-5xl lg:text-7xl font-semibold leading-tight tracking-tight font-raleway">

              Wellness
              <span className="block text-[#aa7130]">
                Checks
              </span>

              At Home

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 font-nunito">

              Professional wellness checks and health assessments
              designed to help individuals monitor their health,
              prevent complications, and stay informed from home.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="rounded-2xl bg-[#aa7130] px-7 py-4 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Book A Wellness Check
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
           
                Health Assessments
              </div>

              <div className="flex items-center gap-2">
           
                Vital Monitoring
              </div>

              <div className="flex items-center gap-2">
              
                Preventive Healthcare
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[#b745d8]/20 via-[#00b99d]/20 to-[#a6d200]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-2xl">

              <img
                src="/images/blog/3.webp"
                alt="Professional wellness check services"
                className="w-full h-[600px] object-cover object-center"
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
              Wellness Services
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight font-raleway text-[#02385a]">

              Preventive Healthcare Support From Home

            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed font-nunito">

              Professional wellness checks designed to help individuals
              stay informed about their health and wellness comfortably from home.

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
              alt="Professional wellness monitoring"
              className="rounded-[36px] object-cover w-full h-[620px] shadow-xl"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="text-[#aa7130] font-semibold uppercase tracking-[0.2em] text-sm">
              Why TriageHome
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight text-[#02385a] font-raleway">

              Wellness Monitoring Designed Around Everyday Health

            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 font-nunito">

              TriageHome provides convenient wellness checks
              and preventive healthcare support to help individuals
              stay proactive about their health and overall well-being.

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

              Wellness Check Services In Lagos & Nigeria

            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600 font-nunito">

              <p>
                TriageHome provides professional wellness check services
                in Lagos and across Nigeria, helping individuals
                access convenient health assessments and wellness monitoring from home.
              </p>

              <p>
                Our wellness checks include vital signs monitoring,
                routine health assessments, preventive healthcare support,
                and personalized wellness guidance delivered by trained healthcare professionals.
              </p>

              <p>
                Through professional wellness monitoring and preventive healthcare,
                TriageHome helps individuals stay informed about their health
                while reducing the stress of unnecessary hospital visits.
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
                  Preventive Healthcare Support
                </p>

                <h2 className="mt-4 text-white text-4xl lg:text-5xl font-semibold tracking-tight leading-tight font-raleway">

                  Better Health Starts With Regular Wellness Checks

                </h2>

                <p className="mt-6 text-lg text-white/70 leading-relaxed font-nunito">

                  Book trusted wellness checks and professional health assessments with TriageHome today.

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