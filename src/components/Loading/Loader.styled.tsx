import { accent, primary, secondaryDark } from "../../settings/themes";
import styled, { keyframes } from "styled-components";

import { LoaderAnimationProps } from "./Loader.types";

export const LoaderWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${primary};
  z-index: -2;
  overflow: hidden;
`;

const LoaderAnimation = keyframes`
 from {
  transform: scale(0.5);
 } to {
  transform: scale(1);
 }
`;

export const Text = styled.h1`
  position: absolute;
  font-size: 2rem;
  color: ${secondaryDark};
`;

export const SpinnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundSpinner = styled.div<LoaderAnimationProps>`
  background-color: ${accent};
  opacity: 0.5;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${LoaderAnimation} 2s ease-in-out infinite alternate;

  &::after {
    content: "";
    position: relative;
    display: block;
    width: calc(${(props) => props.size} - 20px);
    height: calc(${(props) => props.size} - 20px);
    border-radius: 50%;
    background-color: ${primary};
  }
`;
