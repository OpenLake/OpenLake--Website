import type { Metadata } from "next";
import HallOfFamePageClient from "./HallOfFamePageClient";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Hall of Fame — OpenLake",
  description:
    "The coordinators and mentors whose leadership shaped OpenLake — now building at Google, Amazon, Canonical, D. E. Shaw, EPFL, Stanford and beyond.",
  canonical: "/hall-of-fame",
});

export default function HallOfFamePage() {
  return <HallOfFamePageClient />;
}
