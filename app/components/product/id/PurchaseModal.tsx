"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import type { Product } from "../../../(main)/shop/type/product";
import { getPurchaseDetails } from "../hooks/productDetails";

interface Props {
  open: boolean;
  onCancel: () => void;
  product: Product;
  quantity: number;
  imageSrc: string;
  onCompletePurchase: () => void;
  onContinueShopping: () => void;
  formatPrice: (price: number) => string;
}

export default function PurchaseModal({
  open,
  onCancel,
  product,
  quantity,
  imageSrc,
  onCompletePurchase,
  onContinueShopping,
  formatPrice,
}: Props) {
  const {
    data: purchase,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [
      "purchase",
      product.id,
      quantity,
    ],

    queryFn: () =>
      getPurchaseDetails(
        Number(product.id),
        quantity,
      ),

    enabled:
      open &&
      Number(product.id) > 0 &&
      quantity > 0,

    staleTime: 0,
    gcTime: 1000 * 60 * 5,
  });

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      dir="rtl"
      role="dialog"
      aria-modal="true"
      aria-label="تکمیل خرید"
    >
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              بررسی سفارش
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              خلاصه سفارش شما
            </p>
          </div>

          <button
            type="button"
            onClick={onCancel}
            className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
            aria-label="بستن"
          >
            ×
          </button>
        </div>

        <div className="p-5">

          {isLoading && (
            <div className="py-10 text-center">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-gray-900" />

              <p className="mt-4 text-sm text-gray-500">
                در حال دریافت اطلاعات سفارش...
              </p>
            </div>
          )}

          {isError && (
            <div className="rounded-2xl border border-red-100 bg-red-50 p-5 text-center">
              <p className="font-semibold text-red-600">
                دریافت اطلاعات خرید با خطا مواجه شد
              </p>

              <p className="mt-2 text-xs text-red-400">
                {error instanceof Error
                  ? error.message
                  : "خطای ناشناخته"}
              </p>

              <button
                type="button"
                onClick={onCancel}
                className="mt-4 rounded-xl bg-gray-900 px-5 py-2 text-sm text-white"
              >
                بستن
              </button>
            </div>
          )}

          {purchase && !isLoading && !isError && (
            <>
              <div className="flex items-center gap-4">

                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-gray-50">
                  <Image
                    src={
                      purchase.image.startsWith("http")
                        ? purchase.image
                        : `${
                            process.env.NEXT_PUBLIC_API_URL ||
                            "http://localhost:3001"
                          }${purchase.image}`
                    }
                    alt={purchase.name}
                    fill
                    sizes="96px"
                    className="object-contain p-2"
                    unoptimized
                  />
                </div>

                <div className="min-w-0">

                  <h3 className="font-bold text-gray-900">
                    {purchase.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    تعداد: {purchase.quantity} عدد
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    قیمت واحد:{" "}
                    {formatPrice(
                      purchase.unitPrice,
                    )}{" "}
                    تومان
                  </p>

                  {purchase.material && (
                    <p className="mt-1 text-xs text-gray-400">
                      جنس: {purchase.material}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center justify-between">

                  <span className="text-sm text-gray-500">
                    مبلغ نهایی
                  </span>

                  <div className="flex items-baseline gap-2">

                    <span className="text-xl font-bold text-gray-900">
                      {formatPrice(
                        purchase.totalPrice,
                      )}
                    </span>

                    <span className="text-xs text-gray-500">
                      {purchase.currency}
                    </span>

                  </div>
                </div>
              </div>

              {purchase.stock <= 0 && (
                <p className="mt-3 text-center text-sm text-red-500">
                  این محصول موجود نیست.
                </p>
              )}

              <div className="mt-5 space-y-2">

                <button
                  type="button"
                  onClick={onCompletePurchase}
                  disabled={
                    purchase.quantity <= 0 ||
                    purchase.stock <= 0
                  }
                  className="w-full rounded-2xl bg-gray-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-black active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  تکمیل خرید
                </button>

                <button
                  type="button"
                  onClick={onContinueShopping}
                  className="w-full rounded-2xl border border-gray-200 px-5 py-3.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  ادامه خرید
                </button>

                <button
                  type="button"
                  onClick={onCancel}
                  className="w-full px-5 py-2 text-sm text-gray-400 transition hover:text-gray-900"
                >
                  انصراف
                </button>

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}