"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-10 px-6 overflow-hidden text-white">

      {/* 🌿 BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute inset-0 bg-gradient-to-br from-[#021C1A] via-[#052E2B] to-[#022C22]" />

        <div className="absolute w-[500px] h-[500px] bg-teal-500/25 blur-[140px] rounded-full -top-32 -left-32" />
        <div className="absolute w-[400px] h-[400px] bg-emerald-400/20 blur-[140px] rounded-full bottom-[-120px] right-[-80px]" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[140px] rounded-full bottom-[-100px] left-[30%]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,200,0.06),transparent_70%)]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(0deg,white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:60px_60px]" />

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <img
  src="/images/logo/triage.png"
  alt="Triage Home Logo"
  className="h-8 w-auto invert brightness-0"
/>

            <p className="mt-4 text-white/70 max-w-md leading-relaxed">
              Delivering trusted, on-demand healthcare at home.  
              Built for comfort, speed, and peace of mind.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex gap-4">

              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition">
                T
              </a>

              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition">
                I
              </a>

              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition">
                L
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
                <Link href="/services" className="hover:text-white transition">
                  Home Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Elderly Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Emergency Support
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
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
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
                <Link href="/triage-app" className="hover:text-white transition">
                  TriageApp
                </Link>
              </li>
              <li>
                <Link href="/triage-pods" className="hover:text-white transition">
                  TriagePods
                </Link>
              </li>
              <li>
                <Link href="/triage-living" className="hover:text-white transition">
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
            <Link href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>

    </footer>
  );
}