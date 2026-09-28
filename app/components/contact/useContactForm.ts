"use client";

import {
  useState,
  useCallback,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
} from "react";

import ContactFormApi, {
  type ContactFormData,
} from "../hooks/contactForm";

type FormState = ContactFormData;

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
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;

      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));

      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));

      setSuccess(false);
    },
    []
  );

  const handleBlur = useCallback(
    (
      e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name } = e.target;

      const fieldErrors = validate(form);

      const fieldName = name as keyof FormState;

      if (fieldErrors[fieldName]) {
        setErrors((prev) => ({
          ...prev,
          [name]: fieldErrors[fieldName],
        }));
      }
    },
    [form]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const validationErrors = validate(form);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setLoading(true);
      setErrors({});
      setSuccess(false);

      try {
        await ContactFormApi(form);

        setSuccess(true);

        setForm(initialForm);
      } catch (error: any) {
        console.error("Contact form error:", error);

        const message =
          error?.response?.data?.message ||
          "خطا در ارسال پیام. لطفاً دوباره تلاش کنید.";

        setErrors({
          message,
        });
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