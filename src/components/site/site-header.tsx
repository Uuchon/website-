import { Menu } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

import { LanguageSwitcher } from "@/components/language-switcher";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { useSiteNav } from "@/hooks/use-site-nav";
import { cn } from "@/lib/utils";

const Wordmark = () => (
  <span className="flex min-w-0 items-center gap-3">
    <span className="grid h-8 w-8 shrink-0 place-items-center border border-border/80 bg-card/40 text-primary">
      <svg viewBox="0 0 28 28" aria-hidden="true" className="h-4 w-4">
        <g
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        >
          <line x1="3" y1="11" x2="3" y2="17" />
          <line x1="8.5" y1="7" x2="8.5" y2="21" />
          <line x1="14" y1="3" x2="14" y2="25" />
          <line x1="19.5" y1="8" x2="19.5" y2="20" />
          <line x1="25" y1="12" x2="25" y2="16" />
        </g>
      </svg>
    </span>
    <span className="flex min-w-0 flex-col leading-none">
      <span className="truncate font-display text-[11px] tracking-[0.2em] text-foreground sm:text-[12px]">
        SOUND BEYOND HEARING
      </span>
      <span className="mt-1.5 hidden font-mono text-[8.5px] tracking-[0.3em] text-muted-foreground sm:block">
        RESEARCH / 2026
      </span>
    </span>
  </span>
);

export const SiteHeader = () => {
  const { t } = useTranslation();
  const navItems = useSiteNav();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="site-container flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label={t("common.siteName")} className="min-w-0">
          <Wordmark />
        </Link>

        <nav
          aria-label={t("common.siteName")}
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  "group relative py-1 text-[12px] tracking-[0.04em] transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "spectral-rule absolute inset-x-0 -bottom-0.5 h-px origin-left transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          <LanguageSwitcher className="hidden sm:flex" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t("common.navMenu")}
            className="grid h-9 w-9 place-items-center border border-border/80 text-foreground/80 transition-colors hover:border-primary/50 hover:text-foreground lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full max-w-sm border-l border-border/80 bg-background/95 p-0 backdrop-blur-xl"
        >
          <div className="flex h-full flex-col">
            <div className="flex h-16 items-center justify-between border-b border-border/70 px-5">
              <SheetTitle className="font-display text-[11px] font-normal tracking-[0.2em] text-foreground">
                SOUND BEYOND HEARING
              </SheetTitle>
              <LanguageSwitcher />
            </div>
            <SheetDescription className="sr-only">
              {t("common.siteName")}
            </SheetDescription>

            <nav
              aria-label={t("common.navMenu")}
              className="flex-1 overflow-y-auto px-2 py-4"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center justify-between gap-4 border-b border-border/40 px-3 py-4 text-[15px] transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-center gap-3">
                        <span
                          className={cn(
                            "h-1 w-1 rounded-full",
                            isActive ? "bg-primary" : "bg-border",
                          )}
                        />
                        {item.label}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.22em] text-muted-foreground/60">
                        {item.index}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="border-t border-border/70 px-5 py-6">
              <p className="text-[12px] leading-relaxed text-muted-foreground">
                {t("common.tagline")}
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
