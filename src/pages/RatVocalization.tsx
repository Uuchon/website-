import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { PageHero } from "@/components/site/page-hero";
import { RatBandFigure } from "@/components/site/rat-band-figure";
import { SectionHeading, SectionShell } from "@/components/site/section";
import { StatusPill } from "@/components/site/status-pill";

const RatVocalization = () => {
  const { t } = useTranslation();

  const questions = [
    t("rat.question.q1"),
    t("rat.question.q2"),
    t("rat.question.q3"),
  ];

  const methodSteps = [
    {
      title: t("rat.method.step1.title"),
      description: t("rat.method.step1.desc"),
    },
    {
      title: t("rat.method.step2.title"),
      description: t("rat.method.step2.desc"),
    },
    {
      title: t("rat.method.step3.title"),
      description: t("rat.method.step3.desc"),
    },
    {
      title: t("rat.method.step4.title"),
      description: t("rat.method.step4.desc"),
    },
  ];

  const dataItems = [
    t("rat.data.item1"),
    t("rat.data.item2"),
    t("rat.data.item3"),
  ];

  return (
    <>
      <PageHero
        index="02 / 06"
        eyebrow={t("rat.eyebrow")}
        title={t("rat.title")}
        jpTitle={t("rat.jpTitle")}
        lead={t("rat.lead")}
        status="developing"
        meta={[
          {
            label: t("rat.meta.subjectLabel"),
            value: t("rat.meta.subjectValue"),
          },
          { label: t("rat.meta.bandLabel"), value: t("rat.meta.bandValue") },
          { label: t("rat.meta.stateLabel"), value: t("rat.meta.stateValue") },
        ]}
      />

      <SectionShell>
        <SectionHeading
          eyebrow="QUESTION"
          title={t("rat.question.title")}
        />
        <ol className="mt-10 grid gap-px border border-border/70 bg-border/70 md:grid-cols-3">
          {questions.map((question, index) => (
            <li
              key={question}
              className="group relative bg-background p-6 transition-colors hover:bg-card/60 md:p-8"
            >
              <span className="font-mono text-[10px] tracking-[0.24em] text-primary/60">
                Q{String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-6 text-[13.5px] leading-[1.9] text-foreground/80 text-pretty">
                {question}
              </p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <section className="border-y border-border/60 bg-card/20">
        <div className="site-container py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start md:gap-16">
            <SectionHeading
              eyebrow="BACKGROUND"
              title={t("rat.background.title")}
            />
            <div className="space-y-5 text-[13px] leading-[2] text-muted-foreground text-pretty">
              <p>{t("rat.background.p1")}</p>
              <p className="border-l border-primary/40 pl-4 text-[12.5px] text-muted-foreground/90">
                {t("rat.background.p2")}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <RatBandFigure />
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <div>
            <SectionHeading eyebrow="METHOD" title={t("rat.method.title")} />
            <StatusPill variant="developing" className="mt-6" />
          </div>

          <ol className="border-t border-border/60">
            {methodSteps.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-2.5 border-b border-border/60 py-6 sm:grid-cols-[auto_1fr] sm:gap-6"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[13.5px] text-foreground">{step.title}</h3>
                  <p className="mt-2.5 text-[12.5px] leading-[1.95] text-muted-foreground text-pretty">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </SectionShell>
      <SectionShell>
        <SectionHeading eyebrow="PROTOTYPE" title="リアルタイム・モニタ（試作）" />
        <p className="mt-6 max-w-2xl text-[12.5px] leading-[1.95] text-muted-foreground text-pretty">
          ラットの超音波を色で表示する試作ツールです。超音波マイクと高サンプリング（192 kHz以上）の入力が必要です。
        </p>
        <div className="mt-8 overflow-hidden border border-border/70 bg-card/20">
          <iframe
            src="https://uuchon.github.io/Rat-USV-Monitor/"
            title="ラット超音波モニタ"
            allow="microphone; fullscreen"
            allowFullScreen
            loading="lazy"
            style={{ width: "100%", height: "1500px", border: 0 }}
          />
        </div>
        <a
          href="https://uuchon.github.io/Rat-USV-Monitor/"
          target="_blank"
          rel="noreferrer"
          className="link-underline mt-6 font-mono text-[10px] uppercase tracking-[0.2em]"
        >
          OPEN IN NEW TAB
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </SectionShell>
      <SectionShell className="pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="panel p-7 md:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="label-mono text-primary/90">DATA / STATUS</p>
              <StatusPill variant="pending" />
            </div>
            <h3 className="mt-6 font-display text-lg font-normal">
              {t("rat.data.title")}
            </h3>
            <p className="mt-4 text-[12.5px] leading-[1.95] text-muted-foreground text-pretty">
              {t("rat.data.body")}
            </p>
            <ul className="mt-6 space-y-3 border-t border-border/60 pt-5">
              {dataItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[12px] leading-relaxed text-muted-foreground"
                >
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent/80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="panel flex flex-col justify-between p-7 md:p-9">
            <div>
              <div className="flex items-center gap-3 text-primary/80">
                <ShieldCheck className="h-4 w-4" strokeWidth={1.4} />
                <p className="label-mono text-primary/90">ETHICS</p>
              </div>
              <h3 className="mt-6 font-display text-lg font-normal">
                {t("rat.ethics.title")}
              </h3>
              <p className="mt-4 text-[12.5px] leading-[1.95] text-muted-foreground text-pretty">
                {t("rat.ethics.body")}
              </p>
            </div>
            <Link
              to="/sound-perception"
              className="link-underline mt-8 font-mono text-[10px] uppercase tracking-[0.2em]"
            >
              PROJECT 03 / {t("nav.perception")}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </SectionShell>
    </>
  );
};

export default RatVocalization;
