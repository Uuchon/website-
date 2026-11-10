import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Motif } from "@/components/site/motif";
import { StatusPill, type StatusVariant } from "@/components/site/status-pill";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  index: string;
  title: string;
  description: string;
  to: string;
  motif: "wave" | "bands" | "swatches" | "globe";
  status: StatusVariant;
  className?: string;
};

export const ProjectCard = ({
  index,
  title,
  description,
  to,
  motif,
  status,
  className,
}: ProjectCardProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "group panel panel-hover flex flex-col overflow-hidden p-6 md:p-7",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="spectral-rule absolute inset-x-0 top-0 h-px origin-left scale-x-0 opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100"
      />
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[10px] tracking-[0.28em] text-muted-foreground/70">
          {index}
        </span>
        <StatusPill variant={status} />
      </div>

      <div className="mt-7 h-[76px] opacity-80 transition-opacity duration-500 group-hover:opacity-100">
        <Motif variant={motif} />
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="font-display text-xl font-normal tracking-[-0.01em] text-foreground">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-[13px] leading-[1.9] text-muted-foreground text-pretty">
          {description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/60 transition-colors group-hover:text-primary">
          PROJECT {index}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
};
