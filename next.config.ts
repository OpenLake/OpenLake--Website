import type { NextConfig } from "next";
import { execSync } from "node:child_process";

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
        source: "/conduct",
        destination: "/safeguarding",
        permanent: true,
      },
      {
        source: "/privacy-and-terms",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/safety",
        destination: "/safeguarding",
        permanent: true,
      },
    ];
  },
  images: {
    qualities: [75, 85, 100],
    remotePatterns: [
      { protocol: "https", hostname: "www.figma.com" },
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "gravatar.com" },
      { protocol: "https", hostname: "secure.gravatar.com" },
      { protocol: "https", hostname: "www.gravatar.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
  },
};

export default nextConfig;
