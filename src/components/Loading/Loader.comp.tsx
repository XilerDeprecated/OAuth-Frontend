import {
    BackgroundSpinner,
    LoaderWrapper,
    SpinnerWrapper,
    Text
} from "./Loader.styled";

import { LoaderProps } from "./Loader.types";
import React from "react";

export const Loader: React.FC<LoaderProps> = (props) => (
  <LoaderWrapper>
    <Text>{props.message || "Loading..."}</Text>
    <SpinnerWrapper>
      <BackgroundSpinner size="45vw" />
      <BackgroundSpinner size="55vw" />
      <BackgroundSpinner size="65vw" />
      <BackgroundSpinner size="75vw" />
      <BackgroundSpinner size="85vw" />
      <BackgroundSpinner size="95vw" />
    </SpinnerWrapper>
  </LoaderWrapper>
);
