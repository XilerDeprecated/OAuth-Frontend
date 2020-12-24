import React, { useEffect, useState } from "react";

import { Loader } from "../Loading/Loader.comp";
import { OAuthContent } from "./OAuthContent/OAuthContent.comp";
import { OAuthProps } from "./OAuth.types";
import { User } from "../../api/user";
import { XilerOAuth } from "./XilerAccounts/Organisation.types";
import { getOAuthData } from "../../api/oauth";

export const OAuth: React.FC<OAuthProps> = (props) => {
  const [hasFetched, setHasFetched] = useState(false);
  const [oAuthData, setOAuthData] = useState<XilerOAuth>();

  useEffect(() => {
    Promise.resolve(
      getOAuthData(props.url.organisation, props.url.app, props.url.redirect)
    ).then((res) => {
      setOAuthData(res);
      setHasFetched(true);
    });
  }, [props.url.app, props.url.organisation, props.url.redirect]);

  return oAuthData === undefined && !hasFetched ? (
    <Loader message="Fetching OAuth data..." />
  ) : oAuthData === undefined ? (
    <Loader message="Invalid OAuth url!" />
  ) : (
    <OAuthContent
      oauth={oAuthData}
      url={props.url}
      user={new User(props.token)}
    />
  );
};
