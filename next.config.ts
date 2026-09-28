import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Exportação estática: funciona na Vercel e em qualquer hospedagem de arquivos.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
