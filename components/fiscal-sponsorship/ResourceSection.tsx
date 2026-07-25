"use client";

import { ResourceCard } from "@/components/fiscal-sponsorship/ResourceCard";

export function ResourceSection() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Featured Resources
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <ResourceCard
            title="HTML"
            description="Learn HTML from scratch with hands-on examples."
            image="/team/HTML-5.jpg"
            videoLink="https://www.youtube.com/watch?v=G3e-cpL7ofc"
            docLink="https://developer.mozilla.org/en-US/docs/Web/HTML"
            level="Beginner"
          />
          <ResourceCard
            title="CSS"
            description="Master CSS layouts, Flexbox, Grid, animations, and responsive design."
            image="/team/image.png"
            videoLink="https://www.youtube.com/watch?v=OXGznpKZ_sA"
            docLink="https://developer.mozilla.org/en-US/docs/Web/CSS"
            level="Beginner"
          />
          <ResourceCard
            title="JavaScript "
            description="Learn modern JavaScript with practical examples and projects."
            image="/team/js_img.jpeg"
            videoLink="https://www.youtube.com/watch?v=EerdGm-ehJQ"
            docLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            level="Beginner"
          />
          <ResourceCard
            title="React"
            description="Build modern user interfaces with React from the ground up."
            image="/team/react.png"
            videoLink="https://www.youtube.com/watch?v=bMknfKXIFA8&t=195s"
            docLink="https://react.dev/learn"
            level="Intermediate"
          />
          <ResourceCard
            title="Node.js"
            description="Learn backend development with Node.js, including modules, file system, APIs, and asynchronous programming."
            image="/team/node.png"
            videoLink="https://www.youtube.com/watch?v=TlB_eWDSMt4"
            docLink="https://nodejs.org/docs/latest/api/"
            level="Intermediate"
          />
          <ResourceCard
            title="Express.js "
            description="Build powerful REST APIs with Express.js, middleware, routing, authentication, and database integration."
            image="/team/express.png"
            videoLink="https://www.youtube.com/watch?v=fBzm9zja2Y8"
            docLink="https://expressjs.com/"
            level="Intermediate"
          />
          <ResourceCard
            title="Next.js"
            description="Master Next.js with App Router, Server Components, routing, data fetching, and deployment."
            image="/team/next.webp"
            videoLink="https://www.youtube.com/watch?v=ZVnjOPwW4ZA"
            docLink="https://nextjs.org/docs"
            level="Advanced"
          />
          <ResourceCard
            title="MongoDB"
            description="Learn MongoDB from basics to advanced concepts, including CRUD operations, indexing, aggregation, and database design."
            image="/team/mong.png"
            videoLink="https://www.youtube.com/watch?v=c2M-rlkkT5o"
            docLink="https://www.mongodb.com/docs/"
            level="Intermediate"
          />
          <ResourceCard
            title="Django"
            description="Learn Django from basics to advanced concepts, including models, views, templates, authentication, REST APIs, and building scalable web applications."
            image="/team/Django.jpg"
            videoLink="https://www.youtube.com/watch?v=F5mRW0jo-U4"
            docLink="https://docs.djangoproject.com/en/stable/"
            level="Intermediate"
          />
        </div>
      </div>
    </section>
  );
}
