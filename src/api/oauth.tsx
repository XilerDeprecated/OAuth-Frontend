import {
  XilerApp,
  XilerOAuth,
  XilerOAuthRedirect,
  XilerOrganisation,
} from "../components/OAuth/XilerAccounts/Organisation.types";

const organisation: XilerOrganisation = {
  id: "xiler",
  name: "Xiler Network",
  avatar: "https://avatars2.githubusercontent.com/u/75951685",
  createdAt: new Date(2019, 5, 10),
};

const app: XilerApp = {
  id: "ceSLYWm2cXt5yiQO",
  organisation,
  permissions: [
    {
      id: 1,
      name: "email",
    },
    {
      id: 2,
      name: "connections",
    },
  ],
};

const redirect: XilerOAuthRedirect = {
  id: "LEt14JVLFVKFtTvT",
  target: "https://www.xiler.net/",
};

export const getOAuthData = (
  organisationId: string,
  appId: string,
  redirectId: string
): XilerOAuth | undefined => {
  if (
    organisationId === organisation.id &&
    appId === app.id &&
    redirectId === redirect.id
  )
    return {
      organisation,
      app,
      redirect,
    };

  return undefined;
};
