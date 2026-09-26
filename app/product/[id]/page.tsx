"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getProductById } from "../../data/product";
import { useProductSeo } from "../../hooks/useProductSeo";
import ProductBreadcrumb from "../../components/product/id/ProductBreadcrumb";
import ProductGallery from "../../components/product/id/ProductGallery";
import ProductInfo from "../../components/product/id/ProductInfo";
import PurchaseModal from "../../components/product/id/PurchaseModal";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);                 // ← id را از URL می‌گیرد
  const router = useRouter();
  const product = getProductById(Number(id)); // ← محصول درست را پیدا می‌کند

  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useProductSeo(product as any);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            محصول یافت نشد
          </h1>
          <Link
            href="/shop"
            className="inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
          >
            بازگشت به فروشگاه
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fa-IR").format(price);

  const mainImage = product.images?.[0] || product.image;
  const imageSrc =
    typeof mainImage === "string" ? mainImage : mainImage.src;

  const handleAddToCart = () => setIsModalOpen(true);

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
    router.push("/shop");
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={true}
        theme="light"
      />

      <div className="max-w-7xl mx-auto px-4 pt-6">
        <ProductBreadcrumb
          category={product.category}
          productName={product.name}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* اطلاعات محصول */}
          <div className="order-2 lg:order-1 space-y-6">
            <ProductInfo
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
              onAddToCart={handleAddToCart}
              formatPrice={formatPrice}
            />
          </div>

          {/* گالری تصویر */}
          <div className="order-1 lg:order-2">
            <ProductGallery
              src={imageSrc}
              alt={product.name}
              priority
            />
          </div>
        </div>
      </div>

      <PurchaseModal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        product={product}
        quantity={quantity}
        imageSrc={imageSrc}
        onCompletePurchase={handleCompletePurchase}
        onContinueShopping={handleContinueShopping}
        formatPrice={formatPrice}
      />
    </div>
  );
}