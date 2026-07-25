import { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { MarkdownPage } from "../../components/MarkdownPage";
import { buildPageMetadata } from "@/lib/seo";
import GameDevHero from "../../components/privacy-and-terms/GameDevHero";
import ResourceSection from "../../components/privacy-and-terms/ResourceSection";
import { ThemeLock } from "@/components/ThemeToggle";


export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Notice & Terms — Hack Club",
  description: "Hack Club's Privacy Notice and Standard Terms and Conditions.",
  canonical: "/privacy-and-terms",
});

export default function PrivacyAndTermsPage() {
  const content = fs.readFileSync(
    path.join(process.cwd(), "content/privacy-and-terms.md"),
    "utf-8",
  );
  return (
  <>
    <ThemeLock />
    <GameDevHero />
    <ResourceSection />
    <MarkdownPage content={content} />
  </>
);
}
