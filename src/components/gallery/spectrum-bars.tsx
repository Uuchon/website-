import { useMemo } from "react";

import { cn } from "@/lib/utils";

const BAR_COUNT = 64;

/** Decorative spectrum bars for the feature plates. Not measured data. */
export const SpectrumBars = ({ className }: { className?: string }) => {
  const bars = useMemo(
    () =>
      Array.from({ length: BAR_COUNT }, (_, index) => {
        const envelope =
          0.18 +
          0.6 * Math.abs(Math.sin(index * 0.33) * Math.cos(index * 0.11 + 0.6)) +
          0.22 * Math.abs(Math.sin(index * 0.07));
        return {
          height: 18 + 168 * Math.min(1, envelope),
          hue: 226 + (128 * index) / BAR_COUNT,
          opacity: 0.55 + 0.45 * Math.min(1, envelope),
        };
      }),
    [],
  );

  return (
    <svg
      viewBox="0 0 400 230"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <line x1="0" y1="206" x2="400" y2="206" stroke="hsl(var(--foreground) / 0.28)" />
      {bars.map((bar, index) => (
        <rect
          key={index}
          x={index * 6.25 + 1.6}
          y={206 - bar.height}
          width="3.4"
          height={bar.height}
          fill={`hsl(${Math.round(bar.hue)} 88% 52%)`}
          opacity={bar.opacity}
        />
      ))}
      <line x1="0" y1="206" x2="400" y2="206" stroke="hsl(var(--foreground) / 0.28)" />
    </svg>
  );
};
