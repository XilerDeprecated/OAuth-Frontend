import { OAuthMenuAuthorize, OAuthMenuCancel, OAuthMenuWrapper } from "./OAuthMenu.styled";

import { OAuthMenuProps } from "./OAuthMenu.types";
import React from "react";
import { XilerApp } from "../XilerAccounts/Organisation.types";

const getAuthToken = (app: XilerApp) => {
    // TODO: FETCH DATA FROM API HERE
    
    return app.organisation.id + app.id + app.permissions.map((i) => i.id).join("");
}

export const OAuthMenu: React.FC<OAuthMenuProps> = (props) => {
  const url = props.oauth.redirect.target.endsWith("/") ? props.oauth.redirect.target : props.oauth.redirect.target + "/";

  return (
    <OAuthMenuWrapper>
      <OAuthMenuCancel href={`${url}?code=499`}>{props.lang.site.menu.cancel}</OAuthMenuCancel>
      <OAuthMenuAuthorize onClick={() => window.location.href = `${url}?code=${getAuthToken(props.oauth.app)}`}>{props.lang.site.menu.authorize}</OAuthMenuAuthorize>
    </OAuthMenuWrapper>
  );
};
