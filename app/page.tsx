import type { Metadata } from "next";
import { HeroSection } from "../components/landing/hero";
import { VideoSection } from "../components/landing/video";
import { ReadySection } from "../components/landing/ready";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { buildPageMetadata, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  canonical: "/",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <VideoSection />
        <ReadySection />
      </main>
      <Footer />
    </>
  );
}
