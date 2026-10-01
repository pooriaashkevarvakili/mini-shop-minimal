import React from "react";
import { shopHeroapi } from "./ts/shopHero";

const HeroSection = async () => {
  const heroData = await shopHeroapi();

  const hero = heroData?.[0];

  return (
    <section
      className="relative w-full min-h-[420px] md:min-h-[480px] bg-[#1a1a1a] overflow-hidden flex items-center"
      dir="rtl"
    >
      <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-white/10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="max-w-2xl mr-auto text-right">
          {hero?.title && (
            <span className="text-white/60 text-sm md:text-base font-normal mb-4 block">
              {hero.title}
            </span>
          )}

          {hero?.titleOne && (
            <h1 className="text-white text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-5 mt-0">
              {hero.titleOne}
            </h1>
          )}

          {hero?.description && (
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-0 max-w-xl">
              {hero.description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;