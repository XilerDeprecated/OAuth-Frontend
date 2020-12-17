import { accent, primary, secondaryDark } from '../../../settings/themes';

import styled from 'styled-components';

export const OAuthMenuWrapper = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const OAuthMenuCancel = styled.a`
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: ${secondaryDark};
  border-bottom: 2px solid transparent;
  border-radius: 2px;
  
  transition: color 0.25s ease-in-out;
  transition: border-bottom-color 0.75s ease-in-out;

  &:hover {
    color: ${accent};
    border-bottom-color: ${accent};
  }
`

export const OAuthMenuAuthorize = styled.button`
  display: block;
  border: none;
  cursor: pointer;

  font-size: 1.25rem;
  text-decoration: none;
  color: ${primary};
  background-color: ${accent};
  padding: 10px;
  border-radius: 5px;
  transition: all 0.128s ease-in-out;

  &:hover {
    background-color: ${accent}d0;
  }
`
