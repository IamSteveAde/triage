import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ClientProviders from "./ClientProviders";

const dmsans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TriageHome | On-Demand Home Healthcare Services",
    template: "%s | Triage",
  },
  description:
    "TriageHome provides reliable, on-demand home healthcare by connecting you with verified nurses and care professionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        
        {/* ⚡ FAST CONTENT */}
        <Header />

        <ClientProviders>
          {children}
        </ClientProviders>

        <Footer />

      </body>
    </html>
  );
}