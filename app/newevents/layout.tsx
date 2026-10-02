import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Events — OpenLake",
  description:
    "Workshops, hackathons and community events by OpenLake at IIT Bhilai — including the official MLH Hacktoberfest Hack Day on 10 October 2026.",
  canonical: "/newevents",
});

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
