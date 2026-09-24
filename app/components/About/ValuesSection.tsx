"use client";

import React from "react";
import {
  FiBox,
  FiCircle,
  FiMoon,
  FiBarChart2,
} from "react-icons/fi";

interface ValueCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const values: ValueCard[] = [
  {
    id: 1,
    title: "طراحی هدفمند",
    description:
      "ما به سادگی اعتقاد داریم — هیچ عنصری بدون دلیل وجود ندارد.",
    icon: <FiBox className="w-5 h-5 text-neutral-400" />,
  },
  {
    id: 2,
    title: "کیفیت بدون توضیح",
    description:
      "هر محصول قبل از ورود به مجموعه، کنترل کیفی دقیق می‌شود.",
    icon: <FiCircle className="w-5 h-5 text-neutral-400" />,
  },
  {
    id: 3,
    title: "ارتباط صادقانه",
    description:
      "با مشتریان خود شفاف هستیم — از قیمت‌گذاری تا تحویل.",
    icon: <FiMoon className="w-5 h-5 text-neutral-400" />,
  },
  {
    id: 4,
    title: "پایداری محیطی",
    description:
      "مواد اولیه از منابع پایدار و تأمین‌کنندگان مسئول تهیه می‌شود.",
    icon: <FiBarChart2 className="w-5 h-5 text-neutral-400" />,
  },
];

const ValuesSection: React.FC = () => {
  return (
    <section
      dir="rtl"
      className="w-full max-w-5xl mx-auto px-4 py-16 bg-white"
    >
      <div className="text-center mb-12">
        <p className="text-sm text-neutral-400 mb-2 font-light tracking-wide">
          ارزش‌های ما
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
          چه چیزی برایمان مهم است
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {values.map((item) => (
          <div
            key={item.id}
            className="
              group
              bg-[#fafafa]
              rounded-2xl
              px-7
              py-8
              border
              border-transparent
              hover:border-neutral-200
              hover:bg-white
              transition-all
              duration-300
              min-h-[190px]
              flex
              flex-col
              items-start
            "
          >
            <div
              className="
                mb-6
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-xl
                bg-white
                border
                border-neutral-100
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              {item.icon}
            </div>

            <div className="w-full text-right">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-500 leading-7">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;