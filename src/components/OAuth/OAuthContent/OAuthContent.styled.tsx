import { primary, secondary, secondaryDark } from "../../../settings/themes";

import styled from "styled-components";

export const OAuthContentOuterWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  margin: 10px 0 60px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;

  color: ${secondaryDark};
`;

export const OAuthContentWrapper = styled.main`
  position: relative;

  background-color: ${primary};
  border-radius: 7px;

  width: 460px;
  max-width: calc(90% - 40px);
  padding: 25px 20px;

  box-shadow: 0 1px 4px ${secondary};

  display: grid;
  grid-gap: 25px;

  justify-items: center;
`;
