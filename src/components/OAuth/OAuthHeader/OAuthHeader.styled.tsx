import styled from "styled-components";

export const OAuthHeaderWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 460px;
  max-width: 100%;
`;

export const OAuthHeaderImageWrapper = styled.div`
  position: relative;

  width: calc(80px * 3 + 40px);

  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  align-items: center;
  text-align: center;
  justify-items: center;

  margin: 0 0 25px 0;

  p {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

export const OAuthHeaderImage = styled.img`
  position: relative;
  display: block;
  border-radius: 15px;

  width: 80px;
  height: 80px;

  image-rendering: crisp-edges;
`;

export const OAuthHeaderOrganization = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 5px 0;

  width: 100%;
  max-width: fit-content;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const OAuthHeaderMessage = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.75;
  margin: 0 0 0 10px 0;
`;
