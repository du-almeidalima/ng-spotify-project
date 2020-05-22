export class User {
  constructor(
    public name: string,
    public id: string,
    public profileImg: string,
    public tokenType: string,
    private _token: string,
    private _tokenExpirationDate
  ) {}

  // Check if the user session has not expired
  get token(): string {
    if (!this._tokenExpirationDate || (new Date() > this._tokenExpirationDate)) {
      return null;
    }

    return this._token;
  }
}
