import { useTranslation } from "react-i18next";

export type SiteNavItem = {
  to: string;
  label: string;
  index: string;
  end?: boolean;
};

/** Single navigation source for the header and footer. */
export const useSiteNav = (): SiteNavItem[] => {
  const { t } = useTranslation();

  return [
    { to: "/", label: t("nav.home"), index: "00", end: true },
    { to: "/sound-visualization", label: t("nav.visualization"), index: "01" },
    { to: "/rat-vocalization", label: t("nav.rat"), index: "02" },
    { to: "/sound-perception", label: t("nav.perception"), index: "03" },
    { to: "/sound-atlas", label: t("nav.atlas"), index: "04" },
    { to: "/publications", label: t("nav.publications"), index: "05" },
    { to: "/about", label: t("nav.about"), index: "06" },
  ];
};
