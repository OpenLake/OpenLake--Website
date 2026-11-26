import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { MarkdownPage } from "../../components/MarkdownPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Website Privacy — OpenLake",
  description: "How the OpenLake website handles newsletter signup and site analytics.",
  canonical: "/privacy",
});

export default function PrivacyPage() {
  const content = fs.readFileSync(path.join(process.cwd(), "content/privacy.md"), "utf-8");
  return <MarkdownPage content={content} />;
}
