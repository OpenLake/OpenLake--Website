import type { ReactNode } from "react";

/**
 * The page header used by every route.
 *
 * This is the resources-page treatment (AIHero / WebHero / …) lifted into one
 * component so the pages share it instead of each re-implementing it and
 * drifting apart:
 *
 *   - a soft 135° surface → background → surface wash
 *   - an optional accent pill
 *   - a sans (phantom) display heading at weight 700, with any highlighted
 *     words wrapped in <Accent>
 *   - a muted lede capped at 720px
 *
 * Anything page-specific (a search field, filter chips, a CTA row) goes in
 * `children`, which renders in the same centred column below the lede.
 */
export function PageHero({
  badge,
  title,
  lede,
  children,
}: {
  badge?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
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
        {badge && (
          <span
            style={{
              background: "var(--red)",
              color: "var(--paper)",
              padding: "8px 18px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "24px",
            }}
          >
            {badge}
          </span>
        )}

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
          {title}
        </h1>

        {lede && (
          <p
            style={{
              marginTop: "24px",
              maxWidth: "720px",
              fontSize: "20px",
              lineHeight: 1.7,
              color: "var(--muted)",
            }}
          >
            {lede}
          </p>
        )}

        {children && (
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "40px",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

/** Highlighted words inside a PageHero title. */
export function Accent({ children }: { children: ReactNode }) {
  return <span style={{ color: "var(--red)" }}>{children}</span>;
}

/**
 * A content band below the hero. Sections alternate `tone="surface"` and
 * `tone="background"` down the page, matching ResourceSection.
 */
export function PageSection({
  tone = "surface",
  children,
  id,
}: {
  tone?: "surface" | "background";
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      style={{
        padding: "80px 24px",
        background: tone === "surface" ? "var(--surface)" : "var(--background)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>{children}</div>
    </section>
  );
}

/** Section heading, matching ResourceSection's "Featured Resources". */
export function SectionTitle({
  children,
  align = "center",
}: {
  children: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <h2
      style={{
        fontSize: "42px",
        fontWeight: 700,
        color: "var(--foreground)",
        textAlign: align,
        margin: "0 0 16px",
      }}
    >
      {children}
    </h2>
  );
}
