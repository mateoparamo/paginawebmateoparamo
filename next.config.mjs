/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // El linter se ejecuta en local; no debe bloquear el build de producción en Vercel.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
