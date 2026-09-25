"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import type { Product } from "../../../data/product";

interface Props {
  open: boolean;
  onCancel: () => void;
  product: Product;
  quantity: number;
  imageSrc: string | StaticImageData;
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
  if (!open) {
    return null;
  }

  const totalPrice = product.price * quantity;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      dir="rtl"
      role="dialog"
      aria-modal="true"
      aria-label="تکمیل خرید"
    >
      <div className="w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
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
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-gray-50">
              <Image
                src={imageSrc}
                alt={product.name}
                fill
                sizes="96px"
                className="object-contain p-2"
              />
            </div>

            <div className="min-w-0">
              <h3 className="font-bold text-gray-900">
                {product.name}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                تعداد: {quantity} عدد
              </p>

              <p className="mt-1 text-xs text-gray-400">
                قیمت واحد: {formatPrice(product.price)} تومان
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                مبلغ نهایی
              </span>

              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-gray-900">
                  {formatPrice(totalPrice)}
                </span>

                <span className="text-xs text-gray-500">
                  تومان
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 space-y-2">
            <button
              type="button"
              onClick={onCompletePurchase}
              className="w-full rounded-2xl bg-gray-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-black active:scale-[0.99]"
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
        </div>
      </div>
    </div>
  );
}