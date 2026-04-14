"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-10 px-6 overflow-hidden text-white">

      {/* 🔷 BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        {/* NAVY BASE */}
        <div className="absolute inset-0 bg-triage-navy" />

        {/* subtle radial accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,210,0,0.05),transparent_70%)]" />

        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(0deg,white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <img
              src="/images/logo/th.svg"
              alt="Triage Home Logo"
              className="h-8 w-auto invert brightness-0"
            />

            <p className="mt-4 text-white/70 max-w-md leading-relaxed">
              Delivering trusted, on-demand healthcare at home.  
              Built for comfort, speed, and peace of mind.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex gap-4">

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:border-triage-orange hover:bg-white/20 transition"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:border-triage-orange hover:bg-white/20 transition"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:border-triage-orange hover:bg-white/20 transition"
              >
                <FaLinkedinIn size={16} />
              </a>

            </div>

          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4">
              Services
            </h4>

            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/services" className="hover:text-triage-orange transition">
                  Elderly Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-triage-orange transition">
                  Post-Surgery Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-triage-orange transition">
                  Chronic Disease Management
                </Link>  </li>
                <li><Link href="/services" className="hover:text-triage-orange transition">
                  IV Therapy
                </Link>  </li>
                <li><Link href="/services" className="hover:text-triage-orange transition">
                  Wellness Check
                </Link>  </li>
                <li><Link href="/services" className="hover:text-triage-orange transition">
                  Health Screening
                </Link>  </li>
                <li><Link href="/services" className="hover:text-triage-orange transition">
                  Wound Care
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4">
              Company
            </h4>

            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/about" className="hover:text-triage-orange transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-triage-orange transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4">
              Solutions
            </h4>

            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/triage-app" className="hover:text-triage-orange transition">
                  TriageApp
                </Link>
              </li>
              <li>
                <Link href="/triage-pods" className="hover:text-triage-orange transition">
                  TriagePods
                </Link>
              </li>
              <li>
                <Link href="/triage-living" className="hover:text-triage-orange transition">
                  TriageLiving
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">

          <p>© {new Date().getFullYear()} TriageHome. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-triage-orange transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-triage-orange transition">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
}