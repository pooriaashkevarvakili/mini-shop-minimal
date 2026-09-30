import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import type { CountType } from "../type/countType";

export async function aboutSection(): Promise<CountType[]> {
  "use cache";

  cacheLife("hours");
  cacheTag("shop-section");

  const url = `${process.env.NEXT_PUBLIC_API_URL}/shop/stats`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch stats: ${response.status} ${response.statusText}`
    );
  }

  return (await response.json()) as CountType[];
}