import { useId } from "react";

import { cn } from "@/lib/utils";

type MotifVariant = "wave" | "bands" | "swatches" | "globe";

type MotifProps = {
  variant: MotifVariant;
  className?: string;
};

/** Small abstract motifs used on project cards. Purely decorative. */
export const Motif = ({ variant, className }: MotifProps) => {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 220 84"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(var(--spectrum-aqua))" />
          <stop offset="30%" stopColor="hsl(var(--spectrum-blue))" />
          <stop offset="58%" stopColor="hsl(var(--spectrum-violet))" />
          <stop offset="80%" stopColor="hsl(var(--spectrum-magenta))" />
          <stop offset="100%" stopColor="hsl(var(--spectrum-amber))" />
        </linearGradient>
      </defs>

      {variant === "wave" ? (
        <g fill="none" stroke={`url(#${gradientId})`}>
          {[0, 1, 2, 3].map((line) => (
            <path
              key={line}
              d={`M0 ${28 + line * 10} C 32 ${8 + line * 12}, 58 ${
                60 - line * 6
              }, 92 ${38 + line * 4} S 156 ${10 + line * 14}, 186 ${
                46 - line * 2
              } S 210 ${52 + line * 4}, 220 ${30 + line * 8}`}
              strokeOpacity={0.28 + line * 0.16}
              strokeWidth={line === 2 ? 1.2 : 0.7}
            />
          ))}
        </g>
      ) : null}

      {variant === "bands" ? (
        <g>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((bar) => {
            const height = 8 + ((bar * 17) % 46);
            return (
              <rect
                key={bar}
                x={14 + bar * 24}
                y={72 - height}
                width="9"
                height={height}
                fill={`url(#${gradientId})`}
                opacity={0.35 + (bar % 4) * 0.14}
              />
            );
          })}
        </g>
      ) : null}

      {variant === "swatches" ? (
        <g>
          {[
            "var(--spectrum-aqua)",
            "var(--spectrum-blue)",
            "var(--spectrum-violet)",
            "var(--spectrum-magenta)",
            "var(--spectrum-amber)",
          ].map((color, index) => (
            <circle
              key={color}
              cx={26 + index * 42}
              cy={42}
              r={index === 2 ? 17 : 12}
              fill={`hsl(${color})`}
              fillOpacity={0.22 + index * 0.1}
              stroke={`hsl(${color})`}
              strokeOpacity={0.6}
              strokeWidth="0.8"
            />
          ))}
        </g>
      ) : null}

      {variant === "globe" ? (
        <g
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeOpacity="0.55"
          transform="translate(110 42)"
        >
          <circle r="31" />
          <ellipse rx="12" ry="31" />
          <ellipse rx="23" ry="31" />
          <ellipse rx="31" ry="11" />
          <ellipse rx="31" ry="21" />
          <ellipse
            rx="41"
            ry="13"
            strokeDasharray="2 5"
            strokeOpacity="0.3"
            transform="rotate(-18)"
          />
        </g>
      ) : null}
    </svg>
  );
};
