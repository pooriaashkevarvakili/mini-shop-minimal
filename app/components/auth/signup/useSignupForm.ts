"use client";

import { FormEvent, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import api from "../../../../axios/axios";

export interface FormData {
  fullName: string;
  email: string;
  password: string;
}

interface SignupResponse {
  message?: string;
  user?: {
    id: number;
    username: string;
    email: string;
  };
}

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "نام باید حداقل ۳ کاراکتر باشد")
    .required("نام و نام خانوادگی الزامی است"),

  email: Yup.string()
    .email("ایمیل معتبر وارد کنید")
    .required("ایمیل الزامی است"),

  password: Yup.string()
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});

export const useSignupForm = () => {
  const router = useRouter();

  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik<FormData>({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },

    validationSchema,

    onSubmit: async (values, { setSubmitting }) => {
      setServerError("");
      setSuccessMessage("");

      try {
        const response = await api.post<SignupResponse>(
          "/auth/signup",
          {
            username: values.fullName.trim(),
            email: values.email.trim().toLowerCase(),
            password: values.password,
          },
          { withCredentials: true }
        );

        setSuccessMessage(
          response.data?.message ||
            "حساب کاربری با موفقیت ایجاد شد!"
        );

        setTimeout(() => {
          router.push("/login");
        }, 700);
      } catch (error) {
        if (
          typeof error === "object" &&
          error !== null &&
          "response" in error
        ) {
          const axiosError = error as {
            response?: {
              status?: number;
              data?: {
                message?: string;
                detail?: string;
              };
            };
            message?: string;
          };

          const errorMessage =
            axiosError.response?.data?.message ||
            axiosError.response?.data?.detail ||
            axiosError.message ||
            "امکان ایجاد حساب کاربری وجود ندارد.";

          setServerError(errorMessage);
        } else if (error instanceof Error) {
          setServerError(error.message);
        } else {
          setServerError(
            "خطایی رخ داد. لطفاً دوباره تلاش کنید."
          );
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (formik.isSubmitting) return;
    formik.handleSubmit(event);
  };

  const fullNameError =
    formik.touched.fullName && formik.errors.fullName
      ? formik.errors.fullName
      : "";

  const emailError =
    formik.touched.email && formik.errors.email
      ? formik.errors.email
      : "";

  const passwordError =
    formik.touched.password && formik.errors.password
      ? formik.errors.password
      : "";

  return {
    formik,
    handleSubmit,
    serverError,
    successMessage,
    fullNameError,
    emailError,
    passwordError,
  };
};