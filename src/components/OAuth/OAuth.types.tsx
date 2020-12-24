export interface OAuthUrlParams {
    lang?: string;
    organisation: string;
    app: string;
    redirect: string;
}

export interface OAuthProps {
    url: OAuthUrlParams;
    token: string;
    user: string;
}
