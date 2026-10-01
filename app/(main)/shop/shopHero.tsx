"use client";

import { useQuery } from "@tanstack/react-query";

import { shopHeroapi } from "./ts/shopHero";

export default function HeroSection() {
  const {
    data: heroData = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["shop-hero"],
    queryFn: shopHeroapi,

    staleTime: 1000 * 60 * 60,

    gcTime: 1000 * 60 * 60 * 24,

    refetchOnWindowFocus: false,

    retry: 1,
  });

  const hero = heroData?.[0];

  if (isLoading) {
    return (
      <section
        className="relative flex min-h-[420px] w-full items-center overflow-hidden bg-[#1a1a1a] md:min-h-[480px]"
        dir="rtl"
      >
        <div className="absolute left-[-80px] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-white/10 md:h-[420px] md:w-[420px]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 md:px-12 md:py-20 lg:px-16">
          <div className="mr-auto max-w-2xl text-right">
            <div className="mb-4 h-5 w-32 animate-pulse rounded bg-white/10" />

            <div className="mb-5 h-12 w-3/4 animate-pulse rounded bg-white/10" />

            <div className="h-20 max-w-xl animate-pulse rounded bg-white/10" />
          </div>
        </div>
      </section>
    );
  }

  if (isError || !hero) {
    return (
      <section
        className="relative flex min-h-[420px] w-full items-center overflow-hidden bg-[#1a1a1a] md:min-h-[480px]"
        dir="rtl"
      >
        <div className="absolute left-[-80px] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-white/10 md:h-[420px] md:w-[420px]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 md:px-12 md:py-20 lg:px-16">
          <div className="mr-auto max-w-2xl text-right">
            <span className="mb-4 block text-sm font-normal text-white/60 md:text-base">
              فروشگاه
            </span>

            <h1 className="mb-5 mt-0 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
              مینیمال شاپ
            </h1>

            <p className="mb-0 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              در حال حاضر اطلاعات این بخش در دسترس نیست.
            </p>

            {error instanceof Error && (
              <p className="mt-4 text-xs text-white/40">
                {error.message}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative flex min-h-[420px] w-full items-center overflow-hidden bg-[#1a1a1a] md:min-h-[480px]"
      dir="rtl"
    >
      <div className="pointer-events-none absolute left-[-80px] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full border border-white/10 md:h-[420px] md:w-[420px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 md:px-12 md:py-20 lg:px-16">
        <div className="mr-auto max-w-2xl text-right">
          {hero.title && (
            <span className="mb-4 block text-sm font-normal text-white/60 md:text-base">
              {hero.title}
            </span>
          )}

          {hero.titleOne && (
            <h1 className="mb-5 mt-0 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
              {hero.titleOne}
            </h1>
          )}

          {hero.description && (
            <p className="mb-0 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {hero.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}