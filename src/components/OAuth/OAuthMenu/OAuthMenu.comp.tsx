import {
  OAuthMenuAuthorize,
  OAuthMenuCancel,
  OAuthMenuWrapper,
} from "./OAuthMenu.styled";

import { OAuthMenuProps } from "./OAuthMenu.types";
import React from "react";
import { cookieNames } from "../../../settings/cookies";
import { getCode } from "../../../api/oauth";
import { getCookie } from "../../../utils/cookieInteraction";

export const OAuthMenu: React.FC<OAuthMenuProps> = (props): JSX.Element => {
  const Authorize = () => {
    // setAuthorized(true);
    props.setauth(true);
    getCode(
      props.oauth.app.id,
      getCookie(cookieNames.refresh_token)!,
      getCookie(cookieNames.user)!
    ).then((response) => {
      switch (response.data.status.code) {
        case 201:
          window.location.href = `${url}?code=${response.data.data.code}&status=${response.data.status.code}`;
          break;
        case 400:
          console.error(
            `Something went wrong: ${response.data.status.code} (${response.data.status.message})`
          );
          break;
        default:
          console.error(
            `Unimplemented response: ${response.data.status.code} (${response.data.status.message})`
          );
          break;
      }
    });
  };

  let url =
    props.oauth.redirect.target +
    (props.oauth.redirect.target.endsWith("/") ? "" : "/");

  return (
    <OAuthMenuWrapper>
      <OAuthMenuCancel href={`${url}?status=499`}>
        {props.lang.site.menu.cancel}
      </OAuthMenuCancel>
      <OAuthMenuAuthorize onClick={Authorize}>
        {props.lang.site.menu.authorize}
      </OAuthMenuAuthorize>
    </OAuthMenuWrapper>
  );
};
