import type { NextConfig } from "next";
import { execSync } from "node:child_process";
import { withBotId } from "botid/next/config";

const getCommitSha = (): string => {
  const sha =
    process.env.NEXT_PUBLIC_COMMIT_SHA ??
    process.env.VERCEL_GIT_COMMIT_SHA ??
    process.env.GITHUB_SHA;
  if (sha) return sha.slice(0, 6);

  try {
    return execSync("git describe --always --dirty", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return "dev";
  }
};

const nextConfig: NextConfig = {
  trailingSlash: false,
  productionBrowserSourceMaps: true, // source maps are great for oss :)
  env: {
    NEXT_PUBLIC_COMMIT_SHA: getCommitSha(),
  },
  async redirects() {
    return [
      { source: "/start/", destination: "/", permanent: false },
      {
        source: "/safeguarding-policy",
        destination: "/safeguarding",
        permanent: true,
      },
      {
        source: "/fiscal-sponsorship",
        destination: "/resources/web-development",
        permanent: true,
      },
      {
        source: "/conduct",
        destination: "/resources/app-development",
        permanent: true,
      },
      {
        source: "/privacy-and-terms",
        destination: "/resources/game-development",
        permanent: true,
      },
      {
        source: "/safety",
        destination: "/resources/ai-ml",
        permanent: true,
      },
    ];
  },
  images: {
    qualities: [75, 85, 100],
    remotePatterns: [
      { protocol: "https", hostname: "www.figma.com" },
      { protocol: "https", hostname: "assets.hackclub.com" },
      { protocol: "https", hostname: "cdn.hackclub.com" },
      { protocol: "https", hostname: "hcb.hackclub.com" },
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "cachet.hackclub.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "gravatar.com" },
      { protocol: "https", hostname: "secure.gravatar.com" },
      { protocol: "https", hostname: "www.gravatar.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
  },
};

export default withBotId(nextConfig);
