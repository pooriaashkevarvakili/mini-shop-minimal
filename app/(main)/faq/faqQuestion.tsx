import { faqQuestionApi } from "./ts/questionAnswer";

export default async function QuestionAnswer() {
  const response = await faqQuestionApi();

  const questions = response.data ?? [];

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
            {response.message ||
              "پاسخ سوال‌های پرتکرار درباره سفارش، ارسال و محصولات"}
          </p>
        </div>

        <div className="space-y-3">
          {questions.length > 0 ? (
            questions.map((faq, index) => (
              <details
                key={`${faq.question ?? "faq"}-${index}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 open:border-gray-200 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-right outline-none transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-gray-300 [&::-webkit-details-marker]:hidden">
                  <span className="text-sm font-bold text-gray-900 sm:text-base">
                    {faq.question ?? "سوال"}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition-transform duration-300 group-open:rotate-180">
                    <span className="relative block h-4 w-4">
                      <span className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 rounded-full bg-current" />

                      <span className="absolute left-1/2 top-0 h-4 w-[1.5px] -translate-x-1/2 rounded-full bg-current transition-transform duration-300 group-open:scale-y-0" />
                    </span>
                  </span>
                </summary>

                <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                      <p className="text-sm leading-7 text-gray-500">
                        {faq.answer ??
                          "پاسخی برای این سوال ثبت نشده است."}
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            ))
          ) : (
            <div className="rounded-2xl border border-gray-100 bg-gray-50 px-5 py-8 text-center">
              <p className="text-sm text-gray-500">
                سوالی برای نمایش وجود ندارد.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}