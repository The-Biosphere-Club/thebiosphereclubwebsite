const { processEnv } = require('@next/env')

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        supabaseUrl : process.env.SUPABASE_URL,
        supabaseKey : process.env.SUPABASE_KEY,
    },
}

module.exports = nextConfig
