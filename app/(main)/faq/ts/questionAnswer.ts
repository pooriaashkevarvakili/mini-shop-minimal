import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { faqQuestion } from "../type/faqQuestionType";

export type faqResponse = {
  message: string;
  data: faqQuestion[];
};

export async function faqQuestionApi(): Promise<faqResponse> {
  "use cache";

  cacheLife("hours");
  cacheTag("question-section");

  const url = `${process.env.NEXT_PUBLIC_API_URL}/questionAnswer`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch question section: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as faqResponse;

  console.log("question API Response:", data);

  return data;
}