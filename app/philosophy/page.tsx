import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Philosophy — OpenLake",
  description:
    "OpenLake's philosophy on coding, learning, and building an open-source community at IIT Bhilai.",
  canonical: "/philosophy",
});

// ════════════════════════════════════════════════════════════════════════════
//  EDIT ME: the beliefs live here. Copy a block, paste it, edit it.
//    title  - the headline
//    accent - colour for the number + heading
//    body   - the paragraph
//    link   - optional; { label, href } renders a link under the body
// ════════════════════════════════════════════════════════════════════════════
const ROWS = [
  {
    id: "superpower",
    title: "Coding is a superpower.",
    accent: "#ec3750",
    body: "Learning to code converts you from a consumer to a creator. Suddenly, computers become a tool for making things instead of just using them.",
  },
  {
    id: "anywhere",
    title: "Build from anywhere.",
    accent: "#cf2de4",
    body: "Anyone with a laptop and an internet connection can learn to build software. Making things has never been this democratized.",
  },
  {
    id: "hack",
    title: "Hack, hack, hack.",
    accent: "#732de4",
    body: "We want a space on campus where people are making interesting things with code, every week. Most places don't provide that, so we built it.",
  },
  {
    id: "start",
    title: "Start building.",
    accent: "#338eda",
    body: "Most courses teach concepts instead of how to write real code — like learning carpentry without any wood. Here you learn entirely through shipping.",
  },
  {
    id: "learn",
    title: "Learn as you build.",
    accent: "#5bc0de",
    body: "Starting out, you won't understand how all the code works. You'll build that understanding as you go, and you'll get stuck along the way. We're here for that part.",
    link: { label: "Browse our projects", href: "/programs" },
  },
  {
    id: "community",
    title: "Be part of a community.",
    accent: "#33d6a6",
    body: "OpenLake gives you a room full of other people building things. We're designers, writers, engineers, tinkerers. We help one another. Join us.",
  },
];

const ACCENT = "#ec3750";

export default function Page() {
  return (
    <main
      id="main"
      tabIndex={-1}
      style={{
        position: "relative",
        background: "var(--background)",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <style>{`
        .phil-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        @media (max-width: 860px) { .phil-grid { grid-template-columns: 1fr; } }
        .phil-card {
          background: var(--surface);
          border-radius: 16px;
          box-shadow: 2px 4px 6px rgba(0,0,0,0.25);
          padding: 28px 32px;
          height: 100%;
          box-sizing: border-box;
          transition: transform 0.2s ease;
        }
        .phil-card:hover { transform: translateY(-3px); }
        .phil-cta-btn { transition: opacity 0.15s ease; }
        .phil-cta-btn:hover { opacity: 0.85; }
        @media (prefers-reduced-motion: reduce) {
          .phil-card, .phil-cta-btn { transition: none !important; }
        }
      `}</style>

      {/* Red glow at the top */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(236,55,80,0.18) 0%, rgba(236,55,80,0.04) 20%, transparent 40%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/bgFade2.svg"
        alt=""
        style={{
          position: "absolute",
          top: -12,
          left: -1,
          width: "101%",
          height: "auto",
          opacity: 0.55,
          pointerEvents: "none",
          zIndex: 0,
          transform: "scaleY(-1)",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/background.webp"
        alt=""
        style={{
          position: "absolute",
          top: -60,
          left: 0,
          width: "100%",
          height: "auto",
          transform: "scaleY(-1)",
          opacity: 0.15,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 50 }}>
        <Navbar />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          paddingTop: "clamp(100px, 14vh, 140px)",
          paddingBottom: 80,
          paddingLeft: "clamp(24px, 14.29%, 220px)",
          paddingRight: "clamp(24px, 14.29%, 220px)",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-zarathustra)",
            fontSize: 60,
            fontWeight: "normal",
            lineHeight: 0.92,
            color: "var(--foreground)",
            textAlign: "center",
            margin: "40px 0 16px",
          }}
        >
          We&rsquo;re at our best when we&rsquo;re making.
        </h1>

        <div
          style={{
            textAlign: "center",
            marginBottom: 56,
            maxWidth: 720,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: 20,
              color: "var(--foreground)",
              opacity: 0.7,
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            A few beliefs that shape how we build at OpenLake.
          </p>
        </div>

        <div className="phil-grid" style={{ marginBottom: 72 }}>
          {ROWS.map((row, i) => (
            <div key={row.id} className="phil-card">
              <div
                style={{
                  fontFamily: "var(--font-phantom)",
                  fontSize: 15,
                  fontWeight: "bold",
                  letterSpacing: "0.2em",
                  color: row.accent,
                  marginBottom: 10,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-zarathustra)",
                  fontSize: 30,
                  fontWeight: "normal",
                  color: row.accent,
                  margin: "0 0 10px",
                  lineHeight: 1.05,
                }}
              >
                {row.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-phantom)",
                  fontSize: 17,
                  color: "var(--foreground)",
                  opacity: 0.8,
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                {row.body}
              </p>
              {row.link && (
                <Link
                  href={row.link.href}
                  style={{
                    display: "inline-block",
                    marginTop: 12,
                    fontFamily: "var(--font-phantom)",
                    fontSize: 17,
                    fontWeight: "bold",
                    color: row.accent,
                    textDecoration: "none",
                  }}
                >
                  {row.link.label} →
                </Link>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            background: "var(--surface)",
            borderRadius: 16,
            border: `2.5px solid ${ACCENT}`,
            padding: "40px 32px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-zarathustra)",
              fontSize: 36,
              fontWeight: "normal",
              color: "var(--foreground)",
              margin: "0 0 10px",
              lineHeight: 1.05,
            }}
          >
            Join the movement.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: 18,
              color: "var(--foreground)",
              opacity: 0.75,
              margin: "0 0 24px",
            }}
          >
            Jump straight into the community and pick up your first issue.
          </p>

          <a
                      href="https://discord.gg/A2J9z92qzd"
            target="_blank"
            rel="noopener noreferrer"
            className="phil-cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 26px",
              background: ACCENT,
              borderRadius: 44,
              fontFamily: "var(--font-phantom)",
              fontWeight: "bold",
              fontSize: 18,
              color: "var(--paper)",
              textDecoration: "none",
            }}>
            Join the community
          </a>
        </div>

        <div style={{ marginTop: 80, textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: 20,
              color: "var(--foreground)",
              opacity: 0.55,
              margin: 0,
            }}
          >
            Want the monthly recap? Read the{" "}
            <Link href="/newsletterpage" style={{ color: ACCENT, textDecoration: "none" }}>
              newsletter
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}