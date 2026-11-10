import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type FigureTone = "paper" | "ink" | "lime";

const toneClass: Record<FigureTone, string> = {
  paper: "bg-background text-foreground",
  ink: "theme-ink bg-background text-foreground",
  lime: "theme-lime bg-background text-foreground",
};

type FeatureFigureProps = {
  figure: string;
  caption: string;
  tone?: FigureTone;
  children: ReactNode;
  className?: string;
};

/** Framed magazine plate with a technical caption. */
export const FeatureFigure = ({
  figure,
  caption,
  tone = "paper",
  children,
  className,
}: FeatureFigureProps) => {
  return (
    <figure
      className={cn(
        "relative overflow-hidden border border-foreground/20",
        toneClass[tone],
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="editorial-grid pointer-events-none absolute inset-0 opacity-70"
      />

      {[
        "left-2 top-2 border-l border-t",
        "right-2 top-2 border-r border-t",
        "left-2 bottom-2 border-b border-l",
        "right-2 bottom-2 border-b border-r",
      ].map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={cn("absolute z-10 h-2.5 w-2.5 border-foreground/35", position)}
        />
      ))}

      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden p-6 sm:p-9">
        {children}
      </div>

      <figcaption className="relative flex items-start justify-between gap-6 border-t border-foreground/20 bg-background/80 px-4 py-3 backdrop-blur-[1px]">
        <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
          {figure}
        </span>
        <span className="max-w-[72%] text-right text-[10px] leading-[1.7] text-muted-foreground">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
};
