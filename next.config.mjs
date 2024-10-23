import BundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  serverExternalPackages: [
    "@react-three/drei",
    "@react-three/fiber",
    "three",
  ],
  experimental: {
    optimizePackageImports: [
      "@hookform/resolvers",
      "@next/bundle-analyzer",
      "@radix-ui/react-dialog",
      "@radix-ui/react-icons",
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
      "class-variance-authority",
      "clsx",
      "framer-motion",
      "hamburger-react",
      "react-parallax-tilt",
      "react-vertical-timeline-component",
      "resend",
      "sharp",
      "tailwind-merge",
      "tailwindcss-animate",
      "zod",
    ],
  },
};

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig);
