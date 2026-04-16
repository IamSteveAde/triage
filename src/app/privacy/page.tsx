"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-triage-navy">

      {/* ================= HERO ================= */}
      <section className="relative py-28 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 bg-triage-navy" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,210,0,0.08),transparent_60%)]" />

        <div className="relative z-10 max-w-3xl mx-auto text-white">

          <h1 className="text-4xl md:text-5xl text-white font-semibold">
            Privacy Policy
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
            TriageHome (“we”, “us”, and “our”) respects the privacy of our users (“you”, “user”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit or use our website triage-home.com and any related services (collectively, the “Platform”). Please read this Privacy Policy carefully to understand our views and practices regarding your personal data and how we treat it.
          </p>

          <p className="font-medium text-red-500">
            IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS OR USE THE PLATFORM.
          </p>

          <p>
            We reserve the right to make changes to this Privacy Policy at any time. Any changes will be indicated by updating the Last Updated’ date. Your continued use of the Platform after such changes constitutes your acceptance of the revised Privacy Policy.
          </p>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">1. About TriageHome</h2>
            <p>
              TriageHome is an innovative technology marketplace designed to improve healthcare access by connecting patients with verified and independently licensed clinical providers, including nurses, health assistants, caregivers, and other related professionals for in-home healthcare services.
            </p>
            <p className="mt-3">
              TriageHome is committed to protecting personal and medical data in line with the Nigeria Data Protection Act 2023 (NDPA) and other applicable laws.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">2. Collection of Your Information</h2>

            <p>We may collect information about you in various ways depending on how you interact with the Platform.</p>

            <div className="mt-4 space-y-4">

              <div>
                <h3 className="font-semibold text-black">a. Personal Data</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Physical Address</li>
                  <li>DoB</li>
                  <li>Government issued ID and or License Number</li>
                  <li>Account login details</li>
                  <li>Profile information (patients, caregivers, health assistants or nurses)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-black">b. Medical and Health Data</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Medical history</li>
                  <li>Symptoms and diagnoses</li>
                  <li>Treatment records</li>
                  <li>Care notes shared between patients and providers</li>
                </ul>
                <p className="mt-2">
                  Medical data is stored securely on our servers and is accessible only to authorized users.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-black">c. Location Data</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>Match patients with nearby clinical providers</li>
                  <li>Enable home service delivery</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-black">d. Financial Data</h3>
                <p className="mt-2">
                  Payment information is processed securely via Paystack or other providers. We do not store full card or banking details.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-black">e. Device and Usage Data</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>Device type and model</li>
                  <li>Operating system</li>
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Usage logs</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-black">f. Media Access</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>Camera</li>
                  <li>Microphone</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-black">g. Push Notifications</h3>
                <p>You can disable notifications in your device settings.</p>
              </div>

            </div>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">3. Use of Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Create and manage accounts</li>
              <li>Facilitate healthcare connections</li>
              <li>Deliver services</li>
              <li>Process payments</li>
              <li>Communicate updates</li>
              <li>Improve platform</li>
              <li>Prevent fraud</li>
              <li>Comply with laws</li>
            </ul>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">4. Disclosure of Your Information</h2>
            <p>We do not share data except when necessary.</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Legal compliance</li>
              <li>Healthcare delivery</li>
              <li>Trusted third parties</li>
              <li>Business transfers</li>
            </ul>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and analytics tools such as Google Analytics to improve user experience.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">6. Third-Party Websites</h2>
            <p>
              We are not responsible for third-party privacy practices.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">7. Security of Your Information</h2>
            <p>
              We implement security measures but cannot guarantee absolute protection.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">8. Marketing and Communications</h2>
            <p>
              With your consent, we may use your data for marketing purposes.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">9. Policy for Children</h2>
            <p>
              TriageHome is intended for users 18+. Data from minors will be deleted.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">10. Your Data Protection Rights</h2>
            <ul className="list-disc pl-6">
              <li>Access your data</li>
              <li>Request correction</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
            </ul>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">11. Account Deletion</h2>
            <p>
              You may request deletion via email, subject to legal requirements.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">12. Contact Us</h2>
            <p>
              Data Protection Officer<br />
              TriageHome<br />
              Lagos, Nigeria<br />
              traigehome@gmail.com
            </p>
          </div>

          <p className="pt-10 text-sm text-gray-500">
            By using the TriageHome Platform, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
          </p>

        </div>
      </section>

    </main>
  );
}