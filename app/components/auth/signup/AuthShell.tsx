"use client";

import React from "react";

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  logoText?: string;
}

const AuthShell: React.FC<AuthShellProps> = ({
  title,
  subtitle,
  children,
  footer,
  logoText = "م",
}) => {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4"
    >
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">
              {logoText}
            </span>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {children}
        </div>

        {footer && <div className="text-center mt-6">{footer}</div>}
      </div>
    </div>
  );
};

export default AuthShell;