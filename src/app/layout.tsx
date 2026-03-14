import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://zunedaalim.com"),
  title: "Joe Montalto - Full Stack Developer",
  description:
    "Portfolio website of Joe Montalto showcasing projects, skills, and contact information.",
  keywords: [
    "Joe Montalto",
    "Full Stack Developer",
    "Portfolio",
    "Web Developer",
    "React",
    "Next.js",
  ],
  creator: "Joe Montalto",
  openGraph: {
    title: "Joe Montalto - Full Stack Developer",
    description:
      "Explore the portfolio of Joe Montalto. Full stack projects, web apps, and more.",
    url: "https://joemontalto.xyz",
    siteName: "Joe Montalto Portfolio",
    images: [
      {
        url: "https://zunedaalim.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joe Montalto Portfolio",
      },
    ],
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
      className={`${inter.variable} ${montreal.variable} ${montrealMono.variable}`}
    >
      <body className="font-montrealMono antialiased">{children}</body>
    </html>
  );
}
