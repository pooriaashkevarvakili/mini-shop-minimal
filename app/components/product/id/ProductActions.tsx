"use client";

import type { Product } from "../../../(main)/shop/type/product";

import QuantitySelector from "./QuantitySelector";

interface Props {
  product: Product;
  stock: number;
  quantity: number;
  setQuantity: React.Dispatch<
    React.SetStateAction<number>
  >;
  onAddToCart: () => void;
  formatPrice: (price: number) => string;
}

export default function ProductActions({
  product,
  stock,
  quantity,
  setQuantity,
  onAddToCart,
  formatPrice,
}: Props) {
  const currentStock =
    product.stock ?? stock;

  const isOutOfStock =
    currentStock <= 0;

  const safeQuantity = isOutOfStock
    ? 0
    : Math.max(
        1,
        Math.min(quantity, currentStock),
      );

  const totalPrice =
    product.price * safeQuantity;

  const handleQuantityChange = (
    value: number,
  ) => {
    if (currentStock <= 0) {
      setQuantity(0);
      return;
    }

    const nextQuantity = Math.max(
      1,
      Math.min(value, currentStock),
    );

    setQuantity(nextQuantity);
  };

  return (
    <>
      {/* Quantity */}
      <div className="py-6">
        <QuantitySelector
          quantity={safeQuantity}
          stock={currentStock}
          onIncrease={() =>
            handleQuantityChange(
              safeQuantity + 1,
            )
          }
          onDecrease={() =>
            handleQuantityChange(
              safeQuantity - 1,
            )
          }
        />
      </div>

      {/* Summary */}
      <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">
            تعداد
          </span>

          <span className="font-medium text-gray-900">
            {safeQuantity} عدد
          </span>
        </div>

        <div className="my-4 border-t border-gray-200" />

        <div className="flex items-center justify-between gap-4">
          <span className="font-medium text-gray-700">
            مبلغ قابل پرداخت
          </span>

          <div className="text-left">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900 sm:text-2xl">
                {formatPrice(totalPrice)}
              </span>

              <span className="text-xs text-gray-500">
                تومان
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Add to cart */}
      <div className="mt-7">
        <button
          type="button"
          disabled={isOutOfStock}
          onClick={onAddToCart}
          className="w-full rounded-2xl border border-gray-900 bg-gray-900 px-6 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-black active:scale-[0.99] disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-200 disabled:text-gray-500"
        >
          {isOutOfStock
            ? "محصول ناموجود است"
            : `افزودن ${safeQuantity} عدد به سبد خرید`}
        </button>

        <p className="mt-3 text-center text-xs text-gray-400">
          پرداخت امن و امکان ادامه خرید
        </p>
      </div>
    </>
  );
}