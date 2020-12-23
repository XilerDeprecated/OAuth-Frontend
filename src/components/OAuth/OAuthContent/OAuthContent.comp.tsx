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
import { lang } from "../../../lang/oauth";

export const OAuthContent: React.FC<OAuthContentProps> = (props) => {
  let l = getSiteLanguage(props.user, props.url.lang);

  // {props.organisation} {props.id} {props.redirect}

  if (props.oauth === undefined)
    return <Loader message="Invalid OAuth url!"></Loader>;

  return (
    <React.Fragment>
      <Seo
        color="#2BBADE"
        description={`${l.site.helmet.description.authorize} ${
          props.oauth.organisation.name
        } ${
          l.site.helmet.description.allowed
        } ${props.oauth.app.permissions
          .map((permission) => permission.name)
          .join(", ")}.`}
        title={`${l.site.helmet.title} ${props.oauth.organisation.name}`}
        image={props.oauth.organisation.avatar}
        imageAlt={`${props.oauth.organisation.avatar} ${l.site.helmet.avatarAlt}`}
      />
      <OAuthContentOuterWrapper>
        <OAuthContentWrapper>
          <OAuthHeader lang={l} user={props.user.user} oauth={props.oauth} />
          <OAuthSectionSeperator />
          <OAuthPermissions lang={l} app={props.oauth.app} />
          <OAuthSectionSeperator />
          <OAuthInfo lang={l} oauth={props.oauth} />
          <OAuthSectionSeperator />
          <OAuthMenu lang={l} oauth={props.oauth} />
        </OAuthContentWrapper>
      </OAuthContentOuterWrapper>
      <OAuthLanguageNavigation
        lang={l}
        oauth={props.oauth}
        languages={getLanguages(lang, l)}
      />

      <OAuthBackground />
    </React.Fragment>
  );
};
