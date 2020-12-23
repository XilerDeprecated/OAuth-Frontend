import React, { useEffect, useState } from "react";
import { getCode, getOAuthData } from "../../api/oauth";

import { Loader } from "../Loading/Loader.comp";
import { OAuthContent } from "./OAuthContent/OAuthContent.comp";
import { OAuthProps } from "./OAuth.types";
import { User } from "../../api/user";
import { XilerOAuth } from "./XilerAccounts/Organisation.types";
import { cookieNames } from "../../settings/cookies";
import { getCookie } from "../../utils/cookieInteraction";

export const OAuth: React.FC<OAuthProps> = (props) => {
  const [hasFetched, setHasFetched] = useState(false);
  const [oAuthData, setOAuthData] = useState<XilerOAuth>();

  useEffect(() => {
    Promise.resolve(
      getOAuthData(props.url.organisation, props.url.app, props.url.redirect)
    ).then((res) => {
      if (res !== undefined) {
      }

      if (
        props.url.organisation.toLowerCase() === "xiler" &&
        res !== undefined
      ) {
        getCode(res.app.id, getCookie(cookieNames.refresh_token)!).then(
          (response) => {
            let url =
              res.redirect.target +
              (res.redirect.target.endsWith("/") ? "" : "/");
            window.location.href = `${url}?code=${response.data.data.code}&status=${response.data.status.code}`;
          }
        );
      }
      setHasFetched(true);
      setOAuthData(res);
    });
  }, [props.url.app, props.url.organisation, props.url.redirect]);

  return oAuthData === undefined && !hasFetched ? (
    <Loader message="Fetching OAuth data..." />
  ) : (
    <OAuthContent
      oauth={oAuthData}
      url={props.url}
      user={new User(props.token)}
    />
  );
};
