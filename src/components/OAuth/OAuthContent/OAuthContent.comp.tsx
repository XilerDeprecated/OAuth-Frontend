import {
  OAuthContentOuterWrapper,
  OAuthContentWrapper,
} from "./OAuthContent.styled";
import {
  XilerApp,
  XilerOAuth,
  XilerOAuthRedirect,
  XilerOrganisation,
} from "../XilerAccounts/Organisation.types";

import { OAuthHeader } from "../OAuthHeader/OAuthHeader.comp";
import { OAuthInfo } from "../OAuthInfo/OAuthInfo.comp";
import { OAuthMenu } from "../OAuthMenu/OAuthMenu.comp";
import { OAuthPermissions } from "../OAuthPermissions/OAuthPermissions.comp";
import { OAuthSectionSeperator } from "../OAuth.styled";
import { OAuthUrlParams } from "../OAuth.types";
import React from "react";
import { XilerAccount } from "../XilerAccounts/Account.types";

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
      description: "Access your email adress",
    },
    {
      id: 2,
      name: "connections",
      description: "Access your third-party connections",
    },
  ],
};

const redirect: XilerOAuthRedirect = {
  id: "LEt14JVLFVKFtTvT",
  target: "https://www.xiler.net/",
};

const user: XilerAccount = {
  id: "1ndta1RGxQvl724qSKP2UQPoG8JayXv7",
  firstName: "Arthur",
  lastName: "De Witte",
  mail: "mail@arthurdw.com",
  avatar: "https://avatars3.githubusercontent.com/u/38541241",
};

export const OAuthContent: React.FC<OAuthUrlParams> = (props) => {
  // TODO: FETCH DATA FROM API HERE

  const OAuthData: XilerOAuth = {
    organisation,
    app,
    redirect,
  };

  // {props.organisation} {props.id} {props.redirect}

  return (
    <OAuthContentOuterWrapper>
      <OAuthContentWrapper>
        <OAuthHeader user={user} organization={OAuthData.organisation} />
        <OAuthSectionSeperator />
        <OAuthPermissions {...OAuthData.app} />
        <OAuthSectionSeperator />
        <OAuthInfo {...OAuthData} />
        <OAuthSectionSeperator />
        <OAuthMenu {...OAuthData} />
      </OAuthContentWrapper>
    </OAuthContentOuterWrapper>
  );
};
