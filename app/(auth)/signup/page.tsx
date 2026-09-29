"use client";

import React, { FormEvent, useState } from "react";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Link from "next/link";
import api from "../../../axios/axios";

interface FormData {
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

const SignupForm: React.FC = () => {
  const router = useRouter();

  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
          {
            withCredentials: true,
          }
        );

        console.log("Signup successful:", response.data);

        setSuccessMessage(
          response.data?.message ||
            "حساب کاربری با موفقیت ایجاد شد!"
        );

        setTimeout(() => {
          router.push("/login");
        }, 700);
      } catch (error) {
        console.error("Signup error:", error);

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

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4"
    >
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">
              م
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            ایجاد حساب
          </h2>

          <p className="text-gray-500 text-sm">
            در چند ثانیه شروع کنید
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-1"
          >

            {/* Full Name */}
            <div className="mb-5">
              <label
                htmlFor="fullName"
                className="block text-sm text-gray-600 mb-2"
              >
                نام و نام خانوادگی
              </label>

              <div className="relative">

                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <FiUser
                    className="text-gray-400"
                    size={18}
                  />
                </div>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="علی احمدی"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                  className={`w-full h-12 rounded-xl border bg-white pr-11 pl-4 outline-none transition ${
                    fullNameError
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-black"
                  } ${
                    formik.isSubmitting
                      ? "opacity-60 cursor-not-allowed"
                      : ""
                  }`}
                />
              </div>

              {fullNameError && (
                <p className="mt-1.5 text-xs text-red-500">
                  {fullNameError}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm text-gray-600 mb-2"
              >
                ایمیل
              </label>

              <div className="relative">

                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <FiMail
                    className="text-gray-400"
                    size={18}
                  />
                </div>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="ali@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                  className={`w-full h-12 rounded-xl border bg-white pr-11 pl-4 outline-none transition ${
                    emailError
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-black"
                  } ${
                    formik.isSubmitting
                      ? "opacity-60 cursor-not-allowed"
                      : ""
                  }`}
                />
              </div>

              {emailError && (
                <p className="mt-1.5 text-xs text-red-500">
                  {emailError}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-sm text-gray-600 mb-2"
              >
                رمز عبور
              </label>

              <div className="relative">

                {/* Lock Icon */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <FiLock
                    className="text-gray-400"
                    size={18}
                  />
                </div>

                {/* Password Input */}
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="••••••••"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                  className={`w-full h-12 rounded-xl border bg-white pr-11 pl-12 outline-none transition ${
                    passwordError
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-black"
                  } ${
                    formik.isSubmitting
                      ? "opacity-60 cursor-not-allowed"
                      : ""
                  }`}
                />

                {/* Show / Hide Password Button */}
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  disabled={formik.isSubmitting}
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

              {passwordError && (
                <p className="mt-1.5 text-xs text-red-500">
                  {passwordError}
                </p>
              )}
            </div>

            {/* Server Error */}
            {serverError && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                <p className="text-sm text-red-600 text-center">
                  {serverError}
                </p>
              </div>
            )}

            {/* Success */}
            {successMessage && (
              <div className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
                <p className="text-sm text-green-600 text-center">
                  {successMessage}
                </p>
              </div>
            )}

            {/* Submit */}
            <div className="mb-4">
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full h-12 rounded-xl bg-black hover:bg-gray-800 text-white font-medium border-none transition flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formik.isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin ml-2" />
                    در حال ایجاد حساب...
                  </>
                ) : (
                  "ایجاد حساب رایگان"
                )}
              </button>
            </div>

            <div className="text-center">
              <span className="text-xs text-gray-400">
                با ثبت‌نام، شرایط استفاده را می‌پذیرید.
              </span>
            </div>

          </form>
        </div>

        {/* Login Link */}
        <div className="text-center mt-6">
          <span className="text-sm text-gray-600">
            قبلاً ثبت‌نام کرده‌اید؟{" "}

            <Link
              href="/login"
              className="text-black font-medium hover:underline"
            >
              وارد شوید
            </Link>
          </span>
        </div>

      </div>
    </div>
  );
};

export default SignupForm;