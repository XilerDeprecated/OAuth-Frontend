import { OAuthMenuAuthorize, OAuthMenuCancel, OAuthMenuWrapper } from "./OAuthMenu.styled";
import { XilerApp, XilerOAuth } from "../XilerAccounts/Organisation.types";

import React from "react";

const getAuthToken = (app: XilerApp) => {
    // TODO: FETCH DATA FROM API HERE
    
    return app.organisation.id + app.id + app.permissions.map((i) => i.id).join("");
}

export const OAuthMenu: React.FC<XilerOAuth> = (props) => {
  const url = props.redirect.target.endsWith("/") ? props.redirect.target : props.redirect.target + "/";

  return (
    <OAuthMenuWrapper>
      <OAuthMenuCancel href={`${url}?code=499`}>Cancel</OAuthMenuCancel>
      <OAuthMenuAuthorize onClick={() => window.location.href = `${url}?code=${getAuthToken(props.app)}`}>Authorize</OAuthMenuAuthorize>
    </OAuthMenuWrapper>
  );
};
