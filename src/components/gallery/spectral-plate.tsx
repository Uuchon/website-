import { useId, useMemo } from "react";

import { cn } from "@/lib/utils";

const SIZE = 640;
const CENTER = SIZE / 2;
const BAR_COUNT = 144;
const INNER_RADIUS = 132;

/**
 * Decorative "spectral plate": a circular spectrum field with instrument
 * marks. It is a composition, not a measurement, and must never be presented
 * as analysis output.
 */
export const SpectralPlate = ({ className }: { className?: string }) => {
  const id = useId().replace(/:/g, "");
  const blurId = `plate-blur-${id}`;
  const arcId = `plate-arc-${id}`;
  const coreId = `plate-core-${id}`;

  const bars = useMemo(
    () =>
      Array.from({ length: BAR_COUNT }, (_, index) => {
        const t = index / BAR_COUNT;
        const angle = t * Math.PI * 2 - Math.PI / 2;
        const envelope =
          0.22 +
          0.5 * Math.abs(Math.sin(index * 0.31) * Math.cos(index * 0.07 + 0.4)) +
          0.34 * Math.abs(Math.sin(index * 0.043 + 0.9));
        const inner = INNER_RADIUS + 6 * Math.sin(index * 0.5);
        const outer = inner + 14 + 92 * Math.min(1, envelope);

        return {
          x1: CENTER + Math.cos(angle) * inner,
          y1: CENTER + Math.sin(angle) * inner,
          x2: CENTER + Math.cos(angle) * outer,
          y2: CENTER + Math.sin(angle) * outer,
          stroke: `hsl(${Math.round(226 + 128 * t)} 88% 52%)`,
          opacity: 0.28 + 0.45 * Math.min(1, envelope),
          width: index % 9 === 0 ? 2 : 1.3,
        };
      }),
    [],
  );

  const wavePath = useMemo(
    () =>
      Array.from({ length: 121 }, (_, index) => {
        const x = 240 + (160 * index) / 120;
        const envelope = Math.sin((Math.PI * index) / 120) ** 0.8;
        const y = CENTER + Math.sin(index * 0.22) * 26 * envelope;
        return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
      }).join(" "),
    [],
  );

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      aria-hidden="true"
      className={cn("block h-auto w-full", className)}
    >
      <defs>
        <filter id={blurId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
        <linearGradient id={arcId} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(73 92% 52%)" />
          <stop offset="45%" stopColor="hsl(230 100% 57%)" />
          <stop offset="100%" stopColor="hsl(300 92% 58%)" />
        </linearGradient>
        <radialGradient id={coreId} cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="hsl(var(--background))" stopOpacity="0.97" />
          <stop offset="100%" stopColor="hsl(var(--background))" stopOpacity="0.72" />
        </radialGradient>
      </defs>

      <g filter={`url(#${blurId})`} opacity="0.55">
        <ellipse cx="258" cy="250" rx="126" ry="116" fill="hsl(230 100% 60%)" opacity="0.34" />
        <ellipse cx="392" cy="360" rx="128" ry="110" fill="hsl(302 95% 62%)" opacity="0.3" />
        <ellipse cx="296" cy="422" rx="108" ry="84" fill="hsl(73 92% 56%)" opacity="0.28" />
      </g>

      <g stroke="hsl(var(--foreground) / 0.16)" strokeWidth="1" fill="none">
        <circle cx={CENTER} cy={CENTER} r="292" strokeDasharray="2 8" />
        <circle cx={CENTER} cy={CENTER} r={INNER_RADIUS} />
        <circle cx={CENTER} cy={CENTER} r="96" />
        <line x1={CENTER} y1="18" x2={CENTER} y2="622" />
        <line x1="18" y1={CENTER} x2="622" y2={CENTER} />
      </g>

      <g stroke="hsl(var(--foreground) / 0.22)" strokeWidth="1">
        {Array.from({ length: 24 }, (_, index) => {
          const angle = (index / 24) * Math.PI * 2;
          const inner = 286;
          const outer = index % 6 === 0 ? 300 : 293;
          return (
            <line
              key={index}
              x1={CENTER + Math.cos(angle) * inner}
              y1={CENTER + Math.sin(angle) * inner}
              x2={CENTER + Math.cos(angle) * outer}
              y2={CENTER + Math.sin(angle) * outer}
            />
          );
        })}
      </g>

      <g strokeLinecap="round">
        {bars.map((bar, index) => (
          <line
            key={index}
            x1={bar.x1}
            y1={bar.y1}
            x2={bar.x2}
            y2={bar.y2}
            stroke={bar.stroke}
            strokeOpacity={bar.opacity}
            strokeWidth={bar.width}
          />
        ))}
      </g>

      <circle
        cx={CENTER}
        cy={CENTER}
        r="252"
        fill="none"
        stroke={`url(#${arcId})`}
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray="540 1043"
        transform={`rotate(-38 ${CENTER} ${CENTER})`}
      />
      <circle
        cx={CENTER}
        cy={CENTER}
        r="270"
        fill="none"
        stroke="hsl(73 92% 52%)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="120 1577"
        transform={`rotate(118 ${CENTER} ${CENTER})`}
      />

      <circle
        cx={CENTER}
        cy={CENTER}
        r="96"
        fill={`url(#${coreId})`}
        stroke="hsl(var(--foreground) / 0.22)"
      />
      <path
        d={wavePath}
        fill="none"
        stroke="hsl(var(--foreground))"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx={CENTER} cy={CENTER} r="2.6" fill="hsl(var(--foreground))" />

      <g className="plate-orbit">
        <circle
          cx={CENTER}
          cy={CENTER}
          r="304"
          fill="none"
          stroke="hsl(var(--foreground) / 0.3)"
          strokeDasharray="1 9"
        />
        <circle cx={CENTER} cy="16" r="4" fill="hsl(230 100% 57%)" />
        <circle cx="624" cy={CENTER} r="3" fill="hsl(322 92% 56%)" />
      </g>

      <g
        fill="hsl(var(--muted-foreground))"
        fontFamily="JetBrains Mono, monospace"
        fontSize="8"
        letterSpacing="1.5"
      >
        <text x={CENTER} y="36" textAnchor="middle">
          0
        </text>
        <text x="606" y="324" textAnchor="middle">
          90
        </text>
        <text x={CENTER} y="614" textAnchor="middle">
          180
        </text>
        <text x="34" y="324" textAnchor="middle">
          270
        </text>
      </g>
    </svg>
  );
};
