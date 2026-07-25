import type { AirtableProgram } from "./programs";

// One shared look for every fetched project card.
const CARD_THEME = {
  logoUrl: null,
  logoSize: 48,
  bgType: "color" as const,
  bgImageUrl: null,
  bgColor: "#0d2b26",
  textColor: "#e0fffa",
  accentColor: "#22d3ee",
  format: null,
  projectTypes: [],
  inPersonStart: null,
  inPersonEnd: null,
  inPersonLocation: null,
  additionalRequirements: null,
  slackChannel: null,
  buttonColor: "#22d3ee",
  buttonTextColor: "#04110f",
  buttonBorderRadius: 44,
  buttonBorderWidth: 0,
  buttonBorderColor: "#e0fffa",
};

const CUSTOM_IMAGES: Record<string, string> = {
  "openlake-website": "/assets/openlake-website.png",
  "Student_Database_COSA": "/assets/cosa.png",
  "Smart-Insti-App": "/assets/insti-app.png",
  "Leaderboard-Pro": "/assets/leaderboard-pro.png",
  "Centre-for-Career-Planning-and-Services-Portal": "/assets/ccps.png",
  "canonforces": "/assets/cannonforces.png",
  "RateMyCourse": "/assets/rate-my-course.png",
  "Campus-Marketplace": "/assets/buy-and-sell.png",
  "bhilaee-simulator": "/assets/bhilaee-labs.png",
};

// ── Custom overrides per repo ────────────────────────────────────────────────
// Key = the exact repo name on GitHub (case-sensitive, as it appears in the URL).
// Put your image in public/assets/ and reference it as "/assets/name.webp".
// Any repo not listed here falls back to GitHub's auto-generated preview.


type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

function mapRepo(repo: GitHubRepo): AirtableProgram {
  const created = (repo.created_at ?? "").slice(0, 10) || "2020-01-01";
  const homepage = repo.homepage?.trim();
  return {
    id: String(repo.id),
    name: repo.name,
    startDate: created,
    endDate: repo.archived
      ? (repo.pushed_at ?? "").slice(0, 10) || created
      : "2099-12-31",
    // Primary button always goes to the GitHub repo.
    websiteUrl: repo.html_url,
    site: {
      description: repo.description ?? "An open-source project by OpenLake.",
      projectImageUrl:
        CUSTOM_IMAGES[repo.name] ??
        `https://opengraph.githubassets.com/1/OpenLake/${repo.name}`,
      projectImageHeight: 150,
      pinned: false,
      // Custom field: a deployed site, if the repo has one. Read in ProgramCard.
      liveUrl: homepage ? homepage : null,
      ...CARD_THEME,
    },
  } as unknown as AirtableProgram;
}

export async function fetchGitHubPrograms(): Promise<AirtableProgram[] | null> {
  try {
    const res = await fetch(
      "https://api.github.com/orgs/OpenLake/repos?per_page=100&sort=updated&direction=desc",
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return null;
    const repos: GitHubRepo[] = await res.json();
    // GitHub already returns sort=updated&direction=desc, but sort defensively
    // in case the API order ever changes — newest push first.
    return repos
      .filter((r) => !r.fork)
      .sort(
        (a, b) =>
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
      )
      .map(mapRepo);
  } catch {
    return null;
  }
}