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
    default: "Lucia Multimedia — Illuminate Your Story",
    template: "%s — Lucia Multimedia",
  },
  description:
    "Lucia Multimedia is a Manila-based film, video and content production studio offering production, motion, photography, creative direction, post, podcast production and script development.",
  keywords: [
    "Lucia Multimedia",
    "video production",
    "film studio",
    "content production",
    "motion design",
    "photography",
    "podcast production",
    "scriptwriting",
    "brand films",
    "creative direction",
  ],
  openGraph: {
    title: "Lucia Multimedia — Illuminate Your Story",
    description:
      "Film, video and content production for brands, institutions and filmmakers.",
    url: SITE_URL,
    siteName: "Lucia Multimedia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucia Multimedia — Illuminate Your Story",
    description: "Film, video and content production. Illuminate your story.",
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
