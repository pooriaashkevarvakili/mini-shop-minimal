'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Tag, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { products } from '../../data/product';

type Category =
  | 'همه'
  | 'کیف'
  | 'اکسسوری'
  | 'کفش'
  | 'دیجیتال'
  | 'خانه'
  | 'نوشت‌افزار'
  | 'عینک'
  | 'دستبند';

const categories: Category[] = [
  'همه',
  'کیف',
  'اکسسوری',
  'کفش',
  'دیجیتال',
  'خانه',
  'نوشت‌افزار',
  'عینک',
  'دستبند',
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fa-IR').format(price) + ' ت';
};

const getBadgeColor = (badge?: string) => {
  switch (badge) {
    case 'discount':
      return 'pink';
    case 'new':
      return 'cyan';
    case 'bestseller':
      return 'gold';
    default:
      return 'default';
  }
};

const badgeLabels: Record<string, string> = {
  new: 'جدید',
  bestseller: 'پرفروش',
  discount: 'تخفیف',
};

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('همه');

  const filteredProducts =
    activeCategory === 'همه'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#fafafa] py-10 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    activeCategory === cat
                      ? 'bg-black text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-400'
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500 mb-1">کالکشن کامل</p>
            <h1 className="text-2xl font-bold text-gray-900">
              {filteredProducts.length} محصول
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const imageSrc =
              typeof product.image === 'string'
                ? product.image
                : product.image.src;

            return (
              <Card
                key={product.id}
                hoverable
                className="overflow-hidden rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300"
                styles={{ body: { padding: '16px' } }}
                cover={
                  <Link href={`/product/${product.id}`}>
                    <div className="relative aspect-square overflow-hidden bg-gray-50 cursor-pointer">
                      {product.badge && (
                        <div className="absolute top-3 left-3 z-10">
                          <Tag
                            color={getBadgeColor(product.badge)}
                            className="m-0 rounded-full px-3 py-0.5 text-xs font-medium border-0"
                          >
                            {badgeLabels[product.badge]}
                          </Tag>
                        </div>
                      )}
                      <img
                        src={imageSrc}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                }
              >
                <div className="space-y-3">
                  <p className="text-xs text-gray-400 font-medium">
                    {product.category}
                  </p>

                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-base font-semibold text-gray-900 line-clamp-1 hover:text-black cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-lg font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>

                    <Link href={`/product/${product.id}`}>
                      <Button
                        type="primary"
                        shape="round"
                        icon={<PlusOutlined />}
                        className="!bg-black hover:!bg-gray-800 !border-0 !text-white flex items-center gap-1"
                      >
                        افزودن
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}