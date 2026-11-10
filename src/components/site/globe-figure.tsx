import { useId } from "react";

import { cn } from "@/lib/utils";

type GlobeFigureProps = {
  className?: string;
  showMarkers?: boolean;
};

/**
 * Conceptual wireframe globe. No geographic data is encoded: it exists to show
 * where the interactive 3D globe will live.
 */
export const GlobeFigure = ({ className, showMarkers = false }: GlobeFigureProps) => {
  const id = useId().replace(/:/g, "");
  const fillId = `globe-fill-${id}`;
  const rimId = `globe-rim-${id}`;
  const clipId = `globe-clip-${id}`;
  const radius = 132;

  return (
    <svg
      viewBox="0 0 360 360"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <radialGradient id={fillId} cx="34%" cy="26%" r="78%">
          <stop offset="0%" stopColor="hsl(var(--spectrum-blue))" stopOpacity="0.28" />
          <stop offset="45%" stopColor="hsl(var(--card))" stopOpacity="0.95" />
          <stop offset="100%" stopColor="hsl(var(--background))" stopOpacity="1" />
        </radialGradient>
        <linearGradient id={rimId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--spectrum-aqua))" />
          <stop offset="40%" stopColor="hsl(var(--spectrum-blue))" />
          <stop offset="70%" stopColor="hsl(var(--spectrum-violet))" />
          <stop offset="100%" stopColor="hsl(var(--spectrum-magenta))" />
        </linearGradient>
        <clipPath id={clipId}>
          <circle cx="180" cy="180" r={radius} />
        </clipPath>
      </defs>

      <ellipse
        cx="180"
        cy="180"
        rx="166"
        ry="52"
        fill="none"
        stroke="hsl(var(--border))"
        strokeDasharray="2 7"
        strokeOpacity="0.8"
        transform="rotate(-16 180 180)"
      />
      <circle cx="319" cy="131" r="2" fill="hsl(var(--primary))" opacity="0.8" />

      <circle
        cx="180"
        cy="180"
        r={radius}
        fill={`url(#${fillId})`}
        stroke={`url(#${rimId})`}
        strokeOpacity="0.5"
        strokeWidth="0.9"
      />

      <g
        clipPath={`url(#${clipId})`}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeOpacity="0.16"
        strokeWidth="0.7"
      >
        {[-0.72, -0.38, 0, 0.38, 0.72].map((offset) => {
          const halfChord = radius * Math.sqrt(1 - offset * offset);
          return (
            <ellipse
              key={offset}
              cx="180"
              cy={180 + radius * offset}
              rx={halfChord}
              ry={halfChord * 0.16}
            />
          );
        })}
        {[0.16, 0.42, 0.68, 0.9, 1].map((scale) => (
          <ellipse
            key={scale}
            cx="180"
            cy="180"
            rx={radius * scale}
            ry={radius}
          />
        ))}
      </g>

      {showMarkers ? (
        <g>
          {[
            [140, 132],
            [214, 168],
            [168, 224],
          ].map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="7" fill="hsl(var(--primary))" opacity="0.1" />
              <circle cx={cx} cy={cy} r="2" fill="hsl(var(--primary))" />
            </g>
          ))}
        </g>
      ) : null}
    </svg>
  );
};
