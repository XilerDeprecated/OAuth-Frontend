import { XilerAccount } from "../XilerAccounts/Account.types";
import { XilerOAuth } from "../XilerAccounts/Organisation.types";

export interface OAuthHeaderProps {
    user: XilerAccount;
    oauth: XilerOAuth;
}
