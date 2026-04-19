"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import { AppContextProvider } from "../context-api/PropertyContext";
import NextTopLoader from "nextjs-toploader";

// Lazy load heavy components
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

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContextProvider>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
      >
        {children}

        {/* Non-blocking features */}
        <NextTopLoader />
        <WhatsAppConcierge />
        <AudioConciergeModal />
        <Aoscompo />
      </ThemeProvider>
    </AppContextProvider>
  );
}