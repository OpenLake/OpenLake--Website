import { PageHero, Accent } from "@/components/PageHero";

export default function GameDevHero() {
  return (
    <PageHero
      badge="🎮 OpenLake Learning Hub"
      title={
        <>
          Learn <Accent>Game Development</Accent>
          <br />
          with the Best Free Resources
        </>
      }
      lede="Learn game development using Unity, Unreal Engine, Godot, Blender, C#, C++, and industry-standard tools. Explore curated videos, official documentation, roadmaps, and hands-on projects—all in one place."
    />
  );
}
