
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getProductById } from "../data/product";

import { useProductSeo } from "../hooks/useProductSeo";

import ProductBreadcrumb from "../components/product/id/ProductBreadcrumb";
import ProductGallery from "../components/product/id/ProductGallery";
import ProductInfo from "../components/product/id/ProductInfo";
import PurchaseModal from "../components/product/id/PurchaseModal";

export default function ProductPage() {
  const router = useRouter();

  const [quantity, setQuantity] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const product = getProductById(1);

  const formatPrice = (price: number): string => {
    return price.toLocaleString("fa-IR");
  };

  const handleAddToCart = (): void => {
    setIsModalOpen(true);
  };

  const handleCompletePurchase = (): void => {
    setIsModalOpen(false);

    toast.success("خرید تکمیل شد", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      rtl: true,
    });
  };

  const handleContinueShopping = (): void => {
    setIsModalOpen(false);
    router.push("/");
  };

  if (!product) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-gray-50"
        dir="rtl"
      >
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">
            محصول پیدا نشد
          </h1>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
          >
            بازگشت به فروشگاه
          </button>
        </div>
      </div>
    );
  }

  useProductSeo(product);

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
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
              src={product.image}
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
        imageSrc={product.image}
        onCompletePurchase={handleCompletePurchase}
        onContinueShopping={handleContinueShopping}
        formatPrice={formatPrice}
      />
    </div>
  );
}
