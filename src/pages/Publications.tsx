import { ArrowUpRight, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { PageHero } from "@/components/site/page-hero";
import { SectionHeading, SectionShell } from "@/components/site/section";
import { StatusPill } from "@/components/site/status-pill";

const Publications = () => {
  const { t } = useTranslation();

  const categories = [
    {
      name: t("publications.category1.name"),
      description: t("publications.category1.desc"),
    },
    {
      name: t("publications.category2.name"),
      description: t("publications.category2.desc"),
    },
    {
      name: t("publications.category3.name"),
      description: t("publications.category3.desc"),
    },
    {
      name: t("publications.category4.name"),
      description: t("publications.category4.desc"),
    },
    {
      name: t("publications.category5.name"),
      description: t("publications.category5.desc"),
    },
  ];

  return (
    <>
      <PageHero
        index="05 / 06"
        eyebrow={t("publications.eyebrow")}
        title={t("publications.title")}
        jpTitle={t("publications.jpTitle")}
        lead={t("publications.lead")}
        status="pending"
      />

      <SectionShell>
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div>
            <SectionHeading
              eyebrow="POLICY"
              title={t("publications.policy.title")}
            />
            <div className="mt-8 flex items-end gap-4 border-t border-border/60 pt-6">
              <span className="font-display text-[3.4rem] font-light leading-none tracking-[-0.04em] text-foreground/80">
                00
              </span>
              <span className="pb-1 font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground/60">
                ENTRIES
                <br />
                {t("publications.empty")}
              </span>
            </div>
          </div>

          <div>
            <p className="text-[13px] leading-[2] text-muted-foreground text-pretty">
              {t("publications.policy.body")}
            </p>
            <StatusPill variant="pending" className="mt-6" />
          </div>
        </div>
      </SectionShell>

      <section className="border-y border-border/60 bg-card/20">
        <div className="site-container py-16 md:py-24">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <p className="label-mono text-primary/90">RECORD / 2026</p>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted-foreground/50">
              {t("publications.empty")}
            </p>
          </div>

          <ul className="mt-8 border-t border-border/70">
            {categories.map((category, index) => (
              <li
                key={category.name}
                className="group grid gap-3 border-b border-border/60 py-6 transition-colors hover:bg-card/40 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8 sm:px-2"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/50 sm:pt-1.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[14px] text-foreground/90">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:justify-end">
                  <FileText
                    className="h-3.5 w-3.5 text-muted-foreground/40"
                    strokeWidth={1.4}
                  />
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground/60">
                    {t("publications.empty")}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-2xl border-l border-primary/40 pl-4 text-[11.5px] leading-[1.9] text-muted-foreground">
            {t("publications.note")}
          </p>
        </div>
      </section>

      <SectionShell className="pb-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-mono text-primary/90">NEXT</p>
            <h2 className="mt-4 max-w-md font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-light leading-[1.25] tracking-[-0.01em]">
              {t("publications.nextTitle")}
            </h2>
            <p className="mt-3 max-w-md text-[12.5px] leading-[1.9] text-muted-foreground">
              {t("publications.nextBody")}
            </p>
          </div>
          <Link
            to="/about"
            className="link-underline shrink-0 font-mono text-[10px] uppercase tracking-[0.2em]"
          >
            {t("nav.about")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </SectionShell>
    </>
  );
};

export default Publications;
