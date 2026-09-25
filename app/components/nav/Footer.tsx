import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300" dir="rtl">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-12 pb-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 mb-12">
          
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-white text-xl font-bold tracking-tight">
                مینی‌مال شاپ
              </span>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <span className="text-black font-bold text-sm">م</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-[220px]">
              محصولاتی که ارزش دارند.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-5">صفحات</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  خانه
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  درباره ما
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  تماس
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-5">حساب</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href="/login"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  ورود
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  ثبت‌نام
                </a>
              </li>
           
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base mb-5">پشتیبانی</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  سوالات متداول
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  تماس با ما
                </a>
              </li>
          
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-6">
          <p className="text-center text-sm text-gray-500">
            © ۱۴۰۳ مینی‌مال شاپ – تمام حقوق محفوظ است
          </p>
        </div>
      </div>

      <button
        type="button"
        className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-white flex items-center justify-center shadow-lg transition-all duration-200 z-50"
        aria-label="راهنما"
      >
        <span className="text-lg font-medium leading-none">؟</span>
      </button>
    </footer>
  );
};

export default Footer;