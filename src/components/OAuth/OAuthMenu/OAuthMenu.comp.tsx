import {
  OAuthMenuAuthorize,
  OAuthMenuCancel,
  OAuthMenuWrapper,
} from "./OAuthMenu.styled";
import React, { useEffect, useState } from "react";

import { OAuthMenuProps } from "./OAuthMenu.types";
import { cookieNames } from "../../../settings/cookies";
import { getCode } from "../../../api/oauth";
import { getCookie } from "../../../utils/cookieInteraction";

export const OAuthMenu: React.FC<OAuthMenuProps> = (props): JSX.Element => {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getCode(props.oauth.app.id, getCookie(cookieNames.refresh_token)!).then(
      (response) => {
        setCode(response.data.data.code);
        setStatus(response.data.status.code);
      }
    );
  }, [props.oauth.app.id]);

  let url =
    props.oauth.redirect.target +
    (props.oauth.redirect.target.endsWith("/") ? "" : "/");

  return (
    <OAuthMenuWrapper>
      <OAuthMenuCancel href={`${url}?status=499`}>
        {props.lang.site.menu.cancel}
      </OAuthMenuCancel>
      <OAuthMenuAuthorize
        onClick={() =>
          (window.location.href = `${url}?code=${code}&status=${status}`)
        }
      >
        {props.lang.site.menu.authorize}
      </OAuthMenuAuthorize>
    </OAuthMenuWrapper>
  );
};
