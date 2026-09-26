"use client";

export default function HomePage() {
  return (
    <div className=" bg-white">
      <header className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">            
            <div className="order-1 text-right md:order-2">
              <p className="mb-3 text-sm font-normal text-gray-400">
                مجله مینیمال
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                داستان، ایده و راهنما
              </h1>
            </div>
            <div className="order-2 max-w-md text-right md:order-1">
              <p className="text-base leading-relaxed text-gray-500 md:text-lg">
                خواندنی‌هایی درباره طراحی، کیفیت و انتخاب آگاهانه برای زندگی روزمره.
              </p>
            </div>
          </div>
        </div>
        <div className="h-8 w-full bg-gradient-to-b from-white to-gray-50" />
      </header>
    </div>
  );
}