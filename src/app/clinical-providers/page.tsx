"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

type Provider = {
  id: number;
  fullName: string;
  displayName: string;
  firstName: string;
  initials: string;
  bio: string;
  languages: string[];
  title: string;
  qualifications: string;
  experience: string;
  state: string;
  licenseNumber: string;
  employeeNumber: string;
  imageSlug: string;
};

type RawProvider = Omit<Provider, "id" | "displayName" | "initials">;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function buildProviders(raw: RawProvider[]): Provider[] {
  return raw.map((p, i) => {
    const parts = p.fullName.trim().split(/\s+/);
    const lastInitial = parts[parts.length - 1]?.[0] ?? "";
    const initials = (p.firstName[0] + lastInitial).toUpperCase();
    const displayName = `${p.firstName} ${lastInitial}.`;
    return { ...p, id: i + 1, displayName, initials };
  });
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// imageSlug must match exactly the filename in /public/images/providers/
// e.g. imageSlug: "zuliyat" => /public/images/providers/zuliyat.jpg

const PROVIDERS: Provider[] = buildProviders([
  {
    fullName: "Zuliyat Abdulkareem",
    firstName: "Zuliyat",
    imageSlug: "zuliyat",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-001",
    licenseNumber: "84759/2023/L",
    bio: "A Registered Nurse who brings warmth, curiosity, and a deep commitment to client well-being to every care engagement. Passionate about learning, meaningful connection, and continuous professional growth.",
    languages: ["English", "Yoruba", "Hausa"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Eunice Oyewale",
    firstName: "Eunice",
    imageSlug: "Oyewale",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-002",
    licenseNumber: "RN245602",
    bio: "A Registered Nurse with strong clinical knowledge and a passion for client-centered care. Compassionate, dedicated, and committed to promoting health and delivering quality nursing services.",
    languages: ["English", "Yoruba"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Blessing Afuape",
    firstName: "Blessing",
    imageSlug: "afuape",
    title: "RN",
    qualifications: "BSC, RM",
    employeeNumber: "CPN-26-003",
    licenseNumber: "RM151963",
    bio: "A Registered Midwife licensed by the Nursing and Midwifery Council of Nigeria, with hands-on experience in maternal and newborn care. Certified in BLS, ACLS, Neonatal Resuscitation, and Family Planning. Committed to evidence-based practice.",
    languages: ["English", "Yoruba"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Taiwo Alayo",
    firstName: "Taiwo",
    imageSlug: "alayo",
    title: "RN",
    qualifications: "RN, RM",
    employeeNumber: "CPN-26-004",
    licenseNumber: "INT/25/245930",
    bio: "A nursing graduate with qualifications including RN, RM, RPHN, and BNSc. Naturally inquisitive, innovative, and open-minded. Deeply committed to community service and healthcare outreach.",
    languages: ["English", "Yoruba"],
    experience: "Less than 1 year",
    state: "Lagos",
  },
  {
    fullName: "Simbiat Oladimeji",
    firstName: "Simbiat",
    imageSlug: "simbiat",
    title: "RN",
    qualifications: "RN, RM",
    employeeNumber: "CPN-26-005",
    licenseNumber: "RN224377",
    bio: "A diligent and detail-oriented nursing graduate and midwife with clinical experience in Paediatrics, Accident and Emergency, Intensive Care, Maternity, and Outpatients departments.",
    languages: ["English", "Yoruba"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Kemisola Ipaye",
    firstName: "Kemisola",
    imageSlug: "ipaye",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-006",
    licenseNumber: "RN204920",
    bio: "Registered Nurse with 4 years of clinical experience in client assessment, triage, and home-care support. Evaluates symptoms promptly, identifies red flags, and communicates clearly to guide the next best step.",
    languages: ["English", "Yoruba"],
    experience: "4 – 7 years",
    state: "Lagos",
  },
  {
    fullName: "Afolakemi Olusemo",
    firstName: "Afolakemi",
    imageSlug: "olusemo",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-007",
    licenseNumber: "RN267820",
    bio: "Registered Nurse and graduate of Sacred Heart College of Nursing Sciences, currently practising at Reddington Hospital. Passionate about providing compassionate, client-centered care.",
    languages: ["English"],
    experience: "Less than 1 year",
    state: "Lagos",
  },
  {
    fullName: "Albert Nduaguba",
    firstName: "Albert",
    imageSlug: "nduaguba",
    title: "RN",
    qualifications: "RN, RCTN",
    employeeNumber: "CPN-26-008",
    licenseNumber: "RCTN641",
    bio: "A dedicated nurse and emerging health educator with a growing focus on cardiothoracic care and preventive health. Committed to delivering client-centered care and promoting early detection.",
    languages: ["English", "Igbo", "French"],
    experience: "4 – 7 years",
    state: "Lagos",
  },
  {
    fullName: "Oluwaseun Adebajo",
    firstName: "Oluwaseun",
    imageSlug: "adebajo",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-009",
    licenseNumber: "RN240140",
    bio: "A Registered Nurse and Telehealth practitioner who believes nursing is a calling rooted in patience, active listening, and holistic healing. Dedicated to delivering care beyond the clinical.",
    languages: ["English", "Yoruba"],
    experience: "1 – 3 years",
    state: "Lagos, Ogun",
  },
  {
    fullName: "Nosakhare Ero",
    firstName: "Nosakhare",
    imageSlug: "ero",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-010",
    licenseNumber: "RN203851",
    bio: "A passionate nurse dedicated to delivering quality health services with empathy and excellence. A strong believer that everyone deserves access to good healthcare regardless of background.",
    languages: ["English", "Yoruba"],
    experience: "4 – 7 years",
    state: "Lagos",
  },
  {
    fullName: "Rebecca Olori",
    firstName: "Rebecca",
    imageSlug: "rebecca",
    title: "RN",
    qualifications: "RN, RM",
    employeeNumber: "CPN-26-011",
    licenseNumber: "RM144587",
    bio: "A Registered Nurse Midwife who brings warmth and structure to every care engagement. Thrives in disciplined environments and deeply passionate about delivering quality, compassionate support.",
    languages: ["English"],
    experience: "Less than 1 year",
    state: "Lagos, Ogun",
  },
  {
    fullName: "Ngozi Ekokwu",
    firstName: "Ngozi",
    imageSlug: "ekokwu",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-012",
    licenseNumber: "RN203566",
    bio: "A dedicated and compassionate Registered Nurse with four years of clinical experience providing high-quality client care across diverse healthcare settings.",
    languages: ["English", "Igbo"],
    experience: "4 – 7 years",
    state: "Lagos",
  },
  {
    fullName: "Kehinde Adegbenro",
    firstName: "Kehinde",
    imageSlug: "adegbenro",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-013",
    licenseNumber: "RN263777",
    bio: "A Registered Nurse with a strong commitment to promoting quality client care and improving health outcomes. Possesses sound clinical knowledge and excellent communication skills.",
    languages: ["English", "Yoruba"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Olufunto Akinlade",
    firstName: "Olufunto",
    imageSlug: "olufunto",
    title: "RN",
    qualifications: "RN",
    employeeNumber: "CPN-26-014",
    licenseNumber: "RN224417",
    bio: "Dedicated and compassionate Registered Nurse with 28 months of clinical experience in fast-paced healthcare settings. Skilled in client assessment, medication administration, and teamwork.",
    languages: ["English", "Yoruba"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Blessing Alagha",
    firstName: "Blessing",
    imageSlug: "alagha",
    title: "RN",
    qualifications: "RN, RPHN",
    employeeNumber: "CPN-26-015",
    licenseNumber: "RN220149",
    bio: "Registered Nurse passionate about providing compassionate, client-focused care. Warm, attentive, and dedicated to helping clients feel informed, supported, and comfortable through every step of their care journey.",
    languages: ["English", "Yoruba"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Yetunde Akande",
    firstName: "Yetunde",
    imageSlug: "akande",
    title: "Health Assistant",
    qualifications: "BSC (Health Assistant)",
    employeeNumber: "HA-26-001",
    licenseNumber: "N/A",
    bio: "Compassionate and client-focused health assistant with strong skills in health education and empathetic communication. Experienced in collaborating with multidisciplinary teams.",
    languages: ["English", "Yoruba", "Pidgin", "French"],
    experience: "Less than 1 year",
    state: "Lagos",
  },
  {
    fullName: "Temitope Ahmed",
    firstName: "Temitope",
    imageSlug: "ahmed",
    title: "Health Assistant",
    qualifications: "Health Assistant",
    employeeNumber: "HA-26-002",
    licenseNumber: "N/A",
    bio: "A Health Assistant with extensive experience currently practising in Lagos State. Brings hands-on expertise and a deep commitment to delivering professional, compassionate care.",
    languages: ["English", "Yoruba", "Hausa"],
    experience: "8 – 15 years",
    state: "Lagos",
  },
  {
    fullName: "Faith Agboma",
    firstName: "Faith",
    imageSlug: "faith",
    title: "Health Assistant",
    qualifications: "Health Assistant",
    employeeNumber: "HA-26-003",
    licenseNumber: "N/A",
    bio: "A dedicated health assistant committed to delivering compassionate, client-centered support. Brings warmth and professionalism to every care engagement.",
    languages: ["English"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
  {
    fullName: "Kingsley Odok",
    firstName: "Kingsley",
    imageSlug: "kingsley",
    title: "Health Assistant",
    qualifications: "Health Assistant",
    employeeNumber: "HA-26-004",
    licenseNumber: "N/A",
    bio: "A dedicated health assistant with a strong commitment to quality care. Always active and attentive to client needs, with a focus on delivering reliable, professional support.",
    languages: ["English"],
    experience: "1 – 3 years",
    state: "Lagos",
  },
]);

// ─── Constants ────────────────────────────────────────────────────────────────

const TITLES = ["All", "RN", "Health Assistant"];

const GRADIENT_PAIRS: [string, string][] = [
  ["#02385a", "#00b99d"],
  ["#aa7130", "#02385a"],
  ["#00b99d", "#a6d200"],
  ["#b745d8", "#02385a"],
  ["#02385a", "#aa7130"],
  ["#00b99d", "#02385a"],
  ["#aa7130", "#00b99d"],
  ["#a6d200", "#02385a"],
];

function getGradient(id: number): string {
  const pair = GRADIENT_PAIRS[(id - 1) % GRADIENT_PAIRS.length];
  return `linear-gradient(135deg, ${pair[0]} 0%, ${pair[1]} 100%)`;
}

// ─── Title Badge ──────────────────────────────────────────────────────────────

function TitleBadge({ title }: { title: string }) {
  const cls =
    title === "Health Assistant"
      ? "bg-teal-50 text-teal-700"
      : "bg-emerald-50 text-emerald-800";
  return (
    <span
      className={`inline-block text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full font-raleway ${cls}`}
    >
      {title}
    </span>
  );
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
// object-top + scale-[1.8] + translate-y-[10%] zooms into the face/headshot area

function ProviderAvatar({
  provider,
  size,
}: {
  provider: Provider;
  size: "sm" | "lg";
}) {
  const [imgError, setImgError] = useState(false);
  const sizeClass = size === "lg" ? "w-24 h-24" : "w-16 h-16";
  const textClass = size === "lg" ? "text-2xl" : "text-lg";
  const px = size === "lg" ? 96 : 64;

  if (!imgError) {
    return (
      <div
        className={`${sizeClass} rounded-full overflow-hidden ring-2 ring-white shadow-md flex-shrink-0 relative`}
      >
        <Image
          src={`/images/providers/${provider.imageSlug}.jpg`}
          alt={`${provider.displayName} headshot`}
          fill
          // Scale up and shift down slightly so only the face shows
          className="object-cover scale-[2] translate-y-[30%]"
          sizes={`${px}px`}
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`${sizeClass} rounded-full flex-shrink-0 flex items-center justify-center shadow-md`}
      style={{ background: getGradient(provider.id) }}
    >
      <span
        className={`${textClass} font-bold tracking-wide text-white font-raleway`}
      >
        {provider.initials}
      </span>
    </div>
  );
}

// ─── Detail Card ──────────────────────────────────────────────────────────────

function DetailCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-slate-400 font-raleway">
          {label}
        </span>
      </div>
      <span className="font-nunito font-bold text-sm text-[#02385a]">{value}</span>
    </div>
  );
}

// ─── Filter Pill ──────────────────────────────────────────────────────────────

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap text-[13px] font-semibold font-raleway px-4 py-2 rounded-full border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#aa7130] ${
        active
          ? "bg-[#02385a] border-[#02385a] text-white"
          : "bg-white border-slate-200 text-slate-500 hover:border-[#02385a] hover:text-[#02385a]"
      }`}
    >
      {label}
    </button>
  );
}

// ─── Provider Card ────────────────────────────────────────────────────────────

function ProviderCard({
  provider,
  onClick,
}: {
  provider: Provider;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left w-full bg-white rounded-2xl border border-slate-200 hover:border-[#aa7130] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#aa7130]"
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#02385a] to-[#00b99d] group-hover:from-[#aa7130] group-hover:to-[#00b99d] transition-all duration-300" />

      <div className="p-6 flex flex-col flex-1">
        {/* Avatar + Identity */}
        <div className="flex items-center gap-4 mb-4">
          <ProviderAvatar provider={provider} size="sm" />
          <div className="flex-1 min-w-0">
            <p className="font-raleway font-bold text-[#02385a] text-sm leading-snug mb-1.5 truncate">
              {provider.displayName}
            </p>
            <TitleBadge title={provider.title} />
          </div>
        </div>

        {/* Bio preview */}
        <p className="font-nunito text-[13.5px] text-slate-500 leading-relaxed line-clamp-3 flex-1 mb-5">
          {provider.bio}
        </p>

        {/* Footer — experience text only, no pips */}
        <div className="border-t border-slate-100 pt-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 text-[#aa7130] flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
              <path
                d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[12px] font-semibold text-slate-500 font-nunito">
              {provider.experience}
            </span>
          </div>
          <span className="text-[12px] font-semibold text-slate-400 font-nunito">
            {provider.state}
          </span>
        </div>

        {/* View profile hover cue */}
        <div className="mt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#aa7130] font-raleway">
            View Profile
          </span>
          <svg
            className="w-3.5 h-3.5 text-[#aa7130]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function ProviderModal({
  provider,
  onClose,
}: {
  provider: Provider;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onClose();
  }

  const credentials = provider.qualifications
    .split(",")
    .map((q) => q.trim())
    .filter(Boolean);

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#021c2e]/75 backdrop-blur-sm"
    >
      <div className="bg-white rounded-2xl overflow-hidden w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl">

        {/* Header */}
        <div className="bg-[#02385a] px-8 pt-8 pb-7 relative overflow-hidden flex-shrink-0">
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/[0.04] pointer-events-none" />
          <div className="absolute -bottom-12 right-10 w-28 h-28 rounded-full bg-[#00b99d]/10 pointer-events-none" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="flex items-end gap-5 relative z-10">
            <ProviderAvatar provider={provider} size="lg" />
            <div>
              <h2 className="font-raleway font-extrabold text-white text-xl leading-snug mb-2">
                {provider.displayName}
              </h2>
              <TitleBadge title={provider.title} />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-8 py-7 flex flex-col gap-6">

          {/* About */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#aa7130] font-raleway mb-2.5">
              About
            </p>
            <p className="font-nunito text-[15px] text-slate-700 leading-[1.8]">
              {provider.bio}
            </p>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <DetailCard
              icon={
                <svg className="w-4 h-4 text-[#00b99d]" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              label="Experience"
              value={provider.experience}
            />
            <DetailCard
              icon={
                <svg
                  className="w-4 h-4 text-[#aa7130]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              label="License Number"
              value={provider.licenseNumber}
            />
            <DetailCard
              icon={
                <svg className="w-4 h-4 text-[#02385a]" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="4"
                    y="5"
                    width="16"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 9h8M8 13h5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              }
              label="Employee Number"
              value={provider.employeeNumber}
            />
            <DetailCard
              icon={
                <svg
                  className="w-4 h-4 text-[#aa7130]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              }
              label="State of Practice"
              value={provider.state}
            />
          </div>

          {/* Professional Credentials */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#aa7130] font-raleway mb-2.5">
              Professional Credentials
            </p>
            <div className="flex flex-wrap gap-2">
              {credentials.map((q) => (
                <span
                  key={q}
                  className="bg-slate-50 border border-slate-200 text-[#02385a] font-bold text-[13px] px-4 py-1 rounded-full font-nunito"
                >
                  {q}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#aa7130] font-raleway mb-2.5">
              Languages
            </p>
            <div className="flex flex-wrap gap-2">
              {provider.languages.map((lang) => (
                <span
                  key={lang}
                  className="bg-slate-50 border border-slate-200 text-[#02385a] font-bold text-[13px] px-4 py-1 rounded-full font-nunito"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#02385a] to-[#024a78] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-raleway font-bold text-white text-base mb-1">
                Book an appointment with {provider.firstName}
              </p>
              <p className="font-nunito text-sm text-white/60">
                #HomeHealth, Powered by People
              </p>
            </div>
            <a
              href={`https://wa.me/2349134664547?text=Hi%20Triage%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20${encodeURIComponent(
                provider.firstName
              )}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#aa7130] hover:bg-[#8c5c22] text-white font-raleway font-bold text-[13px] tracking-wide px-6 py-3 rounded-xl transition-colors flex-shrink-0"
            >
              Book an Appointment
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
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
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ClinicalProvidersPage() {
  const [selected, setSelected] = useState<Provider | null>(null);
  const [activeTitle, setActiveTitle] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = PROVIDERS.filter((p) => {
    const matchesTitle = activeTitle === "All" || p.title === activeTitle;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      p.displayName.toLowerCase().includes(q) ||
      p.title.toLowerCase().includes(q) ||
      p.state.toLowerCase().includes(q) ||
      p.languages.some((l) => l.toLowerCase().includes(q));
    return matchesTitle && matchesSearch;
  });

  return (
    <>
      <div className="min-h-screen bg-slate-50 font-nunito">

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#02385a] via-[#024a78] to-[#013055] px-6 pt-20 pb-16 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#00b99d]/[0.07] pointer-events-none" />
          <div className="absolute bottom-[-80px] left-[8%] w-56 h-56 rounded-full bg-[#aa7130]/[0.06] pointer-events-none" />
          <div className="absolute top-1/4 left-[58%] w-32 h-32 rounded-full bg-white/[0.03] pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10 py-20">
            <div className="inline-flex items-center gap-2 bg-[#aa7130]/20 border border-[#aa7130]/40 rounded-full px-4 py-1.5 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#aa7130]" />
              <span className="font-raleway font-bold text-[11px] tracking-[0.12em] uppercase text-amber-300">
                Verified Clinical Providers
              </span>
            </div>

            <h1 className="font-raleway font-extrabold text-white leading-[1.15] mb-4 text-[clamp(28px,5vw,48px)] max-w-2xl">
              The professionals behind your peace of mind.
            </h1>
            <p className="font-nunito text-white/70 text-[17px] leading-[1.75] mb-10 max-w-xl">
              Every TriageHome clinical provider is carefully vetted, trained, and
              committed to delivering trusted care at home, wherever home is.
            </p>

            <div className="flex gap-10 flex-wrap">
              {[
                { value: `${PROVIDERS.length}+`, label: "Active Providers" },
                { value: "100%", label: "Verified & Certified" },
                { value: "Lagos & Beyond", label: "Coverage Area" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-raleway font-extrabold text-white text-3xl leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="font-nunito font-semibold text-white/50 text-[13px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky Filter Bar */}
        <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm px-6 py-4">
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div className="relative w-full sm:w-auto">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path
                  d="m21 21-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, title or state…"
                className="w-full sm:w-80 pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm text-[#02385a] font-nunito placeholder:text-slate-400 focus:outline-none focus:border-[#aa7130] focus:ring-2 focus:ring-[#aa7130]/20 transition-all"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              {TITLES.map((t) => (
                <FilterPill
                  key={t}
                  label={t === "All" ? `All (${PROVIDERS.length})` : t}
                  active={activeTitle === t}
                  onClick={() => setActiveTitle(t)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-20">
          <p className="font-raleway font-bold text-[12px] tracking-[0.06em] uppercase text-slate-400 mb-6">
            {filtered.length} provider{filtered.length !== 1 ? "s" : ""} found
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-24 text-slate-400">
              <p className="text-4xl mb-4">🔍</p>
              <p className="font-nunito text-base">
                No providers match your search. Try a different term or title.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((provider, i) => (
                <div
                  key={provider.id}
                  className="animate-cardIn"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <ProviderCard
                    provider={provider}
                    onClick={() => setSelected(provider)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Join CTA */}
        <section className="bg-gradient-to-r from-[#aa7130] to-[#8c5c22] px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-raleway font-extrabold text-white text-[clamp(22px,3vw,32px)] mb-3">
              Are you a clinical professional?
            </h2>
            <p className="font-nunito text-white/75 text-base leading-[1.75] mb-8">
              Join our growing network of verified providers and deliver trusted home
              healthcare to clients across Lagos and beyond.
            </p>
            <a
              href="https://wa.me/2349134664547?text=Hello%2C%20I%20am%20interested%20in%20joining%20Triage%20as%20a%20healthcare%20provider.%20Please%20share%20the%20application%20process."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-[#02385a] font-raleway font-extrabold text-sm tracking-wide px-7 py-4 rounded-xl hover:scale-[1.03] transition-transform"
            >
              Apply to Join Our Network
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>

      {selected !== null && (
        <ProviderModal provider={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}