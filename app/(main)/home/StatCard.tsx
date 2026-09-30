"use client";

import { useEffect, useRef, useState } from "react";
import type { CountType } from "./type/countType";

function useCountUp(
  end: number,
  duration: number = 2200,
  startOnView: boolean = true
) {
  const [count, setCount] = useState(0);

  const ref = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        // easeOutExpo
        const ease =
          progress === 1
            ? 1
            : 1 - Math.pow(2, -10 * progress);

        setCount(Math.floor(ease * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
    };

    if (!startOnView) {
      animate();

      return () => {
        cancelAnimationFrame(animationFrame);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          animate();
        }
      },
      {
        threshold: 0.3,
      }
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, startOnView]);

  return {
    count,
    ref,
  };
}

type StatCardProps = CountType;

export default function StatCard({
  value,
  suffix = "",
  label,
}: StatCardProps) {
  const { count, ref } = useCountUp(value, 2200);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center"
    >
      <span className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {count.toLocaleString("fa-IR")}
        {suffix}
      </span>

      {label && (
        <span className="mt-1 text-sm text-gray-400">
          {label}
        </span>
      )}
    </div>
  );
}