"use client";

import React, { useState } from "react";
import { FiLock, FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordInputProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  error?: string;
  disabled?: boolean;
  autoComplete?: string;
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  disabled,
  autoComplete = "new-password",
  placeholder = "••••••••",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block text-sm text-gray-600 mb-2"
      >
        {label}
      </label>

      <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <FiLock className="text-gray-400" size={18} />
        </div>

        <input
          id={id}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          autoComplete={autoComplete}
          className={`w-full h-12 rounded-xl border bg-white pr-11 pl-12 outline-none transition ${
            error
              ? "border-red-400 focus:border-red-500"
              : "border-gray-200 focus:border-black"
          } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}
          aria-label={
            showPassword
              ? "مخفی کردن رمز عبور"
              : "نمایش رمز عبور"
          }
          className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 hover:text-gray-700 transition disabled:cursor-not-allowed"
        >
          {showPassword ? (
            <FiEyeOff size={18} />
          ) : (
            <FiEye size={18} />
          )}
        </button>
      </div>

      {error && (
        <p className="mt-1.5 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};

export default PasswordInput;