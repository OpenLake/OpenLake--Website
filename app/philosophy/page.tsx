import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { PageHero, PageSection, SectionTitle, Accent } from "@/components/PageHero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About OpenLake — the open-source society of IIT Bhilai",
  description:
    "OpenLake is the open-source society of IIT Bhilai. We build software the campus actually uses, teach students how to make their first contribution, and send them on to GSoC, LFX and beyond.",
  canonical: "/philosophy",
});

// ════════════════════════════════════════════════════════════════════════════
//  EDIT ME
//  Every figure and description on this page is sourced from something real —
//  the GitHub org, the events list in /newevents, or a post in /blog. If you
//  change a number here, change it because the underlying thing changed.
// ════════════════════════════════════════════════════════════════════════════

// Source: github.com/OpenLake (repo count), the events list, and the GSoC 2023
// cohort announcement. `note` is the small print under each figure.
const STATS = [
  { value: "62", label: "Public repositories", note: "on the OpenLake GitHub org" },
  { value: "2020", label: "Building since", note: "Since 6 years" },
  { value: "9", label: "GSoC contributors", note: "proposals accepted from the society." },
  { value: "50+", label: "Workshops & programs", note: "run on campus, free to attend" },
];

const PILLARS = [
  {
    id: "build",
    icon: "build",
    title: "Build",
    body: "We maintain software that IIT Bhilai actually runs on — the CoSA student database, the careers portal, the campus marketplace, a virtual lab for EEE. Real users, real bug reports, real code review.",
  },
  {
    id: "learn",
    icon: "learn",
    title: "Learn",
    body: "Git, Linux, web and app development, and how open source works in practice — taught in free, hands-on workshops that assume you have never opened a pull request before.",
  },
  {
    id: "contribute",
    icon: "contribute",
    title: "Contribute",
    body: "The point is not to stay in our repos. We help members land contributions in the wider open-source world, and every year some of them do exactly that.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Come to a workshop",
    body: "Git & GitHub, Linux, or an intro session. No prerequisites, no membership fee, no application.",
  },
  {
    n: "02",
    title: "Pick up a first issue",
    body: "Our repos carry beginner-friendly issues. A maintainer reviews your PR and tells you what to fix — that review is the whole point.",
  },
  {
    n: "03",
    title: "Join FOSS Overflow or DevLabs",
    body: "Month-long mentored programs where you work on an active project alongside people who have done it before.",
  },
  {
    n: "04",
    title: "Go contribute anywhere",
    body: "GSoC, LFX Mentorship, Outreachy, C4GT — or just become the person who maintains the thing the next batch learns on.",
  },
];

// Descriptions are the repos' own, from github.com/OpenLake.
const PROJECTS = [
  {
    name: "Student Database CoSA",
    lang: "JavaScript",
    body: "A centralized platform for managing student data and Positions of Responsibility within CoSA.",
    href: "https://github.com/OpenLake/Student_Database_COSA",
  },
  {
    name: "Smart Insti App",
    lang: "Dart",
    body: "A one-stop app for all institute-related information and updates.",
    href: "https://github.com/OpenLake/Smart-Insti-App",
  },
  {
    name: "CCPS Portal",
    lang: "JavaScript",
    body: "A job posting platform built for IIT Bhilai students, bridging them and the placement cell.",
    href: "https://github.com/OpenLake/Centre-for-Career-Planning-and-Services-Portal",
  },
  {
    name: "RateMyCourse",
    lang: "TypeScript",
    body: "A community-driven platform to review and rate courses and instructors at IIT Bhilai.",
    href: "https://github.com/OpenLake/RateMyCourse",
  },
  {
    name: "canonforces",
    lang: "TypeScript",
    body: "A Codeforces companion — an in-browser IDE, DSA battles, and stat synchronisation.",
    href: "https://github.com/OpenLake/canonforces",
  },
  {
    name: "Leaderboard Pro",
    lang: "JavaScript",
    body: "A leaderboard that scrapes and ranks results from competitive programming platforms.",
    href: "https://github.com/OpenLake/Leaderboard-Pro",
  },
];

// The programs our members aim at. Tracked in the open-source calendar we
// maintain — see /blog.
const PROGRAMS = [
  "Google Summer of Code",
  "LFX Mentorship",
  "Outreachy",
  "GSSoC",
  "C4GT",
  "FOSSEE",
  "ESoC",
  "Open Mainframe Project",
  "Summer of Bitcoin"
];

// Source: the events list on /newevents.
const TIMELINE = [
  { date: "Jun 2022", title: "HTML & CSS tutorial + mini hackathon", note: "The society's first recorded workshop." },
  { date: "Aug 2022", title: "OpenlySourced, with Anand Panchbai", note: "An introduction to contributing." },
  { date: "Jun 2023", title: "How to Open-Source", note: "Tools, and where to contribute globally." },
  { date: "Jan 2025", title: "GSoC: An Introduction", note: "How to write a proposal that gets accepted." },
  { date: "Aug 2025", title: "Git & GitHub workshop", note: "The one we run for every new batch." },
  { date: "Jan 2026", title: "FOSS Overflow", note: "Our annual month-long open-source program." },
];

function PillarIcon({ kind }: { kind: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (kind === "build") {
    return (
      <svg {...common}>
        <path d="M9 18l-6-6 6-6" />
        <path d="M15 6l6 6-6 6" />
      </svg>
    );
  }
  if (kind === "learn") {
    return (
      <svg {...common}>
        <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H11v16H5.5A2.5 2.5 0 0 0 3 22z" />
        <path d="M21 6.5A2.5 2.5 0 0 0 18.5 4H13v16h5.5a2.5 2.5 0 0 1 2.5 2z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="6" r="2.6" />
      <circle cx="5.5" cy="17.5" r="2.6" />
      <circle cx="18.5" cy="17.5" r="2.6" />
      <path d="M10.4 7.9 7.1 15M13.6 7.9 16.9 15M8.1 17.5h7.8" />
    </svg>
  );
}

export default function Page() {
  return (
    <main id="main" tabIndex={-1} style={{ background: "var(--background)" }}>
      <style>{`
        .ol-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .ol-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .ol-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        @media (max-width: 900px) {
          .ol-grid-3, .ol-grid-2 { grid-template-columns: 1fr; }
          .ol-grid-4 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .ol-grid-4 { grid-template-columns: 1fr; }
        }

        .ol-card {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 18px;
          box-shadow: var(--shadow-dd);
          padding: 28px;
          height: 100%;
          box-sizing: border-box;
          transition: transform 0.2s ease;
        }
        .ol-card:hover { transform: translateY(-3px); }

        /* Stat tiles — a figure and its label, no chart. */
        .ol-stat {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 24px 22px;
          text-align: left;
        }
        .ol-stat__value {
          font-size: 48px;
          font-weight: 700;
          line-height: 1;
          color: var(--red);
          margin: 0 0 10px;
        }
        .ol-stat__label { font-size: 17px; font-weight: 600; color: var(--foreground); margin: 0; }
        .ol-stat__note { font-size: 14px; color: var(--muted); margin: 4px 0 0; line-height: 1.45; }

        /* The four-step path. The rail is drawn behind the numbers. */
        .ol-path { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .ol-path::before {
          content: "";
          position: absolute;
          top: 23px;
          left: 23px;
          right: calc((100% - 72px) / 4 - 23px);
          height: 2px;
          background: linear-gradient(90deg, var(--red), color-mix(in srgb, var(--red) 25%, transparent));
        }
        .ol-step { position: relative; z-index: 1; }
        .ol-step__n {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 999px;
          background: var(--red);
          color: var(--paper);
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 18px;
        }
        @media (max-width: 900px) {
          .ol-path { grid-template-columns: 1fr; gap: 28px; }
          .ol-path::before { top: 0; bottom: 0; left: 22px; right: auto; width: 2px; height: auto;
            background: linear-gradient(180deg, var(--red), color-mix(in srgb, var(--red) 25%, transparent)); }
          .ol-step { padding-left: 66px; }
          .ol-step__n { position: absolute; left: 0; top: 0; margin-bottom: 0; }
        }

        /* Vertical timeline. */
        .ol-timeline { position: relative; margin: 0; padding: 0 0 0 30px; list-style: none; }
        .ol-timeline::before {
          content: "";
          position: absolute;
          left: 5px; top: 6px; bottom: 6px;
          width: 2px;
          background: var(--border);
        }
        .ol-tl-item { position: relative; padding-bottom: 28px; }
        .ol-tl-item:last-child { padding-bottom: 0; }
        .ol-tl-item::before {
          content: "";
          position: absolute;
          left: -30px; top: 7px;
          width: 12px; height: 12px;
          border-radius: 999px;
          background: var(--red);
          box-shadow: 0 0 0 4px var(--surface);
        }

        .ol-chip {
          display: inline-block;
          border: 1px solid var(--border);
          background: var(--surface);
          border-radius: 999px;
          padding: 8px 16px;
          font-size: 16px;
          font-weight: 600;
          color: var(--foreground);
        }

        .ol-project-link { text-decoration: none; color: inherit; display: block; }

        @media (prefers-reduced-motion: reduce) {
          .ol-card { transition: none !important; }
        }
      `}</style>

      <Navbar />

      <PageHero
        badge="✦ About OpenLake"
        title={
          <>
            The open-source society
            <br />
            of <Accent>IIT Bhilai</Accent>.
          </>
        }
        lede="We build software the campus actually runs on, teach students how to make their first contribution, and help them go on to contribute anywhere. Everything we do is public, free to join, and open to any batch or branch."
      />

      {/* ── Scale at a glance ─────────────────────────────────────────── */}
      <PageSection tone="surface">
        <div className="ol-grid-4">
          {STATS.map((s) => (
            <div key={s.label} className="ol-stat">
              <p className="ol-stat__value">{s.value}</p>
              <p className="ol-stat__label">{s.label}</p>
              <p className="ol-stat__note">{s.note}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* ── What actually happens here ────────────────────────────────── */}
      <PageSection tone="background">
        <SectionTitle>What actually happens here</SectionTitle>
        <p
          style={{
            fontSize: 20,
            color: "var(--muted)",
            lineHeight: 1.7,
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto 48px",
          }}
        >
          Three things, in this order. Most people arrive at the first and are surprised
          how quickly they reach the third.
        </p>

        <div className="ol-grid-3">
          {PILLARS.map((p) => (
            <div key={p.id} className="ol-card">
              <div style={{ color: "var(--red)", marginBottom: 16 }}>
                <PillarIcon kind={p.icon} />
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 700, color: "var(--foreground)", margin: "0 0 10px" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* ── The path in ───────────────────────────────────────────────── */}
      <PageSection tone="surface">
        <SectionTitle>From zero to your first merged PR</SectionTitle>
        <p
          style={{
            fontSize: 20,
            color: "var(--muted)",
            lineHeight: 1.7,
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto 56px",
          }}
        >
          You do not need to already know things to start. This is the route almost
          everyone here took.
        </p>

        <div className="ol-path">
          {STEPS.map((s) => (
            <div key={s.n} className="ol-step">
              <span className="ol-step__n">{s.n}</span>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--foreground)", margin: "0 0 8px" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* ── What we build ─────────────────────────────────────────────── */}
      <PageSection tone="background">
        <SectionTitle>Software the campus runs on</SectionTitle>
        <p
          style={{
            fontSize: 20,
            color: "var(--muted)",
            lineHeight: 1.7,
            textAlign: "center",
            maxWidth: 760,
            margin: "0 auto 48px",
          }}
        >
          These are not exercises. They are maintained, deployed, and used by students
          and staff at IIT Bhilai — which is why the code review is real.
        </p>

        <div className="ol-grid-3">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ol-project-link"
              aria-label={`${p.name} on GitHub`}
            >
              <div className="ol-card">
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    marginBottom: 10,
                  }}
                >
                  {p.lang}
                </span>
                <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--foreground)", margin: "0 0 10px" }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{p.body}</p>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link
            href="/programs"
            className="cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 28px",
              background: "var(--red)",
              color: "var(--paper)",
              borderRadius: 999,
              fontWeight: "bold",
              fontSize: 18,
              textDecoration: "none",
            }}
          >
            See all our projects
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </PageSection>

      {/* ── Where it leads ────────────────────────────────────────────── */}
      <PageSection tone="surface">
        <div className="ol-grid-2" style={{ alignItems: "center", gap: 48 }}>
          <div>
            <h2 style={{ fontSize: 42, fontWeight: 700, color: "var(--foreground)", margin: "0 0 16px", lineHeight: 1.2 }}>
              And then it leaves campus
            </h2>
            <p style={{ fontSize: 19, color: "var(--muted)", lineHeight: 1.7, margin: "0 0 16px" }}>
              In 2023, five OpenLake contributors had their proposals accepted for Google
              Summer of Code. Members have since shipped production code into the Zowe
              Client Java SDK through an Open Mainframe Project mentorship, and we keep a
              public calendar of every major open-source program so nobody misses a
              deadline.
            </p>
            <p style={{ fontSize: 19, color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
              You do not need to be exceptional to start. You need to be around when the
              applications open, with a few merged PRs behind you.
            </p>
          </div>

          <div
            style={{
              background: "var(--background)",
              border: "1px solid var(--border)",
              borderRadius: 18,
              boxShadow: "var(--shadow-dd)",
              padding: 28,
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--red)",
                margin: "0 0 18px",
              }}
            >
              Programs our members apply to
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {PROGRAMS.map((p) => (
                <span key={p} className="ol-chip">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* ── How we got here ───────────────────────────────────────────── */}
      <PageSection tone="background">
        <SectionTitle>How we got here</SectionTitle>
        <div style={{ maxWidth: 580, margin: "40px auto 0" }}>
          <ul className="ol-timeline">
            {TIMELINE.map((t) => (
              <li key={t.title} className="ol-tl-item">
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    margin: "0 0 4px",
                  }}
                >
                  {t.date}
                </p>
                <h3 style={{ fontSize: 21, fontWeight: 700, color: "var(--foreground)", margin: "0 0 4px" }}>
                  {t.title}
                </h3>
                <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{t.note}</p>
              </li>
            ))}
          </ul>

          <p style={{ fontSize: 17, color: "var(--muted)", textAlign: "center", margin: "36px 0 0" }}>
            The full list lives on the{" "}
            <Link href="/newevents" style={{ color: "var(--red)", textDecoration: "none", fontWeight: 700 }}>
              events page
            </Link>
            .
          </p>
        </div>
      </PageSection>

      {/* ── Join ──────────────────────────────────────────────────────── */}
      <PageSection tone="surface">
        <div
          style={{
            background: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: 18,
            boxShadow: "var(--shadow-dd)",
            padding: "56px 32px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: 42, fontWeight: 700, color: "var(--foreground)", margin: "0 0 12px", lineHeight: 1.2 }}>
            There is no application.
          </h2>
          <p
            style={{
              fontSize: 19,
              color: "var(--muted)",
              lineHeight: 1.7,
              margin: "0 auto 32px",
              maxWidth: 620,
            }}
          >
            Join the Discord, come to the next workshop, or open an issue on any repo you
            find interesting. That is the whole membership process.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://discord.gg/A2J9z92qzd"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "12px 28px",
                background: "var(--red)",
                color: "var(--paper)",
                borderRadius: 999,
                fontWeight: "bold",
                fontSize: 18,
                textDecoration: "none",
              }}
            >
              Join the Discord
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a
              href="https://github.com/OpenLake"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "12px 28px",
                background: "transparent",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
                borderRadius: 999,
                fontWeight: "bold",
                fontSize: 18,
                textDecoration: "none",
              }}
            >
              Browse the code
            </a>
          </div>
        </div>
      </PageSection>

      <Footer />
    </main>
  );
}
