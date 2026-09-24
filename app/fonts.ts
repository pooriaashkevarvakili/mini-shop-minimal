import localFont from "next/font/local";

export const yekanBakh = localFont({
  src: [
    {
      path: "./fonts/WOFF/YekanBakh-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/WOFF/YekanBakh-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/WOFF/YekanBakh-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WOFF/YekanBakh-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WOFF/YekanBakh-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WOFF/YekanBakh-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WOFF/YekanBakh-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
  display: "swap",
});