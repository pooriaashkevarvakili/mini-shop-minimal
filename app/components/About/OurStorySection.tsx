
'use client';

import React from 'react';
import Image from 'next/image';

import Mobel from '../../../public/mobel.avif';

const OurStorySection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          
          {/* Text Section */}
          <div className="flex-1 text-right" dir="rtl">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 md:text-4xl">
              داستان ما
            </h2>

            <div className="space-y-5 text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
              <p>
                همه چیز از یک ناامیدی ساده شروع شد: پیدا کردن محصول خوب،
                بادوام، و زیبا در بازار ایران کار سختی بود. یا گران بود و
                بی‌کیفیت، یا ارزان بود و شیک نبود.
              </p>

              <p>
                تصمیم گرفتیم خودمان این خلأ را پر کنیم. تیم کوچکی از طراحان و
                متخصصان جمع شدیم و مینی‌مال شاپ را راه انداختیم.
              </p>

              <p>
                امروز بیش از ۵۰۰۰ مشتری داریم که باور دارند بهتر است کمتر بخری،
                ولی بهتر بخری.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full max-w-md shrink-0 lg:max-w-lg">
            <div className="overflow-hidden rounded-3xl shadow-sm">
              <Image
                src={Mobel}
                alt="Minimal living room with yellow armchair"
                width={1000}
                height={750}
                className="h-auto w-full object-cover"
                style={{
                  borderRadius: '1.5rem',
                }}
              />
            </div>

            {/* Badge */}
            <div className="absolute -top-3 left-4 z-10">
              <div className="rounded-full bg-neutral-800 px-4 py-1.5 text-sm font-medium text-white shadow-md">
                از ۱۴۰۱
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
