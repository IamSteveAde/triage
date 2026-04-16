"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="bg-white text-triage-navy">

      {/* ================= HERO ================= */}
      <section className="relative py-28 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 bg-triage-navy" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,210,0,0.08),transparent_60%)]" />

        <div className="relative z-10 max-w-3xl mx-auto text-white">

          <h1 className="text-4xl text-white md:text-5xl font-semibold">
            Terms and Conditions
          </h1>

          <p className="mt-4 text-white/70">
            Last Updated: 26 January 2026
          </p>

        </div>

      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-10 leading-relaxed">

          <p>
            These Terms and Conditions (‘Terms’) govern your access to and use of the TriageHome website (triage-home.com) and all related services (collectively, the ‘Platform’). By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree, please do not use the Platform.
          </p>

          {/* 1 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">1. About TriageHome</h2>
            <p>
              TriageHome is an innovative technology marketplace designed to improve healthcare access by connecting patients with verified and independently licensed clinical providers, including nurses, health assistants, caregivers, and other related professionals for in-home healthcare services.
            </p>
            <p className="mt-3">
              TriageHome does not provide medical care directly. We facilitate connections and access between users, patients and independent clinical providers.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">2. Eligibility</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Be at least 18 years old</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
            </ul>
            <p className="mt-3">
              By using the Platform, you represent and warrant that you meet these requirements.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">3. User Accounts</h2>
            <p>To access certain features, you may be required to create an account.</p>

            <p className="mt-3">You agree to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Keep your login credentials secure</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>

            <p className="mt-3">
              TriageHome is not responsible for any loss or damage resulting from unauthorized access to your account.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              4. Healthcare or Clinical Services Disclaimer
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>TriageHome is not a hospital, clinic, or medical provider.</li>
              <li>All services are provided by independent providers.</li>
              <li>TriageHome does not diagnose, treat, or prescribe.</li>
              <li>We do not guarantee treatment outcomes.</li>
              <li>In emergencies, contact local emergency services immediately.</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">5. Use of the Platform</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the Platform unlawfully</li>
              <li>Misrepresent identity</li>
              <li>Interfere with platform security</li>
              <li>Upload harmful or misleading content</li>
              <li>Access unauthorized data</li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend or terminate access for violations.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">6. Payments and Fees</h2>
            <p>Payments are processed via Paystack or other providers.</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Fees are shown before confirmation</li>
              <li>Platform fees may apply</li>
              <li>Refunds depend on policy</li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              7. Cancellations and Appointments
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Users may cancel based on booking terms</li>
              <li>Providers may cancel due to unforeseen events</li>
              <li>TriageHome is not liable for such disruptions</li>
            </ul>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">8. User Content</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You retain ownership of your content</li>
              <li>You grant us limited usage rights</li>
              <li>You are responsible for content accuracy</li>
            </ul>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              9. Data Protection and Privacy
            </h2>
            <p>
              Your use of the Platform is subject to our Privacy Policy in line with NDPA.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              10. Account Suspension and Termination
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violation of Terms</li>
              <li>Fraudulent conduct</li>
              <li>Platform misuse</li>
            </ul>
            <p className="mt-3">
              You may request account deletion at any time.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              11. Limitation of Liability
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>No liability for indirect damages</li>
              <li>Not responsible for provider actions</li>
              <li>Use is at your own risk</li>
            </ul>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">12. Indemnification</h2>
            <p>
              You agree to indemnify and hold TriageHome harmless from claims arising from your use of the Platform.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              13. Intellectual Property
            </h2>
            <p>
              All platform content and trademarks belong to TriageHome and may not be used without consent.
            </p>
          </div>

          {/* 14 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              14. Modifications to the Terms
            </h2>
            <p>
              We may update these Terms at any time. Continued use means acceptance.
            </p>
          </div>

          {/* 15 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">15. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria.
            </p>
          </div>

          {/* 16 */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">16. Contact Us</h2>
            <p>
              TriageHome<br />
              Lagos, Nigeria<br />
              📧 traigehome@gmail.com
            </p>
          </div>

          <p className="pt-10 text-sm text-gray-500">
            By using the TriageHome Platform, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
          </p>

        </div>
      </section>

    </main>
  );
}