import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "myastoriya.com.ua"
            }
        ]
    }
};

export default nextConfig;