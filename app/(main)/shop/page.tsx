'use client';

import React, { useState } from 'react';
import { products } from '../../data/product';
import HeroSection from '../../components/shop/HeroSection';
import CategoryFilter from '../../components/shop/CategoryFilter';
import ProductCard from '../../components/shop/ProductCard';

type Category = 'همه' | 'کیف' | 'اکسسوری' | 'کفش' | 'دیجیتال' | 'خانه' | 'نوشت‌افزار' | 'عینک' | 'دستبند';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('همه');

  const filteredProducts =
    activeCategory === 'همه'
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <HeroSection />
      <div className="min-h-screen bg-[#fafafa] py-10 px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            productCount={filteredProducts.length}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}