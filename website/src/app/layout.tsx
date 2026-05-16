import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Body face — free, license-safe match for Sons & Daughters' "New Spirit"
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

// The Lucia brand display face
const nevis = localFont({
  src: "./fonts/nevis.ttf",
  variable: "--font-nevis",
  display: "swap",
});

const SITE_URL = "https://luciamultimedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lucia Multimedia — Film, Motion & Storytelling",
    template: "%s — Lucia Multimedia",
  },
  description:
    "Lucia Multimedia is a film and motion studio turning light into story — video production, motion design, photography and creative direction for brands.",
  keywords: [
    "Lucia Multimedia",
    "video production",
    "film studio",
    "motion design",
    "photography",
    "brand films",
    "creative direction",
  ],
  openGraph: {
    title: "Lucia Multimedia — Film, Motion & Storytelling",
    description:
      "A film and motion studio turning light into story. Video, motion, photography and creative direction.",
    url: SITE_URL,
    siteName: "Lucia Multimedia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucia Multimedia — Film, Motion & Storytelling",
    description: "A film and motion studio turning light into story.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
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
      className={`${fraunces.variable} ${nevis.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="grain min-h-full antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
