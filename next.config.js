const withInItStats = require('next-in-it-stats/cjs')({
    legacy: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = withInItStats(nextConfig)
