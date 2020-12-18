import { XilerApp, XilerOAuth } from "../XilerAccounts/Organisation.types";

import { OAuthLangType } from "../../../lang/oauth";

export interface OAuthPermissionsProps {
    lang: OAuthLangType;
    app: XilerApp;
}
