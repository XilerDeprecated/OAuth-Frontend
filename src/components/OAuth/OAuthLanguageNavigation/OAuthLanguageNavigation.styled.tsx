import { accent, accentDark, primary, primaryDark, secondaryDark } from "../../../settings/themes";

import { Link } from "react-router-dom";
import styled from "styled-components";

export const OAuthLanguageOutterWrapper = styled.div`
  position: relative;
`

export const OAuthLanguageNavigationWrapper = styled.section`
  position: absolute;
  left: 10px;
  bottom: 10px;

  background-color: ${primaryDark};
  padding: 5px 7px;
  border-radius: 5px;

  width: fit-content;

  overflow: hidden;
  user-select: none;
  
  cursor: pointer;
`;

export const OAuthLanguageNavigationActiveWrapper = styled.div`
  background-color: ${primaryDark};

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 5px;

  align-items: center;
  justify-items: center;
`;

export const OAuthLanguageNavigationLanguagesWrapper = styled.div`
  position: relative;
  max-height: 30vh;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 10px 0;

  img {
    margin: 3px 0;
  }

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: ${primary}80;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${accent};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${accentDark};
  }
`;

export const OAuthLanguageNavigationImageWrapper = styled(Link)`
  display: block;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  padding: 0;
`;

export const OAuthLanguageNavigationLanguageImage = styled.img`
  width: 32px;
  height: 32px;
`;

export const OAuthLanguageNavigationArrow = styled.i<{ active: boolean }>`
  border: solid ${secondaryDark};
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 3px;
  border-radius: 3px;
  transition: all 0.128s ease-in-out;

  transform: rotate(${(props) => (props.active ? "225deg" : "45deg")});
`;
