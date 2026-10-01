"use client";

import {
  FiPlus,
  FiMinus,
} from "react-icons/fi";

interface Props {
  quantity: number;
  stock: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({
  quantity,
  stock,
  onIncrease,
  onDecrease,
}: Props) {
  const isDisabled = stock <= 0;

  const isMin =
    quantity <= 1;

  const isMax =
    stock > 0 &&
    quantity >= stock;

  return (
    <div dir="rtl">
      {/* Header */}
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

      {/* Quantity selector */}
      <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-1">
        {/* Increase */}
        <button
          type="button"
          disabled={
            isDisabled || isMax
          }
          onClick={onIncrease}
          aria-label="افزایش تعداد"
          className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-300"
        >
          <FiPlus
            size={20}
            strokeWidth={2}
          />
        </button>

        {/* Current quantity */}
        <div className="flex flex-1 flex-col items-center justify-center">
          <span className="text-lg font-bold text-gray-900">
            {isDisabled ? 0 : quantity}
          </span>

          <span className="text-[11px] text-gray-400">
            عدد
          </span>
        </div>

        {/* Decrease */}
        <button
          type="button"
          disabled={
            isDisabled || isMin
          }
          onClick={onDecrease}
          aria-label="کاهش تعداد"
          className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-300"
        >
          <FiMinus
            size={20}
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Max stock message */}
      {!isDisabled && isMax && (
        <p className="mt-2 text-xs text-gray-400">
          حداکثر تعداد قابل سفارش انتخاب شده است.
        </p>
      )}

      {/* Out of stock */}
      {isDisabled && (
        <p className="mt-2 text-xs text-gray-500">
          این محصول در حال حاضر موجود نیست.
        </p>
      )}
    </div>
  );
}