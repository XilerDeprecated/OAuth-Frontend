import { OAuthInfoItem, OAuthInfoItems, OAuthInfoWrapper } from "./OAuthInfo.styled";

import { OAuthInfoProps } from "./OAuthInfo.types";
import React from "react";

export const OAuthInfo: React.FC<OAuthInfoProps> = (props) => {
  return (
    <OAuthInfoWrapper>
      <OAuthInfoItems>
          <OAuthInfoItem>{props.lang.site.info.authorize} {props.oauth.redirect.target}</OAuthInfoItem>
          <OAuthInfoItem>{props.lang.site.info.exists} {props.oauth.organisation.createdAt.toLocaleDateString()}</OAuthInfoItem>
          <OAuthInfoItem>{props.lang.site.info.information}</OAuthInfoItem>
      </OAuthInfoItems>
    </OAuthInfoWrapper>
  );
};
