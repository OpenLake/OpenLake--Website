import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "How to run a DevLabs at your college — OpenLake",
  description:
    "A three-page framework for running a beginner open-source bootcamp with no budget: platforms, program structure, prerequisites, and the weekly loop.",
  canonical: "/blog/devlabs-playbook",
});

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "aside"; text: string };

const BLOCKS: Block[] = [
  {
    type: "p",
    text: "This is the skeleton: what you need, which tools to use, and how a week actually runs.",
  },

  { type: "h2", text: "1. What you need before you start" },
  { type: "p", text: "People" },
  {
    type: "ul",
    items: [
      "One mentor per 10 to 15 mentees. A track with 45 registrations needs three. They do not need to be experts, only one week ahead of their group and willing to stay there.",
      "Mentors need shipped code, not a completed course. One or two semesters of hands-on work in the domain is enough. No teaching experience required.",
      "Mentee prerequisites: none, deliberately. Someone who has never written a line of code is still in. The program asks for attendance, not prior knowledge.",
    ],
  },
  { type: "p", text: "Time" },
  {
    type: "ul",
    items: [
      "Eight weeks, plus two weeks of prep before week one.",
      "Mentors: 3 to 4 hours a week. Roughly 1 hour prep, 1 to 1.5 hours live, 1 hour on the group chat and PR reviews.",
    ],
  },
  { type: "p", text: "Tools" },
  {
    type: "p",
    text: "All free. GitHub is the only non-negotiable, because the pull request workflow is the entire difference between this and a YouTube playlist.",
  },
  {
    type: "ul",
    items: [
      "GitHub — One org, one repo per track. Every weekly task is submitted as a PR and reviewed. This is the core mechanic.",
      "WhatsApp — One group per track. Resource drops, small challenges, error screenshots at midnight. The live session is a third of the learning; this is the rest.",
      "Meet or Zoom — Weekly sessions. Free tier is enough. Record every one.",
      "Notion or Drive — One shared space per track for resources, notes and slides. Mentees should never have to hunt.",
      "n8n — AI track only. Free and self-hostable. Shows mentees what an agent does before they write one from scratch.",
    ],
  },

  { type: "h2", text: "2. Choosing tracks" },
  {
    type: "ul",
    items: [
      "Pick two or three domains. Do not try to cover everything. Each track needs to be a full eight-week arc on its own, with enough depth that a beginner can demonstrate a finished thing at the end.",
      "Tracks that have worked: web development (HTML and CSS, then JavaScript, then React, then a deployed app), AI and agentic AI (Python, then APIs, then agent frameworks), game development (engine basics, then one complete game). The domain matters less than whether it ends in something you can show someone.",
      "Budget 40 to 60 registrations per track, and expect 15 to 20 percent to finish. That is the normal number. Plan the showcase around the people who stay.",
    ],
  },

  { type: "h2", text: "3. The weekly loop" },
  {
    type: "p",
    text: "Every week runs the same six steps. The repetition is the point: mentees stop wondering what happens next and mentors stop reinventing the format.",
  },
  {
    type: "ol",
    items: [
      "Topic drop — What the week covers. A paragraph, not a lecture.",
      "Resources — Curated links, a short notes PDF, or a deck. Not a YouTube rabbit hole.",
      "Live session — 1 to 1.5 hours. Demo first, explanation second. Screen-share a build, not slides. Record it.",
      "Task — A small concrete deliverable. Not a project, a piece of one.",
      "PR submission — Mentee opens a pull request against the track repo.",
      "Review — Mentor comments, mentee addresses them, loop closes. This is where the actual learning lands.",
    ],
  },
  { type: "p", text: "Sessions on Sunday." },

  { type: "h2", text: "4. The eight weeks" },
  {
    type: "ol",
    items: [
      "Weeks 1 to 2, foundations. Highest attendance you will ever have. Keep it accessible. This is where you hook people.",
      "Weeks 3 to 5, core domain. Attendance starts dropping. Keep session quality identical regardless of how many show up.",
      "Week 6, the hard module. Budget double the time you think you need. You already know which module it is.",
      "Weeks 7 to 8, final project and showcase. Close with a short session on GitHub profiles, resumes and how to present what they built. Nobody plans this and every cohort asks for it.",
    ],
  },

  { type: "h2", text: "5. What will go wrong" },
  {
    type: "p",
    text: "All four of these will happen to you. Deciding your response now is cheaper than deciding it in week five.",
  },
  {
    type: "ul",
    items: [
      "Attendance will decay as the curriculum hardens. It is the most common outcome in student-run programs and the least commonly written down. Decide in advance whether you keep running at full intensity for the people who stayed. The answer should be yes.",
      "One module will cause a spike in drop-offs. In web dev it tends to be React, specifically Hooks. In AI it tends to be state management in agent frameworks. Give these more time, not less.",
      "Scope creep will hit your project track. By week three someone is describing an open-world RPG. The fix is permission to be ugly: grey rectangles, free asset packs, one win condition. Ship first, decorate later.",
      "Setup will eat your first session. Unless you push a sandbox repo beforehand, hour one is twelve people simultaneously discovering what an environment variable is.",
    ],
  },

  { type: "h2", text: "6. Two weeks before launch" },
  {
    type: "ol",
    items: [
      "Create the GitHub org and one repo per track.",
      "Push a sandbox to each repo: folder structure, .env.example, and any boilerplate mentees will need.",
      "Write weeks 1 to 3 of the curriculum. Do not wing it and do not write all eight either.",
      "Set up the shared resource space and the track group chats.",
      "Agree the recording and attendance policy with your mentors, in writing.",
      "Open registrations. Say prerequisites are none, and mean it.",
    ],
  },

  {
    type: "aside",
    text: "Mentors gain as much as mentees, often more. That is the actual pitch when you are asking people to give up their summer. Lead with it.",
  },
];

const CREDITS =
  "This is the short version. The full write-up of DevLabs 2.0 — what worked, what quietly fell apart, and the parts most recap posts leave out — is in the long post.";

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          style={{
            fontFamily: "var(--font-zarathustra)",
            fontWeight: "normal",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            lineHeight: 1.14,
            color: "var(--foreground)",
            margin: "52px 0 6px",
          }}
        >
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p
          key={i}
          style={{
            fontFamily: "var(--font-phantom)",
            fontSize: 19,
            lineHeight: 1.72,
            color: "var(--foreground)",
            margin: "22px 0 0",
            fontWeight:
              block.text === "People" || block.text === "Time" || block.text === "Tools"
                ? 700
                : "normal",
          }}
        >
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul
          key={i}
          style={{
            margin: "22px 0 0",
            paddingLeft: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {block.items.map((it, j) => (
            <li
              key={j}
              style={{
                display: "flex",
                gap: 12,
                fontFamily: "var(--font-phantom)",
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--foreground)",
              }}
            >
              <span aria-hidden="true">🔹</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol
          key={i}
          style={{
            margin: "22px 0 0",
            paddingLeft: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {block.items.map((it, j) => (
            <li
              key={j}
              style={{
                display: "flex",
                gap: 12,
                fontFamily: "var(--font-phantom)",
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--foreground)",
              }}
            >
              <span aria-hidden="true">🔹</span>
              <span>{it}</span>
            </li>
          ))}
        </ol>
      );
    case "aside":
      return (
        <p
          key={i}
          style={{
            margin: "40px 0 0",
            padding: "4px 0 4px 26px",
            borderLeft: "3px solid var(--red)",
            fontFamily: "var(--font-zarathustra)",
            fontStyle: "italic",
            fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
            lineHeight: 1.4,
            color: "var(--foreground)",
          }}
        >
          {block.text}
        </p>
      );
  }
}

export default function DevLabsPlaybookPost() {
  return (
    <main
      id="main"
      tabIndex={-1}
      style={{ position: "relative", background: "var(--background)", minHeight: "100vh" }}
    >
      <Navbar invertColors />

      {/* Masthead */}
      <header
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 12% 8%, rgba(255, 255, 255, 0.16), transparent 32%), linear-gradient(135deg, var(--ink) 0%, var(--ink-2) 48%, var(--accent-ink) 130%)",
          color: "var(--paper)",
          padding: "clamp(116px, 16vh, 160px) 0 clamp(48px, 7vh, 76px)",
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 clamp(24px, 5vw, 40px)",
          }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-phantom)",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "rgba(255, 255, 255, 0.8)",
              textDecoration: "none",
              marginBottom: 26,
            }}
          >
            ← Back to blog
          </Link>

          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.65)",
              margin: "0 0 22px",
            }}
          >
            OpenLake · IIT Bhilai
          </p>

          <h1
            style={{
              fontFamily: "var(--font-zarathustra)",
              fontWeight: "normal",
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            How to run a DevLabs at your college
          </h1>

          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: "clamp(17px, 2.2vw, 20px)",
              lineHeight: 1.55,
              color: "rgba(255, 255, 255, 0.85)",
              margin: "26px 0 0",
            }}
          >
            A three-page framework for running a beginner open-source bootcamp with no budget.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px 14px",
              marginTop: 30,
              fontFamily: "var(--font-phantom)",
              fontSize: 14,
              color: "rgba(255, 255, 255, 0.72)",
            }}
          >
            <span style={{ fontWeight: 700, color: "var(--paper)" }}>Ashish Kumar Dash</span>
            <span>· Secretary, OpenLake, IIT Bhilai</span>
            <span>· August 2026 · 4 min read</span>
          </div>

          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: 14,
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.72)",
              margin: "24px 0 0",
            }}
          >
            Reach us at{" "}
            <a
              href="mailto:openlake@iitbhilai.ac.in"
              style={{
                color: "var(--paper)",
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              openlake@iitbhilai.ac.in
            </a>
          </p>
        </div>
      </header>

      {/* Article body */}
      <article
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "clamp(32px, 6vw, 64px) clamp(24px, 5vw, 40px) 40px",
        }}
      >
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: 16,
            background: "var(--surface)",
            padding: "20px 24px",
            marginBottom: 8,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            <strong style={{ color: "var(--red)" }}>Short version.</strong> Want the long one? We
            also published{" "}
            <Link
              href="/blog/devlabs-2"
              style={{ color: "var(--red)", textDecoration: "none", fontWeight: 700 }}
            >
              what actually happened across eight weeks
            </Link>
            , including the parts that broke.
          </p>
        </div>

        {BLOCKS.map(renderBlock)}

        <p
          style={{
            fontFamily: "var(--font-zarathustra)",
            fontStyle: "italic",
            fontSize: "clamp(1.4rem, 2.6vw, 1.8rem)",
            color: "var(--red)",
            margin: "48px 0 0",
          }}
        >
          Hail Open Source!
        </p>

        <hr
          style={{
            border: 0,
            borderTop: "1px solid var(--border)",
            margin: "40px 0 28px",
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-phantom)",
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--muted)",
            margin: 0,
          }}
        >
          <strong style={{ color: "var(--foreground)" }}>OpenLake</strong> — IIT Bhilai’s
          open-source society ·{" "}
          <a href="https://openlake.in" style={{ color: "var(--red)", textDecoration: "none" }}>
            openlake.in
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/OpenLake"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--red)", textDecoration: "none" }}
          >
            github.com/OpenLake
          </a>
        </p>

        <p
          style={{
            fontFamily: "var(--font-phantom)",
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--muted)",
            margin: "16px 0 0",
          }}
        >
          {CREDITS}
        </p>
      </article>

      <Footer />
    </main>
  );
}
