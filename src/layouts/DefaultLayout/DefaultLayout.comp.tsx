import React, { Suspense } from "react";

import { CssReset } from "./DefaultLayout.styled";
import { DefaultLayoutProps } from "./DefaultLayout.types";
import { Helmet } from "react-helmet";
import { Loader } from "../../components/Loading/Loader.comp";
import { ThemeProvider } from "styled-components";

export const DefaultLayout: React.FC<DefaultLayoutProps> = (props) => {
  const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "light"
    : "dark";

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <Helmet>
        <title>
          {props.title ? `${props.title}${props.after ? " - " : ""}` : ""}
          {props.after ? "Xiler OAuth" : ""}
        </title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CssReset />
      <Suspense fallback={<Loader />}>{props.children}</Suspense>
    </ThemeProvider>
  );
};
