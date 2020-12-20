import { OAuthLang, OAuthLangType, lang } from "../lang/oauth";
import { getCookie, setCookie } from './cookieInteraction';

import { SimpleLanguage } from "../components/OAuth/OAuthLanguageNavigation/OAuthLanguageNavigation.types";
import { User } from "../api/user";

export const getLanguage = (val: string | undefined) => {
  let language: OAuthLangType;

  switch (val?.toLowerCase().trim()) {
    case "fr":
      language = lang.fr;
      break;

    case "nl":
    case "nl-be":
    case "be":
      language = lang.nl;
      break;

    case undefined:
    case "en":
    case "en-us":
    default:
      language = lang.en;
      break;
  }

  return language;
};

export const getLanguages = (lang: OAuthLang, active: OAuthLangType): SimpleLanguage[] => {
  return Object.keys(lang)
    .filter((name) => name !== active.tag)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map((key) => ({
      id: key,
      icon: getLanguage(key).icon,
    }));
};

export const getSiteLanguage = (user: User, val: string | undefined) => {
  if (val === undefined) {
    const cookieLang = getCookie("language");
    return cookieLang === undefined ? getLanguage("en") : getLanguage(cookieLang);
  }

  const urlLang = getLanguage(val);
  setCookie("language", urlLang.tag, 365 * 5);
  user.language = urlLang.tag;
  return urlLang;
}
