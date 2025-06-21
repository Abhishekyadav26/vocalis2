import { createCivicAuthPlugin } from "@civic/auth/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

const withCivicAuth = createCivicAuthPlugin({
  clientId: "9913e8d3-f635-452b-9a1e-3f4d2927bc79"
});

export default withCivicAuth(nextConfig);
