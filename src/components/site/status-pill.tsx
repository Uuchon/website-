import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils";

export type StatusVariant = "developing" | "pending" | "planned" | "live";

const styles: Record<
  StatusVariant,
  { wrap: string; dot: string; pulse: boolean }
> = {
  developing: {
    wrap: "border-primary/30 bg-primary/10 text-primary",
    dot: "bg-primary",
    pulse: true,
  },
  pending: {
    wrap: "border-accent/30 bg-accent/10 text-accent",
    dot: "bg-accent",
    pulse: false,
  },
  planned: {
    wrap: "border-border bg-muted/60 text-muted-foreground",
    dot: "bg-muted-foreground",
    pulse: false,
  },
  live: {
    wrap: "border-spectrum-amber/30 bg-spectrum-amber/10 text-spectrum-amber",
    dot: "bg-spectrum-amber",
    pulse: false,
  },
};

type StatusPillProps = {
  variant: StatusVariant;
  className?: string;
};

export const StatusPill = ({ variant, className }: StatusPillProps) => {
  const { t } = useTranslation();
  const style = styles[variant];
  const label =
    variant === "developing"
      ? t("common.status.developing")
      : variant === "pending"
        ? t("common.status.pending")
        : variant === "planned"
          ? t("common.status.planned")
          : t("common.status.live");

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em]",
        style.wrap,
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          style.dot,
          style.pulse && "animate-pulse-dot",
        )}
      />
      {label}
    </span>
  );
};
