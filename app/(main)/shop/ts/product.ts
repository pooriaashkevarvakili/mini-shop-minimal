import type { Product } from "../type/product";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3001";

export async function products(
  category?: string,
): Promise<Product[]> {
  const url = new URL(
    `${API_URL}/shop/products`,
  );

  if (
    category &&
    category !== "all"
  ) {
    url.searchParams.set(
      "category",
      category,
    );
  }

  const response = await fetch(
    url.toString(),
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch products: ${response.status} ${response.statusText}`,
    );
  }

  return (await response.json()) as Product[];
}

export async function productById(
  id: number,
): Promise<Product> {
  const response = await fetch(
    `${API_URL}/shop/products/${id}`,
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(
        "محصول پیدا نشد.",
      );
    }

    throw new Error(
      `Failed to fetch product: ${response.status} ${response.statusText}`,
    );
  }

  return (await response.json()) as Product;
}