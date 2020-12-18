import {
  OAuthContentOuterWrapper,
  OAuthContentWrapper
} from "./OAuthContent.styled";
import {
  XilerApp,
  XilerOAuth,
  XilerOAuthRedirect,
  XilerOrganisation
} from "../XilerAccounts/Organisation.types";
import { getLanguages, getSiteLanguage } from "../../../utils/language";

import { OAuthHeader } from "../OAuthHeader/OAuthHeader.comp";
import { OAuthInfo } from "../OAuthInfo/OAuthInfo.comp";
import { OAuthLanguageNavigation } from "../OAuthLanguageNavigation/OAuthLanguageNavigation.comp";
import { OAuthMenu } from "../OAuthMenu/OAuthMenu.comp";
import { OAuthPermissions } from "../OAuthPermissions/OAuthPermissions.comp";
import { OAuthSectionSeperator } from "../OAuth.styled";
import { OAuthUrlParams } from "../OAuth.types";
import React from "react";
import { Seo } from "../../Seo.comp";
import { XilerAccount } from "../XilerAccounts/Account.types";
import { lang } from "../../../lang/oauth";

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

  let l = getSiteLanguage(props.lang);

  // {props.organisation} {props.id} {props.redirect}

  return (
    <React.Fragment>
      <Seo
        color="#2BBADE"
        description={`${l.site.helmet.description.authorize} ${
          OAuthData.organisation.name
        } ${l.site.helmet.description.allowed} ${OAuthData.app.permissions
          .map((permission) => permission.name)
          .join(", ")}.`}
        title={`${l.site.helmet.title} ${OAuthData.organisation.name}`}
        image={OAuthData.organisation.avatar}
        imageAlt={`${OAuthData.organisation.avatar} ${l.site.helmet.avatarAlt}`}
      />
      <OAuthContentOuterWrapper>
        <OAuthContentWrapper>
          <OAuthHeader lang={l} user={user} oauth={OAuthData} />
          <OAuthSectionSeperator />
          <OAuthPermissions lang={l} app={OAuthData.app} />
          <OAuthSectionSeperator />
          <OAuthInfo lang={l} oauth={OAuthData} />
          <OAuthSectionSeperator />
          <OAuthMenu lang={l} oauth={OAuthData} />
        </OAuthContentWrapper>
      </OAuthContentOuterWrapper>
      <OAuthLanguageNavigation lang={l} oauth={OAuthData} languages={getLanguages(lang, l)} />
    </React.Fragment>
  );
};
