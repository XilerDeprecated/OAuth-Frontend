import React, { useEffect, useState } from "react";

import { Loader } from "../Loading/Loader.comp";
import { OAuthContent } from "./OAuthContent/OAuthContent.comp";
import { OAuthProps } from "./OAuth.types";
import { User } from "../../api/user";
import { XilerOAuth } from "./XilerAccounts/Organisation.types";
import { getOAuthData } from "../../api/oauth";

export const OAuth: React.FC<OAuthProps> = (props) => {
  // const {value, loading} = usePromise(Promise.resolve(
  //   getOAuthData(params.organisation, params.app, params.redirect)
  // ).then((OAuthData) => {
  //   console.log(OAuthData);

  //   if (OAuthData === undefined)
  //     return <Loader message="Invalid OAuth url!"></Loader>;

  //   return (
  //     <OAuthContent
  //       oauth={OAuthData}
  //       url={params}
  //       user={new User(token)}
  //     />
  //   );
  // }));
  //   const { value, loading } = usePromise(new Promise((resolve, reject) => {
  //       setTimeout(() => resolve("Hello World"), 3)
  //   }));

  const [hasFetched, setHasFetched] = useState(false);
  const [oAuthData, setOAuthData] = useState<XilerOAuth>();

  useEffect(() => {
    Promise.resolve(
      getOAuthData(props.url.organisation, props.url.app, props.url.redirect)
    ).then((res) => {
        setHasFetched(true);
        setOAuthData(res);
    });
  }, [props.url.app, props.url.organisation, props.url.redirect]);

  return oAuthData === undefined && !hasFetched ? (
    <Loader message="Fetching OAuth data..." />
  ) : (
    <OAuthContent oauth={oAuthData} url={props.url} user={new User(props.token)} />
  );
};
