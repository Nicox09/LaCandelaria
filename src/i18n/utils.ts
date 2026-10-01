import { ui, defaultLang, languages, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t<T extends keyof (typeof ui)[typeof defaultLang]>(section: T) {
    return ui[lang][section] ?? ui[defaultLang][section];
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: Lang = lang) {
    return `/${l}${path}`;
  };
}

export function getStaticPathsForLangs() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}

export { languages, defaultLang };
export type { Lang };
