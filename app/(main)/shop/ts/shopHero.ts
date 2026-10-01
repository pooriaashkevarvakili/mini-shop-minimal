import type {
  shopHeroResponseType,
  shopHeroType,
} from "../type/shopHeroType";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3001";

export async function shopHeroapi(): Promise<
  shopHeroType[]
> {
  const response = await fetch(
    `${API_URL}/shop/hero`,
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch shop hero: ${response.status} ${response.statusText}`,
    );
  }

  const result =
    (await response.json()) as shopHeroResponseType;

  return result.data;
}