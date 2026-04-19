import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import { AppContextProvider } from "../context-api/PropertyContext";

// ✅ FIX: normal import (NOT dynamic)
import NextTopLoader from "nextjs-toploader";

// Static components (fast)
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

/* -------------------------------------
   LAZY LOAD HEAVY COMPONENTS
------------------------------------- */
const WhatsAppConcierge = dynamic(
  () => import("./components/WhatsAppConcierge"),
  { ssr: false }
);

const AudioConciergeModal = dynamic(
  () => import("./components/AudioConciergeModal"),
  { ssr: false }
);

const Aoscompo = dynamic(
  () => import("@/utils/aos"),
  { ssr: false }
);

/* -------------------------------------
   FONT (OPTIMIZED)
------------------------------------- */
const dmsans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

/* -------------------------------------
   METADATA
------------------------------------- */
export const metadata: Metadata = {
  title: {
    default: "TriageHome | On-Demand Home Healthcare Services",
    template: "%s | Triage",
  },
  description:
    "TriageHome provides reliable, on-demand home healthcare by connecting you with verified nurses and care professionals.",
};

/* -------------------------------------
   ROOT LAYOUT
------------------------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
        
        <AppContextProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            
            {/* ⚡ FAST: render UI immediately */}
            <Header />
            {children}
            <Footer />

            {/* 🚀 NON-BLOCKING FEATURES */}
            <NextTopLoader />
            <WhatsAppConcierge />
            <AudioConciergeModal />
            <Aoscompo />

          </ThemeProvider>
        </AppContextProvider>

      </body>
    </html>
  );
}