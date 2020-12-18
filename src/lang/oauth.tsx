export interface OAuthLangType {
  icon: string;
  tag: string;

  helmet: {
    description: {
      authorize: string;
      allowed: string;
    };

    title: string;
    avatarAlt: string;
  };

  header: {
    accessMessage: string;
    or: string;
    otherAccount: string;
  };

  permissions: {
    access: string;
    to: string;
  };

  info: {
    authorize: string;
    exists: string;
    information: string;
  };

  menu: {
    cancel: string;
    authorize: string;
  };
}

export interface OAuthLang {
  en: OAuthLangType;
  fr: OAuthLangType;
  nl: OAuthLangType;
}

export const lang: OAuthLang = {
  en: {
    icon: "/assets/languages/us-uk.png",
    tag: "en",

    helmet: {
      description: {
        authorize: "Authorize",
        allowed:
          "to access your Xiler account. This will allow them to see your",
      },

      title: "Xiler - Authorize",
      avatarAlt: "its Xiler avatar",
    },

    header: {
      accessMessage: "wants to access your account",
      or: "Or",
      otherAccount: "sign in with another account",
    },

    permissions: {
      access: "this will allow",
      to: "to",
    },

    info: {
      authorize: "Once you authorize, you will be redirected to:",
      exists: "Organisation exists since",
      information:
        "This organisation can not access any private information like your password or your physical adress.",
    },

    menu: {
      cancel: "Cancel",
      authorize: "Authorize",
    },
  },

  fr: {
    icon: "/assets/languages/fr.png",
    tag: "fr",

    helmet: {
      description: {
        authorize: "Autoriser",
        allowed:
          "pour accéder à votre compte Xiler. Cela leur permettra de voir votre",
      },

      title: "Xiler - Autoriser",
      avatarAlt: "son avatar Xiler",
    },

    header: {
      accessMessage: "veut accéder à votre compte",
      or: "Ou",
      otherAccount: "se connecter avec un autre compte",
    },

    permissions: {
      access: "cela permettra",
      to: "à",
    },

    info: {
      authorize: "Une fois que vous aurez donné votre autorisation, vous serez redirigé vers",
      exists: "L'organisation existe depuis",
      information:
        "Cette organisation ne peut accéder à aucune information privée comme votre mot de passe ou votre adresse physique.",
    },

    menu: {
      cancel: "Annuler",
      authorize: "Autoriser",
    },
  },

  nl: {
    icon: "/assets/languages/nl-be.png",
    tag: "nl",

    helmet: {
      description: {
        authorize: "Machtig",
        allowed:
          "om toegang te krijgen tot uw Xiler-account. Dit zal hen in staat stellen om uw",
      },

      title: "Xiler - Machtigen",
      avatarAlt: "zijn Xiler avatar",
    },

    header: {
      accessMessage: "wil toegang tot uw account",
      or: "Of",
      otherAccount: "inloggen met een ander account",
    },

    permissions: {
      access: "dit zal",
      to: "toegang geven om",
    },

    info: {
      authorize: "Zodra u toestemming geeft, wordt u doorgestuurd naar:",
      exists: "Deze organisatie bestaat sinds",
      information:
        "Deze organisatie heeft geen toegang tot privé-informatie zoals uw wachtwoord of uw fysieke adres.",
    },

    menu: {
      cancel: "Annuleer",
      authorize: "Machtigen",
    },
  },
};
