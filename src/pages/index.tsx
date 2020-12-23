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
  else return <OAuth token={token} url={params} />;

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
