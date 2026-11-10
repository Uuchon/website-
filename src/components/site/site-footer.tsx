import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { useSiteNav } from "@/hooks/use-site-nav";

export const SiteFooter = () => {
  const { t } = useTranslation();
  const navItems = useSiteNav();
  const projectItems = navItems.filter((item) => item.to !== "/");
  const siteItems = [
    { to: "/publications", label: t("nav.publications") },
    { to: "/about", label: t("nav.about") },
  ];

  return (
    <footer className="border-t border-border/70">
      <div className="site-container py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr] md:gap-10">
          <div>
            <Link to="/" className="flex items-center gap-3 text-foreground">
              <span className="grid h-7 w-7 place-items-center border border-border/80 text-primary">
                <svg viewBox="0 0 28 28" aria-hidden="true" className="h-3.5 w-3.5">
                  <g
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                  >
                    <line x1="4" y1="11" x2="4" y2="17" />
                    <line x1="10" y1="7" x2="10" y2="21" />
                    <line x1="16" y1="4" x2="16" y2="24" />
                    <line x1="22" y1="9" x2="22" y2="19" />
                  </g>
                </svg>
              </span>
              <span className="font-display text-[11px] tracking-[0.2em]">
                SOUND BEYOND HEARING
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[12.5px] leading-[1.9] text-muted-foreground text-pretty">
              {t("footer.statement")}
            </p>
            <p className="mt-5 flex max-w-sm gap-2 border-l border-primary/40 pl-3 text-[11.5px] leading-relaxed text-muted-foreground/80">
              {t("footer.dataNote")}
            </p>
          </div>

          <div>
            <p className="label-mono">{t("footer.projects")}</p>
            <ul className="mt-5 space-y-3">
              {projectItems.slice(0, 4).map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[12.5px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono">{t("footer.site")}</p>
            <ul className="mt-5 space-y-3">
              {siteItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[12.5px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-mono text-[9.5px] uppercase tracking-[0.24em] text-muted-foreground/60">
              {t("footer.updated")}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-mono">{t("footer.rights")}</p>
          <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground/50">
            {t("common.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
};
