"use client";

import type {
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

const inputBase =
  "h-[48px] w-full rounded-xl border bg-[#fafafa] px-4 text-sm outline-none transition-all duration-200 placeholder:text-[#b5b5b5] hover:bg-white focus:bg-white focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60";

const normalBorder =
  "border-[#e5e5e5] hover:border-[#d0d0d0] focus:border-[#24211f] focus:ring-[#24211f]/10";

const errorBorder =
  "border-red-400 bg-red-50/40 hover:border-red-400 focus:border-red-500 focus:ring-red-500/10";

const labelBase =
  "mb-2 block text-right text-[13px] font-medium text-[#444]";

type CommonProps = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
};

type InputVariant = CommonProps & {
  as?: "input";
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  dir?: "ltr" | "rtl";
  align?: "left" | "right";
  autoComplete?: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder?: string;
};

type TextareaVariant = CommonProps & {
  as: "textarea";
  rows?: number;
  placeholder?: string;
};

type FormFieldProps = InputVariant | TextareaVariant;

export const FormField = (props: FormFieldProps) => {
  const {
    id,
    name,
    label,
    required,
    error,
    value,
    onChange,
    onBlur,
    disabled,
    placeholder,
  } = props;

  const extra =
    props.as === "textarea"
      ? "h-[130px] resize-none py-3 text-right leading-7"
      : props.align === "left"
        ? "text-left placeholder:text-left"
        : "text-right";

  const inputClass = `${inputBase} ${error ? errorBorder : normalBorder} ${extra}`;

  return (
    <div>
      <label htmlFor={id} className={labelBase}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {props.as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={inputClass}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={props.type ?? "text"}
          dir={props.dir}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          autoComplete={props.autoComplete}
          inputMode={props.inputMode}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={inputClass}
        />
      )}

      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-right text-[12px] text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;