'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { Button, Tag, Card } from 'antd';
import { FiPlus } from 'react-icons/fi';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('fa-IR').format(price) + ' ت';

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

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageSrc =
    typeof product.image === 'string'
      ? product.image
      : product.image.src;

  // Prevent Ant Design from being rendered during prerender
  if (!mounted) {
    return (
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="aspect-square animate-pulse bg-gray-100" />

        <div className="space-y-3 p-4">
          <div className="h-3 w-20 animate-pulse rounded bg-gray-100" />
          <div className="h-5 w-3/4 animate-pulse rounded bg-gray-100" />

          <div className="flex items-center justify-between pt-1">
            <div className="h-6 w-24 animate-pulse rounded bg-gray-100" />
            <div className="h-9 w-24 animate-pulse rounded-full bg-gray-100" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card
      hoverable
      className="group overflow-hidden rounded-2xl border-0 shadow-sm transition-all duration-300 hover:shadow-xl"
      styles={{
        body: {
          padding: '16px',
        },
      }}
      cover={
        <Link href={`/product/${product.id}`}>
          <div className="relative aspect-square cursor-pointer overflow-hidden bg-gray-50">
            {product.badge && (
              <div className="absolute left-3 top-3 z-10">
                <Tag
                  color={getBadgeColor(product.badge)}
                  className="m-0 rounded-full border-0 px-3 py-0.5 text-xs font-medium"
                >
                  {badgeLabels[product.badge]}
                </Tag>
              </div>
            )}

            <img
              src={imageSrc}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      }
    >
      <div className="space-y-3">
        <p className="text-xs font-medium text-gray-400">
          {product.category}
        </p>

        <Link href={`/product/${product.id}`}>
          <h3 className="line-clamp-1 cursor-pointer text-base font-semibold text-gray-900 hover:text-black">
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
              icon={<FiPlus size={17} />}
              className="flex items-center gap-1 !border-0 !bg-black !text-white hover:!bg-gray-800"
            >
              افزودن
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}