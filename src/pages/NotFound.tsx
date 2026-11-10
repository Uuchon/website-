import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import { Motif } from "@/components/site/motif";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="grid-veil pointer-events-none absolute inset-0 opacity-40"
      />
      <div className="site-container relative py-20">
        <div className="max-w-xl">
          <p className="label-mono text-primary/90">{t("notFound.eyebrow")}</p>
          <div className="mt-6 h-20 w-full max-w-[280px] opacity-70">
            <Motif variant="wave" />
          </div>
          <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.2rem)] font-light leading-[1.08] tracking-[-0.03em]">
            {t("notFound.title")}
          </h1>
          <p className="mt-5 text-[13px] leading-[1.95] text-muted-foreground">
            {t("notFound.body")}
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-9 h-10 gap-3 rounded-sm border-border/80 bg-transparent px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/85 hover:bg-secondary/60 hover:text-foreground"
          >
            <Link to="/">
              <ArrowLeft className="h-3.5 w-3.5" />
              {t("common.backHome")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
