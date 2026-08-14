import { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { MarkdownPage } from "../../components/MarkdownPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "OpenLake for IT Administrators — OpenLake",
  description: "Guide for IT administrators to provide the tools needed for OpenLake.",
  canonical: "/it-admins",
});

export default function ConductPage() {
  const content = fs.readFileSync(path.join(process.cwd(), "content/it-admins.md"), "utf-8");
  return <MarkdownPage content={content} />;
}
