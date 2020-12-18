import { OAuthLangType } from "../../../lang/oauth";
import { XilerOAuth } from "../XilerAccounts/Organisation.types";

export interface OAuthInfoProps {
    lang: OAuthLangType;
    oauth: XilerOAuth;
}
