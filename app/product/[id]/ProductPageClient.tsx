"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import {
  toast,
  ToastContainer,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import ProductBreadcrumb from "../../components/product/id/ProductBreadcrumb";
import ProductGallery from "../../components/product/id/ProductGallery";
import ProductInfo from "../../components/product/id/ProductInfo";
import PurchaseModal from "../../components/product/id/PurchaseModal";

import type { Product } from "../../(main)/shop/type/product";

interface ProductPageClientProps {
  productId: string;
}

export default function ProductPageClient({
  productId,
}: ProductPageClientProps) {
  const id = Number(productId);

  const [product, setProduct] =
    useState<Product | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [quantity, setQuantity] =
    useState(1);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  useEffect(() => {
    if (!id || Number.isNaN(id)) {
      setError("شناسه محصول نامعتبر است.");
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);

        const baseUrl =
          process.env.NEXT_PUBLIC_API_URL ||
          "http://localhost:3001";

        const response = await fetch(
          `${baseUrl}/shop/products/${id}`,
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(
              "محصول یافت نشد.",
            );
          }

          throw new Error(
            `خطا در دریافت محصول: ${response.status}`,
          );
        }

        const data =
          (await response.json()) as Product;

        if (!cancelled) {
          setProduct(data);
          setQuantity(1);
        }
      } catch (error) {
        console.error(
          "ProductPage API error:",
          error,
        );

        if (!cancelled) {
          setProduct(null);

          setError(
            error instanceof Error
              ? error.message
              : "اطلاعات محصول دریافت نشد.",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchProduct();

    return () => {
      cancelled = true;
    };
  }, [id]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(
      "fa-IR",
    ).format(price);
  };

  const handleAddToCart = () => {
    setIsModalOpen(true);
  };

  const handleCompletePurchase = () => {
    setIsModalOpen(false);

    toast.success("خرید تکمیل شد", {
      position: "top-center",
      autoClose: 2000,
      rtl: true,
    });
  };

  const handleContinueShopping = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <div
        className="flex min-h-screen items-center justify-center bg-gray-50"
        dir="rtl"
      >
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-gray-200 border-t-black" />

          <p className="mt-4 text-sm text-gray-500">
            در حال دریافت اطلاعات محصول...
          </p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div
        className="flex min-h-screen items-center justify-center bg-gray-50"
        dir="rtl"
      >
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            {error ?? "محصول یافت نشد"}
          </h1>

          <Link
            href="/shop"
            className="inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
          >
            بازگشت به فروشگاه
          </Link>
        </div>
      </div>
    );
  }

  const mainImage =
    product.images?.[0] || product.image;

  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:3001";

  const imageSrc =
    mainImage.startsWith("http://") ||
    mainImage.startsWith("https://")
      ? mainImage
      : `${apiUrl}${mainImage}`;

  return (
    <div
      className="min-h-screen bg-gray-50"
      dir="rtl"
    >
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="mx-auto max-w-7xl px-4 pt-6">
        <ProductBreadcrumb
          category={product.category}
          productName={product.name}
        />
      </div>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="order-2 space-y-6 lg:order-1">
            <ProductInfo
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
              onAddToCart={handleAddToCart}
              formatPrice={formatPrice}
            />
          </div>

          <div className="order-1 lg:order-2">
            <ProductGallery
              src={imageSrc}
              alt={product.name}
              priority
            />
          </div>
        </div>
      </main>

      <PurchaseModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        product={product}
        quantity={quantity}
        imageSrc={imageSrc}
        onCompletePurchase={
          handleCompletePurchase
        }
        onContinueShopping={
          handleContinueShopping
        }
        formatPrice={formatPrice}
      />
    </div>
  );
}