"use client";

import type { Product } from "../../../(main)/shop/type/product";

import ProductSpecs from "./ProductSpecs";
import ProductActions from "./ProductActions";

interface Props {
  product: Product;
  quantity: number;
  setQuantity: React.Dispatch<
    React.SetStateAction<number>
  >;
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
  const stock = product.stock ?? 0;

  const isOutOfStock = stock <= 0;

  return (
    <div
      className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-7"
      dir="rtl"
    >
      {/* Header */}
      <div className="border-b border-gray-100 pb-6">
        {product.badge && (
          <div className="mb-4">
            <span className="inline-flex rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
              {product.badge === "new" &&
                "جدید"}

              {product.badge ===
                "bestseller" &&
                "پرفروش"}

              {product.badge ===
                "discount" &&
                "تخفیف"}
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

            <span className="text-gray-300">
              •
            </span>

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

      {/* Price */}
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

      {/* Product Actions */}
      <ProductActions
        product={product}
        stock={stock}
        quantity={quantity}
        setQuantity={setQuantity}
        onAddToCart={onAddToCart}
        formatPrice={formatPrice}
      />

      {/* Specs */}
      <div className="mt-6">
        <ProductSpecs product={product} />
      </div>
    </div>
  );
}