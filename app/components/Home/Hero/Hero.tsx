// Hero.tsx
import React from "react";
import shopKagesh from '../../../../public/photoshoe.webp'
import Image from "next/image";
const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 md:px-8 lg:px-16 py-12">
      <div
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        dir="ltr"
      >
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2.5rem] shadow-sm"></div>

            <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
              <Image
                src={shopKagesh}
                priority
                alt="کفش اسپرت"
                className="w-full h-auto object-contain drop-shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-500"
              />
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 z-20">
              <div className="bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-md text-center">
                <p className="text-xs text-gray-500 font-medium">ارسال رایگان</p>
                <p className="text-sm font-semibold text-gray-900 mt-0.5">
                  برای خریدهای بالای ۵۰۰ هزار تومان
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start text-right space-y-6" dir="rtl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
            کالاهای باکیفیت ایرانی
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            سادگی در
            <br />
            <span className="text-gray-400">طراحی،</span> کیفیت
            <br />
            در محصول
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
            مجموعه‌ای از محصولات مینیمال و باکیفیت برای زندگی مدرن.
            <br />
            هر محصول با دقت انتخاب شده.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-7 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              مشاهده محصولات
            </button>

            <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-2 transition-colors duration-300 group">
              بیشتر بدانید
              <span className="group-hover:-translate-x-1 transition-transform duration-300">
                ←
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;