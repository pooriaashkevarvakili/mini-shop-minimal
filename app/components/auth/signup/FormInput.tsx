"use client";

import React from "react";

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  error?: string;
  disabled?: boolean;
  autoComplete?: string;
  icon: React.ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  disabled,
  autoComplete,
  icon,
}) => {
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
          <span className="text-gray-400">{icon}</span>
        </div>

        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          autoComplete={autoComplete}
          className={`w-full h-12 rounded-xl border bg-white pr-11 pl-4 outline-none transition ${
            error
              ? "border-red-400 focus:border-red-500"
              : "border-gray-200 focus:border-black"
          } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
        />
      </div>

      {error && (
        <p className="mt-1.5 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};

export default FormInput;