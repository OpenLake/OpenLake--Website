import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "./globals.css";
import { SkipToMainLink } from "../components/SkipToMainLink";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_DESCRIPTION } from "@/lib/seo";
import { phantomSans, zarathustra } from "./fonts";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://openlake.in"),
  title: {
    default: "OpenLake — Open-Source Club & Student Society of IIT Bhilai",
    template: `%s`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "OpenLake",
    "OpenLake IIT Bhilai",
    "IIT Bhilai open source",
    "open source club",
    "Google Summer of Code IIT Bhilai",
    "student developer community",
  ],
  alternates: { canonical: "/" },
};

const themesrc = `(function(){try{var s=localStorage.getItem('hc-site-theme'),t=s==='dark'||s==='light'?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'),r=document.documentElement;if(t==='dark')r.classList.add('dark');r.style.colorScheme=t;}catch(_){}})();`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://openlake.in/#organization",
  name: "OpenLake",
  alternateName: "OpenLake IIT Bhilai",
  url: "https://openlake.in",
  logo: {
    "@type": "ImageObject",
    url: "https://openlake.in/logo512.png",
  },
  description:
    "OpenLake is the official open-source programming club and student society of IIT Bhilai. It promotes open-source software development, peer learning and collaborative coding across web development, AI/ML, app and game development, running mentorship programmes that take students from their first tutorial to real open-source contributions.",
  foundingDate: "2020",
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Technology Bhilai",
    url: "https://www.iitbhilai.ac.in/",
  },
  location: {
    "@type": "Place",
    name: "IIT Bhilai",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhilai",
      addressRegion: "Chhattisgarh",
      addressCountry: "IN",
    },
  },
  knowsAbout: [
    "Open source software",
    "Web development",
    "Artificial intelligence",
    "Machine learning",
    "App development",
    "Game development",
    "Google Summer of Code",
    "Collaborative software development",
  ],
  sameAs: [
    "https://github.com/OpenLake",
    "https://www.youtube.com/@openlakeiitbhilai1724",
    "https://www.instagram.com/openlake_iitbhilai/",
    "https://discord.gg/A2J9z92qzd",
    "https://www.linkedin.com/company/openlake/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full ${phantomSans.variable} ${zarathustra.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themesrc }} />
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full">
        <Script
          src="https://compass-ai-widget.vercel.app/compass-widget.js"
          strategy="afterInteractive"
        />
        <PlausibleProvider src="https://plausible.io/js/pa-Fxh-6GHJlpUS4AXISXi-C.js">
          <SkipToMainLink />
          {children}
          <Analytics />
          <SpeedInsights />
        </PlausibleProvider>
      </body>
    </html>
  );
}
