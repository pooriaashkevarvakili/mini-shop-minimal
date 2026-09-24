
import Image from 'next/image';
import React from 'react';
import aks from '../../../public/aks.webp'
const AboutSection: React.FC = () => {
  return (
    <section dir="rtl" className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4 flex justify-start">
        <span className="text-sm text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
          درباره ما
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-tight mb-6">
          ما به محصولاتی اعتقاد داریم
          <br />
          <span className="text-gray-500 font-medium">
            که عمر دارند.
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-0">
          مینیمال شاپ در سال ۱۴۰۱ با یک ایده ساده شروع کرد: فروش محصولاتی که
          واقعاً ارزش دارند. نه فصلی، نه تبلیغاتی – فقط کالاهای خوب برای آدم‌های
          باسلیقه.
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <Image
          src={aks}
          alt="Minimal Shop interior"
          className="w-full h-[420px] md:h-[520px] lg:h-[580px] object-cover object-center"
        />
      </div>
    </section>
  );
};

export default AboutSection;
