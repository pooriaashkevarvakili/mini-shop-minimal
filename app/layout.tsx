import type { Metadata } from "next";
import { yekanBakh } from "./fonts";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Learn Portfolio",
  description: "Next.js Learn Portfolio",
  applicationName: "Next.js Learn Portfolio",

  manifest: "/manifest.json",

  icons: {
    icon: [
      {
        url: "/icons/launchericon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/icons/launchericon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/icons/launchericon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/icons/launchericon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/icons/launchericon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/launchericon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  themeColor: "#ffffff",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Next.js Learn Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${yekanBakh.className} min-h-screen`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}