import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";

import { LanguageQuerySync } from "@/components/site/language-query-sync";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export const SiteLayout = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="relative isolate flex min-h-screen flex-col">
      <LanguageQuerySync />
      <div
        aria-hidden="true"
        className="grid-veil pointer-events-none absolute inset-0 -z-10 opacity-25"
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:border focus:border-primary/50 focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:text-foreground"
      >
        {t("common.skipToContent")}
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};
