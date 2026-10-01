import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { redirect } from "next/navigation";

import type { ValueSectionItem } from "../types/valueSection";

export type ValueSectionResponse = {
  message: string;
  data: ValueSectionItem[];
};

export async function ValueSection(): Promise<ValueSectionResponse> {
  "use cache";

  cacheLife("hours");
  cacheTag("value-section");

  const url = `${process.env.NEXT_PUBLIC_API_URL}/valueSection`;

  const response = await fetch(url);

  // کاربر لاگین نیست
  if (response.status === 401) {
    redirect("/login");
  }

  // سایر خطاهای API
  if (!response.ok) {
    throw new Error(
      `Failed to fetch value section: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as ValueSectionResponse;

  return data;
}