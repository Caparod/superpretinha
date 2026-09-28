import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} · Cachos, autoestima e rotina`,
  description:
    "Aline Reitter (@superpretinha): tutoriais de cachos 3B/3C, rotina capilar, Planner Projeto Rapunzel e produtos favoritos. Oi irmã, seja bem-vinda!",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} · Cachos, autoestima e rotina`,
    description:
      "Tutoriais de cachos 3B/3C, rotina capilar, Planner Projeto Rapunzel e produtos favoritos.",
    url: site.url,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,500;9..144,600;9..144,700,60&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
