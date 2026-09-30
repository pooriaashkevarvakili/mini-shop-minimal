import React from "react";
import type { Metadata } from "next";
import Signup from "../../components/auth/signup/SignupForm";

export const metadata: Metadata = {
  title: "ایجاد حساب | ثبت‌نام",
  description: "در چند ثانیه حساب کاربری خود را بسازید.",
};

const SignupPage: React.FC = () => {
  return <Signup />;
};

export default SignupPage;