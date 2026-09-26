'use client';

import React from 'react';
import Link from 'next/link';
import { Button, Tag, Card } from 'antd';
import { FiPlus } from 'react-icons/fi';

const formatPrice = (price: number) => new Intl.NumberFormat('fa-IR').format(price) + ' ت';

const getBadgeColor = (badge?: string) => {
  if (badge === 'discount') return 'pink';
  if (badge === 'new') return 'cyan';
  if (badge === 'bestseller') return 'gold';
  return 'default';
};

const badgeLabels: Record<string, string> = {
  new: 'جدید',
  bestseller: 'پرفروش',
  discount: 'تخفیف',
};

interface Product {
  id: string | number;
  name: string;
  category: string;
  price: number;
  image: string | { src: string };
  badge?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const imageSrc = typeof product.image === 'string' ? product.image : product.image.src;

  return (
    <Card
      hoverable
      className="group overflow-hidden rounded-2xl border-0 shadow-sm hover:shadow-xl transition-all duration-300"
      styles={{ body: { padding: '16px' } }}
      cover={
        <Link href={`/product/${product.id}`}>
          <div className="relative aspect-square overflow-hidden bg-gray-50 cursor-pointer">
            {product.badge && (
              <div className="absolute top-3 left-3 z-10">
                <Tag color={getBadgeColor(product.badge)} className="m-0 rounded-full px-3 py-0.5 text-xs font-medium border-0">
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
        <p className="text-xs text-gray-400 font-medium">{product.category}</p>
        <Link href={`/product/${product.id}`}>
          <h3 className="text-base font-semibold text-gray-900 line-clamp-1 hover:text-black cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
          <Link href={`/product/${product.id}`}>
            <Button
              type="primary"
              shape="round"
              icon={<FiPlus size={17} />}
              className="!bg-black hover:!bg-gray-800 !border-0 !text-white flex items-center gap-1"
            >
              افزودن
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}