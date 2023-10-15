/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'github.com', 'upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com','firebasestorage.googleapis.com', 'instamobile.io', 'play-lh.googleusercontent.com', 'img.icons8.com', 'raw.githubusercontent.com', 'i.imgur.com', 'img.freepik.com','media.geeksforgeeks.org','url3120.moetazjaballahditchahed.vercel.app','38151377.moetazjaballahditchahed.vercel.app']
  }
}

module.exports = nextConfig
