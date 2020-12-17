import {
  OAuthHeaderImage,
  OAuthHeaderImageWrapper,
  OAuthHeaderMessage,
  OAuthHeaderOrganization,
  OAuthHeaderWrapper,
} from "./OAuthHeader.styled";

import { OAuthHeaderProps } from "./OAuthHeader.types";
import React from "react";

export const OAuthHeader: React.FC<OAuthHeaderProps> = (props) => {
  return (
    <OAuthHeaderWrapper>
      <OAuthHeaderImageWrapper>
        <OAuthHeaderImage src={props.organization.avatar} />
        <p>•••</p>
        <OAuthHeaderImage src={props.user.avatar} />
      </OAuthHeaderImageWrapper>
      <OAuthHeaderOrganization>{props.organization.name}</OAuthHeaderOrganization>
      <OAuthHeaderMessage>wants to access your account</OAuthHeaderMessage>
    </OAuthHeaderWrapper>
  );
};
