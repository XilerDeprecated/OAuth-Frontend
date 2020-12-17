import { SignInRedirectorParams } from "./SignInRedirector.types";
import { useParams } from "react-router-dom";

export const SignInRedirector: React.FC = () => {
  let { app, id, redirect } = useParams<SignInRedirectorParams>();
  const url = `http://accounts.xiler.net/signin/${app}/${id}/${redirect}`;
  window.location.href = url;
  return <a href={url}>Click here to sign in!</a>;
};
