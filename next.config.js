/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["th.bing.com", "d1iczm3wxxz9zd.cloudfront.net"], // Add the domain here
    },
    transpilePackages: ["@coinbase/onchainkit"],
    // experimental: {
        // esmExternals: "loose",
    // },
};

module.exports = nextConfig;
