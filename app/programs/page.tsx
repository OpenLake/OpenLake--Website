import type { Metadata } from "next";
import ProgramsPageClient from "./ProgramsPageClient";
import { buildPageMetadata } from "@/lib/seo";
import { fetchGitHubPrograms } from "@/lib/github-programs";

export const metadata: Metadata = buildPageMetadata({
  title: "Projects — OpenLake",
  description:
    "Open-source projects built by OpenLake, IIT Bhilai's open-source club.",
  canonical: "/programs",
});

// Re-check GitHub for new repos at most once an hour.
export const revalidate = 3600;

export default async function ProgramsPage() {
  const programs = await fetchGitHubPrograms();
  // If GitHub is unreachable, programs is null and ProgramsPageClient
  // falls back to its built-in PROGRAMS list.
  return <ProgramsPageClient initialPrograms={programs} />;
}