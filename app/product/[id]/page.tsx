import { Suspense } from "react";

import ProductPageClient from "./ProductPageClient";
import WelcomeToast from "@/app/components/Home/WelcomeToast";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

function ProductLoading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gray-50"
      dir="rtl"
    >
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-gray-200 border-t-black" />

        <p className="mt-4 text-sm text-gray-500">
          در حال دریافت اطلاعات محصول...
        </p>
      </div>
    </div>
  );
}

async function ProductContent({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <ProductPageClient productId={id} />
  );
}

export default function ProductPage({
  params,
}: PageProps) {
  return (
    <Suspense fallback={<ProductLoading />}>
              <WelcomeToast/>
      
      <ProductContent params={params} />
    </Suspense>
  );
}