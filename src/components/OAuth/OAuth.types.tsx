import { User } from "../../api/user";

export interface OAuthUrlParams {
    lang?: string;
    organisation: string;
    app: string;
    redirect: string;
}