import { Loader } from "../components/Loading/Loader.comp";
import { OAuthContent } from "../components/OAuth/OAuthContent/OAuthContent.comp";
import { OAuthUrlParams } from "../components/OAuth/OAuth.types";
import React from "react";
import { User } from "../api/user";
import { getCookie } from "../utils/cookieInteraction";
import { history } from "../utils/history";
import { useParams } from "react-router-dom";

const AuthorizePage: React.FC = () => {
  let params = useParams<OAuthUrlParams>();

  const token = getCookie("token");

  const url = `/signin/${params.organisation}/${params.app}/${params.redirect}`;

  if (token === undefined || token?.trim().length === 0) history.push(url);
  else {
    return <OAuthContent url={params} user={new User(token)} />;
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
