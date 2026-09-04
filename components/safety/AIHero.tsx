import { PageHero, Accent } from "@/components/PageHero";

export default function AIHero() {
  return (
    <PageHero
      badge="🤖 OpenLake Learning Hub"
      title={
        <>
          Learn <Accent>AI & Machine Learning</Accent>
          <br />
          with the Best Free Resources
        </>
      }
      lede="Explore Artificial Intelligence, Machine Learning, Deep Learning, Data Science, Generative AI, and Large Language Models through curated videos, official documentation, roadmaps, and hands-on projects—all in one place."
    />
  );
}
