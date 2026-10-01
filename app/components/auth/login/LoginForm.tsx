"use client";

import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "../../../../axios/axios";
import FormField from "./FormField";
import AlertMessage from "./AlertMessage";
import LoginHeader from "./LoginHeader";

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

export default function LoginForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
    setSuccessMessage("");
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

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
        { withCredentials: true }
      );

      setSuccessMessage(response.data?.message || "ورود با موفقیت انجام شد!");

      setTimeout(() => router.push("/"), 500);
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
        <LoginHeader />

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <form onSubmit={onSubmit} className="space-y-5">
            <FormField
              id="email"
              name="email"
              label="ایمیل"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              placeholder="example@email.com"
              icon={FiMail}
              error={errors.email}
            />

            <FormField
              id="password"
              name="password"
              label="رمز عبور"
              type="password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              placeholder="رمز عبور خود را وارد کنید"
              icon={FiLock}
              error={errors.password}
            />

       

            {serverError && (
              <AlertMessage type="error" message={serverError} />
            )}

            {successMessage && (
              <AlertMessage type="success" message={successMessage} />
            )}

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

            <div className="flex items-center gap-3">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-xs text-gray-400">یا ورود با</span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

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