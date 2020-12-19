import {
  OAuthContentOuterWrapper,
  OAuthContentWrapper,
} from "./OAuthContent.styled";
import { getLanguages, getSiteLanguage } from "../../../utils/language";

import { Loader } from "../../Loading/Loader.comp";
import { OAuthBackground } from "../OAuthBackground/OAuthBackground.comp";
import { OAuthContentProps } from "./OAuthContent.types";
import { OAuthHeader } from "../OAuthHeader/OAuthHeader.comp";
import { OAuthInfo } from "../OAuthInfo/OAuthInfo.comp";
import { OAuthLanguageNavigation } from "../OAuthLanguageNavigation/OAuthLanguageNavigation.comp";
import { OAuthMenu } from "../OAuthMenu/OAuthMenu.comp";
import { OAuthPermissions } from "../OAuthPermissions/OAuthPermissions.comp";
import { OAuthSectionSeperator } from "../OAuth.styled";
import React from "react";
import { Seo } from "../../Seo.comp";
import { getOAuthData } from "../../../api/oauth";
import { lang } from "../../../lang/oauth";

export const OAuthContent: React.FC<OAuthContentProps> = (props) => {
  // TODO: FETCH DATA FROM API HERE

  const OAuthData = getOAuthData(
    props.url.organisation,
    props.url.app,
    props.url.redirect
  );

  if (OAuthData === undefined) return <Loader message="Invalid OAuth url!"></Loader>

  let l = getSiteLanguage(props.user, props.url.lang);

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
          <OAuthHeader lang={l} user={props.user.user} oauth={OAuthData} />
          <OAuthSectionSeperator />
          <OAuthPermissions lang={l} app={OAuthData.app} />
          <OAuthSectionSeperator />
          <OAuthInfo lang={l} oauth={OAuthData} />
          <OAuthSectionSeperator />
          <OAuthMenu lang={l} oauth={OAuthData} />
        </OAuthContentWrapper>
      </OAuthContentOuterWrapper>
      <OAuthLanguageNavigation
        lang={l}
        oauth={OAuthData}
        languages={getLanguages(lang, l)}
      />
      
      <OAuthBackground />
    </React.Fragment>
  );
};
