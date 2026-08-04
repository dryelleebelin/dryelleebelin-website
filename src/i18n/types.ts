export type Lang = "pt" | "en";

export type Localized<T = string> = {
  pt: T;
  en: T;
};

export const DEFAULT_LANG: Lang = "pt";
export const SUPPORTED_LANGS: Lang[] = ["pt", "en"];
export const LANG_STORAGE_KEY = "portfolio.lang";
