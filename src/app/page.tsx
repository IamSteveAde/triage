import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";
import About from "./components/home/about";
import DiscoverProperties from "./components/home/property-option"; // mentor / platform section
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import History from "./components/home/history";
import Typess from "./components/home/types";
import Soln from "./components/home/soln";
import Faq from "./components/home/faq";
import Vid from "./components/home/vids";
import Soon from "./components/soon";


// Global components


/* -------------------------------------
   METADATA SPOTLITE AFRICA AGENCY
------------------------------------- */


import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://triage-home.com"),

  title: {
    default: "Triage | On-Demand Home Healthcare & Medical Support",
    template: "%s | Triage",
  },

  description:
    "Triage connects you with verified nurses, health assistants, and care professionals—delivering reliable, on-demand healthcare services in the comfort of your home.",

  keywords: [
    "Triage healthcare",
    "Triage home care",
    "Triage Nigeria",
    "home healthcare services Nigeria",
    "on-demand healthcare Nigeria",
    "home nursing services",
    "private nurse at home",
    "medical care at home",
    "post-surgery care at home",
    "elderly care services Nigeria",
    "home medical assistance",
    "in-home patient care",
    "healthcare support services",
    "verified nurses Nigeria",
    "reliable home care Nigeria",
    "professional caregivers Nigeria",
    "healthcare services Lagos",
  ],

  openGraph: {
    title: "Triage | Trusted Home Healthcare, On Demand",
    description:
      "Access professional healthcare from the comfort of your home. Triage connects you with verified nurses and care specialists for reliable, personalized support.",
    url: "https://triage-home.com",
    siteName: "Triage",
    type: "website",
    images: [
      {
        url: "https://triage-home.com/images/banner.jpg", // MUST be absolute
        width: 1200,
        height: 630,
        alt: "Triage On-Demand Home Healthcare Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Triage | Home Healthcare, Simplified",
    description:
      "Professional healthcare at your doorstep. Book verified nurses and caregivers with ease through Triage.",
    images: ["https://triage-home.com/images/banner.jpg"], // MUST be absolute
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://triage-home.com",
  },
};/* -------------------------------------
   HOME PAGE
------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* Audio welcome, brief, professional, plays once per visit */}
     

      {/* Core hero & positioning */}
      <Hero />
      <About />

      {/* Platform / WhatsApp / AI section */}
      <DiscoverProperties />

      {/* Workforce scope / industries / roles */}
      <Listing />
       <History />
       <Soon />
        <Typess />
        <Vid />
           <Soln />
              <Faq />

      {/* Trust & social proof */}
      <Testimonials />

      {/* Company journey, capability & infrastructure */}
     
      
    </main>
  );
}
