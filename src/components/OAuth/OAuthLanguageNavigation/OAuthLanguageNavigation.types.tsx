import { OAuthLangType } from "../../../lang/oauth";
import { XilerOAuth } from "../XilerAccounts/Organisation.types";

export interface SimpleLanguage {
  id: string;
  icon: string;
}

export interface OAuthLanguageNaviagtionProps {
  oauth: XilerOAuth;
  lang: OAuthLangType;
  languages: SimpleLanguage[];
}
