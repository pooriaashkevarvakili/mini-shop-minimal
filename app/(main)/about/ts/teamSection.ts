import "server-only";

import { cacheLife, cacheTag } from "next/cache";
import { redirect } from "next/navigation";

import { teamSectionType } from "../types/teamSectiontype";

export type AboutResponse = {
  message: string;
  data: teamSectionType[];
};

export async function teamSection(): Promise<AboutResponse> {
  "use cache";

  cacheLife("hours");
  cacheTag("team-section");

  const url = `${process.env.NEXT_PUBLIC_API_URL}/team-section/all`;

  const response = await fetch(url);

  // کاربر لاگین نیست
  if (response.status === 401) {
    redirect("/login");
  }

  // سایر خطاهای API
  if (!response.ok) {
    throw new Error(
      `Failed to fetch team section: ${response.status} ${response.statusText}`
    );
  }

  const data = (await response.json()) as AboutResponse;

  return data;
}