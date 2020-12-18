import {
  OAuthHeaderImage,
  OAuthHeaderImageWrapper,
  OAuthHeaderMessage,
  OAuthHeaderOrganization,
  OAuthHeaderWrapper,
  OAuthOrSignOutMessage,
  OAuthSignOut,
} from "./OAuthHeader.styled";

import { OAuthHeaderProps } from "./OAuthHeader.types";
import React from "react";
import { deleteCookie } from "../../../utils/cookieInteraction";

export const OAuthHeader: React.FC<OAuthHeaderProps> = (props) => {
  return (
    <OAuthHeaderWrapper>
      <OAuthHeaderImageWrapper>
        <OAuthHeaderImage src={props.oauth.organisation.avatar} />
        <p>•••</p>
        <OAuthHeaderImage src={props.user.avatar} />
      </OAuthHeaderImageWrapper>
      <OAuthHeaderOrganization>
        {props.oauth.organisation.name}
      </OAuthHeaderOrganization>
      <OAuthHeaderMessage>wants to access your account</OAuthHeaderMessage>
      <OAuthOrSignOutMessage>
        Or{" "}
        <OAuthSignOut
          onClick={() => {
            deleteCookie("token");
            window.location.href = `/signin/${props.oauth.organisation.id}/${props.oauth.app.id}/${props.oauth.redirect.id}`;
          }}
        >
          sign in with another account
        </OAuthSignOut>
      </OAuthOrSignOutMessage>
    </OAuthHeaderWrapper>
  );
};
