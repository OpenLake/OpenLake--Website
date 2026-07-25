"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { BtnArrowSvg } from "./btn-arrow";

// ════════════════════════════════════════════════════════════════════════════
//  EDIT ME: your newsletter issues live here. Copy a block, paste it, edit it.
//  You should never need to touch anything below this array.
//
//  Field reference (id / issue / title / date are the important ones):
//    id           - unique string, any value, just don't repeat it
//    issue        - issue number, shown as "Issue 01"
//    title        - the headline of the issue
//    date         - "YYYY-MM-DD", shown as a readable date
//    excerpt      - a short teaser paragraph
//    coverImageUrl- picture for the issue. Put the file in public/assets/ and
//                   write "/assets/name.webp"  (NOT "/public/..."), or a full
//                   https:// URL. Leave null for no image.
//    readUrl      - the "Read issue" button links here
//    tags         - array of short strings, e.g. ["Open Source", "Events"]
//    accentColor  - optional; defaults to the OpenLake red (#ec3750)
// ════════════════════════════════════════════════════════════════════════════
const NEWSLETTERS = [
  {
    id: "1",
    issue: 2,
    title: "Winter of Code kicks off",
    date: "2026-01-15",
    excerpt:
      "Our biggest cohort yet ships its first pull requests, we spotlight three student-led projects, and there's a new hardware corner in the makerspace. Here's everything that happened at OpenLake this month.",
    coverImageUrl: null, // e.g. "/assets/newsletter-issue2.webp"
    readUrl: "https://example.com/newsletter/2",
    tags: ["Open Source", "Community", "Events"],
    accentColor: "#ec3750",
  },
  {
    id: "2",
    issue: 1,
    title: "Hello from the Lake",
    date: "2025-12-10",
    excerpt:
      "The very first OpenLake newsletter. What we're building, why open source matters at IIT Bhilai, and how to get involved whether you write code, design, or just love shipping things.",
    coverImageUrl: null, // e.g. "/assets/newsletter-issue1.webp"
    readUrl: "https://example.com/newsletter/1",
    tags: ["Welcome", "Open Source"],
    accentColor: "#ec3750",
  },
  // ── Copy the block above, paste it here, and change the values ──
];

// Turn "2026-01-15" into "15 January 2026" (no timezone surprises).
function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(y, (m ?? 1) - 1, d ?? 1);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ── A single newsletter card ────────────────────────────────────────────────
function NewsletterCard({ item }) {
  const wrapperRef = useRef(null);
  const accent = item.accentColor ?? "#ec3750";
  const coverImageUrl = item.coverImageUrl ?? null;
  const tags = item.tags ?? [];

  return (
    <div
      ref={wrapperRef}
      onMouseMove={(e) => {
        const el = wrapperRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dx = (e.clientX - rect.left) / rect.width - 0.5;
        const dy = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(1100px) scale(1.008) rotateY(${dx * 2.5}deg) rotateX(${-dy * 2}deg)`;
      }}
      onMouseLeave={() => {
        const el = wrapperRef.current;
        if (!el) return;
        el.style.transition = "transform 0.4s ease";
        el.style.transform = "perspective(1100px) scale(1) rotateY(0deg) rotateX(0deg)";
        setTimeout(() => {
          if (wrapperRef.current) wrapperRef.current.style.transition = "transform 0.06s ease";
        }, 400);
      }}
      onMouseEnter={() => {
        if (wrapperRef.current) wrapperRef.current.style.transition = "transform 0.06s ease";
      }}
      className="news-card"
      style={{ position: "relative", transition: "transform 0.06s ease", willChange: "transform" }}
    >
      <div
        style={{
          position: "relative",
          background: "var(--surface)",
          borderRadius: 16,
          boxShadow: "2px 4px 6px rgba(0,0,0,0.25)",
          overflow: "hidden",
          display: "flex",
          alignItems: "stretch",
          minHeight: 200,
          boxSizing: "border-box",
        }}
      >
        {/* Cover image (left column on desktop, top on mobile) */}
        {coverImageUrl && (
          <div className="news-cover" style={{ position: "relative", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={coverImageUrl}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        )}

        {/* Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "28px 32px",
            flex: 1,
            minWidth: 0,
          }}
        >
          {/* Issue + date row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 12,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: accent,
                color: "var(--paper)",
                fontFamily: "var(--font-phantom)",
                fontWeight: "bold",
                fontSize: 14,
                borderRadius: 9999,
                padding: "4px 12px",
                whiteSpace: "nowrap",
              }}
            >
              Issue {String(item.issue).padStart(2, "0")}
            </span>
            <span
              style={{
                fontFamily: "var(--font-phantom)",
                fontSize: 16,
                color: "var(--foreground)",
                opacity: 0.55,
              }}
            >
              {formatDate(item.date)}
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "var(--font-zarathustra)",
              fontSize: 34,
              fontWeight: "normal",
              color: "var(--foreground)",
              margin: "0 0 10px",
              lineHeight: 1.05,
            }}
          >
            {item.title}
          </h2>

          {/* Excerpt */}
          {item.excerpt && (
            <p
              style={{
                fontFamily: "var(--font-phantom)",
                fontSize: 18,
                color: "var(--foreground)",
                opacity: 0.85,
                margin: "0 0 16px",
                lineHeight: 1.35,
              }}
            >
              {item.excerpt}
            </p>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 18,
              }}
            >
              {tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "var(--font-phantom)",
                    fontSize: 14,
                    color: "var(--foreground)",
                    opacity: 0.7,
                    border: "1.5px solid var(--border)",
                    borderRadius: 9999,
                    padding: "3px 12px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Spacer pushes the button to the bottom */}
          <div style={{ flex: "1 0 8px" }} />

          {/* Read button */}
          {item.readUrl && (
            <a
              href={item.readUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 22,
                paddingRight: 22,
                background: accent,
                borderRadius: 44,
                fontFamily: "var(--font-phantom)",
                fontWeight: "bold",
                fontSize: 18,
                color: "var(--paper)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Read issue
              <span className="btn-arrow" aria-hidden="true">
                <BtnArrowSvg />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const magazineBgRef = useRef(null);

  // Parallax on the magazine background, same as the programs page.
  const onScroll = useCallback(() => {
    const y = window.scrollY;
    if (magazineBgRef.current)
      magazineBgRef.current.style.transform = `scaleY(-1) translateY(-${y * 0.5}px)`;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // Newest issue first.
  const sorted = [...NEWSLETTERS].sort((a, b) => b.date.localeCompare(a.date));

  function handleSubscribe() {
    // TODO: wire this to your real newsletter provider / API route.
    // For now it just shows a local confirmation.
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  }

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
        @media (max-width: 760px) {
          .news-card > div { flex-direction: column !important; }
          .news-cover { width: 100% !important; height: 200px !important; }
        }
        .news-cover { width: 240px; }
        input[data-news-email]::placeholder { opacity: 0.5; }
        input[data-news-email] { outline: none; }
        .cta-btn .btn-arrow { display: inline-block; transition: transform 0.2s ease; margin-left: 4px; }
        .cta-btn:hover .btn-arrow { transform: translateX(5px); }
        .sub-btn { transition: opacity 150ms ease, transform 120ms ease; }
        .sub-btn:hover { opacity: 0.88; }
        .sub-btn:active { transform: scale(0.97); }
        @media (prefers-reduced-motion: reduce) {
          .cta-btn .btn-arrow, .sub-btn { transition: none !important; }
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
        ref={magazineBgRef}
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
          The OpenLake Newsletter
        </h1>

        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: 20,
              color: "var(--foreground)",
              margin: "0 0 4px",
            }}
          >
            Build logs, project spotlights, and what's happening at IIT Bhilai's open-source hub.
          </p>
          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: 20,
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            One issue a month. No spam, ever.
          </p>
        </div>

        {/* Subscribe bar */}
        {subscribed ? (
          <div
            style={{
              background: "var(--surface)",
              borderRadius: 9999,
              height: 64,
              border: "2.5px solid #ec3750",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 48,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-phantom)",
                fontSize: 20,
                color: "var(--foreground)",
              }}
            >
              🎉 You're on the list — see you in the next issue!
            </span>
          </div>
        ) : (
          <div
            style={{
              background: "var(--surface)",
              borderRadius: 9999,
              height: 64,
              border: "2.5px solid var(--border)",
              display: "flex",
              alignItems: "center",
              paddingLeft: 28,
              paddingRight: 8,
              marginBottom: 48,
            }}
          >
            <input
              data-news-email
              type="email"
              aria-label="Email address"
              placeholder="you@iitbhilai.ac.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubscribe();
              }}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                fontFamily: "var(--font-phantom)",
                fontSize: 20,
                color: "var(--foreground)",
              }}
            />
            <button
              onClick={handleSubscribe}
              className="sub-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                height: 48,
                paddingLeft: 24,
                paddingRight: 24,
                borderRadius: 9999,
                border: "none",
                background: "#ec3750",
                fontFamily: "var(--font-phantom)",
                fontWeight: "bold",
                fontSize: 18,
                color: "var(--paper)",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Subscribe
              <span aria-hidden="true" style={{ display: "inline-flex" }}>
                <BtnArrowSvg />
              </span>
            </button>
          </div>
        )}

        {/* Issue list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {sorted.map((item) => (
            <NewsletterCard key={item.id} item={item} />
          ))}
        </div>

        {/* Footer note */}
        <div
          style={{
            marginTop: 80,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: 20,
              color: "var(--foreground)",
              opacity: 0.55,
              margin: 0,
            }}
          >
            <a
              href="https://slack.hackclub.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ec3750", textDecoration: "none" }}
            >
            </a>
            
          </p>
          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: 20,
              color: "var(--foreground)",
              opacity: 0.55,
              margin: 0,
            }}
          >
            <Link href="/programs" style={{ color: "#ec3750", textDecoration: "none" }}>
            </Link>

          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}