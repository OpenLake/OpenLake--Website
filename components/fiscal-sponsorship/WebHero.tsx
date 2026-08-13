"use client";


export function WebHero() {
  return (
    <section
      style={{
        padding: "100px 24px 80px",
        background:
          "linear-gradient(135deg, var(--surface) 0%, var(--background) 50%, var(--surface) 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <span
          style={{
            background: "var(--red)",
            color: "#fff",
            padding: "8px 18px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          🚀 OpenLake Learning Hub
        </span>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 72px)",
            fontWeight: 700,
            color: "var(--foreground)",
            margin: 0,
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Learn <span style={{ color: "var(--red)" }}>Web Development</span>
          <br />
          with the Best Free Resources
        </h1>

        <p
          style={{
            marginTop: "24px",
            maxWidth: "720px",
            fontSize: "20px",
            lineHeight: 1.7,
            color: "var(--muted)",
          }}
        >
          From HTML and CSS to React, Node.js and Full Stack Development,
          discover curated videos, documentation, roadmaps and projects—all in
          one place.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          
        </div>
      </div>
    </section>
  );
}