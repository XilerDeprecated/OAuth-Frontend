import {
    OAuthBackgroundColorDark,
    OAuthBackgroundColorLight,
    OAuthBackgroundColorWrapper,
    OAuthBackgroundWrapper,
} from "./OAuthBackground.styled";

import React from "react";

export const OAuthBackground: React.FC = () => {
  return (
    <OAuthBackgroundWrapper>
      <OAuthBackgroundColorWrapper>
        <OAuthBackgroundColorLight />
        <OAuthBackgroundColorDark />
      </OAuthBackgroundColorWrapper>
    </OAuthBackgroundWrapper>
  );
};
