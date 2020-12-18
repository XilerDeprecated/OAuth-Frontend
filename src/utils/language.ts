import { OAuthLangType, lang } from "../lang/oauth";

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
