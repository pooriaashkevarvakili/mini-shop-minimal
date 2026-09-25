"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  src: string | StaticImageData;
  alt: string;
  priority?: boolean;
}

export default function ProductGallery({
  src,
  alt,
  priority = false,
}: Props) {
  return (
    <div className="sticky top-6">
      <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white">
        <div className="relative aspect-square w-full">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-contain p-8 sm:p-12"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-gray-400">
        تصویر محصول
      </p>
    </div>
  );
}