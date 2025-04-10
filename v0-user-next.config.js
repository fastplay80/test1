/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["localhost"],
  },
  // Aumenta il limite di dimensione del payload per consentire il caricamento di file più grandi
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
    responseLimit: "50mb",
  },
}

module.exports = nextConfig

