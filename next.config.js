/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")();
// const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "cdn.dribbble.com",
      "m.media-amazon.com",
      "ik.imagekit.io",
      "miro.medium.com",
      "store.storeimages.cdn-apple.com",
      "www.apple.com",
      "i.ytimg.com",
    ],
  },
};

// module.exports = withContentlayer(nextConfig);
module.exports = withMDX(nextConfig);
