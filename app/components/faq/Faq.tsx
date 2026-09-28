"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "سفارش من چه زمانی ارسال می‌شود؟",
    answer:
      "سفارش‌ها معمولاً پس از ثبت و تأیید، در اولین روز کاری پردازش می‌شوند و سپس برای شما ارسال خواهند شد.",
  },
  {
    question: "هزینه ارسال چقدر است؟",
    answer:
      "هزینه ارسال بر اساس شهر مقصد، نوع ارسال و وزن بسته محاسبه می‌شود و هنگام ثبت سفارش نمایش داده خواهد شد.",
  },
  {
    question: "آیا امکان بازگرداندن محصول وجود دارد؟",
    answer:
      "بله، در صورتی که شرایط بازگشت کالا را داشته باشید، می‌توانید درخواست مرجوعی خود را ثبت کنید.",
  },
  {
    question: "چطور از موجود شدن یک محصول باخبر شوم؟",
    answer:
      "در صورت ناموجود بودن محصول، می‌توانید گزینه اطلاع‌رسانی موجودی را فعال کنید تا هنگام موجود شدن محصول به شما اطلاع داده شود.",
  },
  {
    question: "محصولات شما ضمانت دارند؟",
    answer:
      "بله، محصولات دارای ضمانت طبق شرایط و مدت اعلام‌شده در صفحه همان محصول ارائه می‌شوند.",
  },
  {
    question: "آیا امکان تغییر یا لغو سفارش هست؟",
    answer:
      "اگر سفارش شما هنوز ارسال نشده باشد، امکان تغییر یا لغو آن وجود دارد. برای بررسی وضعیت سفارش با پشتیبانی تماس بگیرید.",
  },
  {
    question: "چطور می‌توانم وضعیت سفارشم را پیگیری کنم؟",
    answer:
      "پس از ارسال سفارش، کد رهگیری برای شما ارسال می‌شود و می‌توانید با استفاده از آن وضعیت مرسوله را پیگیری کنید.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      dir="rtl"
      className="w-full bg-white py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-[720px] px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            سوالات متداول
          </h2>

          <p className="mt-3 text-sm text-gray-500 sm:text-base">
            پاسخ سوال‌های پرتکرار درباره سفارش، ارسال و محصولات
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={[
                  "overflow-hidden rounded-2xl border bg-white",
                  "transition-all duration-300",
                  isOpen
                    ? "border-gray-200 shadow-sm"
                    : "border-gray-100",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-right outline-none transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-gray-300"
                >
                  <span className="text-sm font-bold text-gray-900 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={[
                      "flex h-9 w-9 shrink-0 items-center justify-center",
                      "rounded-full bg-gray-50 text-gray-500",
                      "transition-all duration-300",
                      isOpen ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                  >
                    <span className="relative block h-4 w-4">
                      <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 rounded-full bg-current" />

                      <span
                        className={[
                          "absolute left-1/2 top-0 h-4 w-[1.5px]",
                          "-translate-x-1/2 rounded-full bg-current",
                          "transition-transform duration-300",
                          isOpen ? "scale-y-0" : "scale-y-100",
                        ].join(" ")}
                      />
                    </span>
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={[
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                      <p className="text-sm leading-7 text-gray-500">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}