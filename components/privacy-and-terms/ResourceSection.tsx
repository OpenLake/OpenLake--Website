"use client";

import ResourceCard from "./ResourceCard";

export default function ResourceSection() {
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
            title="Unity"
            description="Learn Unity from basics to advanced concepts for creating 2D and 3D games using C#."
            image="/team/unity.webp"
            videoLink="https://www.youtube.com/watch?v=XtQMytORBmM"
            docLink="https://docs.unity.com/"
            level="Beginner"
          />

          <ResourceCard
            title="Unreal Engine"
            description="Master Unreal Engine, Blueprints, and C++ to build high-quality AAA games."
            image="/team/UE.png"
            videoLink="https://www.youtube.com/watch?v=k-zMkzmduqI"
            docLink="https://dev.epicgames.com/documentation/en-us/unreal-engine"
            level="Intermediate"
          />

          <ResourceCard
            title="Godot"
            description="Learn Godot Engine for developing powerful 2D and 3D games with open-source tools."
            image="/team/godots.webp"
            videoLink="https://www.youtube.com/watch?v=nAh_Kx5Zh5Q"
            docLink="https://docs.godotengine.org/en/stable/"
            level="Beginner"
          />

          <ResourceCard
            title="Blender"
            description="Create stunning 3D models, animations, and game assets using Blender."
            image="/team/blenders.jpg"
            videoLink="https://www.youtube.com/watch?v=98FkRIbihyQ"
            docLink="https://docs.blender.org/manual/en/latest/"
            level="Beginner"
          />

          <ResourceCard
            title="C#"
            description="Learn C# programming for Unity game development with practical examples and projects."
            image="/team/C.png"
            videoLink="https://www.youtube.com/watch?v=GhQdlIFylQ8"
            docLink="https://learn.microsoft.com/en-us/dotnet/csharp/"
            level="Beginner"
          />

          <ResourceCard
            title="C++"
            description="Master C++ programming for Unreal Engine and advanced game development."
            image="/team/cpp.webp"
            videoLink="https://www.youtube.com/watch?v=ZzaPdXTrSb8"
            docLink="https://en.cppreference.com/w/"
            level="Intermediate"
          />

          <ResourceCard
            title="Game Design"
            description="Understand game mechanics, storytelling, level design, and player experience to build engaging games."
            image="/team/design.avif"
            videoLink="https://www.youtube.com/watch?v=z06QR-tz1_o"
            docLink="https://learn.unity.com/"
            level="Beginner"
          />

          <ResourceCard
            title="Aseprite"
            description="Learn pixel art and sprite animation for creating beautiful 2D games."
            image="/team/aseprite.jpg"
            videoLink="https://www.youtube.com/watch?v=59Y6OTzNrhk"
            docLink="https://www.aseprite.org/docs/"
            level="Beginner"
          />

          <ResourceCard
            title="GameMaker"
            description="Build 2D games quickly with GameMaker using drag-and-drop tools and GML scripting."
            image="/team/Gdev.jpg"
            videoLink="https://www.youtube.com/watch?v=nBCDzE9MDbk"
            docLink="https://manual.gamemaker.io/"
            level="Intermediate"
          />
        </div>
      </div>
    </section>
  );
}
