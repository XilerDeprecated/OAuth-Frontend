import { OAuthBackground } from "../components/OAuth/OAuthBackground/OAuthBackground.comp";
import { OAuthContent } from "../components/OAuth/OAuthContent/OAuthContent.comp";
import { OAuthUrlParams } from "../components/OAuth/OAuth.types";
import React from "react";
import { getCookie } from "../utils/cookieInteraction";
import { history } from "../utils/history";
import { useParams } from "react-router-dom";

const AuthorizePage: React.FC = () => {
  let params = useParams<OAuthUrlParams>();

  const token = getCookie("token");

  if (token === undefined || token?.trim().length === 0)
    history.push(
      `/signin/${params.organisation}/${params.id}/${params.redirect}`
    );

  return (
    <React.Fragment>
      <OAuthContent {...params} />
      <OAuthBackground />
    </React.Fragment>
  );
};

export default AuthorizePage;
