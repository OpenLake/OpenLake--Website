import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AppDevHero from "@/components/conduct/AppDevHero";
import ResourceSection from "@/components/conduct/ResourceSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "App Development Resources — OpenLake",
  description:
    "Curated free resources to learn app development: Flutter, React Native, Android, Kotlin, Swift, and more.",
  canonical: "/resources/app-development",
});

export default function AppDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <AppDevHero />
        <ResourceSection />
      </main>
      <Footer />
    </>
  );
}
