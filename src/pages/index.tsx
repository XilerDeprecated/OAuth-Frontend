import { Loader } from "../components/Loading/Loader.comp";
import { OAuth } from "../components/OAuth/OAuth.comp";
import { OAuthUrlParams } from "../components/OAuth/OAuth.types";
import React from "react";
import { cookieNames } from "../settings/cookies";
import { getCookie } from "../utils/cookieInteraction";
import { history } from "../utils/history";
import { useParams } from "react-router-dom";

const AuthorizePage: React.FC = () => {
  let params = useParams<OAuthUrlParams>();
  
  const token = getCookie(cookieNames.refresh_token);
  
  const url = `/signin/${params.organisation}/${params.app}/${params.redirect}`;
  
  if (token === undefined || token?.trim().length === 0) history.push(url);
  else {
    return <OAuth token={token} url={params} />
    // TODO: FETCH DATA FROM API HERE
    // return (
    //   <Suspense fallback={<Loader />}>
    //     {Promise.resolve(
    //       getOAuthData(params.organisation, params.app, params.redirect)
    //     ).then((OAuthData) => {
    //       console.log(OAuthData);

    //       if (OAuthData === undefined)
    //         return <Loader message="Invalid OAuth url!"></Loader>;

    //       return (
    //         <OAuthContent
    //           oauth={OAuthData}
    //           url={params}
    //           user={new User(token)}
    //         />
    //       );
    //     })}
    //   </Suspense>
    // );
  }

  return (
    <Loader message="Oops...">
      <p>Something went wrong while trying to reconnect you.</p>
      <p>
        Please click <a href={url}>here</a> to sign in!
      </p>
    </Loader>
  );
};

export default AuthorizePage;
