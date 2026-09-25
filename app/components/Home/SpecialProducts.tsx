"use client";

import React from "react";
import Link from "next/link";
import { products, BadgeType } from "../../data/product";

const badgeStyles: Record<BadgeType, string> = {
  new: "bg-emerald-100 text-emerald-700",
  bestseller: "bg-amber-100 text-amber-800",
  discount: "bg-rose-100 text-rose-700",
};

const badgeLabels: Record<BadgeType, string> = {
  new: "جدید",
  bestseller: "پرفروش",
  discount: "تخفیف",
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price) + " ت";
}

export default function SpecialProducts() {
  return (
    <section
      className="min-h-screen bg-[#fafafa] py-10 px-4 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900">محصولات ویژه</h2>
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700">
              کالکشن
            </span>
          </div>
          <span className="text-sm text-gray-500">{products.length} محصول</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer">
                  <img
                    src={
                      typeof product.image === "string"
                        ? product.image
                        : product.image.src
                    }
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-medium rounded-full ${
                        badgeStyles[product.badge]
                      }`}
                    >
                      {badgeLabels[product.badge]}
                    </span>
                  )}
                </div>
              </Link>

              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      {product.category}
                    </p>
                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-semibold text-gray-900 leading-snug hover:text-gray-700 transition">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="mt-2 text-lg font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </p>
                  </div>

                  <Link href={`/product/${product.id}`}>
                    <button
                      type="button"
                      className="shrink-0 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 active:scale-95 transition-all"
                    >
                      افزودن
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}