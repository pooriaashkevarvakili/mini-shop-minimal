import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import AboutSectionFront from "./aboutSectionFront";
import AboutStoryFront from "./aboutStoryFront";
import TeamSectionFront from "./teamSection";
import ValueSectionFront from "./valueSectionFront";
import WelcomeToast from "../../components/Home/WelcomeToast";

export const metadata: Metadata = {
  title: "درباره ما | مینیمال شاپ",

  description:
    "با مینیمال شاپ بیشتر آشنا شوید؛ داستان ما، ارزش‌ها، تیم و مسیری که برای ارائه محصولات باکیفیت و تجربه‌ای ساده و متفاوت طی کرده‌ایم.",
};

export const instant = false;

async function checkAuth(): Promise<boolean> {
  const cookieStore = await cookies();

  const cookieHeader = cookieStore
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join("; ");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
    {
      method: "GET",

      headers: {
        Cookie: cookieHeader,
      },

      cache: "no-store",
    }
  );

  if (response.status === 401) {
    return false;
  }

  if (!response.ok) {
    throw new Error(
      `Authentication failed: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();

  return Boolean(data?.user);
}

export default async function Page() {
  const isAuthenticated = await checkAuth();

  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <main dir="rtl" lang="fa" className="min-h-screen">
      <WelcomeToast />

      <AboutSectionFront />
      <AboutStoryFront />
      <ValueSectionFront />
      <TeamSectionFront />
    </main>
  );
}