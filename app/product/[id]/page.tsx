"use client";

import React, { useState, use, useEffect } from "react";
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
  const { id } = use(params);
  const router = useRouter();
  const product = getProductById(Number(id));

  const [selectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useProductSeo(product as any);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">محصول یافت نشد</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("fa-IR").format(price);

  const mainImage = product.images?.[selectedImage] || product.image;
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
    router.push("/");
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
          <div className="order-2 lg:order-1 space-y-6">
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