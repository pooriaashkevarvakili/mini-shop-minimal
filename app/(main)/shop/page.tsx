import { Suspense } from "react";
import ShopPageClient from "./ShopPageClient";
import WelcomeToast from "@/app/components/Home/WelcomeToast";

function ShopLoading() {
  return (
    <div
      className="min-h-screen bg-[#fafafa] px-4 py-10 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="h-10 w-20 animate-pulse rounded-full bg-gray-200"
              />
            ))}
          </div>

          <div className="text-right">
            <div className="mb-2 h-4 w-24 animate-pulse rounded bg-gray-200" />
            <div className="h-8 w-28 animate-pulse rounded bg-gray-200" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoading />}>
      <WelcomeToast/>
      <ShopPageClient />
    </Suspense>
  );
}