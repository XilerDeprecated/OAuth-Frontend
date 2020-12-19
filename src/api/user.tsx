import { XilerAccount } from "../components/OAuth/XilerAccounts/Account.types";

type OptionalXilerAccount = XilerAccount | undefined;

export interface UserAttributes {
  user: OptionalXilerAccount;
}

export class User implements UserAttributes {
  private _token: string;
  private _user: OptionalXilerAccount = this.fetchUser();

  constructor(token: string) {
    this._token = token;
  }

  public get user() {
    return this._user;
  }

  public set language(value: string) {
    if (this._user === undefined) return;

    this._user.lang = value;
    // TODO: Perform API request here to change the user their language.
  }

  private fetchUser(): XilerAccount {
    // TODO: Perform API request here to fetch the user.
    return {
      id: "1ndta1RGxQvl724qSKP2UQPoG8JayXv7",
      firstName: "Arthur",
      lastName: "De Witte",
      mail: "mail@arthurdw.com",
      avatar: "https://avatars3.githubusercontent.com/u/38541241",
      lang: "en",
    };
  }
}
