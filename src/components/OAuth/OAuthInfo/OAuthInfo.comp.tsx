import { OAuthInfoItem, OAuthInfoItems, OAuthInfoWrapper } from "./OAuthInfo.styled";

import React from "react";
import { XilerOAuth } from "../XilerAccounts/Organisation.types";

export const OAuthInfo: React.FC<XilerOAuth> = (props) => {
  return (
    <OAuthInfoWrapper>
      <OAuthInfoItems>
          <OAuthInfoItem>Once you authorize, you will be redirected to: {props.redirect.target}</OAuthInfoItem>
          <OAuthInfoItem>Organisation exists since {props.organisation.createdAt.toLocaleDateString()}</OAuthInfoItem>
          <OAuthInfoItem>This organisation can not access any private information like your password or your street adress.</OAuthInfoItem>
      </OAuthInfoItems>
    </OAuthInfoWrapper>
  );
};
