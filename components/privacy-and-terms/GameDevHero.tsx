"use client";

import Link from "next/link";

export default function GameDevHero() {
  return (
    <section
      style={{
        padding: "100px 24px 80px",
        background:
          "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #eef2ff 100%)",
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
            background: "#ec3750",
            color: "#fff",
            padding: "8px 18px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          🎮 OpenLake Learning Hub
        </span>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 72px)",
            fontWeight: 700,
            color: "#17171d",
            margin: 0,
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Learn <span style={{ color: "#ec3750" }}>Game Development</span>
          <br />
          with the Best Free Resources
        </h1>

        <p
          style={{
            marginTop: "24px",
            maxWidth: "720px",
            fontSize: "20px",
            lineHeight: 1.7,
            color: "#555",
          }}
        >
          Learn game development using Unity, Unreal Engine, Godot, Blender,
          C#, C++, and industry-standard tools. Explore curated videos,
          official documentation, roadmaps, and hands-on projects—all in one
          place.
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