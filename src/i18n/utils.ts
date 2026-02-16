import { locales, translations, type Locale } from "./translations";

const DEFAULT_LOCALE: Locale = "es";

export const isLocale = (value: string | null | undefined): value is Locale =>
  Boolean(value && locales.includes(value as Locale));

const stripLocalePrefix = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && isLocale(segments[0])) {
    return `/${segments.slice(1).join("/")}` || "/";
  }

  return pathname;
};

export const getLocaleFromRequest = (_request: Request, url: URL): Locale => {
  const pathLocale = url.pathname.split("/").filter(Boolean)[0];
  if (isLocale(pathLocale)) return pathLocale;

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
  const normalizedPath = stripLocalePrefix(url.pathname);

  const localizedPath =
    locale === "es" ? normalizedPath : `/${locale}${normalizedPath === "/" ? "" : normalizedPath}`;

  return `${localizedPath}${hash ? `#${hash}` : ""}`;
};
