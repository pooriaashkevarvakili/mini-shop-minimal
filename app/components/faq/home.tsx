import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

export default function Home() {
    return (
        <main
            dir="rtl"
            className=" bg-white"
        >
            <div className="h-[17px] w-full border-b border-[#e9e9e9] bg-[#f3f3f3]" />

            <section className="flex min-h-[320px] flex-col items-center pt-[64px]">
                <div
                    className="
            flex
            h-[48px]
            w-[48px]
            items-center
            justify-center
            rounded-[16px]
            bg-[#202020]
          "
                >
                    <HiOutlineQuestionMarkCircle
                        className="text-[21px] text-white"
                        strokeWidth={1.8}
                    />
                </div>

                <span
                    className="
            mt-[17px]
            text-[12px]
            font-medium
            leading-5
            text-[#a3a3a3]
          "
                >
                    مرکز راهنما
                </span>

                <h1
                    className="
            m-0
            mt-[5px]
            text-center
            text-[44px]
            font-extrabold
            leading-[1.4]
            tracking-[-1.5px]
            text-[#111111]
            max-sm:text-[34px]
          "
                >
                    سوالات متداول
                </h1>

                <p
                    className="
            m-0
            mt-[8px]
            px-5
            text-center
            text-[15px]
            font-normal
            leading-7
            text-[#777777]
            max-sm:text-[13px]
          "
                >
                    پاسخ سوال‌های پرتکرار درباره سفارش، ارسال و بازگشت کالا را اینجا پیدا کنید.
                </p>
            </section>
        </main>
    );
}