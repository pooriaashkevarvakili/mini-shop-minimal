
import type { Metadata } from "next";

import Hero from "../../components/Home/Hero/Hero";
import MembershipBanner from "../../components/Home/MembershipBanner";
import StatsBanner from "./StatsBanner";



export const metadata: Metadata = {
  title: {
    default: "Your Brand | Premium Products & Membership",
    template: "%s | Your Brand",
  },

  description:
    "Discover premium products, exclusive offers, and membership benefits at Your Brand.",

  keywords: [
    "premium products",
    "online store",
    "exclusive products",
    "membership",
    "special offers",
  ],

  authors: [{ name: "Your Brand" }],
  creator: "Your Brand",
  publisher: "Your Brand",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    siteName: "Your Brand",

    title: "Your Brand | Premium Products & Membership",

    description:
      "Discover premium products, exclusive offers, and membership benefits at Your Brand.",

    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Brand",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Your Brand | Premium Products & Membership",

    description:
      "Discover premium products, exclusive offers, and membership benefits at Your Brand.",

    images: ["https://example.com/og-image.jpg"],
  },

  alternates: {
    canonical: "https://example.com",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen antialiased">
     

      <Hero />

      <StatsBanner />

      <MembershipBanner />

    
    </main>
  );
}
