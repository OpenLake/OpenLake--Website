export const PROJECT_TYPE_OPTIONS = [
  "Electronics",
  "Websites",
  "Software",
  "Gamedev",
  "CAD",
  "Other",
] as const;
export type ProjectType = (typeof PROJECT_TYPE_OPTIONS)[number];
export type ProgramFormat = "In-Person Only" | "Online Only" | "Both";

export interface SiteProgram {
  recordId: string;
  programName: string;
  description: string | null;
  bgType: "color" | "image";
  bgColor: string;
  textColor: string;
  accentColor: string;
  logoUrl: string | null;
  logoSize: number;
  bgImageUrl: string | null;
  // Button
  buttonColor: string;
  buttonTextColor: string;
  buttonBorderRadius: number;
  buttonBorderWidth: number;
  buttonBorderColor: string;
  // Metadata
  slackChannel: string | null;
  projectTypes: ProjectType[];
  format: ProgramFormat | null;
  inPersonStart: string | null; // ISO date YYYY-MM-DD
  inPersonEnd: string | null; // ISO date YYYY-MM-DD
  inPersonLocation: string | null;
  additionalRequirements: string | null;
  pinned: boolean;
}

// Parse a YYYY-MM-DD string as a local calendar date (no timezone shift)
function parseLocalDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

// Format in-person date range for display
export function formatInPersonDate(
  start: string | null,
  end: string | null,
  location: string | null,
): string | null {
  let datePart = "";
  if (start) {
    const s = parseLocalDate(start);
    const e = end ? parseLocalDate(end) : null;
    if (!e || start === end) {
      datePart = s.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    } else if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
      datePart = `${s.getDate()}–${e.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`;
    } else {
      datePart = `${s.toLocaleDateString("en-GB", { day: "numeric", month: "short" })} – ${e.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`;
    }
  }
  if (location && datePart) return `${datePart}, ${location}`;
  return datePart || location || null;
}
