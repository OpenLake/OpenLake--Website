"use client";

import { useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  PageHero,
  PageSection,
  SectionTitle,
  Accent,
} from "@/components/PageHero";

const MLH_URL =
  "https://events.mlh.com/events/14954-hacktoberfest-hack-day-durg-x-openlake";
const WHATSAPP_URL = "https://chat.whatsapp.com/EinYHPrubps3vFl6arVEpu";

/* Hacktoberfest poster palette */
const CREAM = "#fff6eb";
const RUST = "#a54a35";
const TEAL = "#12716a";
const YELLOW = "#ffd24d";
const INK = "#33241b";

const BUNTING_COLORS = ["#c9553f", "#e2734a", "#3f7d6e", "#ffd24d"];

function Bunting() {
  return (
    <svg
      viewBox="0 0 480 26"
      preserveAspectRatio="none"
      className="block h-5 w-full sm:h-7"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="0" y1="2" x2="480" y2="2" stroke={INK} strokeWidth="2" />
      {Array.from({ length: 24 }, (_, i) => (
        <polygon
          key={i}
          points={`${i * 20},3 ${(i + 1) * 20},3 ${i * 20 + 10},25`}
          fill={BUNTING_COLORS[i % BUNTING_COLORS.length]}
        />
      ))}
    </svg>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  EDIT ME: your events live here. Copy a block, paste it, change the values.
//  You should never need to touch anything below these arrays.
//
//  Field reference (everything is optional except id / title / imageUrl):
//    id              - unique string, any value, just don't repeat it
//    title           - shown as the card title
//    badge           - the pill above the title ("22 Jan 2026", "Coming soon")
//    description     - the paragraph under the title
//    imageUrl        - picture shown on the left half of the card
//    imageUrlMobile  - optional alternate picture used below 850px
//    date            - optional italic line (e.g. "22 Aug 2026")
//    location        - italic line at the bottom ("IIT Bhilai")
//    bgColor / textColor / accentColor - card colors
// ════════════════════════════════════════════════════════════════════════════
type EventItem = {
  id: string;
  title: string;
  badge: string;
  description: string;
  imageUrl: string;
  imageUrlMobile?: string;
  date?: string;
  location: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
};

const PAST_EVENTS: EventItem[] = [
  {
    id: "0",
    title: "OpenLake Intro Session",
    badge: "22 Aug 2026",
    description:
      "The official intro session of OpenLake! We met the team, shared our vision and upcoming projects, and how to be a part of our open-source community.",
    imageUrl: "/team/intro.png",
    imageUrlMobile: "/team/openlakeintro26.jpeg",
    date: "22 Aug 2026",
    location: "L101, IIT Bhilai",
    bgColor: "var(--surface)",
    textColor: "var(--foreground)",
    accentColor: "var(--red)",
  },
  {
    id: "1",
    title: "FOSS Overflow",
    badge: "22 Jan 2026",
    description:
      "OverFlow into Open Source with India's Largest Open Source Hackathon.",
    imageUrl: "/team/eventimage.png",
    location: "IIT Bhilai",
    bgColor: "var(--surface)",
    textColor: "var(--foreground)",
    accentColor: "var(--red)",
  },
  {
    id: "2",
    title: "Linux Installation Workshop",
    badge: "11 Oct 2025",
    description:
      "Diving deep into Linux fundamentals and installation. From sudo to grep — everything finally made sense!",
    imageUrl: "/team/events12.png",
    location: "IIT Bhilai",
    bgColor: "var(--surface)",
    textColor: "var(--foreground)",
    accentColor: "var(--red)",
  },
  {
    id: "3",
    title: "Git & GitHub Workshop",
    badge: "29 Aug 2025",
    description:
      "A hands-on Git & GitHub workshop. Perfect for freshers and anyone curious about open source!",
    imageUrl: "/team/event11.png",
    location: "IIT Bhilai",
    bgColor: "var(--surface)",
    textColor: "var(--foreground)",
    accentColor: "var(--red)",
  },
  {
    id: "4",
    title: "GSoC: An Introduction",
    badge: "13 Jan 2025",
    description:
      "An inspiring and insightful session on Google Summer of Code and how to make meaningful contributions to open source.",
    imageUrl: "/team/event9.png",
    location: "IIT Bhilai",
    bgColor: "var(--surface)",
    textColor: "var(--foreground)",
    accentColor: "var(--red)",
  },
  {
    id: "5",
    title: "Intro to Software Development",
    badge: "18 Jan 2025",
    description:
      "Beginner-friendly workshop covering fundamentals of building real-world software projects.",
    imageUrl: "/team/event8.png",
    location: "IIT Bhilai",
    bgColor: "var(--surface)",
    textColor: "var(--foreground)",
    accentColor: "var(--red)",
  },
  {
    id: "6",
    title: "A Quick Start to Software Development",
    badge: "30 Oct 2024",
    description:
      "Tailored to equip you with the knowledge and tools to kickstart your journey in software development.",
    imageUrl: "/team/event7.png",
    location: "IIT Bhilai",
    bgColor: "var(--surface)",
    textColor: "var(--foreground)",
    accentColor: "var(--red)",
  },
  {
    id: "7",
    title: "How to Open-Source",
    badge: "25 June 2023",
    description:
      "Open source tools and technologies, and open source opportunities for contributing to global projects.",
    imageUrl: "/team/event10.png",
    location: "IIT Bhilai",
    bgColor: "var(--surface)",
    textColor: "var(--foreground)",
    accentColor: "var(--red)",
  },
  {
    id: "8",
    title: "OpenlySourced with Anand Panchbai",
    badge: "15 Aug 2022",
    description: "An introductory workshop on open source.",
    imageUrl: "/team/event5.png",
    location: "IIT Bhilai",
    bgColor: "var(--surface)",
    textColor: "var(--foreground)",
    accentColor: "var(--red)",
  },
  {
    id: "9",
    title: "Object Oriented Programming and Flask",
    badge: "06 Aug 2022",
    description:
      "An introductory workshop on OOP concepts and the Flask framework.",
    imageUrl: "/team/event4.png",
    location: "IIT Bhilai",
    bgColor: "var(--surface)",
    textColor: "var(--foreground)",
    accentColor: "var(--red)",
  },
  {
    id: "10",
    title: "HTML & CSS Tutorial + Hackathon",
    badge: "12 June 2022",
    description:
      "Hands-on web development session followed by a mini hackathon, with goodies for participants.",
    imageUrl: "/team/eventsimage.png",
    location: "IIT Bhilai",
    bgColor: "var(--surface)",
    textColor: "var(--foreground)",
    accentColor: "var(--red)",
  },
  // ── Copy the block above, paste it here, and change the values ──
];

// ── Event card ────────────────────────────────────────────────────────────────
function EventCard({
  event,
  priority = false,
}: {
  event: EventItem;
  priority?: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { bgColor, textColor, accentColor } = event;

  return (
    <div
      ref={wrapperRef}
      onMouseMove={(e) => {
        const el = wrapperRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dx = (e.clientX - rect.left) / rect.width - 0.5;
        const dy = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `perspective(1400px) scale(1.008) rotateY(${dx * 2.5}deg) rotateX(${-dy * 2}deg)`;
      }}
      onMouseLeave={() => {
        const el = wrapperRef.current;
        if (!el) return;
        el.style.transition = "transform 0.4s ease";
        el.style.transform =
          "perspective(1400px) scale(1) rotateY(0deg) rotateX(0deg)";
        setTimeout(() => {
          if (wrapperRef.current)
            wrapperRef.current.style.transition = "transform 0.06s ease";
        }, 400);
      }}
      onMouseEnter={() => {
        if (wrapperRef.current)
          wrapperRef.current.style.transition = "transform 0.06s ease";
      }}
      style={{
        position: "relative",
        transition: "transform 0.06s ease",
        willChange: "transform",
      }}
    >
      <div
        className="event-card"
        style={{
          position: "relative",
          background: bgColor,
          borderRadius: 18,
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-dd)",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          boxSizing: "border-box",
        }}
      >
        {/* Image */}
        <div
          style={{
            position: "relative",
            minHeight: 320,
            background: "var(--surface-hover)",
          }}
        >
          {event.imageUrlMobile ? (
            <>
              {/* Mobile image */}
              <Image
                src={event.imageUrlMobile}
                alt={event.title}
                fill
                className="object-contain event-img-mobile"
                style={{ padding: 20 }}
                priority={priority}
              />
              {/* Desktop image */}
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                className="object-contain event-img-desktop"
                style={{ padding: 20 }}
                priority={priority}
              />
            </>
          ) : (
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-contain"
              style={{ padding: 20 }}
              priority={priority}
            />
          )}
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "36px 40px",
          }}
        >
          {/* Date / status pill */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              alignSelf: "flex-start",
              height: 32,
              paddingLeft: 16,
              paddingRight: 16,
              borderRadius: 9999,
              background: accentColor,
              color: "var(--paper)",
              fontWeight: 600,
              fontSize: 14,
              whiteSpace: "nowrap",
              marginBottom: 14,
            }}
          >
            {event.badge}
          </span>

          <h3
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: textColor,
              margin: "0 0 10px",
              lineHeight: 1,
            }}
          >
            {event.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: 20,
              color: textColor,
              opacity: 0.9,
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}
          >
            {event.description}
          </p>

          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontStyle: "italic",
              fontSize: 20,
              color: textColor,
              opacity: 0.55,
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {event.date && (
              <>
                {event.date}
                <br />
              </>
            )}
            {event.location}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function EventsPage() {
  return (
    <>
      <main id="main" tabIndex={-1} style={{ background: "var(--background)" }}>
        <style>{`
          .event-img-mobile { display: none !important; }
          .event-img-desktop { display: block !important; }
          @media (max-width: 850px) {
            .event-card { grid-template-columns: 1fr !important; }
            .event-img-mobile { display: block !important; }
            .event-img-desktop { display: none !important; }
          }
          @media (prefers-reduced-motion: reduce) {
            .event-card { transition: none !important; }
          }
        `}</style>

        <Navbar />

        <PageHero
          badge="✦ OpenLake Events"
          title={
            <>
              Events <Accent>@ OpenLake</Accent>
            </>
          }
          lede="Workshops, hackathons, bootcamps and tech talks that bring students together to learn, build, and innovate."
        >
          <a
            href={MLH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full px-5 py-2 text-sm font-semibold sm:text-base"
            style={{ background: RUST, color: CREAM }}
          >
            🎃 Official MLH Hacktoberfest Hack Day — 10 Oct 2026
          </a>
        </PageHero>

        <PageSection tone="surface" id="upcoming">
          <span
            className="mb-4 block w-fit mx-auto rounded-full px-4 py-1 text-sm font-semibold"
            style={{ background: `${TEAL}1a`, color: TEAL }}
          >
            ⚡ Upcoming · Powered by MLH × DEV
          </span>
          <SectionTitle>Hacktoberfest Hack Day — Durg × OpenLake</SectionTitle>
          <p
            style={{
              fontSize: 20,
              color: "var(--muted)",
              lineHeight: 1.7,
              textAlign: "center",
              margin: "0 0 32px",
            }}
          >
            One day. You walk in with a laptop, you walk out with a working AI
            project in a public GitHub repo.
          </p>

          <div
            className="overflow-hidden rounded-3xl border-2 shadow-xl"
            style={{ borderColor: RUST, background: CREAM }}
          >
            <Bunting />

            <div className="grid md:grid-cols-2">
              {/* Poster */}
              <div className="relative w-full" style={{ background: CREAM }}>
                <Image
                  src="/team/hackoctoberfest.png"
                  alt="Hacktoberfest is coming to IIT Bhilai — Hack Day Durg × OpenLake poster"
                  width={1080}
                  height={1350}
                  priority
                  className="block h-auto w-full max-h-[380px] object-contain sm:max-h-[460px]"
                />
              </div>

              {/* Intro + first steps */}
              <div
                className="flex flex-col justify-center gap-4 p-5 sm:p-6 md:p-8"
                style={{ color: INK }}
              >
                <div className="flex flex-wrap gap-2">
                  <span
                    className="rounded-full px-4 py-1 text-sm font-semibold"
                    style={{ background: RUST, color: CREAM }}
                  >
                    📅 10 Oct 2026
                  </span>
                  <span
                    className="rounded-full px-4 py-1 text-sm font-semibold"
                    style={{ background: `${TEAL}1a`, color: TEAL }}
                  >
                    📍 L101, IIT Bhilai
                  </span>
                  <span
                    className="rounded-full px-4 py-1 text-sm font-semibold"
                    style={{ background: YELLOW, color: INK }}
                  >
                    🏆 Google Gemma challenge
                  </span>
                </div>

                <div>
                  <h3
                    className="text-xl font-extrabold sm:text-2xl"
                    style={{ color: RUST }}
                  >
                    HACKTOBERFEST IS COMING TO IIT BHILAI
                  </h3>

                  <p className="mt-3 text-sm leading-6 sm:text-base sm:leading-7">
                    For the first time, MLH is coming to IIT Bhilai in the form
                    of Hacktoberfest!💙 On 10 October, OpenLake is hosting an
                    official Hacktoberfest Hack Day — one of only a few hundred
                    worldwide, run by Major League Hacking and DEV, in
                    partnership with DigitalOcean. This is the biggest
                    open-source event this campus has hosted.{" "}
                    <strong style={{ color: RUST }}>
                      You should be in the room.🚀
                    </strong>
                  </p>
                </div>

                <div className="space-y-1 text-sm leading-6">
                  <p>🌅 Morning — hands-on workshop to get everyone running</p>
                  <p>
                    🛠️ Afternoon — you build, mentors on the floor the entire
                    time
                  </p>
                  <p>🎤 Evening — demos &amp; judging</p>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a
                    href={MLH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-5 py-2 text-sm font-semibold transition"
                    style={{ background: RUST, color: CREAM }}
                  >
                    🎟️ Register on MLH
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold underline-offset-4 hover:underline"
                    style={{ color: TEAL }}
                  >
                    💬 WhatsApp group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </PageSection>

        <PageSection tone="background">
          <SectionTitle>Past Events</SectionTitle>
          <p
            style={{
              fontSize: 20,
              color: "var(--muted)",
              lineHeight: 1.7,
              textAlign: "center",
              margin: "0 0 32px",
            }}
          >
            Take a look at some of the memorable events organized by OpenLake.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 28 }}>
            {PAST_EVENTS.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>

          <div style={{ marginTop: 64, textAlign: "center" }}>
            <p
              style={{
                fontSize: 20,
                color: "var(--muted)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Want to be part of the next one? Find us on{" "}
              <a
                href="https://github.com/OpenLake"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--red)", textDecoration: "none" }}
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </PageSection>
      </main>

      <Footer />
    </>
  );
}
