import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AIHero from "@/components/safety/AIHero";
import ResourceSection from "@/components/safety/ResourceSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "AI & Machine Learning Resources — OpenLake",
  description:
    "Curated free resources to learn AI and machine learning: Python, NumPy, Pandas, TensorFlow, PyTorch, OpenCV, and more.",
  canonical: "/resources/ai-ml",
});

export default function AIMLPage() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <AIHero />
        <ResourceSection />
      </main>
      <Footer />
    </>
  );
}
