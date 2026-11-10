import { AudioWaveform } from "lucide-react";
import { useTranslation } from "react-i18next";

import { StatusPill } from "@/components/site/status-pill";

/**
 * Mount point for the existing p5.js sketch. No sketch is loaded yet, so the
 * stage shows an explicit waiting state instead of fabricated audio data.
 */
export const SketchStage = () => {
  const { t } = useTranslation();

  return (
    <div className="border border-border/70 bg-card/30">
      <div className="flex items-center justify-between gap-4 border-b border-border/60 px-4 py-3 sm:px-6">
        <span className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
          <span className="label-mono text-foreground/70">
            {t("visualization.stage.label")}
          </span>
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/50">
          CANVAS / P5.JS
        </span>
      </div>

      <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden px-5 py-12 sm:min-h-[440px] sm:px-10">
        <div aria-hidden="true" className="grid-veil absolute inset-0 opacity-50" />
        <div
          aria-hidden="true"
          className="animate-drift pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 opacity-70"
          style={{
            background:
              "radial-gradient(38% 38% at 42% 44%, hsl(var(--spectrum-blue) / 0.25), transparent 70%), radial-gradient(34% 34% at 62% 58%, hsl(var(--spectrum-violet) / 0.22), transparent 70%), radial-gradient(30% 30% at 52% 40%, hsl(var(--spectrum-magenta) / 0.16), transparent 72%)",
          }}
        />

        {[
          "left-3 top-3 border-l border-t",
          "right-3 top-3 border-r border-t",
          "left-3 bottom-3 border-b border-l",
          "right-3 bottom-3 border-b border-r",
        ].map((position) => (
          <span
            key={position}
            aria-hidden="true"
            className={`absolute h-4 w-4 border-primary/40 ${position}`}
          />
        ))}

        <div className="relative flex max-w-md flex-col items-center gap-4 border border-dashed border-border/90 bg-background/40 px-6 py-8 text-center backdrop-blur-[2px]">
          <AudioWaveform className="h-5 w-5 text-primary/80" strokeWidth={1.2} />
          <p className="text-[13.5px] leading-relaxed text-foreground/85">
            {t("visualization.stage.pending")}
          </p>
          <StatusPill variant="developing" />
        </div>
      </div>

      <div className="border-t border-border/60 px-4 py-4 sm:px-6">
        <p className="text-[11.5px] leading-[1.9] text-muted-foreground text-pretty">
          {t("visualization.stage.placeholder")}
        </p>
      </div>
    </div>
  );
};
