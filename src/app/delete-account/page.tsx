import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Delete Your Account | TriageHome",
  description:
    "Request permanent deletion of your TriageHome account and all associated personal data.",
  robots: { index: false, follow: false },
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-nunito flex flex-col">

      {/* Minimal nav */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="https://www.triage-home.com">
            <Image
              src="/images/logo/th.svg"
              alt="TriageHome"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </Link>
          <a
            href="https://wa.me/2349134664547"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#02385a] font-raleway hover:text-[#aa7130] transition-colors"
          >
            Need help?
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 px-4 py-14">
        <div className="max-w-2xl mx-auto flex flex-col gap-6">

          {/* Page header */}
          <div className="bg-[#02385a] rounded-2xl px-8 py-8 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/[0.04] pointer-events-none" />
            <div className="absolute bottom-[-40px] right-12 w-28 h-28 rounded-full bg-[#00b99d]/10 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-3 py-1 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="font-raleway font-bold text-[10px] tracking-[0.12em] uppercase text-red-300">
                  Account Management
                </span>
              </div>
              <h1 className="font-raleway font-extrabold text-white text-2xl sm:text-3xl leading-snug mb-3">
                Delete Your Account
              </h1>
              <p className="font-nunito text-white/65 text-[15px] leading-relaxed max-w-lg">
                At TriageHome, we value your privacy and give you full control
                over your data. If you no longer wish to use our services, you
                can request permanent deletion of your account and all
                associated data.
              </p>
            </div>
          </div>

          {/* How to delete */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
            <h2 className="font-raleway font-bold text-[#02385a] text-lg mb-5">
              How to delete your account
            </h2>
            <div className="flex flex-col gap-4">
              {[
                { step: "1", text: "Log in to your TriageHome account on the app." },
                { step: "2", text: "Navigate to your Profile or Settings section." },
                { step: "3", text: "Locate and tap the Delete Account option." },
                { step: "4", text: "Confirm your action when prompted." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#02385a] flex items-center justify-center flex-shrink-0">
                    <span className="font-raleway font-bold text-white text-sm">
                      {item.step}
                    </span>
                  </div>
                  <p className="font-nunito text-slate-600 text-[15px] leading-relaxed pt-1">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What gets deleted */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
            <h2 className="font-raleway font-bold text-[#02385a] text-lg mb-5">
              What gets deleted
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-raleway font-bold text-red-700 text-[12px] uppercase tracking-wider mb-4">
                Permanently removed from our systems
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Your personal profile data (name, phone number, address)",
                  "Security credentials and authentication records",
                  "Uploaded documents and identity verifications",
                  "Service request history and logs (except where retention is legally mandated)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 6L6 18M6 6l12 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="font-nunito text-sm text-red-700 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
            <h2 className="font-raleway font-bold text-[#02385a] text-lg mb-4">
              Data deletion timeline
            </h2>
            <div className="flex items-start gap-4 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <svg
                className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-nunito text-sm text-amber-700 leading-relaxed">
                Your account and all associated personal data will be completely
                and permanently deleted within{" "}
                <span className="font-bold">24 hours</span> of your request.
                Please ensure you have saved any necessary information before
                requesting deletion, as{" "}
                <span className="font-bold">this action cannot be reversed.</span>
              </p>
            </div>
          </div>

          {/* Direct deletion request */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-8 py-7">
            <h2 className="font-raleway font-bold text-[#02385a] text-lg mb-2">
              Direct deletion request
            </h2>
            <p className="font-nunito text-slate-500 text-[14px] leading-relaxed mb-6">
              If you are unable to delete your account via the app, you can
              contact our support team directly. We will process your request
              within 24 hours.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-5">
              <p className="font-raleway font-bold text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                TriageHome Support
              </p>
              <a
                href="mailto:support@triage-home.com"
                className="font-nunito font-bold text-[#02385a] text-sm hover:text-[#aa7130] transition-colors"
              >
                📧 support@triage-home.com
              </a>
            </div>

            <a
              href={`mailto:support@triage-home.com?subject=Account%20Deletion%20Request&body=Hello%20TriageHome%20Support%2C%0D%0A%0D%0AI%20would%20like%20to%20formally%20request%20the%20permanent%20deletion%20of%20my%20account%20and%20all%20associated%20data.%0D%0A%0D%0AMy%20registered%20email%20is%3A%20%5BInsert%20your%20email%20address%20here%5D%0D%0A%0D%0AThank%20you.`}
              className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-raleway font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6l-10 7L2 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Request Account Deletion via Email
            </a>
          </div>

          {/* Need assistance */}
          <div className="bg-gradient-to-r from-[#02385a] to-[#024a78] rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <h2 className="font-raleway font-bold text-white text-base mb-1">
                Need assistance?
              </h2>
              <p className="font-nunito text-white/65 text-sm leading-relaxed max-w-sm">
                If you encounter any issues, our support team is available to
                help you through the process.
              </p>
            </div>
            <a
              href="https://wa.me/2349134664547?text=Hi%20Triage%2C%20I%20need%20help%20deleting%20my%20account."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#aa7130] hover:bg-[#8c5c22] text-white font-raleway font-bold text-sm px-6 py-3 rounded-xl transition-colors flex-shrink-0"
            >
              Chat with support
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

          <p className="text-center font-nunito text-xs text-slate-400 leading-relaxed">
            This page is provided in compliance with app store data deletion
            requirements. For more information, read our{" "}
            <Link
              href="/privacy"
              className="text-[#02385a] font-semibold hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 px-6 py-5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-nunito text-xs text-slate-400">
            © 2026 TriageHome. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="font-nunito text-xs text-slate-400 hover:text-[#02385a] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-nunito text-xs text-slate-400 hover:text-[#02385a] transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/contact"
              className="font-nunito text-xs text-slate-400 hover:text-[#02385a] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}