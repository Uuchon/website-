import { ArrowUpRight, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { GlobeFigure } from "@/components/site/globe-figure";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading, SectionShell } from "@/components/site/section";
import { StatusPill } from "@/components/site/status-pill";

const SoundAtlas = () => {
  const { t } = useTranslation();

  const flowSteps = [
    {
      title: t("atlas.flow.step1.title"),
      description: t("atlas.flow.step1.desc"),
    },
    {
      title: t("atlas.flow.step2.title"),
      description: t("atlas.flow.step2.desc"),
    },
    {
      title: t("atlas.flow.step3.title"),
      description: t("atlas.flow.step3.desc"),
    },
  ];

  const techRows = [
    {
      label: t("atlas.tech.globeLabel"),
      value: t("atlas.tech.globeValue"),
    },
    {
      label: t("atlas.tech.audioLabel"),
      value: t("atlas.tech.audioValue"),
    },
    {
      label: t("atlas.tech.artLabel"),
      value: t("atlas.tech.artValue"),
    },
  ];

  return (
    <>
      <PageHero
        index="04 / 06"
        eyebrow={t("atlas.eyebrow")}
        title={t("atlas.title")}
        jpTitle={t("atlas.jpTitle")}
        lead={t("atlas.lead")}
        status="developing"
        meta={[
          {
            label: t("atlas.meta.globeLabel"),
            value: t("atlas.meta.globeValue"),
          },
          {
            label: t("atlas.meta.audioLabel"),
            value: t("atlas.meta.audioValue"),
          },
          {
            label: t("atlas.meta.dataLabel"),
            value: t("atlas.meta.dataValue"),
          },
        ]}
      />

      <SectionShell>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="label-mono">{t("atlas.globe.label")}</p>
          <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted-foreground/50">
            INTEGRATION PENDING
          </p>
        </div>

        <div className="mt-5 overflow-hidden border border-border/70 bg-card/20">
          <div className="grid lg:grid-cols-[1.15fr_1fr]">
            <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden px-6 py-12 sm:min-h-[460px]">
              <div
                aria-hidden="true"
                className="grid-veil absolute inset-0 opacity-40"
              />
              <div
                aria-hidden="true"
                className="animate-drift pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(42% 42% at 48% 46%, hsl(var(--spectrum-blue) / 0.2), transparent 70%), radial-gradient(36% 36% at 58% 56%, hsl(var(--spectrum-violet) / 0.18), transparent 72%)",
                }}
              />

              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                <span className="label-mono text-foreground/60">
                  {t("atlas.globe.label")}
                </span>
              </div>
              <div className="absolute right-4 top-4">
                <StatusPill variant="planned" />
              </div>

              <div className="relative w-full max-w-[420px]">
                <GlobeFigure />
              </div>

              <div className="absolute inset-x-4 bottom-4 flex justify-center">
                <span className="inline-flex items-center gap-2 border border-border/80 bg-background/80 px-3 py-2 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                  <MapPin className="h-3 w-3 text-primary/70" />
                  {t("atlas.globe.pending")}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center border-t border-border/60 p-7 sm:p-10 lg:border-l lg:border-t-0">
              <span className="grid h-10 w-10 place-items-center border border-border/80 text-muted-foreground">
                <MapPin className="h-4 w-4" strokeWidth={1.4} />
              </span>
              <h2 className="mt-6 font-display text-[clamp(1.25rem,2.4vw,1.6rem)] font-light leading-snug tracking-[-0.01em]">
                {t("atlas.empty.title")}
              </h2>
              <p className="mt-4 text-[12.5px] leading-[1.95] text-muted-foreground text-pretty">
                {t("atlas.empty.body")}
              </p>
              <p className="mt-6 border-l border-primary/40 pl-4 text-[11.5px] leading-[1.9] text-muted-foreground/80">
                {t("atlas.empty.note")}
              </p>
            </div>
          </div>

          <div className="border-t border-border/60 px-5 py-4 sm:px-7">
            <p className="text-[11.5px] leading-[1.9] text-muted-foreground text-pretty">
              {t("atlas.globe.caption")}
            </p>
          </div>
        </div>
      </SectionShell>

      <section className="border-y border-border/60 bg-card/20">
        <div className="site-container py-16 md:py-24">
          <SectionHeading eyebrow="FLOW" title={t("atlas.flow.title")} />

          <div className="mt-10 grid gap-px border border-border/70 bg-border/70 md:mt-14 md:grid-cols-3">
            {flowSteps.map((step, index) => (
              <div
                key={step.title}
                className="group relative bg-background p-7 transition-colors hover:bg-card/60"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.24em] text-primary/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-muted-foreground/40 transition-colors group-hover:text-primary/70"
                    strokeWidth={1.4}
                  />
                </div>
                <h3 className="mt-6 font-display text-[15px] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-[12.5px] leading-[1.9] text-muted-foreground text-pretty">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <StatusPill variant="planned" />
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <SectionHeading eyebrow="STACK" title={t("atlas.tech.title")} />

          <div>
            <dl className="border-t border-border/60">
              {techRows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-2 border-b border-border/60 py-5 sm:grid-cols-[140px_1fr] sm:gap-6"
                >
                  <dt className="label-mono pt-1">{row.label}</dt>
                  <dd className="text-[12.5px] leading-relaxed text-foreground/80">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 panel p-6">
              <h3 className="label-mono text-primary/90">
                {t("atlas.rights.title")}
              </h3>
              <p className="mt-4 text-[12px] leading-[1.95] text-muted-foreground text-pretty">
                {t("atlas.rights.body")}
              </p>
            </div>

            <Link
              to="/publications"
              className="link-underline mt-10 font-mono text-[10px] uppercase tracking-[0.2em]"
            >
              PROJECT 05 / {t("nav.publications")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </SectionShell>
    </>
  );
};

export default SoundAtlas;
