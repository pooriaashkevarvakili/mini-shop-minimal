"use client";

import {
  type ChangeEvent,
  type FocusEvent,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";

type FormFieldProps = {
  as?: "input" | "textarea";
  id: string;
  name: string;
  label: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur: (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  dir?: "ltr" | "rtl" | "auto";
  align?: "left" | "right" | "center";
};

const FormField = ({
  as = "input",
  id,
  name,
  label,
  error,
  required = false,
  disabled = false,
  placeholder,
  value,
  onChange,
  onBlur,
  type = "text",
  inputMode,
  autoComplete,
  dir,
  align,
}: FormFieldProps) => {
  const commonClassName = `
    mt-2
    w-full
    rounded-xl
    border
    bg-white
    px-4
    text-sm
    text-[#24211f]
    outline-none
    transition-all
    duration-200
    placeholder:text-[#b5b5b5]
    disabled:cursor-not-allowed
    disabled:bg-[#f8f8f8]
    ${
      error
        ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
        : "border-[#e8e8e8] focus:border-[#24211f] focus:ring-4 focus:ring-[#24211f]/10"
    }
  `;

  return (
    <div className="w-full text-right">
      <label
        htmlFor={id}
        className="text-sm font-medium text-[#24211f]"
      >
        {label}

        {required && (
          <span className="mr-1 text-red-500">*</span>
        )}
      </label>

      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          dir={dir}
          className={`${commonClassName} min-h-[150px] resize-none py-3 leading-7`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          inputMode={inputMode}
          autoComplete={autoComplete}
          dir={dir}
          style={{
            textAlign: align,
          }}
          className={`${commonClassName} h-12`}
        />
      )}

      {error && (
        <p
          role="alert"
          className="mt-1.5 text-xs leading-5 text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;