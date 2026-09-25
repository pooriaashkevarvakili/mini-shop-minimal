"use client";

import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

type Props = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  stock: number;
};

export default function QuantitySelector({
  quantity,
  setQuantity,
  stock,
}: Props) {
  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    if (stock <= 0) return;

    setQuantity((current) => Math.min(stock, current + 1));
  };

  const isMin = quantity <= 1;
  const isMax = quantity >= stock;
  const isDisabled = stock <= 0;

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-800">
            تعداد محصول
          </p>

          <p className="mt-1 text-xs text-gray-400">
            تعداد موردنظر را انتخاب کنید
          </p>
        </div>

        <span className="text-xs text-gray-400">
          موجودی {stock} عدد
        </span>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-1">
        <button
          type="button"
          onClick={increaseQuantity}
          disabled={isMax || isDisabled}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-transparent"
          aria-label="افزایش تعداد"
        >
          <FiPlus size={20} strokeWidth={2} />
        </button>

        <div className="flex flex-1 flex-col items-center justify-center">
          <span className="text-lg font-bold text-gray-900">
            {quantity}
          </span>

          <span className="text-[11px] text-gray-400">
            عدد
          </span>
        </div>

        <button
          type="button"
          onClick={decreaseQuantity}
          disabled={isMin || isDisabled}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-transparent"
          aria-label="کاهش تعداد"
        >
          <FiMinus size={20} strokeWidth={2} />
        </button>
      </div>

      {!isDisabled && isMax && (
        <p className="mt-2 text-xs text-gray-400">
          حداکثر تعداد قابل سفارش انتخاب شده است.
        </p>
      )}

      {isDisabled && (
        <p className="mt-2 text-xs text-gray-500">
          این محصول در حال حاضر موجود نیست.
        </p>
      )}
    </div>
  );
}