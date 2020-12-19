import { OAuthUrlParams } from "../OAuth/OAuth.types";
import { useParams } from "react-router-dom";

export const SignInRedirector: React.FC = () => {
  let { organisation, app, redirect } = useParams<OAuthUrlParams>();
  const url = `http://accounts.xiler.net/signin/${organisation}/${app}/${redirect}`;
  window.location.href = url;
  return <a href={url}>Click here to sign in!</a>;
};
