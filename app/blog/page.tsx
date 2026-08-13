import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog — OpenLake",
  description:
    "Stories from the OpenLake community — mentorships, side projects, and deep technical write-ups by students at IIT Bhilai.",
  canonical: "/blog",
});

type Post = {
  title: string;
  url: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
};

const POSTS: Post[] = [
  {
    title: "Summer Mentorships 2026: LFX Mentorship Mid-Term Report",
    url: "https://openmainframeproject.org/blog/summer-mentorships-2026-lfx-mentorship-mid-term-report/",
    image: "/assets/lfx-social-card.svg",
    author: "Ashish Kumar Dash",
    date: "Aug 2026",
    readTime: "8 min read",
    excerpt:
      "From PR #513 to eight merged pull requests into the Zowe Client Java SDK — a mid-term look at shipping production-grade z/OSMF REST APIs through the Open Mainframe Project Summer Mentorship.",
    tags: ["Open Source", "LFX Mentorship", "Zowe", "Java"],
  },
  {
    title: "Brok: a blunt blacksmith for your architecture",
    url: "https://rudradudhat2509.github.io/posts/brok-blacksmith.html",
    image: "/assets/blog-brok.svg",
    author: "Rudra Dudhat",
    date: "Jun 2026",
    readTime: "8 min read",
    excerpt:
      "A deterministic MCP that does the napkin math AI coding assistants skip — finds the bottleneck, prices the egress bill, and roasts your architecture with cited numbers and no hallucinated verdicts.",
    tags: ["MCP", "Architecture", "AI"],
  },
  {
    title: "Kudos: Engineering a Token-Weighted Social Economy",
    url: "https://amaydixit11.vercel.app/blog/kudos",
    image: "/assets/blog-kudos.svg",
    author: "Amay Dixit",
    date: "Mar 2026",
    readTime: "21 min read",
    excerpt:
      "A deep technical dive into the polyglot microservices, economic algorithms, gRPC communication, MLFQ feed ranking, and database design powering Kudos — a platform where engagement is a scarce digital currency.",
    tags: ["Microservices", "Go", "gRPC", "Distributed Systems"],
  },
];

function ExternalArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-phantom)",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--muted)",
        border: "1.5px solid var(--border)",
        borderRadius: 999,
        padding: "4px 12px",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="blog-card"
      style={{
        display: "grid",
        background: "var(--surface)",
        borderRadius: 24,
        border: "1px solid var(--border)",
        boxShadow: "0 20px 48px rgba(23, 23, 29, 0.06)",
        textDecoration: "none",
        color: "inherit",
        overflow: "hidden",
        transition: "transform 0.22s ease-out, box-shadow 0.22s ease-out, border-color 0.22s ease-out",
      }}
    >
      <div className="blog-card__media" style={{ position: "relative", lineHeight: 0 }}>
        <Image
          src={post.image}
          alt={`${post.title} — cover`}
          width={1440}
          height={810}
          sizes="(min-width: 860px) 44vw, 100vw"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: "clamp(24px, 3vw, 36px)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {post.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <h2
          className="blog-card__title"
          style={{
            fontFamily: "var(--font-zarathustra)",
            fontWeight: "normal",
            color: "var(--foreground)",
            lineHeight: 1.08,
            margin: 0,
            fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
          }}
        >
          {post.title}
        </h2>

        <p
          style={{
            fontFamily: "var(--font-phantom)",
            fontSize: 16,
            lineHeight: 1.5,
            color: "var(--muted)",
            margin: 0,
          }}
        >
          {post.excerpt}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            marginTop: "auto",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span
              style={{
                fontFamily: "var(--font-phantom)",
                fontSize: 15,
                fontWeight: 700,
                color: "var(--foreground)",
              }}
            >
              {post.author}
            </span>
            <span
              style={{
                fontFamily: "var(--font-phantom)",
                fontSize: 13,
                color: "var(--muted)",
              }}
            >
              {post.date} · {post.readTime}
            </span>
          </div>

          <span
            className="blog-card__read"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-phantom)",
              fontSize: 15,
              fontWeight: 700,
              color: "var(--red)",
              whiteSpace: "nowrap",
            }}
          >
            Read post
            <span style={{ display: "inline-flex", transition: "transform 0.2s ease" }}>
              <ExternalArrow />
            </span>
          </span>
        </div>
      </div>
    </a>
  );
}

export default function BlogPage() {
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
        .blog-card { grid-template-columns: 1fr; will-change: transform; }
        .blog-card__media { aspect-ratio: 16 / 9; overflow: hidden; }
        .blog-card:hover { transform: translateY(-4px); box-shadow: 0 32px 72px rgba(23, 23, 29, 0.12); }
        .blog-card:hover .blog-card__read span { transform: translateX(3px); }
        @media (min-width: 860px) {
          .blog-card { grid-template-columns: minmax(0, 44%) 1fr; align-items: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .blog-card, .blog-card__read span { transition: none !important; }
        }
      `}</style>

      <Navbar invertColors />

      {/* Hero — big editorial masthead */}
      <header
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 12% 8%, rgba(255, 255, 255, 0.18), transparent 30%), linear-gradient(135deg, var(--ink) 0%, var(--ink-2) 46%, var(--red) 120%)",
          padding: "clamp(120px, 18vh, 170px) 0 clamp(56px, 8vh, 90px)",
          color: "var(--paper)",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 clamp(24px, 5vw, 48px)",
          }}
        >
          {/* Masthead top rule */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
              paddingBottom: 14,
              marginBottom: 30,
            }}
          >
            
            <p
              style={{
                fontFamily: "var(--font-phantom)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                margin: 0,
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              Vol. 1 — 2026
            </p>
          </div>

          {/* Masthead — oversized title */}
          <h1
            style={{
              fontFamily: "var(--font-zarathustra)",
              fontSize: "clamp(3.4rem, 10vw, 8rem)",
              fontWeight: "normal",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              margin: 0,
              textAlign: "center",
            }}
          >
            The OpenLake
            <br />
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(100deg, #ff8c37 0%, var(--red) 55%, #ff8c37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Blog
            </span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: "clamp(17px, 2.2vw, 21px)",
              lineHeight: 1.5,
              margin: "26px auto 0",
              maxWidth: 620,
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.85)",
            }}
          >
            Mentorships, side projects, and deep technical write-ups by the students
            building at IIT Bhilai — shipped in the open.
          </p>

        </div>
      </header>

      {/* Posts */}
      <section
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1080,
          margin: "0 auto",
          padding: "clamp(56px, 8vw, 88px) clamp(24px, 5vw, 48px) 96px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {POSTS.map((post) => (
            <PostCard key={post.url} post={post} />
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-phantom)",
            fontSize: 16,
            color: "var(--muted)",
            margin: "56px 0 0",
            textAlign: "center",
          }}
        >
          Written by students, for everyone. Want to publish something?{" "}
          <Link
            href="https://github.com/OpenLake/OpenLake--Website"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--red)", textDecoration: "none" }}
          >
            Open a PR
          </Link>
          .
        </p>
      </section>

      <Footer />
    </main>
  );
}