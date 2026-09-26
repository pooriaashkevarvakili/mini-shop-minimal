// components/HeroSection.tsx
"use client";

import React from "react";
import { Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[420px] md:min-h-[480px] bg-[#1a1a1a] overflow-hidden flex items-center"
      dir="rtl"
    >
      {/* Decorative circle on the left */}
      <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-white/10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="max-w-2xl mr-auto text-right">
          {/* فروشگاه */}
          <Text className="!text-white/60 !text-sm md:!text-base !font-normal mb-4 block">
            فروشگاه
          </Text>

          {/* عنوان اصلی */}
          <Title
            level={1}
            className="!text-white !text-3xl md:!text-5xl lg:!text-[3.25rem] !font-bold !leading-tight !mb-5 !mt-0"
          >
            برای یک زندگی ساده‌تر
          </Title>

          {/* توضیحات */}
          <Paragraph className="!text-white/70 !text-base md:!text-lg !leading-relaxed !mb-0 !max-w-xl">
            بیست محصول کاربردی، بادوام و خوش‌ساخت؛ انتخاب‌شده برای اینکه هر روز از
            داشتنشان لذت ببرید.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;