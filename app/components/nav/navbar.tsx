"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import NavbarMobile from "./navbarMobile";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className="bg-gray-100 border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
              م
            </div>

            <Link
              href="/"
              onClick={closeMenu}
              className="text-lg font-semibold text-gray-900"
            >
              مینیمال شاپ
            </Link>
          </div>

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

            <Link
              href="/faq"
              className="px-4 py-1.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-white/60 transition-colors text-sm"
            >
              سوالات
            </Link>

            <Link
              href="/news"
              className="px-4 py-1.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-white/60 transition-colors text-sm"
            >
              اخبار
            </Link>

            <Link
              href="/shop"
              className="px-4 py-1.5 rounded-full text-gray-600 hover:text-gray-900 hover:bg-white/60 transition-colors text-sm"
            >
              فروشگاه
            </Link>
          </nav>

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
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
            aria-label="منو"
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-out ${
          isOpen
            ? "max-h-[700px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <NavbarMobile closeMenu={closeMenu} />
      </div>
    </header>
  );
}