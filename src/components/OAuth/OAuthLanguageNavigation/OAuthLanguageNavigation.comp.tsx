import {
  OAuthLanguageNavigationActiveWrapper,
  OAuthLanguageNavigationArrow,
  OAuthLanguageNavigationImageWrapper,
  OAuthLanguageNavigationLanguageImage,
  OAuthLanguageNavigationLanguagesWrapper,
  OAuthLanguageNavigationWrapper,
} from "./OAuthLanguageNavigation.styled";
import React, { useState } from "react";

import { OAuthLanguageNaviagtionProps } from "./OAuthLanguageNavigation.types";

export const OAuthLanguageNavigation: React.FC<OAuthLanguageNaviagtionProps> = (
  props
) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OAuthLanguageNavigationWrapper onClick={() => setIsOpen(!isOpen)}>
      {isOpen && (
        <OAuthLanguageNavigationLanguagesWrapper>
          {props.languages.map((lang) => (
            <OAuthLanguageNavigationImageWrapper
              key={lang.id}
              to={`/${lang.id}/${props.oauth.organisation.id}/${props.oauth.app.id}/${props.oauth.redirect.id}`}
            >
              <OAuthLanguageNavigationLanguageImage
                src={`${process.env.PUBLIC_URL}${lang.icon}`}
              />
            </OAuthLanguageNavigationImageWrapper>
          ))}
        </OAuthLanguageNavigationLanguagesWrapper>
      )}
      <OAuthLanguageNavigationActiveWrapper>
        <OAuthLanguageNavigationLanguageImage
          src={`${process.env.PUBLIC_URL}${props.lang.icon}`}
        />
        <OAuthLanguageNavigationArrow active={isOpen} />
      </OAuthLanguageNavigationActiveWrapper>
    </OAuthLanguageNavigationWrapper>
  );
};
