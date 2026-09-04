import { PageHero, Accent } from "@/components/PageHero";

export function WebHero() {
  return (
    <PageHero
      badge="🚀 OpenLake Learning Hub"
      title={
        <>
          Learn <Accent>Web Development</Accent>
          <br />
          with the Best Free Resources
        </>
      }
      lede="From HTML and CSS to React, Node.js and Full Stack Development, discover curated videos, documentation, roadmaps and projects—all in one place."
    />
  );
}

export default WebHero;
