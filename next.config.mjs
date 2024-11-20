// next.config.js
export const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**", // Allows images from any domain
    },
  ],
  unoptimized: true, // Disable image optimization for all images
};
