import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import type {
  shopHeroResponseType,
  shopHeroType,
} from "../type/shopHeroType";

export async function shopHeroapi(): Promise<shopHeroType[]> {
  "use cache";

  cacheLife("hours");
  cacheTag("shop-hero-section");

  const url = `${process.env.NEXT_PUBLIC_API_URL}/shop/hero`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch shop hero: ${response.status} ${response.statusText}`
    );
  }

  const result = (await response.json()) as shopHeroResponseType;

  return result.data;
}