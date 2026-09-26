'use client';

import React from 'react';

type Category = 'همه' | 'کیف' | 'اکسسوری' | 'کفش' | 'دیجیتال' | 'خانه' | 'نوشت‌افزار' | 'عینک' | 'دستبند';

const categories: Category[] = ['همه', 'کیف', 'اکسسوری', 'کفش', 'دیجیتال', 'خانه', 'نوشت‌افزار', 'عینک', 'دستبند'];

interface Props {
  activeCategory: Category;
  onCategoryChange: (c: Category) => void;
  productCount: number;
}

export default function CategoryFilter({ activeCategory, onCategoryChange, productCount }: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-black text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="text-right">
        <p className="text-sm text-gray-500 mb-1">کالکشن کامل</p>
        <h1 className="text-2xl font-bold text-gray-900">{productCount} محصول</h1>
      </div>
    </div>
  );
}