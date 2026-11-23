import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { selectedWork } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montreal = localFont({
  src: "../../public/fonts/772d87814c6d4363-s.p.woff2",
  variable: "--font-montreal",
  display: "swap",
});

const montrealMono = localFont({
  src: [
    { path: "../../public/fonts/a02a323226559df3-s.p.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/77884a8189c63c95-s.p.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-montreal-mono",
  display: "swap",
});

const title = "Joe Montalto | Software engineer";
const description =
  "Software engineer working directly with restaurant teams. Explore Joe Montalto’s work on staffing forecasts, reservation and catering data, and labor reporting.";
const { src, width, height, alt } = selectedWork.featured.figure;

export const metadata: Metadata = {
  metadataBase: new URL("https://joemontalto.xyz"),
  title,
  description,
  creator: "Joe Montalto",
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Joe Montalto",
    images: [{ url: src, width, height, alt }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${montreal.variable} ${montrealMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          if (location.hash.startsWith('#project-') ||
              performance.getEntriesByType('navigation')[0]?.type === 'back_forward') {
            document.documentElement.dataset.skipIntro = 'returning';
          }
        ` }} />
      </head>
      <body className="font-montrealMono antialiased">{children}</body>
    </html>
  );
}
