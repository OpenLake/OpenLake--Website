import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WebHero } from "@/components/fiscal-sponsorship/WebHero";
import { ResourceSection } from "@/components/fiscal-sponsorship/ResourceSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development Resources — OpenLake",
  description:
    "Curated free resources to learn web development: HTML, CSS, JavaScript, React, Node.js, and full-stack development.",
  canonical: "/resources/web-development",
});

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <WebHero />
        <ResourceSection />
      </main>
      <Footer />
    </>
  );
}
