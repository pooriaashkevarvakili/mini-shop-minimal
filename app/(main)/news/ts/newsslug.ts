import "server-only";

import { cacheLife, cacheTag } from "next/cache";

import type {
  NewsSlugType,
  NewsSlugResponse,
} from "../type/newsSlugType";

export async function newsSlugSection(): Promise<NewsSlugResponse> {
  "use cache";

  cacheLife("hours");
  cacheTag("news-section");

  const url = `${process.env.NEXT_PUBLIC_API_URL}/newsSlug`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch news: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as NewsSlugResponse;

  return data;
}

export async function getAllNews(): Promise<NewsSlugType[]> {
  const response = await newsSlugSection();

  return response.data;
}

export async function getNewsBySlug(
  slug: string
): Promise<NewsSlugType | undefined> {
  const news = await getAllNews();

  return news.find((item) => item.slug === slug);
}

export async function getNewsById(
  id: number
): Promise<NewsSlugType | undefined> {
  const news = await getAllNews();

  return news.find((item) => item.id === id);
}