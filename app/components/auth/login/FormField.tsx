"use client";

import { useState, ChangeEvent } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IconType } from "react-icons";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  icon: IconType;
  error?: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormField({
  id,
  name,
  label,
  type = "text",
  value,
  placeholder,
  icon: Icon,
  error,
  disabled,
  onChange,
}: FormFieldProps) {
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>

      <div className="relative">
        <Icon
          size={19}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          id={id}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full h-12 rounded-xl border bg-white pr-11 outline-none transition
            ${
              error
                ? "border-red-500 focus:ring-2 focus:ring-red-100"
                : "border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-100"
            }
            ${isPassword ? "pl-12" : "pl-4"}
            disabled:bg-gray-100 disabled:cursor-not-allowed
          `}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            disabled={disabled}
            aria-label={showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
            className="absolute left-0 inset-y-0 px-4 flex items-center text-gray-400 hover:text-gray-700 transition disabled:cursor-not-allowed"
          >
            {showPassword ? <FiEyeOff size={19} /> : <FiEye size={19} />}
          </button>
        )}
      </div>

      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
}