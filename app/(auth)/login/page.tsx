
"use client";

import { useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "../../../axios/axios";

interface FormData {
  email: string;
  password: string;
}

interface LoginResponse {
  message?: string;
  user?: {
    id: number;
    username: string;
    email: string;
  };
}

export default function Login() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setServerError("");
    setSuccessMessage("");
  };

  const validate = () => {
    let isValid = true;

    const newErrors = {
      email: "",
      password: "",
    };

    if (!formData.email.trim()) {
      newErrors.email = "لطفاً ایمیل را وارد کنید";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "ایمیل معتبر نیست";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "لطفاً رمز عبور را وارد کنید";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "رمز عبور باید حداقل ۶ کاراکتر باشد";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setServerError("");
    setSuccessMessage("");

    if (!validate()) return;

    try {
      setLoading(true);

      const response = await api.post<LoginResponse>(
        "/auth/signin",
        {
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );

      setSuccessMessage(
        response.data?.message || "ورود با موفقیت انجام شد!"
      );

      setTimeout(() => {
        router.push("/");
      }, 500);
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.detail ||
        error?.message ||
        "ایمیل یا رمز عبور اشتباه است.";

      setServerError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4"
      dir="rtl"
    >
      <div className="w-full max-w-[420px]">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center text-xl font-bold">
            م
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            ورود به حساب
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            خوش برگشتید!
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <form onSubmit={onSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                ایمیل
              </label>

              <div className="relative">
                <FiMail
                  size={19}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="example@email.com"
                  className={`w-full h-12 rounded-xl border bg-white pr-11 pl-4 outline-none transition
                    ${
                      errors.email
                        ? "border-red-500 focus:ring-2 focus:ring-red-100"
                        : "border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-100"
                    }
                    disabled:bg-gray-100 disabled:cursor-not-allowed
                  `}
                />
              </div>

              {errors.email && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                رمز عبور
              </label>

              <div className="relative">
                {/* Lock Icon */}
                <FiLock
                  size={19}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="رمز عبور خود را وارد کنید"
                  className={`w-full h-12 rounded-xl border bg-white pr-11 pl-12 outline-none transition
                    ${
                      errors.password
                        ? "border-red-500 focus:ring-2 focus:ring-red-100"
                        : "border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-100"
                    }
                    disabled:bg-gray-100 disabled:cursor-not-allowed
                  `}
                />

                {/* Eye */}
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  disabled={loading}
                  aria-label={
                    showPassword
                      ? "مخفی کردن رمز عبور"
                      : "نمایش رمز عبور"
                  }
                  className="absolute left-0 inset-y-0 px-4 flex items-center text-gray-400 hover:text-gray-700 transition disabled:cursor-not-allowed"
                >
                  {showPassword ? (
                    <FiEyeOff size={19} />
                  ) : (
                    <FiEye size={19} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="flex justify-start">
              <Link
                href="/forgot-password"
                className="text-sm text-gray-600 hover:text-black transition"
              >
                رمز عبور را فراموش کرده‌اید؟
              </Link>
            </div>

            {/* Server Error */}
            {serverError && (
              <div className="rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm p-3">
                {serverError}
              </div>
            )}

            {/* Success */}
            {successMessage && (
              <div className="rounded-xl bg-green-50 border border-green-200 text-green-600 text-sm p-3">
                {successMessage}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "ورود"
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-xs text-gray-400">
                یا ورود با
              </span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            {/* Signup */}
            <p className="text-center text-sm text-gray-500">
              حساب کاربری ندارید؟{" "}
              <Link
                href="/signup"
                className="text-black font-medium hover:underline"
              >
                ثبت‌نام کنید
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
