import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { StatusPill, type StatusVariant } from "@/components/site/status-pill";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  index: string;
  eyebrow: string;
  title: string;
  jpTitle: string;
  lead: string;
  status?: StatusVariant;
  meta?: { label: string; value: string }[];
  children?: ReactNode;
  className?: string;
};

export const PageHero = ({
  index,
  eyebrow,
  title,
  jpTitle,
  lead,
  status,
  meta,
  children,
  className,
}: PageHeroProps) => {
  const { t } = useTranslation();

  return (
    <header
      className={cn(
        "relative overflow-hidden border-b border-border/60",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(70% 120% at 85% 0%, hsl(var(--spectrum-blue) / 0.16), transparent 62%), radial-gradient(50% 90% at 20% 0%, hsl(var(--spectrum-violet) / 0.1), transparent 65%)",
        }}
      />
      <div className="site-container pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="flex items-center gap-4">
          <span className="label-mono text-primary/90">{eyebrow}</span>
          <span className="h-px flex-1 bg-border/70" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60">
            {index}
          </span>
        </div>

        <div className="mt-10 flex flex-col gap-6 md:mt-14">
          <div className="flex flex-wrap items-center gap-3">
            {status ? <StatusPill variant={status} /> : null}
            <span className="label-mono">{t("common.tagline")}</span>
          </div>
          <h1 className="font-display text-[clamp(2.1rem,5.6vw,3.9rem)] font-light leading-[1.02] tracking-[-0.035em]">
            {title}
          </h1>
          <p className="text-[13.5px] leading-relaxed tracking-[0.01em] text-muted-foreground md:text-sm">
            {jpTitle}
          </p>
        </div>

        <div className="mt-9 grid gap-8 border-t border-border/60 pt-8 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] md:gap-14">
          <p className="max-w-[46rem] text-[14px] leading-[2] text-foreground/75 text-pretty md:text-[15px]">
            {lead}
          </p>

          {meta && meta.length > 0 ? (
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 self-start sm:grid-cols-3 md:grid-cols-1 md:border-l md:border-border/60 md:pl-8">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="label-mono">{item.label}</dt>
                  <dd className="mt-2 text-[13px] leading-snug text-foreground/85">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        {children}
      </div>
      <div aria-hidden="true" className="spectral-rule h-px w-full opacity-60" />
    </header>
  );
};
