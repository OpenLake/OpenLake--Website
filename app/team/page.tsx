import type { Metadata } from "next";
import TeamPageClient from "./TeamPageClient";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Team — OpenLake",
  description:
    "Meet the OpenLake team — the students, mentors, and contributors shaping IIT Bhilai's coding community.",
  canonical: "/team",
});

export default function TeamPage() {
  return <TeamPageClient />;
}
