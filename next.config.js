/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};
module.exports = withPWA(nextConfig);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
// };

// export default nextConfig;
