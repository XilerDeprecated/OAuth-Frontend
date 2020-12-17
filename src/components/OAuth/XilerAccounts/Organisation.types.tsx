export interface XilerOrganisation {
    id: string;
    name: string;
    avatar: string;
    createdAt: Date;
}

export interface XilerOAuthPermission {
    id: number;
    name: string;
    description: string;
}

export interface XilerApp {
    id: string;
    organisation: XilerOrganisation;
    permissions: XilerOAuthPermission[];
}

export interface XilerOAuthRedirect {
    id: string;
    target: string;
}

export interface XilerOAuth {
    organisation: XilerOrganisation;
    app: XilerApp;
    redirect: XilerOAuthRedirect;
}
