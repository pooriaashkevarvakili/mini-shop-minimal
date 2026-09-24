
import type { Metadata } from "next";

import AboutSection from "../../components/About/AboutSection";
import OurStorySection from "../../components/About/OurStorySection";
import TeamSection from "../../components/About/TeamSection";
import ValuesSection from "../../components/About/ValuesSection";

export const metadata: Metadata = {
  title: "درباره ما | مینیمال شاپ",

  description:
    "با مینیمال شاپ بیشتر آشنا شوید؛ داستان ما، ارزش‌ها، تیم و مسیری که برای ارائه محصولات باکیفیت و تجربه‌ای ساده و متفاوت طی کرده‌ایم.",

  keywords: [
    "درباره ما",
    "مینیمال شاپ",
    "درباره مینیمال شاپ",
    "داستان ما",
    "تیم مینیمال شاپ",
    "ارزش‌های ما",
    "فروشگاه مینیمال",
  ],

  authors: [
    {
      name: "مینیمال شاپ",
      url: "https://minimalshop.ir",
    },
  ],

  creator: "مینیمال شاپ",
  publisher: "مینیمال شاپ",

  alternates: {
    canonical: "https://minimalshop.ir/about",
  },

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
    locale: "fa_IR",
    url: "https://minimalshop.ir/about",
    siteName: "مینیمال شاپ",

    title: "درباره ما | مینیمال شاپ",

    description:
      "با مینیمال شاپ بیشتر آشنا شوید؛ داستان ما، ارزش‌ها، تیم و مسیری که برای ارائه محصولات باکیفیت و تجربه‌ای ساده و متفاوت طی کرده‌ایم.",

    images: [
      {
        url: "https://minimalshop.ir/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "درباره مینیمال شاپ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "درباره ما | مینیمال شاپ",

    description:
      "با مینیمال شاپ بیشتر آشنا شوید؛ داستان ما، ارزش‌ها، تیم و مسیر ما.",

    images: ["https://minimalshop.ir/images/og-about.jpg"],
  },

  category: "shopping",
};

export default function Page() {
  return (
    <main
      dir="rtl"
      lang="fa"
      className="min-h-screen"
    >
      <AboutSection />

      <OurStorySection />

      <ValuesSection />

      <TeamSection />
    </main>
  );
}
