import React from "react";
import watch from '../../../public/watch.webp'
import Dastband from '../../../public/dastband3.webp'
import glass from '../../../public/glass.webp'
import ShowRed from "../../../public/shoered.webp";
 import bagKule from '../../../public/bagkule.webp'
import bagBlack from '../../../public/bagblack.webp'
import Image, { StaticImageData } from "next/image";
type BadgeType = "new" | "bestseller" | "discount";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string | StaticImageData;
  badge?: BadgeType;
}

const products: Product[] = [
  {
    id: 1,
    name: "کفش چرم کلاسیک",
    category: "کفش",
    price: 950000,
    image: ShowRed,
  },
  {
    id: 2,
    name: "ساعت مینیمال",
    category: "اکسسوری",
    price: 1200000,
    image:watch,
    badge: "new",
  },
  {
    id: 3,
    name: "کیف چرم دستی",
    category: "کیف",
    price: 850000,
    image:bagBlack,
    badge: "bestseller",
  },
  {
    id: 4,
    name: "عینک افتابی",
    category: "عینک",
    price: 780000,
    image:  glass},
  {
    id: 5,
    name: "کیف اسپرت جدید",
    category: "کیف",
    price: 1100000,
    image:bagKule,
    badge: "new",
  },
  {
    id: 6,
    name: "دستبند چرم",
    category: "دستبند",
    price: 450000,
    image:Dastband,    badge: "discount",
  },
];

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
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900">
              محصولات ویژه
            </h2>

            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700">
              کالکشن
            </span>
          </div>

          <span className="text-sm text-gray-500">
            {products.length} محصول
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                  src={
                    typeof product.image === "string"
                      ? product.image
                      : product.image.src
                  }
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Badge */}
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

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      {product.category}
                    </p>

                    <h3 className="font-semibold text-gray-900 leading-snug">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-lg font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="shrink-0 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 active:scale-95 transition-all"
                  >
                    افزودن
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}