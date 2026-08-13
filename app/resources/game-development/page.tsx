import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import GameDevHero from "@/components/privacy-and-terms/GameDevHero";
import ResourceSection from "@/components/privacy-and-terms/ResourceSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Game Development Resources — OpenLake",
  description:
    "Curated free resources to learn game development: Unity, Unreal Engine, Godot, Blender, C#, C++, and more.",
  canonical: "/resources/game-development",
});

export default function GameDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <GameDevHero />
        <ResourceSection />
      </main>
      <Footer />
    </>
  );
}
