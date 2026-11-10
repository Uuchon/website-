import { useTranslation } from "react-i18next";

import { PageHero } from "@/components/site/page-hero";
import { SectionHeading, SectionShell } from "@/components/site/section";
import { StatusPill } from "@/components/site/status-pill";

const About = () => {
  const { t } = useTranslation();

  const approach = [
    {
      title: t("about.approach.a1.title"),
      description: t("about.approach.a1.desc"),
    },
    {
      title: t("about.approach.a2.title"),
      description: t("about.approach.a2.desc"),
    },
    {
      title: t("about.approach.a3.title"),
      description: t("about.approach.a3.desc"),
    },
  ];

  const stack = [
    t("about.stack.p5"),
    t("about.stack.web"),
    t("about.stack.react"),
    t("about.stack.webgl"),
  ];

  const roadmap = [
    t("about.roadmap.p1"),
    t("about.roadmap.p2"),
    t("about.roadmap.p3"),
  ];

  return (
    <>
      <PageHero
        index="06 / 06"
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        jpTitle={t("about.jpTitle")}
        lead={t("about.lead")}
      />

      <SectionShell>
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <SectionHeading
            eyebrow="BACKGROUND"
            title={t("about.background.title")}
          />
          <div className="space-y-6 text-[13.5px] leading-[2.05] text-muted-foreground text-pretty">
            <p>{t("about.background.p1")}</p>
            <p>{t("about.background.p2")}</p>
          </div>
        </div>
      </SectionShell>

      <section className="border-y border-border/60 bg-card/20">
        <div className="site-container py-16 md:py-24">
          <SectionHeading eyebrow="APPROACH" title={t("about.approach.title")} />

          <div className="mt-10 grid gap-px border border-border/70 bg-border/70 md:mt-14 md:grid-cols-3">
            {approach.map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-background p-7 transition-colors hover:bg-card/60 md:p-8"
              >
                <span className="spectral-rule absolute inset-x-0 top-0 h-px scale-x-0 opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100" />
                <span className="font-mono text-[10px] tracking-[0.24em] text-primary/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-[16px] text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-[12.5px] leading-[1.95] text-muted-foreground text-pretty">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <SectionHeading eyebrow="STACK" title={t("about.stack.title")} />
            <p className="mt-6 border-l border-primary/40 pl-4 text-[11.5px] leading-[1.9] text-muted-foreground">
              {t("about.stack.note")}
            </p>
          </div>

          <ul className="border-t border-border/60">
            {stack.map((item, index) => (
              <li
                key={item}
                className="flex items-start gap-5 border-b border-border/60 py-5"
              >
                <span className="mt-0.5 font-mono text-[9.5px] tracking-[0.2em] text-muted-foreground/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[12.5px] leading-[1.85] text-foreground/80">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="panel flex flex-col p-7 md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="label-mono text-primary/90">
                {t("about.profile.title")}
              </p>
              <StatusPill variant="pending" />
            </div>
            <p className="mt-6 max-w-md text-[12.5px] leading-[1.95] text-muted-foreground text-pretty">
              {t("about.profile.body")}
            </p>
            <p className="mt-auto pt-8 font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted-foreground/50">
              {t("footer.updated")}
            </p>
          </div>

          <div className="panel p-7 md:p-9">
            <p className="label-mono text-primary/90">
              {t("about.roadmap.title")}
            </p>
            <ol className="mt-6 space-y-4">
              {roadmap.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-border/50 pb-4 text-[12px] leading-[1.8] text-muted-foreground last:border-b-0 last:pb-0"
                >
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                  {item}
                </li>
              ))}
            </ol>
            <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground/70">
              {t("about.roadmap.note")}
            </p>
          </div>
        </div>
      </SectionShell>
    </>
  );
};

export default About;
