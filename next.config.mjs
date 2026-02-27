/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com', // For Google Reviews
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'bikaneracservice.com',
            },
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
            }
        ],
    },
};

export default nextConfig;
