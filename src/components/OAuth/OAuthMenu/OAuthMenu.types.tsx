import { OAuthLangType } from "../../../lang/oauth";
import { XilerOAuth } from "../XilerAccounts/Organisation.types";

export interface OAuthMenuProps {
    lang: OAuthLangType;
    oauth: XilerOAuth;
}
