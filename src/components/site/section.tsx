import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
  id?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  lead,
  className,
  id,
}: SectionHeadingProps) => {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-4">
        <span className="h-1 w-1 rounded-full bg-primary" />
        <span className="label-mono text-primary/90">{eyebrow}</span>
      </div>
      <h2
        id={id}
        className="mt-5 font-display text-[clamp(1.7rem,3.4vw,2.6rem)] font-light leading-[1.12] tracking-[-0.02em] text-balance"
      >
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 max-w-2xl text-[14px] leading-[1.95] text-muted-foreground text-pretty md:text-[15px]">
          {lead}
        </p>
      ) : null}
    </div>
  );
};

export const SectionShell = ({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={cn("site-container py-16 md:py-24", className)}>
    {children}
  </section>
);

export const PendingNotice = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        "flex gap-3 border-l border-primary/40 bg-primary/[0.04] px-4 py-3 text-[12.5px] leading-relaxed text-muted-foreground",
        className,
      )}
    >
      <span className="mt-0.5 label-mono shrink-0 text-primary/80">
        {t("common.prototype")}
      </span>
      <p className="text-pretty">{children}</p>
    </div>
  );
};
