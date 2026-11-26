"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

type Legend = {
  name: string;
  img: string;
  role: string;
  currentRole: string;
  now: string;
  note: string;
  github?: string;
  linkedin?: string;
};

const legends: Legend[] = [
  {
    name: "Anand Panchbhai",
    img: "/hall-of-fame/anand-panchbhai.jpg",
    role: "Coordinator · 2020–21",
    currentRole: "CTO @ Logy.AI",
    now: "Co-Founder & CTO, Logy.AI — scaling clinically-validated AI screening to 10M+ patients",
    note: "One of OpenLake's founding coordinators and a GSoC mentor (2020 & 2021) who set its open-source-research DNA.",
    github: "https://github.com/AnandPanchbhai",
    linkedin: "https://www.linkedin.com/in/anandpanchbhai",
  },
  {
    name: "Kumar Shivendu",
    img: "/hall-of-fame/kumar-shivendu.png",
    role: "Coordinator · 2021–22",
    currentRole: "Core Engineer @ Qdrant",
    now: "GSoC 2021 recipient — currently Software Engineer at Qdrant",
    note: "Established OpenLake's foundation, mentored the first generation of contributors and set up the initial project structure.",
  },
  {
    name: "Shashwat Jaiswal",
    img: "/hall-of-fame/shashwat-jaiswal.png",
    role: "Coordinator · 2021–22",
    currentRole: "PhD Researcher @ UIUC",
    now: "Computer Science PhD student at UIUC, researching systems and networking; formerly a research intern at Google and Microsoft Research",
    note: "Pioneered research initiatives and international collaboration programs, establishing academic partnerships.",
  },
  {
    name: "Ambar Mutha",
    img: "/hall-of-fame/ambar-mutha.jpg",
    role: "Mentor · 2020–21",
    currentRole: "Frontend Engineer @ VMware",
    now: "Built the IITBh CGPA Calculator, an open-source browser extension for students",
    note: "Mentored early OpenLake contributors and contributed the most commits to the club's CGPA Calculator.",
    github: "https://github.com/ambarvm",
    linkedin: "https://www.linkedin.com/in/ambarvm",
  },
  {
    name: "Gopal Ramesh Dahale",
    img: "/hall-of-fame/gopal-dahale.jpeg",
    role: "Mentor · 2021–22",
    currentRole: "Quantum Researcher @ EPFL",
    now: "Quantum ML researcher, MSc @ EPFL — GSoC mentor @ ML4SCI",
    note: "Guided contributors into quantum computing and research-grade open source.",
    github: "https://github.com/Gopal-Dahale",
    linkedin: "https://www.linkedin.com/in/gopald27",
  },
  {
    name: "Ananya Hooda",
    img: "/hall-of-fame/ananya-hooda.jpeg",
    role: "Mentor · 2022–23",
    currentRole: "Researcher @ Stanford",
    now: "Researcher @ Stanford GSB — ex-Google, UC Berkeley & University of Toronto (NLP/LLMs)",
    note: "Brought a research-first culture, mentoring members toward ML and academia.",
    linkedin: "https://www.linkedin.com/in/04ananya",
  },
  {
    name: "Sudeep Ranjan Sahoo",
    img: "/hall-of-fame/sudeep-sahoo.jpeg",
    role: "Mentor · 2022–24",
    currentRole: "Analyst @ Accenture Japan",
    now: "Business Architecture Analyst @ Accenture Japan — Director's Gold Medalist, IIT Bhilai",
    note: "Led the Project Seamless smart-campus platform and mentored across multiple cohorts.",
    github: "https://github.com/srs-sudeep",
    linkedin: "https://www.linkedin.com/in/sudeep-ranjan-sahoo-b82355232",
  },
  {
    name: "Madhur Jain",
    img: "/hall-of-fame/madhur-jain.png",
    role: "Coordinator · 2023–24",
    currentRole: "Engineer @ Canonical",
    now: "GSoC 2023 recipient — currently Software Engineer at Canonical",
    note: "Led a major infrastructure overhaul and established CI/CD practices across all projects.",
  },
  {
    name: "Tushar Bansal",
    img: "/hall-of-fame/tushar-bansal.png",
    role: "Coordinator · 2023–24",
    currentRole: "SWE II @ Google",
    now: "Intern at Amazon / Google / Adani — currently SWE 2 at Google",
    note: "Scaled the project portfolio from 5 to 15+ projects and established industry partnerships.",
  },
  {
    name: "Amay Dixit",
    img: "/hall-of-fame/amay-dixit.jpeg",
    role: "Coordinator · 2024–26",
    currentRole: "Open Source Fellow @ LFX",
    now: "LFX & OpenSSF'26 · Polaris Fellow · C4GT DMP'25 @ MOSIP",
    note: "Concieved the idea of OpenLake as a Society spanning multiple domains; drove contributions to MOSIP and grew the contributor base.",
    github: "https://github.com/amaydixit11",
    linkedin: "https://www.linkedin.com/in/amaydixit11",
  },
  {
    name: "Sumit Pathak",
    img: "/hall-of-fame/sumit-pathak.png",
    role: "Coordinator · 2024–25",
    currentRole: "Engineer @ Canonical",
    now: "Associate Software Engineer @ Canonical — backend & distributed systems",
    note: "Coordinated projects and events; steered the community's infra and backend work.",
    github: "https://github.com/sk-pathak",
    linkedin: "https://www.linkedin.com/in/capable-average",
  },
  {
    name: "Nishchay Rajput",
    img: "/hall-of-fame/nishchay-rajput.jpg",
    role: "Coordinator · 2024–25",
    currentRole: "Engineer @ Singulr AI",
    now: "Member of Technical Staff @ Singulr AI — backend & full-stack, open-source contributor",
    note: "Coordinated the community and shipped platforms adopted by 1,200+ students.",
    github: "https://github.com/NishchayRajput",
    linkedin: "https://www.linkedin.com/in/nishchay18r",
  },
  {
    name: "Nidhi Singh",
    img: "/hall-of-fame/nidhi-singh.jpg",
    role: "Mentor · 2024–25",
    currentRole: "Engineer @ Amazon",
    now: "SDE @ Amazon — AI/ML researcher, 3× IEEE, ex-Red Hat (GSoC mentor)",
    note: "Mentored contributors in ML systems, MLOps and distributed infrastructure.",
    github: "https://github.com/Nidhicodes",
    linkedin: "https://www.linkedin.com/in/nidhi-singh-376a171b8",
  },
  {
    name: "Shashank Pant",
    img: "/hall-of-fame/shashank-pant.jpg",
    role: "Mentor · 2024–25",
    currentRole: "Engineer @ D. E. Shaw",
    now: "Member Technical @ D. E. Shaw — high-performance, low-latency quant systems",
    note: "Mentored on backend development, system design and distributed systems.",
    github: "https://github.com/shashankpantiitbhilai",
    linkedin: "https://www.linkedin.com/in/shashankpant12",
  },
  {
    name: "Hemanth Kumar Reddy",
    img: "/hall-of-fame/hemanth-reddy.png",
    role: "Mentor · 2024–25",
    currentRole: "Engineer @ Ocrolus",
    now: "Software Engineer @ Ocrolus — full-stack developer",
    note: "Mentored contributors on full-stack web and design.",
    github: "https://github.com/asp-irin",
    linkedin: "https://www.linkedin.com/in/hemanth-kumar-reddy-89668b252",
  },
];

function Story({ person }: { person: Legend }) {
  return (
    <>
      <p className="hof-history">OpenLake {person.role}</p>
      <p className="hof-now">{person.now}</p>
      <p className="hof-note">{person.note}</p>
      {(person.github || person.linkedin) && (
        <div className="hof-socials">
          {person.github && (
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} on GitHub`}
            >
              <FaGithub size={22} />
            </a>
          )}
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} on LinkedIn`}
            >
              <FaLinkedin size={22} />
            </a>
          )}
        </div>
      )}
    </>
  );
}

function Row({ person, flip }: { person: Legend; flip: boolean }) {
  return (
    <article className={`hof-row${flip ? " hof-row--flip" : ""}`}>
      <div className="hof-photo-wrap">
        <Image
          src={person.img}
          alt={person.name}
          width={280}
          height={280}
          sizes="(max-width: 900px) 100px, 280px"
          className="hof-photo"
        />
      </div>

      <div className="hof-bubble">
        <h3 className="hof-name">{person.name}</h3>
        <p className="hof-role">{person.currentRole}</p>
        <div className="hof-story--desktop"><Story person={person} /></div>
        <details className="hof-story--mobile">
          <summary>Read story</summary>
          <Story person={person} />
        </details>
      </div>
    </article>
  );
}

export default function HallOfFamePageClient() {
  return (
    <main id="main" tabIndex={-1} className="hof-page">
      <section className="hof-hero">
        <Navbar invertColors />
        <div className="hof-shell hof-hero__inner">
          <h1 className="hof-hero__title">Hall of Fame.</h1>
          <p className="hof-hero__lede">
            The coordinators and mentors whose leadership shaped OpenLake — now
            building at Google, Amazon, Canonical, D. E. Shaw, EPFL, Stanford and
            beyond. Their work laid the foundation for the community we have
            today.
          </p>
        </div>
      </section>

      <section className="hof-shell hof-wall">
        {legends.map((person, i) => (
          <Row key={person.name} person={person} flip={i % 2 === 1} />
        ))}
      </section>

      <Footer />

      <style>{`
        .hof-page {
          background:
            radial-gradient(circle at top left, rgba(40, 169, 226, 0.24), transparent 34%),
            radial-gradient(circle at top right, rgba(11, 95, 176, 0.18), transparent 28%),
            var(--background);
          color: var(--foreground);
        }

        .hof-shell {
          width: min(1120px, calc(100vw - 48px));
          margin: 0 auto;
        }

        .hof-hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 15% 10%, rgba(255, 255, 255, 0.22), transparent 28%),
            linear-gradient(135deg, var(--ink) 0%, var(--ink-2) 46%, var(--red) 100%);
          padding: 120px 0 88px;
        }

        .hof-hero__inner {
          position: relative;
          z-index: 2;
          max-width: 820px;
        }

        .hof-hero__title {
          margin: 0;
          font-family: var(--font-zarathustra);
          font-size: clamp(2.9rem, 5.2vw, 4.8rem);
          line-height: 0.9;
          color: var(--cream);
          font-weight: 400;
        }

        .hof-hero__lede {
          margin: 26px 0 0;
          max-width: 660px;
          font-family: var(--font-phantom);
          font-size: clamp(1.05rem, 1.6vw, 1.3rem);
          line-height: 1.5;
          color: rgba(255, 246, 235, 0.82);
        }

        .hof-wall {
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding-top: 72px;
          padding-bottom: 96px;
        }

        .hof-row {
          display: flex;
          align-items: center;
          gap: clamp(20px, 4vw, 56px);
        }

        .hof-row--flip {
          flex-direction: row-reverse;
        }

        .hof-photo-wrap {
          flex-shrink: 0;
        }

        .hof-photo {
          width: clamp(150px, 20vw, 240px);
          height: clamp(150px, 20vw, 240px);
          object-fit: cover;
          border-radius: 26px;
          box-shadow: var(--shadow-dd);
          border: 2px solid var(--red);
        }

        .hof-bubble {
          flex: 1;
          position: relative;
          background: var(--surface-hover);
          border-radius: 30px;
          padding: 28px 34px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-dd);
          color: var(--foreground);
        }

        /* little speech-bubble tail pointing toward the photo */
        .hof-bubble::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -14px;
          transform: translateY(-50%);
          border-width: 12px 16px 12px 0;
          border-style: solid;
          border-color: transparent var(--surface-hover) transparent transparent;
        }
        .hof-row--flip .hof-bubble::before {
          left: auto;
          right: -14px;
          border-width: 12px 0 12px 16px;
          border-color: transparent transparent transparent var(--surface-hover);
        }

        .hof-name {
          margin: 0 0 4px;
          font-family: var(--font-phantom);
          font-size: clamp(1.4rem, 2.4vw, 1.9rem);
          font-weight: 800;
          line-height: 1.1;
          color: var(--foreground);
        }

        .hof-role {
          margin: 0 0 10px;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: var(--red);
        }

        .hof-history {
          margin: 0 0 8px;
          font-size: 0.9rem;
          color: var(--muted);
        }

        .hof-now {
          margin: 0 0 8px;
          font-size: 1.08rem;
          font-weight: 600;
          line-height: 1.4;
          color: var(--foreground);
        }

        .hof-note {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5;
          color: var(--muted);
        }

        .hof-socials {
          display: flex;
          gap: 14px;
          margin-top: 16px;
          color: var(--red);
        }
        .hof-socials a {
          color: inherit;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .hof-socials a:hover {
          opacity: 0.7;
          transform: translateY(-2px);
        }

        .hof-story--mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .hof-shell {
            width: calc(100vw - 32px);
          }
          .hof-hero {
            padding: 104px 0 64px;
          }
          .hof-wall {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: start;
            gap: 14px;
            padding-top: 32px;
            padding-bottom: 64px;
          }
          .hof-row,
          .hof-row--flip {
            min-width: 0;
            min-height: 240px;
            flex-direction: column;
            gap: 10px;
            padding: 14px 10px;
            text-align: center;
            border-radius: 20px;
            background: var(--surface-hover);
            border: 1px solid var(--border);
            box-shadow: var(--shadow-dd);
          }
          .hof-photo {
            width: 96px;
            height: 96px;
            border-radius: 18px;
          }
          .hof-bubble {
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 0;
            border-radius: 0;
            background: none;
            border: 0;
            box-shadow: none;
          }
          .hof-name {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 2.2em;
            font-size: 1.05rem;
            overflow-wrap: anywhere;
          }
          .hof-role {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 2.6em;
            margin-bottom: 8px;
            font-size: 0.78rem;
            line-height: 1.3;
          }
          .hof-story--desktop {
            display: none;
          }
          .hof-story--mobile {
            display: block;
            margin-top: auto;
          }
          .hof-story--mobile summary {
            cursor: pointer;
            font-size: 0.82rem;
            font-weight: 700;
            color: var(--red);
          }
          .hof-story--mobile .hof-history {
            margin-top: 12px;
          }
          .hof-story--mobile .hof-now,
          .hof-story--mobile .hof-note {
            font-size: 0.85rem;
          }
          .hof-bubble::before,
          .hof-row--flip .hof-bubble::before {
            display: none;
          }
          .hof-socials {
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hof-socials a {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
