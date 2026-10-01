"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import HeroSection from "./shopHero";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import type { Product } from "./type/product";

async function fetchProducts(
  category: string,
): Promise<Product[]> {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL;

  if (!baseUrl) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not defined",
    );
  }

  const url = new URL(
    `${baseUrl}/shop/products`,
  );

  if (category !== "all") {
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
      `خطا در دریافت محصولات: ${response.status}`,
    );
  }

  return response.json();
}

export default function ShopPageClient() {
  const searchParams = useSearchParams();

  const activeCategory =
    searchParams.get("category") || "all";

  const {
    data: productList = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [
      "products",
      activeCategory,
    ],

    queryFn: () =>
      fetchProducts(activeCategory),

    staleTime: 1000 * 60 * 60,

    gcTime: 1000 * 60 * 60 * 24,

    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <>
        <HeroSection />

        <div
          className="min-h-screen bg-[#fafafa] px-4 py-10 sm:px-6 lg:px-8"
          dir="rtl"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 9 }).map(
                  (_, index) => (
                    <div
                      key={index}
                      className="h-10 w-20 animate-pulse rounded-full bg-gray-200"
                    />
                  ),
                )}
              </div>

              <div className="text-right">
                <div className="mb-2 h-4 w-24 animate-pulse rounded bg-gray-200" />
                <div className="h-8 w-28 animate-pulse rounded bg-gray-200" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 8 }).map(
                (_, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl bg-white shadow-sm"
                  >
                    <div className="aspect-square animate-pulse bg-gray-200" />

                    <div className="space-y-3 p-4">
                      <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
                      <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
                      <div className="h-6 w-20 animate-pulse rounded bg-gray-200" />
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <HeroSection />

        <div
          className="flex min-h-[500px] items-center justify-center bg-[#fafafa] px-4"
          dir="rtl"
        >
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900">
              دریافت محصولات با خطا مواجه شد
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              {error instanceof Error
                ? error.message
                : "خطای ناشناخته"}
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <HeroSection />

      <div
        className="min-h-screen bg-[#fafafa] px-4 py-10 sm:px-6 lg:px-8"
        dir="rtl"
      >
        <div className="mx-auto max-w-7xl">
          <CategoryFilter
            activeCategory={activeCategory as any}
            productCount={productList.length}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productList.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {productList.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-500">
                محصولی در این دسته‌بندی پیدا نشد.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}