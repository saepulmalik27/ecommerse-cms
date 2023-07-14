/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVICE_API_URL: process.env.SERVICE_API_URL,
    },
};

module.exports = nextConfig;
