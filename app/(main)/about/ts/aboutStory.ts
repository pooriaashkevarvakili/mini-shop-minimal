import "server-only";

import { cacheLife, cacheTag } from "next/cache";
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

  console.log("SERVER FETCH:", url);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch about section: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as AboutResponse;

  console.log("SERVER DATA:", data);

  return data;
}