import { OAuthUrlParams } from "../OAuth.types";
import { User } from "../../../api/user";
import { XilerOAuth } from "../XilerAccounts/Organisation.types";

export interface OAuthContentProps {
    url: OAuthUrlParams;
    user: User;
    oauth: XilerOAuth | undefined,
}