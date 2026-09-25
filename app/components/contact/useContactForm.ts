"use client";

import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";

export type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;
type FormTouched = Partial<Record<keyof FormFields, boolean>>;

const validators: Record<keyof FormFields, (v: string) => string> = {
  name: (v) => {
    const t = v.trim();
    if (!t) return "نام و نام‌خانوادگی الزامی است.";
    if (t.length < 3) return "نام باید حداقل ۳ کاراکتر باشد.";
    return "";
  },
  email: (v) => {
    const t = v.trim();
    if (!t) return "ایمیل الزامی است.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) return "ایمیل معتبر نیست.";
    return "";
  },
  subject: (v) => {
    const t = v.trim();
    if (!t) return "موضوع الزامی است.";
    if (t.length < 3) return "موضوع باید حداقل ۳ کاراکتر باشد.";
    return "";
  },
  message: (v) => {
    const t = v.trim();
    if (!t) return "متن پیام الزامی است.";
    if (t.length < 10) return "پیام باید حداقل ۱۰ کاراکتر باشد.";
    return "";
  },
};

const initialValues: FormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const useContactForm = (onSubmitApi?: (data: FormFields) => Promise<void>) => {
  const [form, setForm] = useState<FormFields>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateField = (name: keyof FormFields, value: string) =>
    validators[name](value);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormFields;
    setForm((prev) => ({ ...prev, [key]: value }));
    if (touched[key]) {
      setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
    }
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const key = name as keyof FormFields;
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    (Object.keys(form) as Array<keyof FormFields>).forEach((key) => {
      const err = validateField(key, form[key]);
      if (err) newErrors[key] = err;
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(newErrors).length > 0) {
      const first = Object.keys(newErrors)[0] as keyof FormFields;
      document.getElementById(first)?.focus();
      return;
    }

    try {
      setLoading(true);
      if (onSubmitApi) await onSubmitApi(form);
      else await new Promise<void>((r) => setTimeout(r, 1200));

      setSuccess(true);
      setForm(initialValues);
      setTouched({});
      setErrors({});
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    errors,
    touched,
    loading,
    success,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};