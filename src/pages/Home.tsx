import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { FeatureFigure } from "@/components/gallery/feature-figure";
import { SpectralPlate } from "@/components/gallery/spectral-plate";
import { SpectrumBars } from "@/components/gallery/spectrum-bars";
import { GlobeFigure } from "@/components/site/globe-figure";
import { Motif } from "@/components/site/motif";
import { StatusPill } from "@/components/site/status-pill";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PlateNoteProps = {
  code: string;
  label: string;
  align?: "left" | "right";
};

const PlateNote = ({ code, label, align = "left" }: PlateNoteProps) => (
  <div
    className={cn(
      "border-t border-foreground/25 pt-3",
      align === "right" && "md:text-right",
    )}
  >
    <div
      className={cn(
        "flex items-center gap-3",
        align === "right" && "md:flex-row-reverse",
      )}
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
        {code}
      </span>
      <span className="h-px flex-1 bg-foreground/20" />
    </div>
    <p className="mt-2 text-[11.5px] leading-[1.7] text-foreground/85">
      {label}
    </p>
  </div>
);

const Home = () => {
  const { t } = useTranslation();

  const statusItems = [
    t("home.current.statusItem1"),
    t("home.current.statusItem2"),
    t("home.current.statusItem3"),
  ];

  const methodSteps = [
    {
      index: "01",
      title: t("home.method.step1.title"),
      description: t("home.method.step1.desc"),
    },
    {
      index: "02",
      title: t("home.method.step2.title"),
      description: t("home.method.step2.desc"),
    },
    {
      index: "03",
      title: t("home.method.step3.title"),
      description: t("home.method.step3.desc"),
    },
    {
      index: "04",
      title: t("home.method.step4.title"),
      description: t("home.method.step4.desc"),
    },
  ];

  const features = [
    {
      index: "01",
      category: "ACOUSTIC ANALYSIS",
      title: t("home.areas.visualization.title"),
      description: t("home.areas.visualization.desc"),
      to: "/sound-visualization",
      figure: "FIG. 02",
      caption: t("home.feature.caption1"),
      tone: "paper" as const,
      visual: (
        <div className="h-[78%] w-full">
          <SpectrumBars />
        </div>
      ),
    },
    {
      index: "02",
      category: "BIOACOUSTICS",
      title: t("home.areas.rat.title"),
      description: t("home.areas.rat.desc"),
      to: "/rat-vocalization",
      figure: "FIG. 03",
      caption: t("home.feature.caption2"),
      tone: "ink" as const,
      visual: (
        <div className="w-full max-w-[440px]">
          <Motif variant="bands" className="h-auto w-full" />
        </div>
      ),
    },
    {
      index: "03",
      category: "PERCEPTION",
      title: t("home.areas.perception.title"),
      description: t("home.areas.perception.desc"),
      to: "/sound-perception",
      figure: "FIG. 04",
      caption: t("home.feature.caption3"),
      tone: "paper" as const,
      visual: (
        <div className="relative flex w-full items-center justify-center">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/15 sm:h-52 sm:w-52"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-foreground/25 sm:h-32 sm:w-32"
          />
          <Motif
            variant="swatches"
            className="relative h-auto w-full max-w-[400px]"
          />
        </div>
      ),
    },
    {
      index: "04",
      category: "FIELD RECORDING",
      title: t("home.areas.atlas.title"),
      description: t("home.areas.atlas.desc"),
      to: "/sound-atlas",
      figure: "FIG. 05",
      caption: t("home.feature.caption4"),
      tone: "lime" as const,
      visual: (
        <div className="w-full max-w-[290px]">
          <GlobeFigure className="h-auto w-full" />
        </div>
      ),
    },
  ];

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO / PLATE 01                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-foreground/20">
        <div
          aria-hidden="true"
          className="editorial-grid pointer-events-none absolute inset-0 opacity-80"
        />

        <div className="site-container relative">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground/20 py-3.5">
            <span className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="label-mono text-foreground/70">
                {t("home.hero.eyebrow")}
              </span>
            </span>
            <span className="label-mono hidden sm:block">
              EXPERIMENTAL SCIENCE GALLERY
            </span>
            <span className="label-mono">VOL. 01 / 2026</span>
          </div>

          <div className="grid gap-x-6 gap-y-8 pt-10 md:grid-cols-12 md:items-end md:pt-14">
            <div className="md:col-span-8">
              <h1 className="font-display text-[clamp(3rem,9.6vw,7.4rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em]">
                <span className="block">Sound</span>
                <span className="block">Beyond</span>
                <span className="block text-primary">
                  Hearing
                  <sup className="ml-2 align-top font-mono text-[10px] font-normal tracking-[0.12em] text-muted-foreground">
                    01
                  </sup>
                </span>
              </h1>
            </div>

            <div className="pb-1 md:col-span-4">
              <p className="text-[14px] tracking-[0.02em] text-foreground">
                {t("home.hero.kicker")}
              </p>
              <p className="mt-4 text-[12.5px] leading-[1.95] text-muted-foreground text-pretty">
                {t("home.hero.lead")}
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                <Button
                  asChild
                  className="h-10 gap-2.5 rounded-none px-5 font-mono text-[10px] uppercase tracking-[0.16em]"
                >
                  <a href="#features">
                    {t("home.hero.ctaPrimary")}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-10 gap-2.5 rounded-none border-foreground/30 bg-transparent px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground hover:bg-foreground hover:text-background"
                >
                  <Link to="/about">
                    {t("home.hero.ctaSecondary")}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* speculative field plate */}
          <div className="mt-12 border-t border-foreground/20 pt-8 md:mt-16 md:pt-10">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
              <span className="label-mono text-foreground/70">
                PLATE 01 / SPECTRAL FIELD
              </span>
              <span className="label-mono">
                ACOUSTIC FEATURES → COLOUR / FORM
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-6">
              <div className="order-2 grid grid-cols-2 gap-x-6 gap-y-6 md:order-1 md:col-span-3 md:grid-cols-1 md:gap-y-14">
                <PlateNote code="A / RMS" label={t("home.gallery.labelA")} />
                <PlateNote code="C / HUE" label={t("home.gallery.labelC")} />
              </div>

              <div className="order-1 mx-auto w-full max-w-[330px] sm:max-w-[430px] md:order-2 md:col-span-6 md:max-w-none">
                <SpectralPlate />
              </div>

              <div className="order-3 grid grid-cols-2 gap-x-6 gap-y-6 md:col-span-3 md:grid-cols-1 md:gap-y-14">
                <PlateNote
                  code="B / CENTROID"
                  label={t("home.gallery.labelB")}
                  align="right"
                />
                <PlateNote
                  code="D / ULTRASONIC"
                  label={t("home.gallery.labelD")}
                  align="right"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-foreground/20 pt-4 sm:flex-row sm:items-start sm:justify-between">
              <p className="max-w-xl text-[11px] leading-[1.85] text-muted-foreground text-pretty">
                {t("home.gallery.plateCaption")}
              </p>
              <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70">
                NOT TO SCALE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ticker ------------------------------------------------------------ */}
      <div className="border-b border-foreground/20 bg-foreground/[0.025]">
        <div className="site-container flex items-center gap-4 py-3">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-spectrum-lime" />
          <p className="truncate font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted-foreground">
            {t("home.ticker")}
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* FEATURES                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section id="features" className="site-container py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-foreground/25 pb-6">
          <div>
            <p className="label-mono text-primary">FEATURES / 01—04</p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-[1.02] tracking-[-0.035em]">
              {t("home.contents.title")}
            </h2>
          </div>
          <p className="max-w-sm text-[12px] leading-[1.9] text-muted-foreground text-pretty">
            {t("home.areas.lead")}
          </p>
        </div>

        <div className="divide-y divide-foreground/15">
          {features.map((feature, index) => (
            <article
              key={feature.to}
              className="grid gap-8 py-10 md:grid-cols-12 md:gap-10 md:py-14"
            >
              <div
                className={cn(
                  "flex flex-col md:col-span-5",
                  index % 2 === 1 ? "md:order-2" : "md:order-1",
                )}
              >
                <div className="flex items-center justify-between gap-4 border-t border-foreground/30 pt-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-foreground">
                    {feature.index}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                    {feature.category}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[clamp(1.7rem,3.3vw,2.5rem)] font-medium leading-[1.02] tracking-[-0.035em]">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-md text-[12.5px] leading-[1.95] text-muted-foreground text-pretty">
                  {feature.description}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-8">
                  <StatusPill variant="developing" />
                  <Link
                    to={feature.to}
                    className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground"
                  >
                    <span className="border-b border-foreground/40 pb-1 transition-colors group-hover:border-primary group-hover:text-primary">
                      {t("home.feature.read")}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              <div
                className={cn(
                  "md:col-span-7",
                  index % 2 === 1 ? "md:order-1" : "md:order-2",
                )}
              >
                <FeatureFigure
                  figure={feature.figure}
                  caption={feature.caption}
                  tone={feature.tone}
                >
                  {feature.visual}
                </FeatureFigure>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* METHOD / DARK INSET                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="theme-ink border-y border-foreground/20 bg-background text-foreground">
        <div className="site-container py-16 md:py-24">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground/20 pb-4">
            <span className="label-mono text-primary">
              {t("home.method.eyebrow")}
            </span>
            <span className="label-mono">MEASURE / TRANSFORM / PRESENT</span>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-12 md:gap-10">
            <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] font-medium leading-[1.03] tracking-[-0.035em] md:col-span-7">
              {t("home.method.title")}
            </h2>
            <p className="self-end text-[12.5px] leading-[1.95] text-muted-foreground text-pretty md:col-span-5">
              {t("home.method.lead")}
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-foreground/20 bg-foreground/20 sm:grid-cols-2 lg:grid-cols-4">
            {methodSteps.map((step) => (
              <div key={step.index} className="bg-background p-6 md:p-7">
                <p className="font-mono text-[10px] tracking-[0.24em] text-primary">
                  {step.index}
                </p>
                <h3 className="mt-6 font-display text-[15px] tracking-[0.01em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[12px] leading-[1.9] text-muted-foreground text-pretty">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-2xl border-l-2 border-primary pl-4 text-[11.5px] leading-[1.9] text-muted-foreground">
            {t("home.method.note")}
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* NOTES / CURRENT WORK                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-foreground/20">
        <div className="site-container py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <div className="flex items-center justify-between gap-4 border-t border-foreground/30 pt-3">
                <span className="label-mono text-primary">
                  {t("home.current.eyebrow")}
                </span>
                <span className="label-mono">{t("home.current.ratLabel")}</span>
              </div>

              <h2 className="mt-6 font-display text-[clamp(1.7rem,3.4vw,2.5rem)] font-medium leading-[1.05] tracking-[-0.03em]">
                {t("home.current.title")}
              </h2>

              <p className="mt-10 max-w-xl font-display text-[clamp(1.35rem,2.6vw,1.9rem)] font-normal leading-[1.35] tracking-[-0.02em] text-foreground text-balance">
                “{t("home.current.ratQuestion")}”
              </p>

              <p className="mt-5 max-w-lg text-[12.5px] leading-[1.95] text-muted-foreground text-pretty">
                {t("home.current.ratBody")}
              </p>

              <Link
                to="/rat-vocalization"
                className="group mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground"
              >
                <span className="border-b border-foreground/40 pb-1 transition-colors group-hover:border-primary group-hover:text-primary">
                  {t("common.viewProject")}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="md:col-span-5">
              <div className="border-t border-foreground/30 pt-4">
                <p className="label-mono">{t("home.current.dataTitle")}</p>
                <p className="mt-3 text-[11.5px] leading-[1.9] text-muted-foreground text-pretty">
                  {t("home.current.dataBody")}
                </p>
              </div>

              <div className="mt-8 border-t border-foreground/30 pt-4">
                <p className="label-mono">{t("home.current.statusTitle")}</p>
                <ul className="mt-3">
                  {statusItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 border-b border-foreground/15 py-3 text-[11.5px] leading-[1.75] text-foreground/80 last:border-b-0"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 border-l-2 border-spectrum-lime pl-3 text-[10.5px] leading-[1.8] text-muted-foreground">
                {t("footer.dataNote")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* RECORD / PUBLICATIONS                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-foreground/20">
        <div className="site-container py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-start md:gap-12">
            <div className="md:col-span-7">
              <p className="label-mono text-primary">
                {t("home.publications.eyebrow")}
              </p>
              <h2 className="mt-4 font-display text-[clamp(1.7rem,3.4vw,2.5rem)] font-medium leading-[1.05] tracking-[-0.03em]">
                {t("home.publications.title")}
              </h2>
              <p className="mt-4 max-w-md text-[12.5px] leading-[1.95] text-muted-foreground text-pretty">
                {t("home.publications.lead")}
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="flex items-baseline gap-5 border-y border-foreground/30 py-5">
                <span className="font-display text-[54px] font-medium leading-none tracking-[-0.04em]">
                  00
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                    ENTRIES / 2026
                  </p>
                  <p className="mt-1.5 text-[12px] text-foreground/85">
                    {t("home.publications.empty")}
                  </p>
                </div>
              </div>
              <Link
                to="/publications"
                className="group mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground"
              >
                <span className="border-b border-foreground/40 pb-1 transition-colors group-hover:border-primary group-hover:text-primary">
                  {t("home.publications.cta")}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CLOSING / ABOUT                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div className="site-container py-16 md:py-24">
          <Link to="/about" className="group grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-9">
              <p className="label-mono text-primary">{t("about.eyebrow")}</p>
              <h2 className="mt-5 font-display text-[clamp(2rem,6vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.045em]">
                {t("home.closing.title")}
              </h2>
              <p className="mt-5 max-w-md text-[12.5px] leading-[1.9] text-muted-foreground">
                {t("home.closing.body")}
              </p>
            </div>

            <div className="flex md:col-span-3 md:justify-end">
              <span className="grid h-14 w-14 place-items-center border border-foreground/30 text-foreground transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </Link>

          <div className="mt-12 flex flex-col gap-3">
            <div aria-hidden="true" className="h-2 w-full bg-spectral" />
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70">
                EXPERIMENTAL SCIENCE GALLERY
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70">
                01 / 06
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
