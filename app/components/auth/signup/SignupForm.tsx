"use client";

import React from "react";
import { FiUser, FiMail } from "react-icons/fi";
import Link from "next/link";

import AuthShell from "./AuthShell";
import FormInput from "./FormInput";
import PasswordInput from "./PasswordInput";
import AlertMessage from "./AlertMessage";
import { useSignupForm } from "./useSignupForm";

const SignupForm: React.FC = () => {
  const {
    formik,
    handleSubmit,
    serverError,
    successMessage,
    fullNameError,
    emailError,
    passwordError,
  } = useSignupForm();

  return (
    <AuthShell
      title="ایجاد حساب"
      subtitle="در چند ثانیه شروع کنید"
      footer={
        <span className="text-sm text-gray-600">
          قبلاً ثبت‌نام کرده‌اید؟{" "}
          <Link
            href="/login"
            className="text-black font-medium hover:underline"
          >
            وارد شوید
          </Link>
        </span>
      }
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-1"
      >
        <FormInput
          id="fullName"
          name="fullName"
          label="نام و نام خانوادگی"
          type="text"
          placeholder="علی احمدی"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={fullNameError}
          disabled={formik.isSubmitting}
          autoComplete="name"
          icon={<FiUser size={18} />}
        />

        <FormInput
          id="email"
          name="email"
          label="ایمیل"
          type="email"
          placeholder="ali@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={emailError}
          disabled={formik.isSubmitting}
          autoComplete="email"
          icon={<FiMail size={18} />}
        />

        <PasswordInput
          id="password"
          name="password"
          label="رمز عبور"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={passwordError}
          disabled={formik.isSubmitting}
          autoComplete="new-password"
          placeholder="••••••••"
        />

        <AlertMessage type="error" message={serverError} />
        <AlertMessage
          type="success"
          message={successMessage}
        />

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
    </AuthShell>
  );
};

export default SignupForm;