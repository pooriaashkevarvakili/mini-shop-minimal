import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { newsHeroType } from "../type/newsHeroType";

export type newsHeroResponse = {
  message: string;
  data: newsHeroType[];
};

export async function newsHero(): Promise<newsHeroResponse> {
  "use cache";

  cacheLife("hours");
  cacheTag("news-hero-section");

  const url = `${process.env.NEXT_PUBLIC_API_URL}/newsHero`;


  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch about section: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as newsHeroResponse;


  return data;
}