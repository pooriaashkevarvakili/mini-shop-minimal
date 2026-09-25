import React from "react";

type Props = {
  product: {
    material?: string;
    sizeRange?: string;
    category: string;
    stock?: number;
  };
};

export default function ProductSpecs({ product }: Props) {
  const stock = product.stock ?? 0;

  return (
    <div className="border-t border-gray-100 pt-6">
      <h2 className="mb-4 text-sm font-semibold text-gray-900">
        مشخصات محصول
      </h2>

      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-100">
        <div className="border-b border-l border-gray-100 p-4">
          <p className="mb-1 text-xs text-gray-400">
            جنس
          </p>

          <p className="text-sm font-medium text-gray-800">
            {product.material || "—"}
          </p>
        </div>

        <div className="border-b border-gray-100 p-4">
          <p className="mb-1 text-xs text-gray-400">
            سایزبندی
          </p>

          <p className="text-sm font-medium text-gray-800">
            {product.sizeRange || "—"}
          </p>
        </div>

        <div className="border-l border-gray-100 p-4">
          <p className="mb-1 text-xs text-gray-400">
            دسته‌بندی
          </p>

          <p className="text-sm font-medium text-gray-800">
            {product.category}
          </p>
        </div>
        <div className="p-4">
          <p className="mb-1 text-xs text-gray-400">
            موجودی
          </p>
          <p className="text-sm font-medium text-gray-800">
            {stock} عدد
          </p>
        </div>
      </div>
    </div>
  );
}