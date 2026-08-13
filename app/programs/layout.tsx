import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs — OpenLake",
  description:
    "Explore OpenLake programs — coding projects, events, and opportunities for the IIT Bhilai community.",
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
