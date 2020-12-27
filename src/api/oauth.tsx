import {
  XilerApp,
  XilerOAuth,
  XilerOAuthRedirect,
  XilerOrganisation,
} from "../components/OAuth/XilerAccounts/Organisation.types";

import axios from "axios";
import { endpoints } from "../settings/endpoints";

const organisation: XilerOrganisation = {
  id: "xiler",
  name: "Xiler Network",
  avatar: "https://avatars2.githubusercontent.com/u/75951685",
  createdAt: new Date(2019, 5, 10),
};

const app: XilerApp = {
  id: "83ed1",
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
): Promise<XilerOAuth> | undefined => {
  // TODO FETCH FROM API
  if (
    organisationId === organisation.id &&
    appId === app.id &&
    redirectId === redirect.id
  )
    return Promise.resolve({
      organisation,
      app,
      redirect,
    });

  return undefined;
};

export const getCode = (app: string, token: string, user: string) =>
  axios.post(
    endpoints.base + endpoints.generate_code,
    {
      token: token,
      app: app,
      user: user,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
