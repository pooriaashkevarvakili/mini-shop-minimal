import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { AboutSection } from "../types/type";

export type AboutResponse = {
  message: string;
  data: AboutSection[];
};

export async function aboutSection(): Promise<AboutResponse> {
  "use cache";

  cacheLife("hours");
  cacheTag("about-section");

  const url = `${process.env.NEXT_PUBLIC_API_URL}/about/aboutvip`;


  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch about section: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as AboutResponse;


  return data;
}