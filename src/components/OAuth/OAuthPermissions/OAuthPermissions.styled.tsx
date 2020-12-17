import styled from "styled-components";

export const OAuthPermissionsWrapper = styled.section`
  flex-direction: column;
  width: 90%;
  overflow: hidden;
`;

export const OAuthPermissionsMessage = styled.h2`
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0 0 10px 0;
`;

export const OAuthPermissionsPermissionsWrapper = styled.ul`
  margin: 5px auto;
  width: 90%;
`;

export const OAuthPermissionsPermission = styled.li`
  display: block;
  font-size: 0.9rem;
  margin: 5px 0;

  &::before {
    content: "•";
    margin: 0 5px 0 0;
    font-weight: 700;
    line-height: 0.9rem;
    font-size: 1rem;
  }
`;
