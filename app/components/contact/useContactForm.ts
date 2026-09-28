"use client";

import { useState, useCallback, type ChangeEvent, type FocusEvent, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validate = (form: FormState): FormErrors => {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "نام و نام‌خانوادگی الزامی است";
  }

  if (!form.email.trim()) {
    errors.email = "ایمیل الزامی است";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "ایمیل معتبر نیست";
  }

  if (!form.subject.trim()) {
    errors.subject = "موضوع الزامی است";
  }

  if (!form.message.trim()) {
    errors.message = "پیام الزامی است";
  } else if (form.message.trim().length < 10) {
    errors.message = "پیام باید حداقل ۱۰ کاراکتر باشد";
  }

  return errors;
};

export const useContactForm = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
      setSuccess(false);
    },
    []
  );

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name } = e.target;
      const fieldErrors = validate(form);
      if (fieldErrors[name as keyof FormState]) {
        setErrors((prev) => ({
          ...prev,
          [name]: fieldErrors[name as keyof FormState],
        }));
      }
    },
    [form]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const validationErrors = validate(form);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setLoading(true);
      setErrors({});

      try {
        // اینجا API واقعی خودت را بگذار
        await new Promise((resolve) => setTimeout(resolve, 1200));

        setSuccess(true);
        setForm(initialForm);
      } catch {
        setErrors({ message: "خطا در ارسال پیام. لطفاً دوباره تلاش کنید." });
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  return {
    form,
    errors,
    loading,
    success,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};