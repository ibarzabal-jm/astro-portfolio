import { locales, translations, type Locale } from "./translations";

const DEFAULT_LOCALE: Locale = "es";

export const isLocale = (value: string | null | undefined): value is Locale =>
  Boolean(value && locales.includes(value as Locale));

export const getLocaleFromRequest = (_request: Request, url: URL): Locale => {
  const queryLang = url.searchParams.get("lang");
  if (isLocale(queryLang)) return queryLang;

  return DEFAULT_LOCALE;
};

export const getI18n = (locale: Locale) => ({
  locale,
  t: translations[locale],
});

export const localizeHref = (href: string, locale: Locale) => {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) return href;

  const [basePath, hash] = href.split("#");
  const url = new URL(basePath || "/", "https://ibarzabal.ar");
  url.searchParams.set("lang", locale);

  return `${url.pathname}${url.search}${hash ? `#${hash}` : ""}`;
};
