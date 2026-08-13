"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

function BoardCard({
  img,
  name,
  boardRole,
  href,
  github,
  linkedin,
}: {
  img: string;
  name: string;
  boardRole: string;
  href?: string;
  github?: string;
  linkedin?: string;
}) {
  const card = (
    <article className={`board-card${href ? " board-card--linked" : ""}`}>
      <Image
        src={img}
        alt={name}
        width={180}
        height={180}
        sizes="180px"
        className="board-card__avatar"
      />
      <p className="board-card__name">{name}</p>
      <p className="board-card__role">{boardRole}</p>
      <div
        className="board-card__socials"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          marginTop: "10px",
        }}
      >
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={26} />
          </a>
        )}

        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={26} />
          </a>
        )}
      </div>
    </article>
  );
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="board-card-anchor"
    >
      {card}
    </a>
  ) : (
    card
  );
}

export default function TeamPageClient() {
  return (
    <main id="main" tabIndex={-1} className="team-page">
      <section className="team-hero">
        <Navbar invertColors />

        <div className="team-shell team-hero__inner">
          <div className="team-hero__copy">
            <h1 className="team-hero__title">
              Meet the
              <br />
              Present Community.
            </h1>

            <p className="team-hero__lede">
              Meet the passionate students, mentors, and contributors who are
              actively shaping OpenLake today. Together, they organize events,
              build projects, mentor learners, and strengthen our growing
              community.
            </p>
          </div>
        </div>

        <Image
          src="/assets/projectsBg.svg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="team-hero__texture"
        />
      </section>

      <section className="team-shell board-section">
        <div className="board-section__inner">
          <h2 className="board-section__title">Secretary</h2>
          <div
            className="board-grid board-grid--leaders"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BoardCard
              img="/team/AKD.jpeg"
              name="Ashish Kumar Dash"
              boardRole=""
              github="https://github.com/Ashish-Kumar-Dash"
              linkedin="https://www.linkedin.com/in/ashish-kumar-dash/"
            />
          </div>
        </div>
      </section>

      <section className="team-shell board-section">
        <div className="board-section__inner">
          <h2 className="board-section__title">Domain Leads</h2>
          <div className="board-grid board-grid--leaders">
            <BoardCard
              img="/team/Aditya_Kumar_Gautam.jpeg"
              name="Aditya Kumar Gautam"
              boardRole=""
              github="https://github.com/aditya-91O2"
              linkedin=""
            />
            <BoardCard
              img="/team/Rudra.jpg"
              name="Rudra Dudhat"
              boardRole=""
              github="https://github.com/RudraDudhat2509"
              linkedin="https://www.linkedin.com/in/rdudhat-iitbhilai"
            />
          </div>
        </div>
      </section>
      <section className="team-shell board-section">
        <div className="board-section__inner">
          <h2 className="board-section__title">Mentors</h2>
          <div className="board-grid board-grid--advisors">
            <BoardCard
              img="/team/Garvit_Sharma2.jpg"
              name="Garvit Sharma"
              boardRole=""
              github="https://github.com/garvitshrma"
              linkedin="http://www.linkedin.com/in/-garvitsharma"
            />
            <BoardCard
              img="/team/Jaswanth_Kumar.jpg"
              name="Kamireddi Jaswanth Kumar"
              boardRole=""
              github="https://github.com/Jaswanth-Kumar-2007"
              linkedin="https://www.linkedin.com/in/jaswanth-kumar-kamireddi-86ba09373/"
            />
            <BoardCard
              img="/team/Umap_Utkarsh.jpg"
              name="Umap Utkarsh Sharad"
              boardRole=""
              github="https://github.com/UtkarshUmap"
              linkedin=""
            />
            <BoardCard
              img="/team/Eashan.jpg"
              name="Eashan Hasija"
              boardRole=""
              github="http://github.com/Eashan-H"
              linkedin="https://www.linkedin.com/in/eashan-hasija-1a209831b/"
            />
            <BoardCard
              img="/team/Shlok.jpg"
              name="Shlok Divyam"
              boardRole=""
              github="https://github.com/ShlokDivyam1109"
              linkedin="https://www.linkedin.com/in/shlok-divyam-91bbb4333"
            />
            <BoardCard
              img="/team/Siddhi_S.jpeg"
              name="Siddhi Singh"
              boardRole=""
              github="https://github.com/siddhisingh9"
              linkedin="https://www.linkedin.com/in/siddhi-singh-33170323a/"
            />
            <BoardCard
              img="/team/Tanmay_Jaiswal.jpg"
              name="Tanmay Jaiswal"
              boardRole=""
              github="https://github.com/TanmayJaiswal-IITBH"
              linkedin="https://www.linkedin.com/in/tanmay-jaiswal-91978a333?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            />
          </div>
        </div>
      </section>
      <section className="team-shell board-section">
        <div className="board-section__inner">
          <h2 className="board-section__title">Maintainers</h2>
          <div className="board-grid board-grid--advisors">
            <BoardCard
              img="/team/Taha.jpeg"
              name="Taha Hussain"
              boardRole=""
              github="https://github.com/Taha254511"
              linkedin="https://www.linkedin.com/in/taha-hussain-248429368?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            />
            <BoardCard
              img="/team/Mounika.jpg"
              name="Kotapati Sai Mounika"
              boardRole=""
              github="https://github.com/KotapatiSaiMounika"
              linkedin="https://www.linkedin.com/in/sai-mounika-kotapati-269494321/"
            />
            <BoardCard
              img="/team/img.jpeg"
              name="Harshit Kandpal"
              boardRole=""
              github="https://github.com/HarK-github"
              linkedin="https://www.linkedin.com/in/harshit-k-a746a1310/"
            />
            <BoardCard
              img="/team/Neil_Chitale.jpg"
              name="Neil Chitale"
              boardRole=""
              github="https://github.com/Neil-ctrl"
              linkedin="https://www.linkedin.com/in/neil-chitale/"
            />
            <BoardCard
              img="/team/Prashant.jpg"
              name="Prashant Sati"
              boardRole=""
              github="https://github.com/Prashant-SG14"
              linkedin="https://www.linkedin.com/in/prashant-sati-800493315/"
            />
            <BoardCard
              img="/team/Vidit.jpg"
              name="Vidit Shrimali"
              boardRole=""
              github="https://github.com/Vidit-lab"
              linkedin="https://www.linkedin.com/in/vidit-shrimali-71a26331a/"
            />
            <BoardCard
              img="/team/img2.png"
              name="Harshita Sharma"
              boardRole=""
              github="https://github.com/harshita-sl"
              linkedin="https://www.linkedin.com/in/harshita-sharma-389b6231b/"
            />
            <BoardCard
              img="/team/Sujal_Som.jpg"
              name="Sujal Som"
              boardRole=""
              github="https://github.com/sujalsom22"
              linkedin="https://www.linkedin.com/in/sujal-som-053613376/"
            />
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .team-page {
          background:
            radial-gradient(circle at top left, rgba(255, 140, 55, 0.24), transparent 34%),
            radial-gradient(circle at top right, rgba(236, 55, 80, 0.18), transparent 28%),
            var(--background);
          color: var(--foreground);
        }

        .team-shell {
          width: min(1280px, calc(100vw - 48px));
          margin: 0 auto;
        }


        .team-hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 15% 10%, rgba(255, 255, 255, 0.22), transparent 28%),
            linear-gradient(135deg, var(--ink) 0%, var(--ink-2) 44%, var(--red) 100%);
          padding: 120px 0 88px;
        }

        .team-hero__inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
          gap: 40px;
          align-items: center;
        }

        .team-hero__copy {
          width: min(66vw, 880px);
          max-width: 880px;
        }

        .team-hero__title {
          margin: 0;
          font-family: var(--font-zarathustra);
          font-size: clamp(2.9rem, 5.2vw, 4.8rem);
          line-height: 0.86;
          color: var(--cream);
          font-weight: 400;
        }

        .team-hero__lede {
          margin: 28px 0 0;
          max-width: 620px;
          font-family: var(--font-phantom);
          font-size: clamp(1.05rem, 1.6vw, 1.35rem);
          line-height: 1.42;
          color: rgba(255, 246, 235, 0.82);
        }

        .team-hero__texture {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.12;
          mix-blend-mode: screen;
          pointer-events: none;
        }



        .board-section {
          padding-top: 56px;
        }

        .board-section__inner {
          border-radius: 32px;
          padding: 36px clamp(24px, 4vw, 48px);
          background: var(--surface);
          border: 1px solid var(--border);
          box-shadow: 0 24px 60px rgba(91, 52, 18, 0.12);
        }

        .board-section__title {
          margin: 0 0 28px;
          font-family: var(--font-zarathustra);
          font-size: clamp(2rem, 3.5vw, 3rem);
          line-height: 0.96;
          font-weight: 400;
          text-align: center;
          color: var(--foreground);
        }

        .board-grid {
          display: grid;
          gap: 18px;
        }

        .board-grid--leaders {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-bottom: 18px;
        }

        .board-grid--advisors {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .board-card-anchor {
          text-decoration: none;
          color: inherit;
          display: block;
          height: 100%;
        }

        .board-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 28px 20px;
          height: 100%;
          text-align: center;
          box-sizing: border-box;
        }

        .board-card__avatar {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          box-shadow: 0 12px 28px rgba(91, 52, 18, 0.16);
        }
        .board-card__name {
          margin: 12px 0 4px;
          font-family: var(--font-phantom);
          font-size: 1.45rem;
          font-weight: 700;
          line-height: 1.2;
          color: var(--foreground);
        }

        .board-card__role {
          margin: 0;
          font-family: var(--font-phantom);
          font-size: 1.1rem;
          color: var(--red);
          font-weight: 600;
        }

        @media (max-width: 1100px) {
          .team-hero__inner,
          .board-grid--advisors {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .team-shell {
            width: calc(100vw - 32px);
          }

          .team-hero {
            padding: 104px 0 72px;
          }

          .board-grid--leaders,
          .board-grid--advisors {
            grid-template-columns: 1fr;
          }

          .board-section__inner {
            border-radius: 24px;
            padding: 24px 20px;
          }
        }
      `}</style>
    </main>
  );
}
