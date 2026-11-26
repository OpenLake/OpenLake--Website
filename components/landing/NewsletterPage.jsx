"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { PageHero, PageSection, Accent } from "@/components/PageHero";
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
//    accentColor  - optional; defaults to the OpenLake red (var(--red))
// ════════════════════════════════════════════════════════════════════════════
// Add an issue only after it is published and readUrl points to the real article.
const NEWSLETTERS = [];

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
  const accent = item.accentColor ?? "var(--red)";
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
          boxShadow: "var(--shadow-dd)",
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
              fontSize: 34,
              fontWeight: 700,
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
export default function NewsletterPage({ signupEnabled, confirmed }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  // Newest issue first.
  const sorted = [...NEWSLETTERS].sort((a, b) => b.date.localeCompare(a.date));

  async function handleSubscribe(event) {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!response.ok) throw new Error("Subscription request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
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

      <Navbar />

      <PageHero
        badge="✦ OpenLake Newsletter"
        title={
          <>
            The OpenLake <Accent>Newsletter</Accent>
          </>
        }
        lede="Build logs, project spotlights, and news from IIT Bhilai's open-source community."
      />

      <PageSection tone="surface">
        {/* Subscribe bar */}
        {confirmed || status === "success" ? (
          <div
            style={{
              background: "var(--surface)",
              borderRadius: 9999,
              minHeight: 64,
              border: "1px solid var(--red)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 20px",
              textAlign: "center",
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
              {confirmed ? "You're subscribed. Thanks for confirming!" : "Check your inbox to confirm your subscription."}
            </span>
          </div>
        ) : signupEnabled ? (
          <form
            onSubmit={handleSubscribe}
            style={{
              background: "var(--surface)",
              borderRadius: 9999,
              minHeight: 64,
              border: "1px solid var(--border)",
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
              required
              aria-label="Email address"
              placeholder="you@iitbhilai.ac.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                minWidth: 0,
                background: "transparent",
                border: "none",
                fontFamily: "var(--font-phantom)",
                fontSize: 20,
                color: "var(--foreground)",
              }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
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
                background: "var(--red)",
                fontFamily: "var(--font-phantom)",
                fontWeight: "bold",
                fontSize: 18,
                color: "var(--paper)",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
              <span aria-hidden="true" style={{ display: "inline-flex" }}>
                <BtnArrowSvg />
              </span>
            </button>
          </form>
        ) : (
          <output style={{ display: "block", textAlign: "center", marginBottom: 48 }}>
            Newsletter signup is temporarily unavailable.
          </output>
        )}

        {status === "error" && (
          <p role="alert" style={{ color: "var(--red)", margin: "-32px 0 48px", textAlign: "center" }}>
            We could not start your subscription. Please try again later.
          </p>
        )}
        {signupEnabled && status !== "success" && !confirmed && (
          <p style={{ textAlign: "center", margin: "-32px 0 48px", color: "var(--foreground)" }}>
            We use Brevo to send the newsletter. Confirm by email; unsubscribe anytime. {" "}
            <Link href="/privacy" style={{ color: "var(--red)" }}>Privacy details</Link>
          </p>
        )}

        {/* Issue list */}
        {sorted.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {sorted.map((item) => (
              <NewsletterCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: "center", fontSize: 20, color: "var(--foreground)" }}>
            No issues published yet. The archive will appear here when the first issue is out.
          </p>
        )}

      </PageSection>
      <Footer />
    </main>
  );
}
