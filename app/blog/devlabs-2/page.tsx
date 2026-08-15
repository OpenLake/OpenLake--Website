import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "We ran a summer bootcamp for 150 students — DevLabs 2.0 — OpenLake",
  description:
    "Notes from DevLabs 2.0: what worked, what quietly fell apart, and what we would tell any student community thinking about doing this. 150 registered, 25 finished.",
  canonical: "/blog/devlabs-2",
});

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite: string }
  | { type: "ul"; items: string[] }
  | { type: "figure"; src: string; w: number; h: number; caption: string }
  | { type: "short"; text: string; link: string; linkLabel: string };

const BLOCKS: Block[] = [
  { type: "p", text: "Every summer the same thing happens in college group chats. Somebody drops a 40-hour YouTube playlist. Twelve people reply “starting today”. By week two the group is dead and everyone has silently agreed never to mention it again." },
  { type: "p", text: "DevLabs is OpenLake’s attempt to beat that. We are the open-source society at IIT Bhilai, and this was the second run: eight weeks, three tracks, 150 registrations, 11 student mentors, no budget worth mentioning and no faculty involvement." },
  { type: "p", text: "Twenty-five people finished." },
  { type: "p", text: "That is the number most recap posts quietly leave out, so we are putting it in the third paragraph. What follows is how it actually went, including the parts that did not work." },
  { type: "p", text: "A note on the quotes: everything attributed below comes from written feedback we collected from mentors and mentees at the end of the program. Some of it is condensed for length." },
  {
    type: "short",
    text: "Short on time? Read the three-page framework: what you need, which tools to use, and how a week actually runs.",
    link: "/blog/devlabs-playbook",
    linkLabel: "How to run a DevLabs at your college",
  },

  { type: "h2", text: "What we changed from v1" },
  { type: "p", text: "The first DevLabs hopped between topics. A week of this, a week of that. People finished it with a shallow map of a lot of things and the ability to build none of them." },
  { type: "p", text: "So 2.0 went domain-based. Pick one track, stay in it, come out able to ship something in that specific thing. Three tracks: web development, AI and agentic AI, and game development. Prerequisites: none, deliberately. If you had never written a line of code, you were still in." },
  { type: "figure", src: "/assets/blog/devlabs-2/week2-ai.jpeg", w: 1280, h: 716, caption: "Week 2 of the AI track. Fifteen in the room." },

  { type: "h2", text: "The org chart is just students" },
  { type: "p", text: "There is no adult in this story. Our mentors were second- and third-year students, and several of them were teaching material they had finished learning about a week earlier." },
  { type: "quote", text: "Coming from a background in classical ML and deep learning I had a conceptual edge, but the generative and agentic space was a relatively new frontier for me too. Knowing I had to deliver comprehensive sessions meant I could not learn any of it shallowly.", cite: "Rudra Dudhat, Domain Lead, AI and Agentic AI" },
  { type: "p", text: "Rudra Dudhat ran his part of the AI track around a full-time AI automations internship, using breaks at work to prepare session content and giving an hour every evening to actually running the session. Aditya Kumar Gautam led game development, Rudra Dudhat led AI and agentic AI, and the web track was carried by Jaswanth Kumar, Garvit Sharma, Taha Hussain and Umap Utkarsh, with Siddhi Singh, Sujal Som and Tanmay Jaiswal on agentic AI, all students of IIT Bhilai." },
  { type: "p", text: "The structure that held it together was boring and worked:" },
  {
    type: "ul",
    items: [
      "Mentors extend it in their own style. They compiled a condensed Git and GitHub notes PDF, built a slide deck for HTML and CSS, and split React across two weeks, basics and Hooks first and Router second, because one week was never going to be enough. Some even wrote a full sample project every week so his mentees had working code to compare their own against. None of this was assigned. It was consistently better than anything we would have centrally planned.",
      "Weekly loop. Topic, resources, live session, task, review.",
      "Submissions go through pull requests. This one is the whole point and it is worth stating plainly: the deliverable was never the notes app. The deliverable was a first-year opening a PR, receiving review comments from a human, and pushing a fix. Most of them had never done that. That single loop is the difference between “did a course” and “contributed to something”.",
    ],
  },
  { type: "p", text: "Many scheduled the web sessions on Sundays, because that is when everyone was actually free." },

  { type: "h2", text: "WhatsApp was the real classroom" },
  { type: "p", text: "The live sessions were maybe a third of it. The rest happened in track group chats: daily resource drops, small challenges, polls, and people posting screenshots of errors at midnight. Taha Hussain and Umap Utkarsh kept the web track chat alive through the week, which mattered more than any single session did." },
  { type: "p", text: "The hardest part of that turned out to be social rather than technical." },
  { type: "quote", text: "Initially many mentees were hesitant to ask doubts. Most preferred to stay silent even when they were confused. I focused on creating an environment friendly enough that they felt confident asking without hesitation, and gradually the group became much more interactive.", cite: "Garvit Sharma, Mentor, Web Development" },
  { type: "p", text: "Nobody puts “engineered psychological safety in a WhatsApp group” on a bootcamp syllabus, but that was a real deliverable." },

  { type: "h2", text: "The part everyone leaves out of the recap post" },
  { type: "p", text: "One hundred and fifty registered. Twenty-five finished." },
  { type: "p", text: "Weeks one and two were packed. As the curriculum got harder, the room emptied. This is the most common thing that happens to student-run programs and the least commonly written down, so: it happened to us." },
  { type: "figure", src: "/assets/blog/devlabs-2/week6.png", w: 1918, h: 942, caption: "Week 6. Same track." },
  { type: "p", text: "The drop was not random. It clustered on the hard modules. In web dev it was React, specifically Hooks and Router, compressed into a schedule too tight to actually practise them. In the AI track it was LangGraph’s state management, where people completely comfortable with deterministic code hit a wall." },
  { type: "p", text: "That AI wall is worth describing, because it was the most interesting teaching problem we ran into. Students arriving with solid DSA fundamentals are used to writing code that does exactly what it is told, line by line. Agentic systems ask them to build something where a model decides what to call next, and where the failure mode is a hallucinated parameter or an infinite reasoning loop rather than a clean exception. The mentors independently reported the same instinct and the same discipline in resisting it." },
  { type: "quote", text: "My natural instinct when someone shared a broken workflow was to ask for remote control, spot the flaw in their ReAct loop and fix it for them. I had to actively restrain myself. Instead I started asking why they thought the agent chose the search tool instead of the calculator, or what context was missing from the prompt that made it hallucinate a parameter.", cite: "Sujal Som, Mentor, AI and Agentic AI" },
  { type: "p", text: "Game development hit a wall of a completely different kind, and it was not technical at all. It was scope. Give a first-year a real engine and by week three they are describing an open-world RPG with a crafting system. Much of the mentoring on that track was negotiation: talk the multiplayer roguelike down to one screen, one mechanic, one win condition, and ship it. The second problem was assets, a room full of people who can write a movement script and cannot draw. The fix was permission to be ugly. Grey rectangles, free asset packs, and a rule against spending a week on a sprite for a game that does not have a game loop yet." },
  { type: "quote", text: "Compiling and being fun are unrelated properties. The only way to find out which one you have is to hand the build to somebody else and watch them play it without helping.", cite: "Aditya Kumar Gautam, Domain Lead, Game Development" },
  { type: "p", text: "What we did about the attendance itself was, honestly, not clever. We kept running the sessions at the same intensity regardless of how many people showed up." },
  { type: "quote", text: "In the first few weeks sessions were attended by almost all the mentees, and as the curriculum grew more complex the attendance naturally dipped. But there was a core group of serious students who stayed until the very last session. I made a promise to myself never to drop the ball, and delivered every session with the same intensity as week one regardless of the numbers.", cite: "Rudra Dudhat, Domain Lead, AI and Agentic AI" },

  { type: "h2", text: "What the mentors said" },
  { type: "p", text: "The consistent line was that mentoring was selfish in the best way. Preparing to explain something forces a depth of understanding that consuming it never does." },
  { type: "quote", text: "Before every session I revised the topics thoroughly and prepared examples and interview-style questions so I could answer any doubt confidently. That preparation strengthened my own fundamentals more than anything else I did that summer.", cite: "Taha Hussain, Mentor, Web Development" },
  { type: "p", text: "The difficulty was rarely syntax. It was time. Balancing sessions against internships and personal commitments taught the mentors more about scheduling, communication and responsibility than any of them expected, and Siddhi Singh, Sujal Som and Tanmay Jaiswal were all doing it alongside their own summer plans." },
  { type: "p", text: "The payoff every one of them pointed to was the same moment: a mentee who eight weeks earlier had never touched Git, screen-sharing something that worked. In the AI track, agents that could research a topic, pull data and summaries it without a human in the loop. In web dev, a deployed app built by someone who started at “what is a div”." },
  { type: "quote", text: "The real breakthrough was not when their code finally ran without throwing an exception. It was the moment they stopped looking at the AI as a magic black box and started treating it as a programmable, orchestratable system.", cite: "Siddhi Singh, Mentor, AI and Agentic AI" },
  { type: "figure", src: "/assets/blog/devlabs-2/showcase.jpeg", w: 1280, h: 671, caption: "Final showcase, AI and agentic AI track." },

  { type: "h2", text: "What the mentees said" },
  { type: "p", text: "The praise was concrete and mostly about logistics. Mentees pointed to the learning flow and the resources sitting in one well-arranged place as the thing that made a track followable, and to finally being able to build the projects they had wanted to build for a while. One arrived with no HTML or CSS experience at all and put his progress down to the modules being organised well enough that consistent practice was sufficient on its own." },
  { type: "p", text: "Most of them named a mentor rather than a session. One thanked his for checking on task status week after week and helping whenever he got stuck, which is a lower-glamour form of mentoring than a good lecture and evidently a more effective one. On the AI side, a mentee credited Siddhi Singh for opening every week with a plain-language overview before the deep end, and for walking him through his first n8n setup personally. Another credited Rudra Dudhat with taking him from a rough idea of what an agent was to genuine proficiency. The mentee who built AMINITY, a virtual hospital assistant, credited Sujal Som for the guidance that got it from a sketch to a working system." },
  { type: "p", text: "The criticism was concrete too, and consistent enough that we are treating it as a spec for next year:" },
  {
    type: "ul",
    items: [
      "The hard modules got the same time as the easy ones. Mentees called the React schedule congested and argued that Hooks in particular needed practice time the calendar did not allow. Three of them raised it independently, and asked for a longer runway on final submissions while they were at it.",
      "Not enough live practice. One wanted more coding sessions, more doubt-clearing sessions and some real-world projects, and was candid about having learned JavaScript and React without yet being good at them, which is a more useful piece of feedback than any rating.",
      "No dedicated debugging sessions. Mentees asked for a session devoted purely to debugging agent loops and managing API rate limits, the failure modes beginners meet alone at 1 a.m.",
      "A missing map of the field. One AI-track mentee wanted a short overview of AI and ML as a whole before being dropped into agents specifically, so that the specialisation had something to sit on top of.",
      "No recordings, no tracking. Raised by mentors as much as mentees. Record every session so a missed week is recoverable, and keep a simple weekly tracker of task completion so mentors can spot who is quietly falling behind before they disappear.",
    ],
  },
  { type: "p", text: "Two suggestions we had not considered and are stealing outright, both from the AI track: ship a pre-configured sandbox repository before week one, so the first hour of the program is not twelve people simultaneously discovering what an environment variable is, and run a mid-program peer code review between mentees, which catches bugs earlier and spreads ideas sideways instead of only downward from the mentor." },
  { type: "p", text: "Some also asked for something none of us had planned: a closing session on resumes, GitHub profiles and portfolios, so that mentees understand how to show the thing they just built. That is going in." },

  { type: "h2", text: "What we would tell another society" },
  { type: "p", text: "If you are a student group thinking about running something like this:" },
  {
    type: "ul",
    items: [
      "Mentors gain more than mentees. This is the actual recruitment pitch. Every mentor we had came out of the summer better than they went in, and several said so unprompted. Lead with that when you are asking people to give up their break.",
      "Route everything through PRs. It costs you nothing and it is the only part of the program that teaches how open source actually works.",
      "Budget double the time for the hard module. You already know which one it is. So do your mentees.",
      "Record the sessions. We did not. It is the single cheapest fix on this list and it would have blunted the attendance problem.",
      "Expect the drop-off and decide in advance how you will respond. Deciding mid-program whether to keep going when four people show up is a bad time to be making that call.",
      "Publish the completion number. Twenty-five out of a hundred and fifty is not a number anybody enjoys writing down. It is also the only number that tells another organiser what to actually expect, and every recap post that hides it makes the next society feel like they failed at something normal.",
    ],
  },

  { type: "h2", text: "What is next" },
  { type: "p", text: "DevLabs 2.0 is done. Certificates are going out to everyone who completed a track, final project results are still being judged, and we are opening maintainer roles on live OpenLake projects for people who want to skip the beginner path and work on real codebases." },
  { type: "p", text: "For the incoming batch, we are building a mentorship program from scratch. Different shape, same principle: give people a road and a person to ask." },
  { type: "p", text: "If you are running something similar at your college, or you have solved the attendance decay problem and want to tell us how, we would genuinely like to hear it." },
];

const CREDITS =
  "DevLabs 2.0 mentors: Jaswanth Kumar, Garvit Sharma, Taha Hussain and Umap Utkarsh (web development); Rudra Dudhat, Siddhi Singh, Sujal Som and Tanmay Jaiswal (AI and agentic AI); Aditya Kumar Gautam, Shlok Divyam and Eashan Hasija (game development). Thanks also to every mentee who wrote up their experience for this piece.";

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          style={{
            fontFamily: "var(--font-zarathustra)",
            fontWeight: "normal",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            lineHeight: 1.14,
            color: "var(--foreground)",
            margin: "52px 0 6px",
          }}
        >
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p
          key={i}
          style={{
            fontFamily: "var(--font-phantom)",
            fontSize: 19,
            lineHeight: 1.72,
            color: "var(--foreground)",
            margin: "22px 0 0",
          }}
        >
          {block.text}
        </p>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          style={{
            margin: "34px 0",
            padding: "4px 0 4px 26px",
            borderLeft: "3px solid var(--red)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-zarathustra)",
              fontStyle: "italic",
              fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
              lineHeight: 1.4,
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            {block.text}
          </p>
          <cite
            style={{
              display: "block",
              marginTop: 14,
              fontFamily: "var(--font-phantom)",
              fontStyle: "normal",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.02em",
              color: "var(--red)",
            }}
          >
            — {block.cite}
          </cite>
        </blockquote>
      );
    case "ul":
      return (
        <ul
          key={i}
          style={{
            margin: "22px 0 0",
            paddingLeft: 22,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {block.items.map((it, j) => (
            <li
              key={j}
              style={{
                fontFamily: "var(--font-phantom)",
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--foreground)",
              }}
            >
              {it}
            </li>
          ))}
        </ul>
      );
    case "figure":
      return (
        <figure key={i} style={{ margin: "40px 0" }}>
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid var(--border)",
              lineHeight: 0,
            }}
          >
            <Image
              src={block.src}
              alt={block.caption}
              width={block.w}
              height={block.h}
              sizes="(min-width: 760px) 720px, 100vw"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <figcaption
            style={{
              marginTop: 12,
              textAlign: "center",
              fontFamily: "var(--font-phantom)",
              fontStyle: "italic",
              fontSize: 14,
              color: "var(--muted)",
            }}
          >
            {block.caption}
          </figcaption>
        </figure>
      );
    case "short":
      return (
        <div
          key={i}
          style={{
            border: "1px solid var(--border)",
            borderLeft: "3px solid var(--red)",
            borderRadius: 16,
            background: "var(--surface)",
            padding: "20px 24px",
            margin: "32px 0 8px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            <strong style={{ color: "var(--red)" }}>Short version.</strong>{" "}
            {block.text}{" "}
            <Link
              href={block.link}
              style={{ color: "var(--red)", textDecoration: "none", fontWeight: 700 }}
            >
              {block.linkLabel} →
            </Link>
          </p>
        </div>
      );
  }
}

export default function DevLabs2Post() {
  return (
    <main
      id="main"
      tabIndex={-1}
      style={{ position: "relative", background: "var(--background)", minHeight: "100vh" }}
    >
      <Navbar invertColors />

      {/* Masthead */}
      <header
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 12% 8%, rgba(255, 255, 255, 0.16), transparent 32%), linear-gradient(135deg, var(--ink) 0%, var(--ink-2) 48%, var(--accent-ink) 130%)",
          color: "var(--paper)",
          padding: "clamp(116px, 16vh, 160px) 0 clamp(48px, 7vh, 76px)",
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "0 clamp(24px, 5vw, 40px)",
          }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-phantom)",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "rgba(255, 255, 255, 0.8)",
              textDecoration: "none",
              marginBottom: 26,
            }}
          >
            ← Back to blog
          </Link>

          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.65)",
              margin: "0 0 22px",
            }}
          >
            OpenLake · IIT Bhilai
          </p>

          <h1
            style={{
              fontFamily: "var(--font-zarathustra)",
              fontWeight: "normal",
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            We ran a summer bootcamp for 150 students with no budget and a lot of
            WhatsApp
          </h1>

          <p
            style={{
              fontFamily: "var(--font-phantom)",
              fontSize: "clamp(17px, 2.2vw, 20px)",
              lineHeight: 1.55,
              color: "rgba(255, 255, 255, 0.85)",
              margin: "26px 0 0",
            }}
          >
            Notes from DevLabs 2.0: what worked, what quietly fell apart, and what
            we would tell any student community thinking about doing this.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px 14px",
              marginTop: 30,
              fontFamily: "var(--font-phantom)",
              fontSize: 14,
              color: "rgba(255, 255, 255, 0.72)",
            }}
          >
            <span style={{ fontWeight: 700, color: "var(--paper)" }}>
              Ashish Kumar Dash
            </span>
            <span>· Secretary, OpenLake, IIT Bhilai</span>
            <span>· August 2026 · 8 min read</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "clamp(32px, 6vw, 64px) clamp(24px, 5vw, 40px) 40px",
        }}
      >
        {BLOCKS.map(renderBlock)}

        <p
          style={{
            fontFamily: "var(--font-zarathustra)",
            fontStyle: "italic",
            fontSize: "clamp(1.4rem, 2.6vw, 1.8rem)",
            color: "var(--red)",
            margin: "48px 0 0",
          }}
        >
          Hail Open Source!
        </p>

        <hr
          style={{
            border: 0,
            borderTop: "1px solid var(--border)",
            margin: "40px 0 28px",
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-phantom)",
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--muted)",
            margin: 0,
          }}
        >
          <strong style={{ color: "var(--foreground)" }}>OpenLake</strong> — IIT
          Bhilai’s open-source society ·{" "}
          <a href="https://openlake.in" style={{ color: "var(--red)", textDecoration: "none" }}>
            openlake.in
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/OpenLake"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--red)", textDecoration: "none" }}
          >
            github.com/OpenLake
          </a>
        </p>

        <p
          style={{
            fontFamily: "var(--font-phantom)",
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--muted)",
            margin: "16px 0 0",
          }}
        >
          {CREDITS}
        </p>
      </article>

      <Footer />
    </main>
  );
}
