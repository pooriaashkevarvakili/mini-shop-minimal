'use client'
import { useEffect, useState, useRef } from "react";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 1401, label: "سال تأسیس" },
  { value: 5000, suffix: "+", label: "مشتری راضی" },
  { value: 200, suffix: "+", label: "محصول" },
];

function useCountUp(
  end: number,
  duration: number = 2000,
  startOnView: boolean = true
) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startOnView) {
      // start immediately
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          animate();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

    function animate() {
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        // easeOutExpo for a nice feel
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(ease * end));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }, [end, duration, startOnView]);

  return { count, ref };
}

function StatCard({ value, suffix = "", label }: StatItem) {
  const { count, ref } = useCountUp(value, 2200);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {count.toLocaleString("fa-IR")}
        {suffix}
      </span>
      <span className="mt-1 text-sm text-gray-400">{label}</span>
    </div>
  );
}

export default function StatsBanner() {
  return (
    <section className="w-full bg-[#1a1a1a] py-10">
      <div className="mx-auto flex max-w-5xl items-center justify-around px-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}