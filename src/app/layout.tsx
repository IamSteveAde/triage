import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

import { AppContextProvider } from "../context-api/PropertyContext";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import WhatsAppConcierge from "./components/WhatsAppConcierge";
import AudioConciergeModal from "./components/AudioConciergeModal";


import Aoscompo from "@/utils/aos";

/* -------------------------------------
   FONT
------------------------------------- */
const dmsans = DM_Sans({ subsets: ["latin"] });

/* -------------------------------------
   METADATA — SPOTLITE AFRICA AGENCY
------------------------------------- */

export const metadata: Metadata = {
  title: {
    default: "Triage | On-Demand Home Healthcare Services",
    template: "%s | Triage",
  },
  description:
    "Triage provides reliable, on-demand home healthcare by connecting you with verified nurses and care professionals—delivering trusted medical support in the comfort of your home.",
};

/* -------------------------------------
   ROOT LAYOUT
------------------------------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
        <AppContextProvider>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >

            <Aoscompo>
              <Header />
                 <WhatsAppConcierge />
                   <AudioConciergeModal />
              <NextTopLoader />
              {children}
              <Footer />
            </Aoscompo>

            {/* Global Floating WhatsApp Button */}
            

            {/* Optional: Scroll to top */}
           
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
