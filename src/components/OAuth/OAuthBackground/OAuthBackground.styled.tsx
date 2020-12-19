import { accent, accentDark, primary } from "../../../settings/themes";
import styled, { css } from "styled-components";

export const OAuthBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -10;
  background-color: ${primary};
  overflow: hidden;
`;

export const OAuthBackgroundColorWrapper = styled.div`
  position: relative;
`;

const OAuthBackgroundColorProps = css`
  position: absolute;
  width: 240vw;
  height: 100vh;
  border-radius: 50%;
`;

export const OAuthBackgroundColorLight = styled.div`
  ${OAuthBackgroundColorProps}

  z-index: -1;
  top: -60vh;
  left: -80vw;
  background-color: ${accent};
  transform: rotate(-174deg);
`;

export const OAuthBackgroundColorDark = styled.div`
  ${OAuthBackgroundColorProps}

  z-index: -2;
  top: calc(-60vh + 30px);
  left: -70vw;
  background-color: ${accentDark};
  transform: rotate(-175deg);
`;
