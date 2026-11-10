import { useEffect } from "react";

import i18n from "@/i18n/config";
import { normalizeLanguage } from "@/i18n/util";

/**
 * Lets a shared link choose the language, e.g. `/?lang=en`. The detector
 * persists the choice afterwards, so no cookie handling is needed here.
 */
export const LanguageQuerySync = () => {
  useEffect(() => {
    const param = new URL(window.location.href).searchParams.get("lang");
    const code = normalizeLanguage(param);
    if (code && code !== i18n.resolvedLanguage) {
      void i18n.changeLanguage(code);
    }
  }, []);

  return null;
};
