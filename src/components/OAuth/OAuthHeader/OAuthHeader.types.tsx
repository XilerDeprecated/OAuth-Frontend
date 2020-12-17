import { XilerAccount } from "../XilerAccounts/Account.types";
import { XilerOrganisation } from "../XilerAccounts/Organisation.types";

export interface OAuthHeaderProps {
    user: XilerAccount;
    organization: XilerOrganisation;
}
