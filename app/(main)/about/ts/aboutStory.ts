import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { redirect } from "next/navigation";

import { aboutStoryType } from "../types/typeStory";

export type AboutResponse = {
  message: string;
  data: aboutStoryType[];
};

export async function aboutStory(): Promise<AboutResponse> {
  "use cache";

  cacheLife("hours");
  cacheTag("about-section");

  const url = `${process.env.NEXT_PUBLIC_API_URL}/about-story/story`;

  const response = await fetch(url);

  // کاربر لاگین نیست
  if (response.status === 401) {
    redirect("/login");
  }

  // سایر خطاهای API
  if (!response.ok) {
    throw new Error(
      `Failed to fetch about section: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as AboutResponse;

  return data;
}