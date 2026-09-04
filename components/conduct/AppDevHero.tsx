import { PageHero, Accent } from "@/components/PageHero";

export default function AppDevHero() {
  return (
    <PageHero
      badge="🚀 OpenLake Learning Hub"
      title={
        <>
          Learn <Accent>App Development</Accent>
          <br />
          with the Best Free Resources
        </>
      }
      lede="From Flutter and React Native to Android and iOS development, discover curated videos, official documentation, roadmaps, and projects—all in one place."
    />
  );
}
