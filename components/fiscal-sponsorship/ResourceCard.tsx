"use client";

import Image from "next/image";

type ResourceCardProps = {
  title: string;
  description: string;
  image: string;
  videoLink: string;
  docLink: string;
  level: string;
};

export function ResourceCard({
  title,
  description,
  image,
  videoLink,
  docLink,
  level,
}: ResourceCardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid #e5e7eb",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        maxWidth: "360px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          background: "#f8fafc",
          padding: "20px",
        }}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={280}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "contain",
          }}
        />
      </div>

      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              background: "#ec3750",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            {level}
          </span>

        </div>

        <h3
          style={{
            margin: 0,
            marginBottom: "12px",
            color: "#17171d",
            fontSize: "24px",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "#6b7280",
            lineHeight: 1.6,
            margin: 0,
            flex: 1,
          }}
        >
          {description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "24px",
          }}
        >
          <a
            href={videoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#ec3750",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            🎥 Video →
          </a>

          <a
            href={docLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            📖 Learn More →
          </a>
        </div>
      </div>
    </div>
  );
}