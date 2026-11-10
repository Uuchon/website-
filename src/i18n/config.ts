import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import {
  fallbackLng,
  getLanguageDirection,
  normalizeLanguage,
  supportedLngs,
} from "./util";

export * from "./util";

const baseUrl = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

// Bundle every public/locales file at build time and pass them as synchronous
// `resources`. This makes t() return real strings on the very first paint
// instead of returning the key and re-rendering the whole tree once
// HttpBackend finishes loading.
const bundledResources = Object.fromEntries(
  Object.entries(
    import.meta.glob<Record<string, string>>("../../public/locales/*.json", {
      eager: true,
      import: "default",
    }),
  ).map(([filePath, translation]) => {
    const code = filePath.match(/([^/]+)\.json$/)?.[1] ?? "";
    return [code, { translation }];
  }),
);

void i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    supportedLngs,
    resources: bundledResources,
    partialBundledLanguages: true,
    backend: { loadPath: `${baseUrl}locales/{{lng}}.json` },
    detection: {
      order: ["cookie", "navigator", "htmlTag"],
      lookupCookie: "i18next",
      caches: ["cookie"],
      convertDetectedLanguage: (l) => normalizeLanguage(l) ?? fallbackLng,
    },
    keySeparator: false,
    nsSeparator: false,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

const syncDocumentLanguage = (lng: string) => {
  const code = normalizeLanguage(lng) ?? fallbackLng;
  document.documentElement.lang = code;
  document.documentElement.dir = getLanguageDirection(code);
};

i18n.on("initialized", () =>
  syncDocumentLanguage(i18n.resolvedLanguage ?? i18n.language),
);
i18n.on("languageChanged", syncDocumentLanguage);

export default i18n;
