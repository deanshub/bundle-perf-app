const withInItStats = require('next-in-it-stats/cjs')({
    legacy: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withInItStats(nextConfig)
