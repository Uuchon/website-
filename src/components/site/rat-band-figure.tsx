import { useTranslation } from "react-i18next";

/**
 * Conceptual frequency-band schematic: general literature context only.
 * It deliberately contains no measured values from this project.
 */
export const RatBandFigure = () => {
  const { t } = useTranslation();

  return (
    <figure className="border border-border/70 bg-card/30">
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 px-5 py-3">
        <span className="label-mono text-foreground/70">
          {t("rat.figure.title")}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary/60">
          SCHEMATIC / NOT DATA
        </span>
      </figcaption>

      <div className="px-4 py-8 sm:px-6">
        <svg
          viewBox="0 0 800 240"
          role="img"
          aria-label={t("rat.figure.title")}
          className="h-auto w-full"
        >
          <defs>
            <linearGradient id="rat-ultrasonic" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--spectrum-blue))" stopOpacity="0.16" />
              <stop offset="55%" stopColor="hsl(var(--spectrum-violet))" stopOpacity="0.18" />
              <stop offset="100%" stopColor="hsl(var(--spectrum-magenta))" stopOpacity="0.14" />
            </linearGradient>
          </defs>

          <rect x="60" y="74" width="172" height="112" fill="hsl(var(--primary))" fillOpacity="0.06" />
          <rect x="232" y="74" width="508" height="112" fill="url(#rat-ultrasonic)" />

          <line x1="60" y1="186" x2="740" y2="186" stroke="hsl(var(--border))" strokeWidth="1" />
          {[60, 232, 344, 456, 568, 740].map((x, index) => (
            <g key={x}>
              <line x1={x} y1="186" x2={x} y2="192" stroke="hsl(var(--border))" />
              <text
                x={x}
                y="210"
                textAnchor="middle"
                fill="hsl(var(--muted-foreground))"
                fontSize="9"
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="1"
              >
                {index === 0 ? "0" : `${(index * 20).toString()}k`}
              </text>
            </g>
          ))}

          <line x1="232" y1="64" x2="232" y2="186" stroke="hsl(var(--primary))" strokeOpacity="0.35" strokeDasharray="3 4" />

          <text
            x="146"
            y="60"
            textAnchor="middle"
            fill="hsl(var(--muted-foreground))"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
            letterSpacing="1.5"
          >
            {t("rat.figure.audible")}
          </text>
          <text
            x="486"
            y="60"
            textAnchor="middle"
            fill="hsl(var(--foreground))"
            fillOpacity="0.75"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
            letterSpacing="1.5"
          >
            {t("rat.figure.ultrasonic")}
          </text>

          <g fill="hsl(var(--primary))">
            {[
              { x: 268, y: 96, w: 84, o: 0.75 },
              { x: 322, y: 116, w: 46, o: 0.45 },
              { x: 392, y: 134, w: 120, o: 0.6 },
              { x: 448, y: 102, w: 62, o: 0.5 },
              { x: 520, y: 124, w: 96, o: 0.55 },
              { x: 566, y: 148, w: 38, o: 0.35 },
              { x: 612, y: 110, w: 74, o: 0.4 },
              { x: 660, y: 138, w: 52, o: 0.3 },
            ].map((mark) => (
              <rect
                key={`${mark.x}-${mark.y}`}
                x={mark.x}
                y={mark.y}
                width={mark.w}
                height="5"
                rx="2.5"
                fillOpacity={mark.o}
              />
            ))}
          </g>

          <g stroke="hsl(var(--spectrum-violet))" strokeOpacity="0.5" fill="none">
            <path d="M268 100 q 42 -14 84 0" />
            <path d="M392 138 q 60 -18 120 0" />
          </g>
        </svg>
      </div>

      <div className="border-t border-border/60 px-5 py-4">
        <p className="text-[11.5px] leading-[1.9] text-muted-foreground text-pretty">
          {t("rat.figure.caption")}
        </p>
      </div>
    </figure>
  );
};
