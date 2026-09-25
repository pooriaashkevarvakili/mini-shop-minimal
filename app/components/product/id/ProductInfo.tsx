"use client";

import React from "react";
import type { Product } from "../../../data/product";
import QuantitySelector from "./QuantitySelector";
import ProductSpecs from "./ProductSpecs";

interface Props {
  product: Product;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  onAddToCart: () => void;
  formatPrice: (price: number) => string;
}

export default function ProductInfo({
  product,
  quantity,
  setQuantity,
  onAddToCart,
  formatPrice,
}: Props) {
  const totalPrice = product.price * quantity;
  const stock = product.stock ?? 0;
  const isOutOfStock = stock <= 0;

  return (
    <div
      className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7"
      dir="rtl"
    >
      <div className="border-b border-gray-100 pb-6">
        {product.badge && (
          <div className="mb-4">
            <span className="inline-flex rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
              {product.badge === "new" && "جدید"}
              {product.badge === "bestseller" && "پرفروش"}
              {product.badge === "discount" && "تخفیف"}
            </span>
          </div>
        )}

        <h1 className="text-2xl font-bold leading-9 text-gray-900 sm:text-3xl">
          {product.name}
        </h1>

        {product.rating !== undefined && (
          <div className="mt-3 flex items-center gap-2 text-sm">
            <span className="font-semibold text-gray-800">
              {product.rating}
            </span>

            <span className="text-gray-300">•</span>

            <span className="text-gray-500">
              {product.reviews ?? 0} نظر
            </span>
          </div>
        )}

        {product.description && (
          <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
            {product.description}
          </p>
        )}
      </div>

      <div className="border-b border-gray-100 py-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm text-gray-400">
              قیمت هر عدد
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                {formatPrice(product.price)}
              </span>

              <span className="text-sm text-gray-500">
                تومان
              </span>
            </div>
          </div>

          {!isOutOfStock && (
            <span className="text-xs text-gray-400">
              موجود در انبار
            </span>
          )}
        </div>
      </div>

      <div className="py-6">
        <QuantitySelector
          quantity={quantity}
          setQuantity={setQuantity}
          stock={stock}
        />
      </div>

      <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">
            تعداد
          </span>

          <span className="font-medium text-gray-900">
            {quantity} عدد
          </span>
        </div>

        <div className="my-4 border-t border-gray-200" />

        <div className="flex items-center justify-between gap-4">
          <span className="font-medium text-gray-700">
            مبلغ قابل پرداخت
          </span>

          <div className="text-left">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900 sm:text-2xl">
                {formatPrice(totalPrice)}
              </span>

              <span className="text-xs text-gray-500">
                تومان
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <ProductSpecs product={product} />
      </div>
      <div className="mt-7">
        <button
          type="button"
          onClick={onAddToCart}
          disabled={isOutOfStock}
          className="w-full rounded-2xl border border-gray-900 bg-gray-900 px-6 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-black active:scale-[0.99] disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-200 disabled:text-gray-500"
        >
          {isOutOfStock
            ? "محصول ناموجود است"
            : `افزودن ${quantity} عدد به سبد خرید`}
        </button>

        <p className="mt-3 text-center text-xs text-gray-400">
          پرداخت امن و امکان ادامه خرید
        </p>
      </div>
    </div>
  );
}