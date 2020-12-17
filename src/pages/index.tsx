import { OAuthBackground } from "../components/OAuth/OAuthBackground/OAuthBackground.comp";
import { OAuthContent } from "../components/OAuth/OAuthContent/OAuthContent.comp";
import { OAuthUrlParams } from "../components/OAuth/OAuth.types";
import React from "react";
import { useParams } from "react-router-dom";

export const AuthorizePage: React.FC = () => {
  let params = useParams<OAuthUrlParams>();

  return (
    <React.Fragment>
      <OAuthContent {...params} />
      <OAuthBackground />
    </React.Fragment>
  );
};
