import { useTranslation } from "react-i18next";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { fallbackLng, languageOptions, normalizeLanguage } from "@/i18n/config";

type LanguageSwitcherProps = {
  className?: string;
};

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const currentLanguage =
    normalizeLanguage(i18n.resolvedLanguage ?? i18n.language) ?? fallbackLng;

  return (
    <Select
      value={currentLanguage}
      onValueChange={(language) => {
        void i18n.changeLanguage(language);
      }}
    >
      <SelectTrigger
        aria-label="Language"
        className={cn(
          "h-8 w-auto min-w-0 gap-2 rounded-none border-0 border-b border-border/70 bg-transparent px-0.5 pb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:border-primary/60 hover:text-foreground focus:ring-0 focus:ring-offset-0 [&>span]:line-clamp-1",
          className,
        )}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end" className="border-border/80 bg-popover">
        {languageOptions.map((language) => (
          <SelectItem
            key={language.value}
            value={language.value}
            className="font-mono text-[11px] tracking-[0.08em] focus:bg-primary/10 focus:text-foreground"
          >
            {language.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
