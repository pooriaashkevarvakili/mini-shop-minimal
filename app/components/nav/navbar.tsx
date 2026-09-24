"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gray-100 border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* لوگو سمت راست */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
              م
            </div>
            <Link href="/" className="text-lg font-semibold text-gray-900">
              مینیمال شاپ
            </Link>
          </div>

          {/* منوی دسکتاپ */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-1.5 rounded-full bg-white text-gray-900 font-medium text-sm shadow-sm"
            >
              خانه
            </Link>
            <Link
              href="/about"
              className="px-4 py-1.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-white/60 transition-colors text-sm"
            >
              درباره ما
            </Link>
            <Link
              href="/contact"
              className="px-4 py-1.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-white/60 transition-colors text-sm"
            >
              تماس
            </Link>
          </nav>

          {/* دکمه‌های ورود و ثبت‌نام دسکتاپ */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-gray-700 hover:text-gray-900 font-medium"
            >
              ورود
            </Link>
            <Link
              href="/signup"
              className="px-4 py-1.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
            >
              ثبت‌نام
            </Link>
          </div>

          {/* دکمه همبرگر موبایل */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
            aria-label="منو"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* منوی موبایل - از بالا و زیر هدر */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4 space-y-1">
          <Link
            href="/"
            onClick={closeMenu}
            className="block px-4 py-3 rounded-xl bg-gray-100 text-gray-900 font-medium"
          >
            خانه
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-colors"
          >
            درباره ما
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-colors"
          >
            تماس
          </Link>

          <div className="border-t border-gray-100 my-3" />

          <div className="flex flex-col gap-2 pt-1">
            <Link
              href="/login"
              onClick={closeMenu}
              className="block text-center px-4 py-3 rounded-xl border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition-colors"
            >
              ورود
            </Link>
            <Link
              href="/signup"
              onClick={closeMenu}
              className="block text-center px-4 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition-colors"
            >
              ثبت‌نام
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}