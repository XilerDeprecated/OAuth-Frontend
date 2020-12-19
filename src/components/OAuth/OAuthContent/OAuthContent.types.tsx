import { OAuthUrlParams } from "../OAuth.types";
import { User } from "../../../api/user";

export interface OAuthContentProps {
    url: OAuthUrlParams;
    user: User;
}